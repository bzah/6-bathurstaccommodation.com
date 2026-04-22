import { MapPin, Mountain, Wine, History } from "lucide-react";

const reasons = [
  {
    icon: Mountain,
    title: "Mount Panorama",
    description:
      "Home to the legendary Bathurst 1000 motor race. Drive the iconic circuit or soak in panoramic views of the city below.",
  },
  {
    icon: History,
    title: "Gold Rush Heritage",
    description:
      "Step back to the 1850s gold rush era. Visit historic goldfields, heritage-listed buildings, and museums that tell Bathurst's rich story.",
  },
  {
    icon: Wine,
    title: "Award-Winning Wineries",
    description:
      "The cool-climate Orange and Mudgee wine regions are at your doorstep. Enjoy cellar door tastings and gourmet dining experiences.",
  },
  {
    icon: MapPin,
    title: "Central Location",
    description:
      "Just 3 hours from Sydney by car or train. The perfect base to explore the stunning Central West NSW region and Blue Mountains.",
  },
];

const WhyVisit = () => {
  return (
    <section id="accommodation" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="text-center mb-10 sm:mb-16">
          <p className="font-body text-xs sm:text-sm uppercase tracking-[0.2em] text-primary mb-3">
            Discover Bathurst
          </p>
          <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl text-foreground mb-4 sm:mb-6">
            Why Stay in Bathurst?
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Whether you're seeking accommodation in Bathurst for the Bathurst 1000, a wine getaway, 
            or a heritage exploration — this historic city has it all.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="group p-6 sm:p-8 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-primary/20 transition-colors">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg sm:text-xl text-foreground mb-2 sm:mb-3">
                {reason.title}
              </h3>
              <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyVisit;
