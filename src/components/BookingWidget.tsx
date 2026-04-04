import { useEffect } from "react";

const BookingWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widget.getyourguide.com/dist/pa.umd.production.min.js";
    script.async = true;
    script.dataset.gyg_partner_id = "0IQTGX8";
    script.dataset.gyg_number_of_items = "8";
    script.dataset.gyg_widget = "activities";
    script.dataset.gyg_locale_code = "en-US";
    script.dataset.gyg_currency = "AUD";
    script.dataset.gyg_q = "Bathurst";

    const container = document.getElementById("gyg-widget-container");
    if (container) {
      container.innerHTML = "";
      container.appendChild(script);
    }

    return () => {
      if (container) {
        container.innerHTML = "";
      }
    };
  }, []);

  return (
    <section id="tours" className="section-padding bg-muted/50">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-3">
            🎫 Book Online
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-foreground mb-6">
            Book Bathurst Adventures
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Browse and book the best tours, activities, and experiences in and around Bathurst.
          </p>
        </div>

        <div
          id="gyg-widget-container"
          className="min-h-[300px] flex items-center justify-center"
        >
          <p className="font-body text-muted-foreground">Loading tours...</p>
        </div>

        <div className="text-center mt-10">
          <a
            href="https://www.getyourguide.com/bathurst-l97232/?partner_id=0IQTGX8&utm_medium=online_publisher"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-lg bg-primary text-primary-foreground font-body font-medium text-base hover:opacity-90 transition-opacity"
          >
            View All Bathurst Tours →
          </a>
        </div>
      </div>
    </section>
  );
};

export default BookingWidget;
