import { Link } from "react-router-dom";
import { ShieldCheck, Baby, Eye, Lock, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const ParentsInfoPage = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Parents Info & Child Safety | Bathurst Accommodation"
        description="Information for parents about child safety on BathurstAccommodation.com. Learn about our commitment to protecting children's privacy and online safety."
        canonicalPath="/parents-info"
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Safety First
            </span>
            <h1 className="text-3xl md:text-4xl font-heading text-foreground mb-5">Parents Information</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto font-body text-lg leading-relaxed">
              We take the safety and privacy of children seriously. Here's what parents and guardians need to know about our website.
            </p>
          </div>

          <div className="space-y-6 mb-12">
            <div className="rounded-xl bg-card border border-border/50 p-6">
              <div className="flex items-center gap-3 mb-3">
                <ShieldCheck className="text-primary" size={22} />
                <h2 className="font-heading text-xl text-foreground">Our Commitment to Child Safety</h2>
              </div>
              <p className="text-muted-foreground font-body leading-relaxed text-[15px]">
                BathurstAccommodation.com is a travel information website designed for adults planning trips to Bathurst, NSW. We do not knowingly collect, use, or disclose personal information from children under the age of 13. Our website does not contain content that is harmful or inappropriate for children.
              </p>
            </div>

            <div className="rounded-xl bg-card border border-border/50 p-6">
              <div className="flex items-center gap-3 mb-3">
                <Baby className="text-primary" size={22} />
                <h2 className="font-heading text-xl text-foreground">Children's Privacy</h2>
              </div>
              <p className="text-muted-foreground font-body leading-relaxed text-[15px]">
                We do not require any user registration, and we do not collect personal data from visitors of any age beyond standard analytics (page views, browser type). We do not have chat features, forums, or user-generated content areas where children could share personal information.
              </p>
            </div>

            <div className="rounded-xl bg-card border border-border/50 p-6">
              <div className="flex items-center gap-3 mb-3">
                <Eye className="text-primary" size={22} />
                <h2 className="font-heading text-xl text-foreground">Parental Supervision</h2>
              </div>
              <div className="text-muted-foreground font-body leading-relaxed text-[15px] space-y-2">
                <p>While our website is safe for all ages, we recommend that parents:</p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Supervise children's internet usage as a general practice</li>
                  <li>Be aware that our site contains external links to booking platforms and third-party websites</li>
                  <li>Review our Privacy Policy and Cookie Policy for information about data collection</li>
                  <li>Contact us if they have any concerns about content on our site</li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl bg-card border border-border/50 p-6">
              <div className="flex items-center gap-3 mb-3">
                <Lock className="text-primary" size={22} />
                <h2 className="font-heading text-xl text-foreground">External Links & Bookings</h2>
              </div>
              <p className="text-muted-foreground font-body leading-relaxed text-[15px]">
                Our website contains links to third-party booking platforms and tour operators. These external sites have their own privacy policies and data collection practices. We encourage parents to review the terms and privacy policies of any external site before allowing children to interact with it. All bookings should be made by an adult or under adult supervision.
              </p>
            </div>
          </div>

          <div className="rounded-xl bg-muted/50 border border-border p-8">
            <h2 className="font-heading text-xl text-foreground mb-3">Questions or Concerns?</h2>
            <p className="text-muted-foreground font-body text-[15px] mb-4">
              If you have any questions about our practices regarding children's privacy and safety, or if you believe we have inadvertently collected information from a child, please contact us immediately.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity">
                Contact Us <ArrowRight size={14} />
              </Link>
              <Link to="/privacy-policy" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-primary text-primary font-medium text-sm hover:bg-primary/5 transition-colors">
                Privacy Policy <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ParentsInfoPage;
