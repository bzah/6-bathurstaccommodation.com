import { Link } from "react-router-dom";
import { ArrowRight, Flag, MapPin, Camera, Trophy, Car, Mountain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/FAQSection";
import SEOContent from "@/components/SEOContent";

const seoSections = [
  {
    heading: "Mount Panorama Circuit: The Complete Visitor Guide",
    body: [
      "Mount Panorama (Wahluu in the Wiradjuri language) is the heart and soul of Bathurst NSW and one of the most iconic motor-racing circuits on Earth. The 6.213 km mountain road climbs 174 metres from Pit Straight, past Hell Corner, up Mountain Straight, through The Cutting, around Reid Park, over Skyline, down through The Esses, Forrest's Elbow, Conrod Straight and finally The Chase before returning to the start. It is the home of the legendary Repco Bathurst 1000 and the Bathurst 12 Hour endurance race.",
      "What makes Mount Panorama unique is that, outside of race events, the entire circuit operates as a fully public road. Anyone holding a valid driver's licence can drive a complete lap in their own car, free of charge, at a 60 km/h speed limit. There are dedicated lookout points, free parking bays, picnic areas, walking tracks and signage explaining the history of every famous corner. Even non-motorsport fans rate the drive as one of the best things to do in Bathurst.",
      "The circuit is open 24 hours a day except during sanctioned race meetings, track-day hire periods and the Bathurst 12 Hour and Bathurst 1000 weekends. Always check the Bathurst Regional Council website for closures before driving up. Allow 20–30 minutes for a full lap with photo stops, or up to 2 hours if you plan to walk the McPhillamy Park trails and Sir Joseph Banks Native Flora Reserve.",
    ],
  },
  {
    heading: "Where to Stay Near Mount Panorama Circuit",
    body: [
      "The closest accommodation to Mount Panorama is Rydges Mount Panorama, a 4-star hotel located right at the foot of the circuit with views directly onto the track and the National Motor Racing Museum. Other popular motorsport-friendly stays include Panorama City Motor Lodge, Bathurst Explorers Motel, Knickerbocker Hotel, Best Western Bathurst Motor Inn, and Country Comfort Bathurst — all within a 5–10 minute drive of the mountain.",
      "For race-week visitors, caravan parks such as Bathurst Panorama Holiday Park and BIG4 Bathurst Park are walking distance from sections of the circuit and become the social hub of the V8 Supercars community. Self-contained Airbnb houses across West Bathurst, Kelso and Eglinton are popular with friend groups and families who want space, kitchens and BBQ facilities. Book 6–12 months ahead for the October Bathurst 1000.",
    ],
  },
  {
    heading: "What to See on the Mountain Beyond the Track",
    body: [
      "At the base of the circuit, the National Motor Racing Museum holds Australia's most important collection of touring car, Formula 1, Group A and Group C racing cars, trophies, helmets, suits and memorabilia spanning more than 60 years of Mount Panorama history. Entry is affordable and includes interactive displays perfect for families. The Bathurst Visitor Information Centre is right next door with maps, brochures and souvenirs.",
      "Halfway up the mountain, McPhillamy Park is a beautiful grassed picnic area with BBQs, toilets, shaded seating and panoramic views over Bathurst city, the Macquarie River valley and the Central Tablelands. The Sir Joseph Banks Native Flora Reserve preserves over 600 species of native Australian plants and offers gentle bushwalking tracks. The Mount Panorama Lookout at Skyline gives the most photographed view in Bathurst — best at sunrise and sunset.",
    ],
  },
  {
    heading: "Driving the Circuit Safely & Track-Day Hot Laps",
    body: [
      "Even at 60 km/h, Mount Panorama demands respect. The road is steep, narrow and one-way, with blind crests, off-camber corners and concrete walls only metres from the racing line. Drive in a road-legal vehicle, obey the speed limit, never stop on the racing line, give way to cyclists and use the marked photo bays. The descent from Skyline through The Esses requires low gears (manual cars) or downshift mode (automatics) to avoid brake fade.",
      "If you want to experience the circuit at racing speeds, a number of operators offer hot-lap experiences in supercars, V8 race cars and rally cars on track-hire days throughout the year. Packages can include 2–6 laps, professional driver, helmet and suit, in-car video and a certificate. These typically run $250–$1,200 depending on the car and lap count and book out months in advance. Check operators based in Bathurst and Sydney for current schedules.",
    ],
  },
];

const keywords = [
  "Mount Panorama Circuit",
  "drive Mount Panorama",
  "Mount Panorama lap",
  "Bathurst race track",
  "National Motor Racing Museum",
  "Rydges Mount Panorama",
  "Mount Panorama lookout",
  "McPhillamy Park",
  "Bathurst 1000 circuit",
  "Bathurst 12 Hour",
  "hot laps Bathurst",
  "Mount Panorama hotels",
  "accommodation Mount Panorama",
  "Mount Panorama photos",
  "Skyline corner Bathurst",
  "The Cutting Bathurst",
  "Conrod Straight",
  "motorsport heritage Australia",
];

const faqs = [
  {
    question: "Can anyone drive a lap of Mount Panorama?",
    answer: "Yes. Outside race events the full 6.213 km Mount Panorama Circuit is a public road open to any licensed driver in a road-legal vehicle, free of charge. The speed limit is 60 km/h, the road is one-way and there are clearly marked photo and lookout bays at key corners.",
  },
  {
    question: "How long does it take to drive Mount Panorama?",
    answer: "A continuous lap takes around 12–15 minutes at the 60 km/h speed limit. With photo stops at Hell Corner, The Cutting, Skyline, McPhillamy Park and Forrest's Elbow, allow 30–60 minutes. Add 1–2 hours if you plan to visit the National Motor Racing Museum and the bushwalks.",
  },
  {
    question: "Is Mount Panorama free to visit?",
    answer: "Yes — driving the circuit is completely free outside of ticketed race weekends. Parking at McPhillamy Park, the Skyline lookout and the museum carpark is also free. The National Motor Racing Museum charges a small entry fee that supports the venue.",
  },
  {
    question: "Where is the best lookout on Mount Panorama?",
    answer: "The Skyline lookout (the highest point of the circuit) gives the most spectacular panoramic views over Bathurst, the Macquarie River and the Central Tablelands. Sunrise and sunset are the most photographed times. McPhillamy Park is the best spot for a picnic with views.",
  },
  {
    question: "Is Mount Panorama open during the Bathurst 1000?",
    answer: "No — the entire circuit closes to public traffic for several days before, during and after the Bathurst 1000 in October and the Bathurst 12 Hour in February. Always check the Bathurst Regional Council website for the current schedule before driving up.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

const placeSchema = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  name: "Mount Panorama Circuit",
  description: "Iconic 6.213 km motor racing circuit and public road in Bathurst NSW. Home of the Bathurst 1000 and Bathurst 12 Hour.",
  url: "https://bathurstaccommodation.com/mount-panorama",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bathurst",
    addressRegion: "NSW",
    postalCode: "2795",
    addressCountry: "AU",
  },
  geo: { "@type": "GeoCoordinates", latitude: -33.4501, longitude: 149.5557 },
};

const corners = [
  { name: "Hell Corner", icon: Flag, desc: "The tight right-hander at the end of Pit Straight that funnels cars onto Mountain Straight." },
  { name: "The Cutting", icon: Mountain, desc: "Steep climb between concrete walls — one of the most intimidating sections in world motorsport." },
  { name: "Skyline", icon: Camera, desc: "The highest point of the circuit. Panoramic views over Bathurst — the most photographed spot on the mountain." },
  { name: "The Esses", icon: Car, desc: "Fast, flowing downhill chicane through Reid Park — pure flow and commitment." },
  { name: "Forrest's Elbow", icon: MapPin, desc: "The final left-hander before the long Conrod Straight descent." },
  { name: "The Chase", icon: Trophy, desc: "High-speed kink on Conrod Straight added in 1987 — scene of countless legendary battles." },
];

const MountPanoramaPage = () => (
  <div className="min-h-screen">
    <SEOHead
      title="Mount Panorama Circuit Bathurst | Drive a Lap, Lookouts & Hotels Guide"
      description="Complete guide to Mount Panorama Bathurst: drive the 6.2km circuit free, National Motor Racing Museum, Skyline lookout, hot laps, hotels & Bathurst 1000 tips."
      keywords="mount panorama circuit, drive mount panorama, mount panorama lap, bathurst race track, national motor racing museum, rydges mount panorama, mount panorama lookout, mcphillamy park, bathurst 1000 circuit, bathurst 12 hour, hot laps bathurst, accommodation mount panorama, skyline lookout bathurst, the cutting, conrod straight, mount panorama photos"
      canonicalPath="/mount-panorama"
      structuredData={[placeSchema, faqSchema]}
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Mount Panorama", path: "/mount-panorama" },
      ]}
    />
    <Navbar />
    <main className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Iconic Landmark
          </span>
          <h1 className="text-3xl md:text-5xl font-heading text-foreground mb-5">
            Mount Panorama Circuit, Bathurst
          </h1>
          <p className="text-muted-foreground max-w-3xl mx-auto font-body text-lg leading-relaxed">
            Drive the legendary 6.213 km motorsport circuit, explore the National Motor Racing
            Museum and discover Bathurst's most famous mountain — Wahluu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {corners.map((c) => (
            <Card key={c.name} className="border-border/50 bg-card hover:shadow-[var(--shadow-elevated)] transition-all">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <c.icon size={18} className="text-primary" />
                  <h2 className="font-heading text-lg text-foreground">{c.name}</h2>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="rounded-xl bg-muted/50 border border-border p-8 text-center mb-12">
          <h2 className="font-heading text-2xl text-foreground mb-3">Stay Near Mount Panorama</h2>
          <p className="text-muted-foreground font-body mb-6 max-w-xl mx-auto">
            Compare hotels, motels and self-contained homes within 10 minutes of the circuit.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.booking.com/searchresults.html?ss=Mount+Panorama+Bathurst+NSW&aid=304142"
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
            >
              Book Hotels on Booking.com <ArrowRight size={14} />
            </a>
            <a
              href="https://www.getyourguide.com/bathurst-l97232/?partner_id=0IQTGX8&utm_medium=online_publisher"
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-primary text-primary font-medium text-sm hover:bg-primary/5 transition-colors"
            >
              Hot Laps & Tours <ArrowRight size={14} />
            </a>
            <Link
              to="/accommodation-types"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-muted-foreground font-medium text-sm hover:text-foreground transition-colors"
            >
              All Accommodation <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      <SEOContent
        intro="Everything you need to plan a visit to Mount Panorama Circuit in Bathurst NSW — driving the lap, the National Motor Racing Museum, McPhillamy Park, Skyline lookout, hot-lap experiences and where to stay."
        sections={seoSections}
        keywordsCloud={keywords}
      />

      <FAQSection
        faqs={faqs}
        structuredData={faqSchema}
        title="Mount Panorama FAQs"
        subtitle="Everything visitors ask about driving and visiting the circuit."
      />
    </main>
    <Footer />
  </div>
);

export default MountPanoramaPage;
