import { Mail, MapPin, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const ContactPage = () => {
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
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Get in Touch
            </span>
            <h1 className="text-3xl md:text-5xl font-heading text-foreground mb-5">Contact Us</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto font-body text-lg leading-relaxed">
              Have a question about accommodation in Bathurst? Want to suggest a listing or report an issue? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="rounded-xl bg-card border border-border/50 p-6 text-center">
              <Mail className="mx-auto text-primary mb-3" size={28} />
              <h2 className="font-heading text-lg text-foreground mb-2">Email</h2>
              <a href="mailto:hello@bathurstaccommodation.com" className="text-sm text-primary hover:underline font-body">
                hello@bathurstaccommodation.com
              </a>
            </div>
            <div className="rounded-xl bg-card border border-border/50 p-6 text-center">
              <MapPin className="mx-auto text-primary mb-3" size={28} />
              <h2 className="font-heading text-lg text-foreground mb-2">Location</h2>
              <p className="text-sm text-muted-foreground font-body">Bathurst, NSW 2795, Australia</p>
            </div>
            <div className="rounded-xl bg-card border border-border/50 p-6 text-center">
              <Globe className="mx-auto text-primary mb-3" size={28} />
              <h2 className="font-heading text-lg text-foreground mb-2">Website</h2>
              <p className="text-sm text-muted-foreground font-body">bathurstaccommodation.com</p>
            </div>
          </div>

          <div className="rounded-xl bg-muted/50 border border-border p-8">
            <h2 className="font-heading text-2xl text-foreground mb-4">How Can We Help?</h2>
            <div className="font-body text-sm text-muted-foreground space-y-4 leading-relaxed">
              <p>
                <strong className="text-foreground">Accommodation enquiries:</strong> While we don't directly manage accommodation, we can point you in the right direction for motels, hotels, caravan parks, and other stays in Bathurst.
              </p>
              <p>
                <strong className="text-foreground">Business partnerships:</strong> If you run an accommodation property, tour operation, or local business in Bathurst and would like to be featured, please get in touch via email.
              </p>
              <p>
                <strong className="text-foreground">Content corrections:</strong> If you notice any outdated or incorrect information on our site, please let us know and we'll update it promptly.
              </p>
              <p>
                <strong className="text-foreground">General feedback:</strong> We're always looking to improve. Your suggestions help us make this resource better for everyone visiting Bathurst.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
