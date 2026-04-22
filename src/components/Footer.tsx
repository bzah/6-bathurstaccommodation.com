import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground border-t border-background/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Bathurst Accommodation logo" loading="lazy" width={40} height={40} className="h-10 w-10 object-contain" />
              <h3 className="font-heading text-xl text-background">
                <span className="text-primary">Bathurst</span>Accommodation
              </h3>
            </div>
            <p className="font-body text-sm text-background/60 leading-relaxed">
              Your guide to the best accommodation in Bathurst, NSW. Discover places to stay, 
              top attractions, tours, and activities in Australia's oldest inland city.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-lg text-background mb-4">Explore</h4>
            <ul className="space-y-2">
              {[
                { label: "Accommodation", to: "/accommodation-types" },
                { label: "Attractions", to: "/attractions" },
                { label: "Tours & Activities", to: "/tours" },
                { label: "Travel Blog", to: "/blog" },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="font-body text-sm text-background/60 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg text-background mb-4">Company</h4>
            <ul className="space-y-2">
              {[
                { label: "About Us", to: "/about" },
                { label: "Contact", to: "/contact" },
                { label: "Parents Info", to: "/parents-info" },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="font-body text-sm text-background/60 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg text-background mb-4">Legal</h4>
            <ul className="space-y-2">
              {[
                { label: "Privacy Policy", to: "/privacy-policy" },
                { label: "Terms of Service", to: "/terms" },
                { label: "Cookie Policy", to: "/cookie-policy" },
                { label: "DMCA", to: "/dmca" },
                { label: "Legal Notice", to: "/legal-notice" },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="font-body text-sm text-background/60 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-10 pt-8 text-center">
          <p className="font-body text-xs text-background/40">
            © {new Date().getFullYear()} BathurstAccommodation.com — All rights reserved. 
            This site contains affiliate links. We may earn a commission when you book through our links.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
