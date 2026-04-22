import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Star, Clock, MapPin, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/FAQSection";
import SEOContent from "@/components/SEOContent";

const toursSeoSections = [
  {
    heading: "Bathurst Tours, Activities & Experiences",
    body: [
      "Bathurst and the surrounding Central West NSW are packed with bookable experiences for every interest — motorsport, heritage, food, wine, adventure and nature. From hot-laps of the Mount Panorama Circuit and guided gold-panning at the Bathurst Goldfields, to cellar-door wine trails through Orange and Mudgee, sunrise hot-air balloon flights and underground cave tours at Jenolan and Abercrombie, there is something for every traveller and every season.",
      "Most Bathurst tours can be booked online with instant confirmation and free cancellation up to 24 hours before departure. Half-day tours are perfect for travellers on a tight schedule, while full-day and multi-day packages allow you to explore further afield, combining Bathurst with day trips to the Blue Mountains, Lithgow Zig Zag Railway, Hill End ghost town and the Capertee Valley.",
    ],
  },
  {
    heading: "Wine Tours, Food Trails & Cultural Experiences",
    body: [
      "The Central West Wine Trail visits cellar doors across Bathurst, Orange, Mudgee and Millthorpe, sampling award-winning cool-climate Chardonnay, Pinot Noir, Shiraz and sparkling. Many tours include lunch at a vineyard restaurant, stops at local cheese makers, olive groves and craft breweries, and pickup directly from your Bathurst accommodation.",
      "For a deeper cultural experience, join a Wiradjuri-led walking tour along the Macquarie River to learn about Australia's oldest continuous culture, take a heritage architecture walk through the CBD's sandstone precinct, or attend a seasonal event such as the Bathurst Winter Festival, Inland Sea of Sound music festival or the Bathurst Edible Garden Trail.",
    ],
  },
  {
    heading: "Adventure & Outdoor Tours Near Bathurst",
    body: [
      "Adrenaline lovers can enjoy guided 4WD adventures through the Turon goldfields, mountain biking on the Mount Panorama trail network, kayaking and stand-up paddleboarding on the Macquarie River, rock climbing at Evans Crown, horse-riding farm experiences and astronomy nights under the dark Central Tablelands sky. Sunrise hot-air ballooning over the Bathurst countryside is consistently rated one of the best aerial experiences in NSW.",
      "Family-friendly options include the Bathurst Goldfields gold-panning experience, the Australian Fossil & Mineral Museum interactive tours, alpaca farm visits, pony rides and seasonal pick-your-own berry farms. School-holiday programmes regularly run at the National Motor Racing Museum and the Bathurst Regional Art Gallery.",
    ],
  },
];

const toursKeywords = [
  "Bathurst tours",
  "things to do Bathurst",
  "Mount Panorama tour",
  "Bathurst wine tours",
  "Orange wine tours",
  "Central West wine trail",
  "Bathurst hot air balloon",
  "Abercrombie Caves tour",
  "Jenolan Caves tour",
  "heritage walking tour Bathurst",
  "Bathurst Goldfields experience",
  "family activities Bathurst",
  "adventure tours NSW Central West",
  "GetYourGuide Bathurst",
  "Bathurst day trips",
  "kayaking Macquarie River",
  "Hill End tour",
  "Bathurst seasonal events",
];

const toursFaqs = [
  {
    question: "What are the most popular tours in Bathurst?",
    answer: "The most popular experiences include driving the Mount Panorama Circuit, the Bathurst Goldfields heritage experience, Central West wine trail tours, heritage walking tours through the CBD, sunrise hot air ballooning over the countryside, and Abercrombie Caves tours.",
  },
  {
    question: "Can I book Bathurst tours online?",
    answer: "Yes, most Bathurst tours and experiences can be booked online through platforms like GetYourGuide. Many offer instant confirmation and free cancellation. You can also book directly with local operators for personalised experiences.",
  },
  {
    question: "Are there wine tours from Bathurst?",
    answer: "Yes! Full-day wine trail tours take you through the Central West wine region, visiting cellar doors at Orange, Mudgee, and local Bathurst wineries. Tours typically include tastings at 3-5 properties with gourmet food pairings. Self-drive wine trails are also popular.",
  },
  {
    question: "Is hot air ballooning available in Bathurst?",
    answer: "Yes, sunrise hot air balloon flights operate from the Bathurst area, offering stunning views over the Central West countryside. Flights typically launch at dawn and last about an hour, with the full experience including setup and champagne breakfast taking 3-4 hours.",
  },
  {
    question: "What outdoor activities are available near Bathurst?",
    answer: "Outdoor activities include bushwalking at Evans Crown Nature Reserve, kayaking on the Macquarie River, mountain biking on local trails, fishing at Ben Chifley Dam, rock climbing, and horse riding experiences on rural properties surrounding the city.",
  },
];

const toursFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: toursFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const tourHighlights = [
  {
    title: "Mount Panorama Circuit Drive",
    description: "Drive the full 6.2km circuit yourself or join a guided tour to learn the history behind every corner — from Hell Corner to The Chase.",
    duration: "1–2 hours",
    rating: "4.8",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=600&q=80",
    tags: ["Motorsport", "Must-Do"],
  },
  {
    title: "Bathurst Goldfields Experience",
    description: "Pan for gold, explore a recreated 1850s mining camp, and learn about the gold rush that transformed the region. Interactive fun for all ages.",
    duration: "2–3 hours",
    rating: "4.6",
    image: "https://images.unsplash.com/photo-1533929736562-6c5765f93891?auto=format&fit=crop&w=600&q=80",
    tags: ["Heritage", "Family"],
  },
  {
    title: "Central West Wine Trail",
    description: "Visit cellar doors across the Orange and Mudgee wine regions. Sample award-winning cool-climate wines with gourmet food pairings.",
    duration: "Full day",
    rating: "4.9",
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=600&q=80",
    tags: ["Wine", "Day Trip"],
  },
  {
    title: "Heritage Walking Tour",
    description: "A guided walk through Bathurst's heritage precinct, visiting 25+ sandstone buildings, churches, and landmarks that tell 200 years of history.",
    duration: "2 hours",
    rating: "4.7",
    image: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&w=600&q=80",
    tags: ["History", "Walking"],
  },
  {
    title: "Sunrise Hot Air Ballooning",
    description: "Float over the stunning Central West countryside at dawn. See rolling hills, farmland, and Bathurst from above in this unforgettable experience.",
    duration: "3–4 hours",
    rating: "5.0",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
    tags: ["Adventure", "Premium"],
  },
  {
    title: "Abercrombie Caves Tour",
    description: "Explore limestone caves featuring the largest natural arch in the southern hemisphere. Guided tours available with stunning underground formations.",
    duration: "Half day",
    rating: "4.7",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80",
    tags: ["Nature", "Adventure"],
  },
];

const ToursPage = () => {
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

    const container = document.getElementById("gyg-tours-widget");
    if (container) {
      container.innerHTML = "";
      container.appendChild(script);
    }

    return () => {
      if (container) container.innerHTML = "";
    };
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: "Bathurst Tours & Experiences",
    description: "Book the best tours, activities, and experiences in Bathurst NSW. From Mount Panorama drives to wine trails and hot air ballooning.",
    url: `${window.location.origin}/tours`,
    touristType: ["Adventure tourists", "Cultural tourists", "Food tourists"],
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Bathurst Tours & Experiences | Book Activities in Bathurst NSW"
        description="Book top-rated Bathurst tours & activities — wine trails, Mount Panorama circuit drives, heritage walks, hot air ballooning & Abercrombie Caves. Instant confirmation available."
        canonicalPath="/tours"
        structuredData={structuredData}
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Tours & Experiences
            </span>
            <h1 className="text-3xl md:text-5xl font-heading text-foreground mb-5">
              Bathurst Tours & Activities
            </h1>
            <p className="text-muted-foreground max-w-3xl mx-auto font-body text-lg leading-relaxed">
              From racing heritage to wine trails and sunrise balloon flights — discover the best
              ways to experience Bathurst and the Central West.
            </p>
          </div>

          {/* Tour Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {tourHighlights.map((tour) => (
              <Card
                key={tour.title}
                className="group overflow-hidden border-border/50 bg-card hover:shadow-[var(--shadow-elevated)] transition-all duration-300"
              >
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    {tour.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-full bg-background/90 text-foreground text-xs font-medium backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <CardContent className="p-5">
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {tour.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star size={12} className="text-primary fill-primary" />
                      {tour.rating}
                    </span>
                  </div>
                  <h2 className="font-heading text-lg text-foreground mb-2">{tour.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">{tour.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Booking Widget */}
          <div className="mb-20">
            <div className="text-center mb-10">
              <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-3">
                Book Your Bathurst Experience
              </h2>
              <p className="text-muted-foreground font-body max-w-xl mx-auto">
                Browse availability and book directly. Instant confirmation on most experiences.
              </p>
            </div>
            <div
              id="gyg-tours-widget"
              className="min-h-[300px] flex items-center justify-center"
            >
              <p className="font-body text-muted-foreground">Loading tours...</p>
            </div>
            <div className="text-center mt-8">
              <a
                href="https://www.getyourguide.com/bathurst-l97232/?partner_id=0IQTGX8&utm_medium=online_publisher"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 rounded-lg bg-primary text-primary-foreground font-body font-medium hover:opacity-90 transition-opacity"
              >
                View All Bathurst Tours →
              </a>
            </div>
          </div>

          {/* Internal Links */}
          <div className="rounded-xl bg-muted/50 border border-border p-8 text-center">
            <h2 className="font-heading text-2xl text-foreground mb-3">Plan Your Full Trip</h2>
            <p className="text-muted-foreground font-body mb-6 max-w-xl mx-auto">
              Find accommodation and discover more of what Bathurst has to offer.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/accommodation-types"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
              >
                Find Accommodation <ArrowRight size={14} />
              </Link>
              <Link
                to="/attractions"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-primary text-primary font-medium text-sm hover:bg-primary/5 transition-colors"
              >
                See Attractions <ArrowRight size={14} />
              </Link>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-muted-foreground font-medium text-sm hover:text-foreground transition-colors"
              >
                Travel Blog <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        <FAQSection
          faqs={toursFaqs}
          structuredData={toursFaqSchema}
          title="Tours & Activities FAQs"
          subtitle="Common questions about tours and experiences in Bathurst."
        />
      </main>
      <Footer />
    </div>
  );
};

export default ToursPage;
