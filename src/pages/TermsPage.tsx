import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const TermsPage = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Terms of Service | Bathurst Accommodation"
        description="Read the terms of service for BathurstAccommodation.com. Understand your rights and responsibilities when using our website."
        canonicalPath="/terms"
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-heading text-foreground mb-3">Terms of Service</h1>
          <p className="text-sm text-muted-foreground font-body mb-10">Last updated: April 4, 2026</p>

          <div className="font-body text-muted-foreground space-y-8 leading-relaxed text-[15px]">
            <section>
              <h2 className="font-heading text-xl text-foreground mb-3">1. Acceptance of Terms</h2>
              <p>By accessing and using BathurstAccommodation.com ("the Website"), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.</p>
            </section>

            <section>
              <h2 className="font-heading text-xl text-foreground mb-3">2. Description of Service</h2>
              <p>BathurstAccommodation.com is an informational website that provides guides, recommendations, and links to accommodation, tours, and attractions in Bathurst, NSW, Australia. We do not directly provide accommodation or booking services.</p>
            </section>

            <section>
              <h2 className="font-heading text-xl text-foreground mb-3">3. Affiliate Relationships</h2>
              <p>Our website contains affiliate links to third-party booking platforms and service providers. When you make a purchase through these links, we may earn a commission. We are not responsible for the products, services, or policies of these third parties. All bookings are subject to the terms and conditions of the respective provider.</p>
            </section>

            <section>
              <h2 className="font-heading text-xl text-foreground mb-3">4. Accuracy of Information</h2>
              <p>While we strive to ensure all information on the Website is accurate and up-to-date, we make no warranties or representations regarding the completeness, accuracy, or reliability of any content. Prices, availability, and features of accommodation and services may change without notice.</p>
            </section>

            <section>
              <h2 className="font-heading text-xl text-foreground mb-3">5. Intellectual Property</h2>
              <p>All content on this website, including text, graphics, logos, and design, is the property of BathurstAccommodation.com or its content providers and is protected by Australian and international copyright laws. You may not reproduce, distribute, or create derivative works without our express written consent.</p>
            </section>

            <section>
              <h2 className="font-heading text-xl text-foreground mb-3">6. User Conduct</h2>
              <p>You agree not to use the Website for any unlawful purpose, attempt to gain unauthorised access to our systems, transmit harmful code, or interfere with the proper operation of the Website.</p>
            </section>

            <section>
              <h2 className="font-heading text-xl text-foreground mb-3">7. Limitation of Liability</h2>
              <p>BathurstAccommodation.com shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of the Website or reliance on any information provided. Your use of the Website is at your sole risk.</p>
            </section>

            <section>
              <h2 className="font-heading text-xl text-foreground mb-3">8. External Links</h2>
              <p>The Website may contain links to external sites. We are not responsible for the content, accuracy, or practices of any third-party websites. The inclusion of any link does not imply endorsement.</p>
            </section>

            <section>
              <h2 className="font-heading text-xl text-foreground mb-3">9. Governing Law</h2>
              <p>These terms are governed by and construed in accordance with the laws of New South Wales, Australia. Any disputes shall be subject to the exclusive jurisdiction of the courts of New South Wales.</p>
            </section>

            <section>
              <h2 className="font-heading text-xl text-foreground mb-3">10. Changes to Terms</h2>
              <p>We reserve the right to modify these Terms of Service at any time. Changes become effective upon posting to this page. Continued use of the Website constitutes acceptance of the updated terms.</p>
            </section>

            <section>
              <h2 className="font-heading text-xl text-foreground mb-3">11. Contact</h2>
              <p>For questions about these terms, contact us at: <a href="mailto:hello@bathurstaccommodation.com" className="text-primary hover:underline">hello@bathurstaccommodation.com</a></p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsPage;
