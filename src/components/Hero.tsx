import heroImage from "@/assets/bathurst-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      <img
        src={heroImage}
        alt="Bathurst NSW panoramic landscape at golden hour with rolling countryside and historic buildings"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--hero-overlay)" }}
      />
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto pt-20 pb-12">
        <p className="font-body text-[11px] sm:text-sm uppercase tracking-[0.25em] sm:tracking-[0.3em] text-primary-foreground/80 mb-3 sm:mb-4">
          🇦🇺 New South Wales, Australia
        </p>
        <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-primary-foreground mb-4 sm:mb-6 animate-fade-in-up leading-[1.05]">
          Bathurst
        </h1>
        <h2 className="font-heading text-lg sm:text-2xl md:text-3xl text-primary-foreground/90 mb-6 sm:mb-8 italic">
          Australia's Oldest Inland City
        </h2>
        <p className="font-body text-sm sm:text-base md:text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
          Discover the best accommodation in Bathurst — from charming heritage stays to modern motels. 
          Explore Mount Panorama, gold rush history, world-class wineries, and stunning countryside.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <a
            href="#attractions"
            className="px-6 sm:px-8 py-3 rounded-lg bg-primary text-primary-foreground font-body font-medium text-sm sm:text-base hover:opacity-90 transition-opacity text-center"
          >
            Top Attractions
          </a>
          <a
            href="https://www.getyourguide.com/bathurst-l97232/?partner_id=0IQTGX8&utm_medium=online_publisher"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 sm:px-8 py-3 rounded-lg border-2 border-primary-foreground/40 text-primary-foreground font-body font-medium text-sm sm:text-base hover:bg-primary-foreground/10 transition-colors text-center"
          >
            Find Tours
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
