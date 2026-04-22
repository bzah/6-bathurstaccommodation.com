import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const CookiePolicyPage = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Cookie Policy | Bathurst Accommodation"
        description="Cookie policy for BathurstAccommodation.com — learn how we use cookies, analytics & similar tech to improve your browsing experience and your choices."
        canonicalPath="/cookie-policy"
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-heading text-foreground mb-3">Cookie Policy</h1>
          <p className="text-sm text-muted-foreground font-body mb-10">Last updated: April 4, 2026</p>

          <div className="font-body text-muted-foreground space-y-8 leading-relaxed text-[15px]">
            <section>
              <h2 className="font-heading text-xl text-foreground mb-3">1. What Are Cookies?</h2>
              <p>Cookies are small text files placed on your device when you visit a website. They help the site remember your preferences and understand how you interact with the content. Cookies are widely used to make websites work efficiently and provide reporting information.</p>
            </section>

            <section>
              <h2 className="font-heading text-xl text-foreground mb-3">2. How We Use Cookies</h2>
              <p>BathurstAccommodation.com uses cookies for the following purposes:</p>
              <ul className="list-disc ml-6 space-y-1 mt-2">
                <li><strong className="text-foreground">Essential cookies:</strong> Required for the website to function properly</li>
                <li><strong className="text-foreground">Analytics cookies:</strong> Help us understand how visitors interact with our site (e.g., Google Analytics)</li>
                <li><strong className="text-foreground">Affiliate tracking cookies:</strong> Used by our affiliate partners to track referrals and attribute bookings</li>
                <li><strong className="text-foreground">Preference cookies:</strong> Remember your settings and preferences for future visits</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl text-foreground mb-3">3. Third-Party Cookies</h2>
              <p>Some cookies are placed by third-party services that appear on our pages. We do not control these cookies. Third parties that may set cookies include:</p>
              <ul className="list-disc ml-6 space-y-1 mt-2">
                <li>Google Analytics (traffic analysis)</li>
                <li>GetYourGuide (tour booking widgets)</li>
                <li>Accommodation booking affiliate partners</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl text-foreground mb-3">4. Managing Cookies</h2>
              <p>You can control and manage cookies through your browser settings. Most browsers allow you to refuse cookies, delete existing cookies, or be notified when a cookie is set. Please note that disabling cookies may affect the functionality of our website.</p>
              <p className="mt-2">Common browser cookie settings:</p>
              <ul className="list-disc ml-6 space-y-1 mt-2">
                <li>Chrome: Settings → Privacy and Security → Cookies</li>
                <li>Firefox: Settings → Privacy & Security → Cookies</li>
                <li>Safari: Preferences → Privacy → Cookies</li>
                <li>Edge: Settings → Cookies and Site Permissions</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl text-foreground mb-3">5. Updates to This Policy</h2>
              <p>We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our practices. Any updates will be posted on this page.</p>
            </section>

            <section>
              <h2 className="font-heading text-xl text-foreground mb-3">6. Contact</h2>
              <p>If you have questions about our use of cookies, please contact us at: <a href="mailto:hello@bathurstaccommodation.com" className="text-primary hover:underline">hello@bathurstaccommodation.com</a></p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicyPage;
