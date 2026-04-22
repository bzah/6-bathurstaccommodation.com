const activities = [
  {
    title: "Bathurst 1000 Race Weekend",
    description:
      "Experience the thrill of Australia's greatest motor race. Book accommodation in Bathurst early — the entire region fills up fast during the October long weekend.",
    emoji: "🏎️",
  },
  {
    title: "Gold Panning Experience",
    description:
      "Try your luck panning for gold at the Bathurst Goldfields heritage site. A fun hands-on activity for the whole family.",
    emoji: "⛏️",
  },
  {
    title: "Wine & Food Trail",
    description:
      "Explore the Central West wine trail with cellar door tastings at boutique wineries, local produce markets, and gourmet restaurants.",
    emoji: "🍷",
  },
  {
    title: "Heritage Walking Tours",
    description:
      "Discover Bathurst's 200+ years of history with self-guided or guided walking tours through the city's beautifully preserved heritage precinct.",
    emoji: "🚶",
  },
  {
    title: "Abercrombie Caves",
    description:
      "Explore the stunning Abercrombie Caves, featuring the largest natural limestone arch in the southern hemisphere. Just 70km south of Bathurst.",
    emoji: "🦇",
  },
  {
    title: "Scenic Hot Air Ballooning",
    description:
      "Float gently over the breathtaking Central West countryside at sunrise. An unforgettable way to see the region from above.",
    emoji: "🎈",
  },
];

const Activities = () => {
  return (
    <section id="activities" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="text-center mb-10 sm:mb-16">
          <p className="font-body text-xs sm:text-sm uppercase tracking-[0.2em] text-primary mb-3">
            Things to Do
          </p>
          <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl text-foreground mb-4 sm:mb-6">
            Popular Activities Near Bathurst
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Whether you're looking for adventure, culture, or relaxation — there's no shortage 
            of things to do during your stay in Bathurst, NSW.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {activities.map((activity) => (
            <div
              key={activity.title}
              className="p-5 sm:p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <span className="text-2xl sm:text-3xl mb-3 sm:mb-4 block">{activity.emoji}</span>
              <h3 className="font-heading text-lg text-foreground mb-2">
                {activity.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
