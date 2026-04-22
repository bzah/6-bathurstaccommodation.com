import mountPanorama from "@/assets/mount-panorama.jpg";
import courthouse from "@/assets/bathurst-courthouse.jpg";
import gardens from "@/assets/bathurst-gardens.jpg";
import goldfields from "@/assets/bathurst-goldfields.jpg";
import wineries from "@/assets/bathurst-wineries.jpg";

const attractions = [
  {
    title: "Mount Panorama Circuit",
    description:
      "The world-famous motor racing circuit and home of the Bathurst 1000. Drive the 6.2km public road or visit the National Motor Racing Museum.",
    image: mountPanorama,
    link: "https://www.getyourguide.com/bathurst-l97232/?partner_id=0IQTGX8&utm_medium=online_publisher",
    cta: "Explore Tours",
  },
  {
    title: "Historic Bathurst Courthouse",
    description:
      "One of Australia's finest heritage courthouses. Explore the stunning sandstone architecture and learn about Bathurst's colonial past.",
    image: courthouse,
    link: "#",
    cta: "Learn More",
  },
  {
    title: "Machattie Park & Gardens",
    description:
      "Beautiful Victorian-era gardens in the heart of Bathurst featuring ornamental lakes, heritage bandstand, and stunning native plantings.",
    image: gardens,
    link: "#",
    cta: "Visit",
  },
  {
    title: "Bathurst Goldfields",
    description:
      "Relive the excitement of the 1850s gold rush. Pan for gold, explore heritage buildings, and discover the stories of the fortune seekers.",
    image: goldfields,
    link: "https://www.getyourguide.com/bathurst-l97232/?partner_id=0IQTGX8&utm_medium=online_publisher",
    cta: "Book Experience",
  },
  {
    title: "Central West Wineries",
    description:
      "Sample award-winning cool-climate wines from the nearby Orange and Mudgee wine regions. Perfect for a day trip from your Bathurst accommodation.",
    image: wineries,
    link: "https://www.getyourguide.com/bathurst-l97232/?partner_id=0IQTGX8&utm_medium=online_publisher",
    cta: "Wine Tours",
  },
];

const Attractions = () => {
  return (
    <section id="attractions" className="section-padding bg-muted/50">
      <div className="container-narrow">
        <div className="text-center mb-10 sm:mb-16">
          <p className="font-body text-xs sm:text-sm uppercase tracking-[0.2em] text-primary mb-3">
            Places to Visit
          </p>
          <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl text-foreground mb-4 sm:mb-6">
            Top Bathurst Attractions
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            From the iconic Mount Panorama to gold rush history and world-class wineries — 
            Bathurst offers unforgettable experiences for every traveller.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {attractions.map((attraction) => (
            <article
              key={attraction.title}
              className="group rounded-xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-300"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={attraction.image}
                  alt={attraction.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl text-foreground mb-3">
                  {attraction.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">
                  {attraction.description}
                </p>
                <a
                  href={attraction.link}
                  target={attraction.link.startsWith("http") ? "_blank" : undefined}
                  rel={attraction.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center font-body text-sm font-medium text-primary hover:opacity-80 transition-opacity"
                >
                  {attraction.cta} →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Attractions;
