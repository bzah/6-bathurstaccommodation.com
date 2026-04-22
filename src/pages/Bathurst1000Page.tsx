import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Ticket, MapPin, Tent } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/FAQSection";
import SEOContent from "@/components/SEOContent";

const seoSections = [
  {
    heading: "The Repco Bathurst 1000: Australia's Greatest Race",
    body: [
      "The Repco Bathurst 1000 is the most prestigious and most-watched motorsport event in Australia. Held every October at the Mount Panorama Circuit in Bathurst NSW, it brings together the world's best touring car drivers for a 1000 km endurance race that has crowned legends including Peter Brock, Allan Moffat, Mark Skaife, Craig Lowndes, Jamie Whincup and Shane van Gisbergen. The event attracts more than 200,000 attendees across the four-day weekend and reaches a global TV audience of over 100 million.",
      "Race week typically runs from the Thursday to Sunday of the second weekend in October. Practice and qualifying fill the early days, the Top Ten Shootout takes place Saturday afternoon, and the Bathurst 1000 main race begins Sunday morning at around 11:10 am, finishing approximately 6.5–7 hours later. Off-track entertainment includes live music, the V8 Supercars driver pit walk, the Supercars Paddock, monster truck shows, fireworks and the famous Bathurst 1000 camping culture on the inside of the mountain.",
    ],
  },
  {
    heading: "Tickets, Hospitality & Best Viewing Spots",
    body: [
      "General Admission tickets give access to all public spectator areas including The Chase, Murray's Corner, Reid Park, Sulman Park and grandstands at Pit Straight. 4-Day GA passes typically range from $250–$370 and almost always sell out before race week. Reserved grandstand seats at Pit Straight, The Chase and Conrod Straight are the most popular paid options and book out months in advance.",
      "Premium hospitality packages — including the Champions Club, Skyline Hospitality and corporate suites — include catering, drinks, dedicated parking and exclusive viewing decks. For the best free spectator views, head to McPhillamy Park (Saturday and Sunday only via shuttle), Reid Park or the natural amphitheatre across The Esses. Bring a folding chair, hat, sunscreen, ear protection and a reusable water bottle.",
    ],
  },
  {
    heading: "Where to Stay for the Bathurst 1000",
    body: [
      "Bathurst 1000 accommodation books out 6–12 months in advance and pricing rises 3–5x compared to normal rates. Most properties enforce minimum 3–5 night stays, full pre-payment and strict cancellation policies. The closest options are Rydges Mount Panorama, Panorama City Motor Lodge, Bathurst Explorers Motel and Best Western Bathurst Motor Inn, all within 5 minutes of the circuit gates.",
      "Self-contained Airbnb houses, holiday rentals and farm stays across West Bathurst, Kelso, Perthville, Eglinton, Sofala and Trunkey Creek absorb most of the demand. Many race fans camp on the inside of the circuit at the official Bathurst 1000 campgrounds — book through the Supercars website. If Bathurst is fully booked, look at nearby Orange (40 min), Blayney (25 min), Lithgow (50 min), Oberon (55 min) or Cowra (75 min) and commute in.",
    ],
  },
  {
    heading: "Practical Race-Week Tips",
    body: [
      "Arrive in Bathurst no later than the Wednesday before the race to beat the Thursday traffic crawl on the Great Western Highway. Bring cash for some on-site vendors, but cards are accepted at most food and merchandise stalls. The temperature in October can swing from 5°C overnight to 30°C during the day — pack layers, a wide-brim hat, strong sunscreen and a poncho for the typical Bathurst spring rain shower.",
      "Public transport options include the NSW TrainLink Bathurst Bullet from Sydney Central, supplemented by special Supercars shuttle buses between the CBD, campgrounds and the circuit. Drink-driving is heavily policed throughout race week — use shuttles or rideshare. Don't miss the post-race Mount Panorama track invasion, when fans are allowed to walk onto Pit Straight to celebrate the winners.",
    ],
  },
];

const keywords = [
  "Bathurst 1000",
  "Bathurst 1000 2026",
  "Repco Bathurst 1000",
  "Bathurst 1000 tickets",
  "Bathurst 1000 accommodation",
  "Bathurst 1000 camping",
  "V8 Supercars Bathurst",
  "Mount Panorama race",
  "Bathurst 12 Hour",
  "race week Bathurst",
  "Bathurst 1000 hospitality",
  "Bathurst 1000 grandstand",
  "Bathurst 1000 campgrounds",
  "Supercars 2026",
  "Pit Straight Bathurst",
  "Top Ten Shootout",
];

