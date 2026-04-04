import { Link, useLocation } from "react-router-dom";
import { Home, ArrowLeft, Search, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Page Not Found | Bathurst Accommodation"
        description="The page you're looking for doesn't exist. Explore accommodation, attractions, and tours in Bathurst NSW."
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <span className="text-8xl md:text-9xl font-heading text-primary/20 block leading-none">
              404
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-heading text-foreground mb-4">
            Page Not Found
          </h1>
          <p className="text-muted-foreground font-body text-lg mb-2 leading-relaxed">
            Sorry, the page <code className="text-sm bg-muted px-2 py-0.5 rounded text-foreground">{location.pathname}</code> doesn't exist or has been moved.
          </p>
          <p className="text-muted-foreground font-body mb-10">
            Let's help you find what you're looking for.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto mb-12">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
            >
              <Home size={16} />
              Go to Homepage
            </Link>
            <Link
              to="/accommodation-types"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-primary text-primary font-medium text-sm hover:bg-primary/5 transition-colors"
            >
              <Search size={16} />
              Find Accommodation
            </Link>
          </div>

          <div className="rounded-xl bg-muted/50 border border-border p-8">
            <h2 className="font-heading text-xl text-foreground mb-4">Popular Pages</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
              {[
                { label: "Accommodation Types", to: "/accommodation-types", desc: "Motels, hotels, camping & more" },
                { label: "Top Attractions", to: "/attractions", desc: "Things to see & do in Bathurst" },
                { label: "Tours & Activities", to: "/tours", desc: "Book experiences online" },
                { label: "Travel Blog", to: "/blog", desc: "Tips, guides & itineraries" },
                { label: "About Us", to: "/about", desc: "Our mission & story" },
                { label: "Contact", to: "/contact", desc: "Get in touch" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-card border border-transparent hover:border-border/50 transition-all group"
                >
                  <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                  <div>
                    <span className="font-heading text-sm text-foreground group-hover:text-primary transition-colors block">
                      {link.label}
                    </span>
                    <span className="text-xs text-muted-foreground">{link.desc}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
