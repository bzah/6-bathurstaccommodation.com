import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Privacy Policy | Bathurst Accommodation"
        description="Read the privacy policy for BathurstAccommodation.com. Learn how we collect, use, and protect your personal information."
        canonicalPath="/privacy-policy"
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-heading text-foreground mb-3">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground font-body mb-10">Last updated: April 4, 2026</p>

          <div className="font-body text-muted-foreground space-y-8 leading-relaxed text-[15px]">
            <section>
              <h2 className="font-heading text-xl text-foreground mb-3">1. Introduction</h2>
              <p>BathurstAccommodation.com ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>
            </section>

            <section>
              <h2 className="font-heading text-xl text-foreground mb-3">2. Information We Collect</h2>
              <p className="mb-2"><strong className="text-foreground">Automatically collected:</strong> When you visit our site, we may automatically collect certain information including your IP address, browser type, operating system, referring URLs, pages viewed, and the dates/times of visits.</p>
              <p><strong className="text-foreground">Cookies:</strong> We use cookies and similar tracking technologies to enhance your browsing experience and analyse site traffic. See our Cookie Policy for more details.</p>
            </section>

            <section>
              <h2 className="font-heading text-xl text-foreground mb-3">3. How We Use Your Information</h2>
              <ul className="list-disc ml-6 space-y-1">
                <li>To operate and maintain our website</li>
                <li>To improve our content and user experience</li>
                <li>To analyse usage patterns and site performance</li>
                <li>To display relevant content and recommendations</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl text-foreground mb-3">4. Third-Party Services</h2>
              <p>We use third-party services that may collect information, including:</p>
              <ul className="list-disc ml-6 space-y-1 mt-2">
                <li><strong className="text-foreground">Google Analytics</strong> — for website traffic analysis</li>
                <li><strong className="text-foreground">GetYourGuide</strong> — for tour booking widgets and affiliate links</li>
                <li><strong className="text-foreground">Affiliate partners</strong> — accommodation booking platforms</li>
              </ul>
              <p className="mt-2">Each third-party service has its own privacy policy governing the data they collect.</p>
            </section>

            <section>
              <h2 className="font-heading text-xl text-foreground mb-3">5. Affiliate Links</h2>
              <p>Our website contains affiliate links. When you click on these links and make a purchase or booking, we may receive a commission. This does not affect the price you pay. We only recommend services we believe offer genuine value.</p>
            </section>

            <section>
              <h2 className="font-heading text-xl text-foreground mb-3">6. Data Security</h2>
              <p>We implement appropriate technical and organisational measures to protect your information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.</p>
            </section>

            <section>
              <h2 className="font-heading text-xl text-foreground mb-3">7. Your Rights</h2>
              <p>Under the Australian Privacy Act 1988, you have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at hello@bathurstaccommodation.com.</p>
            </section>

            <section>
              <h2 className="font-heading text-xl text-foreground mb-3">8. Children's Privacy</h2>
              <p>Our website is not directed at children under 13. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.</p>
            </section>

            <section>
              <h2 className="font-heading text-xl text-foreground mb-3">9. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.</p>
            </section>

            <section>
              <h2 className="font-heading text-xl text-foreground mb-3">10. Contact Us</h2>
              <p>If you have questions about this Privacy Policy, please contact us at: <a href="mailto:hello@bathurstaccommodation.com" className="text-primary hover:underline">hello@bathurstaccommodation.com</a></p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
