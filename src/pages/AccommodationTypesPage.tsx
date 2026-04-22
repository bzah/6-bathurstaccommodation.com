import { Link } from "react-router-dom";
import { Building, Home, Tent, BedDouble, Users, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/FAQSection";
import SEOContent from "@/components/SEOContent";

const accommodationSeoSections = [
  {
    heading: "Bathurst Accommodation: Compare Every Type of Stay",
    body: [
      "Bathurst, NSW offers one of the widest accommodation mixes of any regional city in Australia. From budget motels along the Great Western Highway to luxury heritage hotels, riverside caravan parks, self-contained Airbnb rentals, romantic country B&Bs and farm-stay cottages, there is a perfect fit for every traveller and every budget.",
      "Average nightly rates start around $30 for unpowered camp sites and $90 for budget motel rooms, climb to $150–$280 for full-service hotels and B&Bs, and can exceed $500 per night for premium homes during the Bathurst 1000 race week. Booking ahead — especially for October events and school holidays — is the single most important tip for securing the best Bathurst accommodation deals.",
    ],
  },
  {
    heading: "Choosing Between Motels, Hotels, Cabins & Self-Contained Stays",
    body: [
      "Bathurst motels remain the most popular choice for couples, race-goers and short-stay travellers. They typically offer free on-site parking, free Wi-Fi, ducted heating, en-suite bathrooms, tea and coffee facilities, and continental breakfast. Many are within a 5-minute drive of Mount Panorama Circuit and the Bathurst CBD.",
      "Full-service hotels such as Rydges Mount Panorama and Quest Bathurst add restaurants, bars, swimming pools, gyms, room service and conference facilities — perfect for business travellers and longer stays. Self-contained Airbnb apartments, holiday houses and farm cottages suit families and groups who want kitchens, multiple bedrooms, laundry facilities and outdoor space, while bed & breakfasts deliver heritage charm, home-cooked breakfasts and personal hospitality.",
    ],
  },
  {
    heading: "Caravan Parks, Camping & Pet-Friendly Stays",
    body: [
      "Bathurst's caravan parks — including Bathurst Panorama Holiday Park, BIG4 Bathurst Park and Jaybee Caravan Park — offer powered and unpowered sites, ensuite cabins, camp kitchens, swimming pools, jumping pillows and family bathrooms. They are a popular choice for road-trippers, grey nomads and families who want affordable accommodation with space to move.",
      "Pet-friendly accommodation is widely available across motels, cabins and rural Airbnb listings. Always confirm pet policies (size, breed, number, indoor/outdoor) directly with the property before booking. Several venues also welcome assistance animals and offer accessible rooms with grab-rails, walk-in showers and step-free entry.",
    ],
  },
  {
    heading: "Booking Tips for the Bathurst 1000 & Peak Events",
    body: [
      "The Repco Bathurst 1000 in early October is Australia's biggest motorsport event and accommodation books out 6–12 months in advance. Expect minimum-night stays (often 3–5 nights), upfront payment, strict cancellation policies and rates 3–5x higher than normal. If Bathurst is fully booked, consider nearby Orange (40 min), Blayney (25 min), Lithgow (50 min), Oberon (55 min) or Cowra (75 min) and commute in for the day.",
      "Other peak periods include Easter, the April school holidays, the Bathurst 12 Hour endurance race in February, Bathurst Winter Festival in July and the Bathurst Spring Spectacular in October. For the best value, target weekdays in March–May or September (excluding race week) when many properties offer two-night packages with breakfast, wine tasting vouchers or museum entry included.",
    ],
  },
];

const accommodationKeywords = [
  "Bathurst accommodation types",
  "motels Bathurst NSW",
  "hotels Bathurst",
  "Bathurst caravan parks",
  "Airbnb Bathurst NSW",
  "Bathurst B&B",
  "pet friendly motels Bathurst",
  "family caravan parks Bathurst",
  "Mount Panorama hotels",
  "Bathurst 1000 accommodation",
  "Rydges Mount Panorama",
  "cheap accommodation Bathurst",
  "luxury stays Bathurst",
  "self contained Bathurst",
  "Bathurst CBD motels",
  "farm stay near Bathurst",
  "Bathurst romantic getaway",
  "long stay accommodation Bathurst",
];

const accommodationFaqs = [
  {
    question: "What is the cheapest accommodation in Bathurst?",
    answer: "Caravan parks and camping grounds offer the most affordable options, starting from around $30 per night for unpowered sites. Budget motels start from around $90 per night. During off-peak periods (outside major events), you can find great deals across all accommodation types.",
  },
  {
    question: "Which motels are closest to Mount Panorama?",
    answer: "Rydges Mount Panorama is the closest hotel, located right at the circuit with mountain views. Several motels along Panorama Avenue and Conrod Straight are within 2-5 minutes' drive of the circuit entrance, including Panorama City Motor Lodge and Bathurst Explorer Motel.",
  },
  {
    question: "Are there pet-friendly accommodation options in Bathurst?",
    answer: "Yes, several motels and caravan parks in Bathurst welcome pets. Some Airbnb properties also allow dogs. It's always best to confirm pet policies directly with the property before booking, as rules vary regarding size, breed, and number of pets allowed.",
  },
  {
    question: "Can I find accommodation during the Bathurst 1000?",
    answer: "Accommodation during the Bathurst 1000 (October) is extremely limited and books out 6-12 months in advance. Many properties enforce minimum stays and premium pricing. If Bathurst is fully booked, consider nearby towns like Orange (40 min), Blayney (25 min), or Lithgow (50 min).",
  },
  {
    question: "What amenities do Bathurst motels typically offer?",
    answer: "Most Bathurst motels include free parking, Wi-Fi, air conditioning, tea/coffee facilities, and en-suite bathrooms. Many also offer continental breakfast, BBQ areas, and swimming pools. Higher-end options include on-site restaurants, room service, and conference facilities.",
  },
];

const accommodationFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: accommodationFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const accommodationTypes = [
  {
    title: "Motels",
    subtitle: "Budget to mid-range comfort",
    icon: BedDouble,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    description:
      "Bathurst has around 20 motels spread across the city, many within a short drive of Mount Panorama. Motels are the most popular choice for race-goers and weekend visitors, offering clean, comfortable rooms with parking right at your door.",
    features: ["Free parking", "Wi-Fi included", "Pet-friendly options", "Close to Mount Panorama"],
    priceRange: "$90 – $200 per night",
    bestFor: "Race weekends, couples, budget travellers",
  },
  {
    title: "Hotels",
    subtitle: "Full-service stays",
    icon: Building,
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80",
    description:
      "For those wanting more amenities, Bathurst's hotels offer restaurants, bars, room service, and conference facilities. Rydges Mount Panorama is the premium option, located right at the circuit with mountain views.",
    features: ["On-site dining", "Pool & gym", "Room service", "Conference facilities"],
    priceRange: "$150 – $350 per night",
    bestFor: "Business travellers, couples, families wanting comfort",
  },
  {
    title: "Caravan Parks & Camping",
    subtitle: "Outdoor adventure",
    icon: Tent,
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80",
    description:
      "Bathurst's caravan parks are a social hub, especially during race week. Choose from powered sites, unpowered sites, and cabins. Some parks are walking distance from Mount Panorama, and the camping atmosphere is part of the Bathurst experience.",
    features: ["Powered & unpowered sites", "Cabins available", "Camp kitchens", "Family facilities"],
    priceRange: "$30 – $150 per night",
    bestFor: "Families, groups, race-week camping culture",
  },
  {
    title: "Airbnb & Private Rentals",
    subtitle: "Home away from home",
    icon: Home,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    description:
      "The rise of Airbnb has added significant capacity, especially during peak events. Find everything from studio apartments to full houses with backyards. Great for groups who want to spread out and self-cater.",
    features: ["Full kitchens", "Multiple bedrooms", "Unique properties", "Local neighbourhood feel"],
    priceRange: "$100 – $500 per night",
    bestFor: "Groups, families, extended stays",
  },
  {
    title: "Bed & Breakfasts",
    subtitle: "Charming hospitality",
    icon: Users,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80",
    description:
      "Bathurst and the surrounding countryside have some lovely B&Bs offering personal hospitality, home-cooked breakfasts, and heritage character. Ideal for couples looking for a romantic getaway or a quieter alternative to motels.",
    features: ["Home-cooked breakfast", "Heritage properties", "Personal service", "Garden settings"],
    priceRange: "$120 – $280 per night",
    bestFor: "Couples, romantic getaways, heritage lovers",
  },
];

const AccommodationTypesPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Bathurst Accommodation Types",
    description: "Compare accommodation types in Bathurst NSW. Motels, hotels, caravan parks, Airbnb, and B&Bs near Mount Panorama.",
    url: `${window.location.origin}/accommodation-types`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: accommodationTypes.map((type, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: type.title,
        description: type.description,
      })),
    },
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Bathurst Accommodation Types 2026 | Motels, Hotels, Caravan Parks, Airbnb & B&Bs"
        description="Compare Bathurst accommodation: motels from $90, hotels, caravan parks, Airbnb & B&Bs near Mount Panorama. Pet-friendly & race-week tips inside."
        keywords="Bathurst accommodation types, motels Bathurst NSW, hotels Bathurst, caravan parks Bathurst, Airbnb Bathurst, B&B Bathurst, pet friendly motels Bathurst, Mount Panorama hotels, Rydges Mount Panorama, Bathurst 1000 accommodation, cheap motels Bathurst, family accommodation Bathurst, farm stay near Bathurst, self contained Bathurst"
        canonicalPath="/accommodation-types"
        structuredData={[structuredData, accommodationFaqSchema]}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Accommodation", path: "/accommodation-types" },
        ]}
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Where to Stay
            </span>
            <h1 className="text-3xl md:text-5xl font-heading text-foreground mb-5">
              Bathurst Accommodation Types
            </h1>
            <p className="text-muted-foreground max-w-3xl mx-auto font-body text-lg leading-relaxed">
              From budget motels to luxury hotels, camping under the stars to cosy B&Bs —
              find the perfect place to stay for your Bathurst adventure.
            </p>
          </div>

          {/* Accommodation Cards */}
          <div className="space-y-10 mb-16">
            {accommodationTypes.map((type, index) => (
              <Card
                key={type.title}
                className="overflow-hidden border-border/50 bg-card"
              >
                <div className={`grid grid-cols-1 md:grid-cols-2 ${index % 2 === 1 ? "md:[direction:rtl]" : ""}`}>
                  <div className="relative overflow-hidden aspect-[16/10] md:aspect-auto">
                    <img
                      src={type.image}
                      alt={`${type.title} accommodation in Bathurst`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <CardContent className={`p-6 md:p-8 flex flex-col justify-center ${index % 2 === 1 ? "md:[direction:ltr]" : ""}`}>
                    <div className="flex items-center gap-2 mb-1">
                      <type.icon size={20} className="text-primary" />
                      <span className="text-xs font-medium text-primary uppercase tracking-wide">{type.subtitle}</span>
                    </div>
                    <h2 className="font-heading text-2xl text-foreground mb-3">{type.title}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{type.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {type.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-2.5 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      <span className="font-semibold text-foreground">{type.priceRange}</span>
                      <span className="text-muted-foreground">· Best for: {type.bestFor}</span>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          {/* Booking Tips */}
          <div className="rounded-xl bg-muted/50 border border-border p-8 mb-12">
            <h2 className="font-heading text-2xl text-foreground mb-4 text-center">Booking Tips for Bathurst</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-body text-sm text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">🏁 Race Week</h3>
                <p>Book 6–12 months ahead for the Bathurst 1000 in October. Minimum stays and premium pricing apply across all accommodation types.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">🍂 Off-Peak</h3>
                <p>Visit March–May or September–November for the best weather and availability. Prices drop significantly outside event weekends.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">📍 Location</h3>
                <p>Stay within 10 minutes of town for easy access to attractions, dining, and Mount Panorama. Shuttle services run during major events.</p>
              </div>
            </div>
          </div>

          {/* Internal Links */}
          <div className="rounded-xl bg-card border border-border p-8 text-center">
            <h2 className="font-heading text-2xl text-foreground mb-3">Explore More of Bathurst</h2>
            <p className="text-muted-foreground font-body mb-6 max-w-xl mx-auto">
              Discover what to see, do, and experience during your stay.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/attractions"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
              >
                See Attractions <ArrowRight size={14} />
              </Link>
              <Link
                to="/tours"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-primary text-primary font-medium text-sm hover:bg-primary/5 transition-colors"
              >
                Book Tours <ArrowRight size={14} />
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

        <SEOContent
          intro="Use this guide to compare every type of Bathurst NSW accommodation side-by-side, with realistic 2026 prices, amenities, neighbourhood tips and booking advice for the Bathurst 1000 and other peak events."
          sections={accommodationSeoSections}
          keywordsCloud={accommodationKeywords}
        />

        <FAQSection
          faqs={accommodationFaqs}
          structuredData={accommodationFaqSchema}
          title="Accommodation FAQs"
          subtitle="Common questions about finding places to stay in Bathurst."
        />
      </main>
      <Footer />
    </div>
  );
};

export default AccommodationTypesPage;
