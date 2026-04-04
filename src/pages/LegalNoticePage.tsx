import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const LegalNoticePage = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Legal Notice | Bathurst Accommodation"
        description="Legal notice and disclaimers for BathurstAccommodation.com. Information about the website operator, liability, and legal disclosures."
        canonicalPath="/legal-notice"
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-heading text-foreground mb-3">Legal Notice</h1>
          <p className="text-sm text-muted-foreground font-body mb-10">Last updated: April 4, 2026</p>

          <div className="font-body text-muted-foreground space-y-8 leading-relaxed text-[15px]">
            <section>
              <h2 className="font-heading text-xl text-foreground mb-3">Website Operator</h2>
              <p>BathurstAccommodation.com is operated as an independent informational and affiliate website providing guides, recommendations, and resources for visitors to Bathurst, NSW, Australia.</p>
              <p className="mt-2"><strong className="text-foreground">Location:</strong> Bathurst, NSW 2795, Australia</p>
              <p><strong className="text-foreground">Contact:</strong> <a href="mailto:hello@bathurstaccommodation.com" className="text-primary hover:underline">hello@bathurstaccommodation.com</a></p>
            </section>

            <section>
              <h2 className="font-heading text-xl text-foreground mb-3">Disclaimer</h2>
              <p>The information provided on BathurstAccommodation.com is for general informational purposes only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the website.</p>
            </section>

            <section>
              <h2 className="font-heading text-xl text-foreground mb-3">Affiliate Disclosure</h2>
              <p>This website participates in affiliate marketing programs. We may earn commissions from qualifying purchases made through links on this site. These affiliate relationships do not influence our editorial content or recommendations. Prices and availability of products and services are subject to change.</p>
            </section>

            <section>
              <h2 className="font-heading text-xl text-foreground mb-3">No Professional Advice</h2>
              <p>Content on this website does not constitute professional travel, legal, or financial advice. Always verify details directly with accommodation providers, tour operators, and relevant authorities before making bookings or travel decisions.</p>
            </section>

            <section>
              <h2 className="font-heading text-xl text-foreground mb-3">Liability Limitation</h2>
              <p>To the fullest extent permitted by law, BathurstAccommodation.com excludes all liability for any loss or damage arising from your use of the website or reliance on information published on it, whether direct, indirect, incidental, or consequential.</p>
            </section>

            <section>
              <h2 className="font-heading text-xl text-foreground mb-3">External Links</h2>
              <p>This website may contain links to third-party websites. We have no control over the content, privacy policies, or practices of any third-party sites and accept no responsibility for them. The inclusion of any link does not necessarily imply a recommendation or endorsement.</p>
            </section>

            <section>
              <h2 className="font-heading text-xl text-foreground mb-3">Copyright</h2>
              <p>All original content on this website, including text, graphics, and design, is © {new Date().getFullYear()} BathurstAccommodation.com. All rights reserved. Some images are sourced from Unsplash and are used under the Unsplash License. Reproduction of content without permission is prohibited.</p>
            </section>

            <section>
              <h2 className="font-heading text-xl text-foreground mb-3">Governing Law</h2>
              <p>This legal notice and any disputes relating to this website are governed by the laws of the State of New South Wales, Australia.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LegalNoticePage;
