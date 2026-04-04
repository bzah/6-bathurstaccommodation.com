const Footer = () => {
  return (
    <footer className="bg-foreground border-t border-background/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-heading text-xl text-background mb-4">
              <span className="text-primary">Bathurst</span>Accommodation
            </h3>
            <p className="font-body text-sm text-background/60 leading-relaxed">
              Your guide to the best accommodation in Bathurst, NSW. Discover places to stay, 
              top attractions, tours, and activities in Australia's oldest inland city.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-lg text-background mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Accommodation", href: "#accommodation" },
                { label: "Attractions", href: "#attractions" },
                { label: "Activities", href: "#activities" },
                { label: "Book Tours", href: "#tours" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-background/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg text-background mb-4">Useful Info</h4>
            <ul className="space-y-2 font-body text-sm text-background/60">
              <li>📍 Bathurst, NSW 2795, Australia</li>
              <li>🚗 3 hours west of Sydney</li>
              <li>🚂 NSW TrainLink from Sydney Central</li>
              <li>✈️ Nearest airport: Bathurst Airport (BHS)</li>
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
