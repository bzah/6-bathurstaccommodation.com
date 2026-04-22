import { useState } from "react";
import { Mail, MapPin, Globe, Send, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name too long"),
  email: z.string().trim().email("Invalid email address").max(255),
  subject: z.string().trim().min(1, "Subject is required").max(200, "Subject too long"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(5000, "Message too long"),
});

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: result.data,
      });

      if (error) throw error;
      if (data?.error) throw new Error(data.error);

      toast.success("Message sent! We'll get back to you soon.", {
        description: "A confirmation email has been sent to your inbox.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Something went wrong";
      toast.error("Failed to send message", { description: msg });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Contact Us | Bathurst Accommodation"
        description="Get in touch with the Bathurst Accommodation team. Questions about places to stay, tours, or attractions in Bathurst NSW? We're here to help."
        canonicalPath="/contact"
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Get in Touch
            </span>
            <h1 className="text-3xl md:text-5xl font-heading text-foreground mb-5">Contact Us</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto font-body text-lg leading-relaxed">
              Have a question about accommodation in Bathurst? Want to suggest a listing or report an issue? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <div className="rounded-xl bg-card border border-border/50 p-5 text-center">
              <Mail className="mx-auto text-primary mb-2" size={24} />
              <h2 className="font-heading text-base text-foreground mb-1">Email</h2>
              <a href="mailto:contact@bathurstaccommodation.com" className="text-xs text-primary hover:underline font-body break-all">
                contact@bathurstaccommodation.com
              </a>
            </div>
            <div className="rounded-xl bg-card border border-border/50 p-5 text-center">
              <MapPin className="mx-auto text-primary mb-2" size={24} />
              <h2 className="font-heading text-base text-foreground mb-1">Location</h2>
              <p className="text-xs text-muted-foreground font-body">Bathurst, NSW 2795, Australia</p>
            </div>
            <div className="rounded-xl bg-card border border-border/50 p-5 text-center">
              <Globe className="mx-auto text-primary mb-2" size={24} />
              <h2 className="font-heading text-base text-foreground mb-1">Website</h2>
              <p className="text-xs text-muted-foreground font-body">bathurstaccommodation.com</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-xl bg-card border border-border p-6 md:p-8 space-y-5">
            <h2 className="font-heading text-2xl text-foreground mb-2">Send us a message</h2>
            <p className="font-body text-sm text-muted-foreground mb-4">We typically reply within 1-2 business days.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="name">Your name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Jane Smith"
                  maxLength={100}
                  disabled={isSubmitting}
                  aria-invalid={!!errors.name}
                />
                {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Your email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jane@example.com"
                  maxLength={255}
                  disabled={isSubmitting}
                  aria-invalid={!!errors.email}
                />
                {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Subject *</Label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Question about accommodation in Bathurst"
                maxLength={200}
                disabled={isSubmitting}
                aria-invalid={!!errors.subject}
              />
              {errors.subject && <p className="text-xs text-destructive">{errors.subject}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message *</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us how we can help..."
                rows={6}
                maxLength={5000}
                disabled={isSubmitting}
                aria-invalid={!!errors.message}
              />
              <div className="flex justify-between items-center">
                {errors.message ? (
                  <p className="text-xs text-destructive">{errors.message}</p>
                ) : (
                  <span />
                )}
                <p className="text-xs text-muted-foreground">{formData.message.length}/5000</p>
              </div>
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto" size="lg">
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </>
              )}
            </Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
