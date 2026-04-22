import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const GMAIL_USER = "soaf.baz@gmail.com";
const LEAD_RECIPIENT = "contact@bathurstaccommodation.com";
const SITE_NAME = "Bathurst Accommodation";

interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function validate(payload: Partial<ContactPayload>): string | null {
  if (!payload.name || typeof payload.name !== "string" || payload.name.trim().length === 0 || payload.name.length > 100) {
    return "Invalid name (1-100 characters required)";
  }
  if (!payload.email || typeof payload.email !== "string" || !isValidEmail(payload.email) || payload.email.length > 255) {
    return "Invalid email address";
  }
  if (!payload.subject || typeof payload.subject !== "string" || payload.subject.trim().length === 0 || payload.subject.length > 200) {
    return "Invalid subject (1-200 characters required)";
  }
  if (!payload.message || typeof payload.message !== "string" || payload.message.trim().length === 0 || payload.message.length > 5000) {
    return "Invalid message (1-5000 characters required)";
  }
  return null;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  let payload: ContactPayload;
  try {
    payload = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const validationError = validate(payload);
  if (validationError) {
    return new Response(JSON.stringify({ error: validationError }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const name = payload.name.trim();
  const email = payload.email.trim().toLowerCase();
  const subject = payload.subject.trim();
  const message = payload.message.trim();

  // Save to database first (backup)
  const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
  const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  const supabase = createClient(supabaseUrl, serviceKey);

  const { data: submission, error: dbError } = await supabase
    .from("contact_submissions")
    .insert({ name, email, subject, message })
    .select()
    .single();

  if (dbError) {
    console.error("DB insert error:", dbError);
    return new Response(JSON.stringify({ error: "Failed to save submission" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const gmailPassword = Deno.env.get("GMAIL_APP_PASSWORD");
  if (!gmailPassword) {
    console.error("GMAIL_APP_PASSWORD is not configured");
    return new Response(JSON.stringify({ error: "Email service not configured" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const client = new SMTPClient({
    connection: {
      hostname: "smtp.gmail.com",
      port: 465,
      tls: true,
      auth: {
        username: GMAIL_USER,
        password: gmailPassword,
      },
    },
  });

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

  try {
    // 1. Send lead notification to site owner
    await client.send({
      from: `${SITE_NAME} Contact Form <${GMAIL_USER}>`,
      to: LEAD_RECIPIENT,
      replyTo: `${name} <${email}>`,
      subject: `[Contact] ${subject}`,
      content: `New contact submission from ${name} (${email})\n\nSubject: ${subject}\n\nMessage:\n${message}\n\n---\nReply directly to this email to respond to ${name}.`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #1a1a1a; border-bottom: 2px solid #e5e5e5; padding-bottom: 10px;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr><td style="padding: 8px 0; color: #666;"><strong>From:</strong></td><td style="padding: 8px 0;">${safeName}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;"><strong>Email:</strong></td><td style="padding: 8px 0;"><a href="mailto:${safeEmail}">${safeEmail}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #666;"><strong>Subject:</strong></td><td style="padding: 8px 0;">${safeSubject}</td></tr>
          </table>
          <div style="background: #f7f7f7; padding: 15px; border-radius: 6px; margin-top: 20px;">
            <p style="margin: 0 0 10px; color: #666;"><strong>Message:</strong></p>
            <p style="margin: 0; line-height: 1.6;">${safeMessage}</p>
          </div>
          <p style="color: #999; font-size: 12px; margin-top: 30px;">Reply directly to this email to respond to ${safeName}.</p>
        </div>
      `,
    });

    // 2. Send confirmation to the user
    await client.send({
      from: `${SITE_NAME} <${GMAIL_USER}>`,
      to: email,
      subject: `Thanks for contacting ${SITE_NAME}`,
      content: `Hi ${name},\n\nThanks for reaching out to ${SITE_NAME}! We've received your message and will get back to you as soon as possible.\n\nYour message:\n"${message}"\n\nBest regards,\nThe ${SITE_NAME} Team\nhttps://bathurstaccommodation.com`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #1a1a1a;">Thanks for reaching out, ${safeName}!</h2>
          <p style="line-height: 1.6; color: #333;">We've received your message and will get back to you as soon as possible — usually within 1-2 business days.</p>
          <div style="background: #f7f7f7; padding: 15px; border-radius: 6px; margin: 20px 0;">
            <p style="margin: 0 0 8px; color: #666; font-size: 14px;"><strong>Your message:</strong></p>
            <p style="margin: 0; line-height: 1.6; color: #333;">${safeMessage}</p>
          </div>
          <p style="line-height: 1.6; color: #333;">In the meantime, feel free to explore our guides on accommodation, attractions, and tours in Bathurst.</p>
          <p style="color: #666; margin-top: 30px;">Best regards,<br /><strong>The ${SITE_NAME} Team</strong><br /><a href="https://bathurstaccommodation.com" style="color: #2563eb;">bathurstaccommodation.com</a></p>
        </div>
      `,
    });

    await client.close();

    // Mark as sent
    await supabase
      .from("contact_submissions")
      .update({ email_sent: true })
      .eq("id", submission.id);

    return new Response(JSON.stringify({ success: true, id: submission.id }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : "Unknown error";
    console.error("Email send error:", errMsg);

    try { await client.close(); } catch {}

    await supabase
      .from("contact_submissions")
      .update({ error_message: errMsg })
      .eq("id", submission.id);

    return new Response(JSON.stringify({ error: "Failed to send email", details: errMsg }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
