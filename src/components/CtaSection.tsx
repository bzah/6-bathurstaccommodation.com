const CtaSection = () => {
  return (
    <section className="section-padding bg-foreground">
      <div className="container-narrow text-center">
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-background mb-6">
          Plan Your Bathurst Getaway
        </h2>
        <p className="font-body text-background/70 max-w-2xl mx-auto text-lg leading-relaxed mb-10">
          Ready to explore Australia's oldest inland city? Find the perfect accommodation in Bathurst 
          and start planning your adventure today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.getyourguide.com/bathurst-l97232/?partner_id=0IQTGX8&utm_medium=online_publisher"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-body font-medium text-base hover:opacity-90 transition-opacity"
          >
            Book Activities
          </a>
          <a
            href="#attractions"
            className="px-8 py-3 rounded-lg border-2 border-background/30 text-background font-body font-medium text-base hover:bg-background/10 transition-colors"
          >
            Explore Attractions
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