const faqs = [
  {
    question: "When is the Bathurst 1000 2026?",
    answer: "The Repco Bathurst 1000 is traditionally held over the second weekend of October each year at the Mount Panorama Circuit. The full schedule, qualifying days and race start time are confirmed by Supercars Australia in early autumn each year.",
  },
  {
    question: "How much are Bathurst 1000 tickets?",
    answer: "4-Day General Admission tickets typically range from $250–$370 and grandstand seats from $400–$1,200 depending on location. Premium hospitality packages start around $1,500 per person. All tickets sell out months in advance — book directly through the Supercars website.",
  },
  {
    question: "How early should I book Bathurst 1000 accommodation?",
    answer: "Most race-goers book 6–12 months in advance. Mount Panorama hotels, motels and Airbnb properties enforce minimum 3–5 night stays during race week, with rates 3–5x higher than off-peak. If Bathurst is full, consider Orange, Blayney, Lithgow, Oberon or Cowra.",
  },
  {
    question: "Can I camp at the Bathurst 1000?",
    answer: "Yes — official campgrounds operate inside the circuit at Reid Park, Sulman Park, McPhillamy Park, Murray's Corner and The Chase. Sites must be booked through the Supercars website. Camping is part of the Bathurst 1000 experience and creates an unforgettable atmosphere.",
  },
  {
    question: "What should I bring to the Bathurst 1000?",
    answer: "Folding chair, sun hat, strong sunscreen, ear protection, layers (mornings can be 5°C, afternoons 30°C), a reusable water bottle, poncho or rain jacket, cash for some vendors, and a portable phone charger. The official program is also worth picking up.",
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

const eventSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Repco Bathurst 1000",
  description: "Australia's biggest touring car race, held annually at Mount Panorama Circuit in Bathurst NSW.",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    "@type": "Place",
    name: "Mount Panorama Circuit",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bathurst",
      addressRegion: "NSW",
      postalCode: "2795",
      addressCountry: "AU",
    },
  },
};

const tips = [
  { icon: Calendar, title: "When", desc: "Second weekend of October. Practice Thursday, qualifying Friday, Top Ten Shootout Saturday, race Sunday." },
  { icon: Ticket, title: "Tickets", desc: "4-Day GA $250–$370. Grandstands $400–$1,200. Hospitality from $1,500. Book via Supercars Australia." },
  { icon: MapPin, title: "Best View", desc: "The Chase and Reid Park for racing action. McPhillamy Park for atmosphere. Pit Straight grandstands for the start." },
  { icon: Tent, title: "Camping", desc: "Official campgrounds inside the circuit. Book early via Supercars. Includes Reid Park, Sulman Park, McPhillamy Park." },
];

const Bathurst1000Page = () => (
  <div className="min-h-screen">
    <SEOHead
      title="Bathurst 1000 2026 | Tickets, Accommodation, Camping & Race Guide"
      description="Complete Bathurst 1000 guide: tickets from $250, accommodation 6+ months ahead, official campgrounds, best viewing spots, schedule & race-week travel tips."
      keywords="bathurst 1000, bathurst 1000 2026, repco bathurst 1000, bathurst 1000 tickets, bathurst 1000 accommodation, bathurst 1000 camping, v8 supercars bathurst, mount panorama race, bathurst 12 hour, race week bathurst, bathurst 1000 hospitality, bathurst 1000 grandstand, supercars 2026, pit straight bathurst, top ten shootout"
      canonicalPath="/bathurst-1000"
      structuredData={[eventSchema, faqSchema]}
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Bathurst 1000", path: "/bathurst-1000" },
      ]}
    />
    <Navbar />
    <main className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Race Week
          </span>
          <h1 className="text-3xl md:text-5xl font-heading text-foreground mb-5">
            Bathurst 1000 2026 — Complete Guide
          </h1>
          <p className="text-muted-foreground max-w-3xl mx-auto font-body text-lg leading-relaxed">
            Tickets, accommodation, camping, transport and viewing tips for Australia's
            biggest motor race at Mount Panorama.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {tips.map((t) => (
            <Card key={t.title} className="border-border/50 bg-card">
              <CardContent className="p-5">
                <t.icon size={22} className="text-primary mb-3" />
                <h2 className="font-heading text-lg text-foreground mb-2">{t.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="rounded-xl bg-muted/50 border border-border p-8 text-center mb-12">
          <h2 className="font-heading text-2xl text-foreground mb-3">Book Race-Week Stays Early</h2>
          <p className="text-muted-foreground font-body mb-6 max-w-xl mx-auto">
            Bathurst 1000 accommodation sells out 6–12 months ahead. Compare hotels, motels and homes now.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.booking.com/searchresults.html?ss=Bathurst+NSW+Australia&aid=304142&checkin_monthday=09&checkin_month=10&checkin_year=2026&checkout_monthday=12&checkout_month=10&checkout_year=2026"
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
            >
              Find Race-Week Hotels <ArrowRight size={14} />
            </a>
            <a
              href="https://www.getyourguide.com/bathurst-l97232/?partner_id=0IQTGX8&utm_medium=online_publisher"
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-primary text-primary font-medium text-sm hover:bg-primary/5 transition-colors"
            >
              Race-Week Tours <ArrowRight size={14} />
            </a>
            <Link
              to="/mount-panorama"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-muted-foreground font-medium text-sm hover:text-foreground transition-colors"
            >
              Mount Panorama Guide <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      <SEOContent
        intro="Planning to attend the Repco Bathurst 1000? This in-depth guide covers tickets, schedule, official campgrounds, best viewing spots, race-week accommodation and practical travel tips for Australia's greatest motorsport event."
        sections={seoSections}
        keywordsCloud={keywords}
      />

      <FAQSection
        faqs={faqs}
        structuredData={faqSchema}
        title="Bathurst 1000 FAQs"
        subtitle="Everything race fans need to know about visiting Bathurst in October."
      />
    </main>
    <Footer />
  </div>
);

export default Bathurst1000Page;
