import { Link } from "react-router-dom";
import { ArrowRight, Building2, Wine, Trophy, Utensils, Mountain, Users } from "lucide-react";

const cards = [
  {
    title: "Book Hotels & Motels",
    desc: "Compare 100+ Bathurst stays with free cancellation on Booking.com.",
    cta: "Find a Stay",
    href: "https://www.booking.com/searchresults.html?ss=Bathurst+NSW+Australia&aid=304142",
    icon: Building2,
    external: true,
    sponsored: true,
  },
  {
    title: "Tours & Activities",
    desc: "Hot laps, wine trails, caves & ballooning — instant confirmation.",
    cta: "Browse Tours",
    href: "https://www.getyourguide.com/bathurst-l97232/?partner_id=0IQTGX8&utm_medium=online_publisher",
    icon: Trophy,
    external: true,
    sponsored: true,
  },
  {
    title: "Mount Panorama",
    desc: "Drive the iconic 6.2 km circuit free + visit the Motor Racing Museum.",
    cta: "View Guide",
    href: "/mount-panorama",
    icon: Mountain,
  },
  {
    title: "Bathurst 1000",
    desc: "Tickets, camping, hospitality & race-week accommodation tips.",
    cta: "Race Week Guide",
    href: "/bathurst-1000",
    icon: Trophy,
  },
  {
    title: "Wineries Near Bathurst",
    desc: "Orange, Mudgee & Bathurst — 80+ cellar doors within 90 minutes.",
    cta: "Wine Trails",
    href: "/wineries",
    icon: Wine,
  },
  {
    title: "Restaurants & Cafés",
    desc: "Best places to eat, brunch, fine dining & craft beer in Bathurst.",
    cta: "Where to Eat",
    href: "/restaurants",
    icon: Utensils,
  },
  {
    title: "Family Holidays",
    desc: "Kid-friendly attractions, family stays, playgrounds & day trips.",
    cta: "Family Guide",
    href: "/family",
    icon: Users,
  },
];

const AffiliateGrid = () => (
  <section className="py-12 sm:py-16 bg-muted/30">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h2 className="font-heading text-2xl sm:text-3xl text-foreground mb-3">
          Plan Every Part of Your Bathurst Trip
        </h2>
        <p className="text-muted-foreground font-body max-w-2xl mx-auto">
          Compare stays, book experiences and explore in-depth local guides — everything in one place.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {cards.map((c) => {
          const inner = (
            <>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <c.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-heading text-lg text-foreground">{c.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{c.desc}</p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                {c.cta} <ArrowRight size={14} />
              </span>
            </>
          );
          const className =
            "group block p-6 rounded-xl bg-card border border-border hover:shadow-[var(--shadow-elevated)] hover:-translate-y-0.5 transition-all";
          return c.external ? (
            <a
              key={c.title}
              href={c.href}
              target="_blank"
              rel={c.sponsored ? "noopener noreferrer sponsored" : "noopener noreferrer"}
              className={className}
            >
              {inner}
            </a>
          ) : (
            <Link key={c.title} to={c.href} className={className}>
              {inner}
            </Link>
          );
        })}
      </div>
      <p className="text-xs text-muted-foreground text-center mt-6 font-body">
        Some links are affiliate links — we may earn a small commission at no cost to you.
      </p>
    </div>
  </section>
);

export default AffiliateGrid;
