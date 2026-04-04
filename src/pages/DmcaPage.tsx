import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const DmcaPage = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="DMCA Policy | Bathurst Accommodation"
        description="DMCA copyright policy for BathurstAccommodation.com. Learn how to report copyright infringement and our takedown procedures."
        canonicalPath="/dmca"
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-heading text-foreground mb-3">DMCA Policy</h1>
          <p className="text-sm text-muted-foreground font-body mb-10">Last updated: April 4, 2026</p>

          <div className="font-body text-muted-foreground space-y-8 leading-relaxed text-[15px]">
            <section>
              <h2 className="font-heading text-xl text-foreground mb-3">1. Copyright Respect</h2>
              <p>BathurstAccommodation.com respects the intellectual property rights of others and expects our users to do the same. We respond to notices of alleged copyright infringement in accordance with the Digital Millennium Copyright Act (DMCA) and applicable Australian copyright law.</p>
            </section>

            <section>
              <h2 className="font-heading text-xl text-foreground mb-3">2. Reporting Copyright Infringement</h2>
              <p>If you believe that content on our website infringes your copyright, please send a written notice to our designated agent with the following information:</p>
              <ul className="list-disc ml-6 space-y-2 mt-2">
                <li>A description of the copyrighted work you claim has been infringed</li>
                <li>The URL or location on our site where the infringing material is found</li>
                <li>Your name, address, telephone number, and email address</li>
                <li>A statement that you have a good faith belief that the use is not authorised by the copyright owner</li>
                <li>A statement, under penalty of perjury, that the information in your notice is accurate and that you are the copyright owner or authorised to act on their behalf</li>
                <li>Your physical or electronic signature</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl text-foreground mb-3">3. Where to Send Notices</h2>
              <p>DMCA takedown notices should be sent to:</p>
              <p className="mt-2">
                <strong className="text-foreground">Email:</strong>{" "}
                <a href="mailto:dmca@bathurstaccommodation.com" className="text-primary hover:underline">dmca@bathurstaccommodation.com</a>
              </p>
              <p className="mt-1">
                <strong className="text-foreground">Subject line:</strong> DMCA Takedown Notice
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl text-foreground mb-3">4. Response Procedure</h2>
              <p>Upon receiving a valid DMCA notice, we will:</p>
              <ul className="list-disc ml-6 space-y-1 mt-2">
                <li>Promptly remove or disable access to the allegedly infringing content</li>
                <li>Notify the content provider, if applicable</li>
                <li>Provide the content provider an opportunity to submit a counter-notification</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-xl text-foreground mb-3">5. Counter-Notification</h2>
              <p>If you believe your content was wrongly removed, you may submit a counter-notification including your contact information, identification of the removed material, a statement under penalty of perjury that you believe the removal was a mistake, and consent to the jurisdiction of the Federal Court of Australia.</p>
            </section>

            <section>
              <h2 className="font-heading text-xl text-foreground mb-3">6. Repeat Infringers</h2>
              <p>We reserve the right to terminate access for users or content providers who are repeat infringers of copyright.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DmcaPage;
