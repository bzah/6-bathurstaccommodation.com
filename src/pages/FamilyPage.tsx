import { Link } from "react-router-dom";
import { ArrowRight, Baby, Sun, Trees, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/FAQSection";
import SEOContent from "@/components/SEOContent";

const seoSections = [
  {
    heading: "Family Holidays in Bathurst NSW: Everything You Need to Know",
    body: [
      "Bathurst is one of the most family-friendly destinations in regional NSW. Compact, walkable, safe and packed with hands-on experiences for kids of every age, the city makes a perfect 3–5 day school-holiday break from Sydney, Newcastle, Canberra and the Central Coast. Highlights include the Bathurst Goldfields gold-panning experience, the Australian Fossil & Mineral Museum (with full-size T-Rex), Mount Panorama drives, Machattie Park playground, the Adventure Playground at Bicentennial Park and the seasonal swimming pools at the Bathurst Aquatic Centre.",
      "Most major attractions are free or low-cost, and many offer family passes that reduce admission to under $10 per child. Pram-friendly footpaths line the CBD heritage precinct, and most cafés and restaurants warmly welcome children with high chairs, kids' menus and quick service. Bathurst is also home to the largest playground in the Central West (Bicentennial Park) with flying foxes, a giant slide, water play, climbing nets and shaded picnic areas.",
    ],
  },
  {
    heading: "Best Family Accommodation in Bathurst",
    body: [
      "Family travellers in Bathurst can choose from spacious motel rooms with sofa beds, full-service hotels with pools, self-contained Airbnb houses with backyards, or caravan parks with cabins, jumping pillows and camp kitchens. Top picks include BIG4 Bathurst Park, Bathurst Panorama Holiday Park, Rydges Mount Panorama, Country Comfort Bathurst and Comfort Inn Bathurst. Many properties offer interconnecting rooms, cots, high chairs and kids-stay-free policies.",
      "Self-contained Airbnb homes are ideal for multi-family trips and longer stays — kitchens, laundries and outdoor space make a real difference with young kids. Look for listings in West Bathurst, Eglinton or Kelso for quieter residential streets with parks nearby. Caravan parks add a social element with playgrounds, swimming pools and other families easy to meet — particularly busy during NSW school holidays.",
    ],
  },
  {
    heading: "Top Things to Do in Bathurst With Kids",
    body: [
      "The Bathurst Goldfields recreates a 1850s mining camp where kids can pan for real gold, ride the mine railway and meet costumed characters. The Australian Fossil & Mineral Museum on Howick Street stocks one of the world's most significant mineral collections plus a full-size Tyrannosaurus rex skeleton replica that thrills younger visitors. Drive a free lap of Mount Panorama, picnic at McPhillamy Park and combine with a visit to the National Motor Racing Museum.",
      "Outdoor family favourites include Bicentennial Park's giant adventure playground, Machattie Park with its peacocks, fountain and begonia house, Ben Chifley Dam for picnics and birdwatching, and short bushwalks in the Sir Joseph Banks Native Flora Reserve. Wet-weather backups include the Bathurst Aquatic Centre, the Bathurst Memorial Entertainment Centre and the regular school-holiday programs at the Bathurst Regional Art Gallery.",
    ],
  },
  {
    heading: "Family-Friendly Restaurants & Day Trips",
    body: [
      "Family-friendly Bathurst restaurants and cafés include Church Bar (pizza, garden), Webb & Co, Two Heads Brewing (kids playground), The Hub Café, Annie's Old Fashioned Ice Cream Parlour and the William Inglis precinct. Most CBD venues offer kids' menus from $10–$15. The Bathurst Farmers Market (4th Saturday of each month) is a great morning out with food trucks, live music and produce stalls.",
      "Easy day trips with kids include Abercrombie Caves (50 min — guided cave tours), Jenolan Caves (90 min — multiple cave options for different ages), the Lithgow Zig Zag Railway (60 min — operating heritage train), Sofala ghost town (45 min — gold-rush village), and the Hunter Valley Gardens (3 hr). Most are 1–2 hour visits making them perfect for half-day or full-day school-holiday outings from Bathurst.",
    ],
  },
];

const keywords = [
  "family holidays Bathurst",
  "things to do with kids Bathurst",
  "family accommodation Bathurst",
  "Bathurst Goldfields kids",
  "Bicentennial Park Bathurst",
  "T-Rex museum Bathurst",
  "kids attractions NSW Central West",
  "school holiday Bathurst",
  "family motels Bathurst",
  "family caravan park Bathurst",
  "BIG4 Bathurst",
  "Jenolan Caves family",
  "Abercrombie Caves kids",
  "playgrounds Bathurst",
  "kid friendly restaurants Bathurst",
  "Bathurst aquatic centre",
];

const faqs = [
  {
    question: "Is Bathurst good for a family holiday?",
    answer: "Yes — Bathurst is one of the most family-friendly destinations in regional NSW. It's compact, safe, walkable and packed with hands-on experiences including the Bathurst Goldfields, the Australian Fossil & Mineral Museum (with T-Rex), Mount Panorama, Bicentennial Park playground and easy day trips to Jenolan and Abercrombie Caves.",
  },
  {
    question: "What is the best family accommodation in Bathurst?",
    answer: "Top family options include BIG4 Bathurst Park, Bathurst Panorama Holiday Park, Rydges Mount Panorama (pool and dining), Country Comfort Bathurst, Comfort Inn Bathurst, and self-contained Airbnb houses across West Bathurst and Eglinton with backyards and full kitchens.",
  },
  {
    question: "Are there free things to do with kids in Bathurst?",
    answer: "Yes — drive Mount Panorama, picnic at Machattie Park or McPhillamy Park, play at Bicentennial Park's giant adventure playground, visit the Bathurst Regional Art Gallery, and bushwalk in the Sir Joseph Banks Native Flora Reserve. All are free of charge.",
  },
  {
    question: "How many days do you need with kids in Bathurst?",
    answer: "Three to five days is ideal. Day 1 — Mount Panorama and Motor Racing Museum. Day 2 — Bathurst Goldfields and Fossil & Mineral Museum. Day 3 — Bicentennial Park, Machattie Park and farmers market. Add days for Jenolan Caves, Abercrombie Caves or a wineries day for the adults.",
  },
  {
    question: "What's the best time to visit Bathurst with kids?",
    answer: "NSW school holidays in April, July, September–October and December–January are popular but busier. Outside school holidays (especially March–May and September–November) you'll find better availability, lower prices and milder weather perfect for outdoor activities.",
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

const items = [
  { icon: Baby, title: "Bicentennial Park", desc: "The largest playground in Central West NSW with flying foxes, water play, giant slide and shaded picnic areas." },
  { icon: Sun, title: "Bathurst Goldfields", desc: "Pan for real gold, ride the mine railway and explore a recreated 1850s mining camp. Kids under 5 free." },
  { icon: Trees, title: "Machattie Park", desc: "Peacocks, ornamental gardens, fountain, begonia house and a heritage bandstand right in the CBD." },
  { icon: Users, title: "T-Rex Museum", desc: "The Australian Fossil & Mineral Museum's full-size T-Rex skeleton is a hit with kids of every age." },
];

const FamilyPage = () => (
  <div className="min-h-screen">
    <SEOHead
      title="Family Holidays in Bathurst NSW | Kid-Friendly Stays & Things to Do 2026"
      description="Plan a Bathurst family holiday: Goldfields gold panning, T-Rex museum, Bicentennial Park, Mount Panorama drive, kid-friendly hotels & caravan parks. Free guide."
      keywords="family holidays bathurst, things to do with kids bathurst, family accommodation bathurst, bathurst goldfields kids, bicentennial park bathurst, t-rex museum bathurst, kids attractions nsw central west, school holiday bathurst, family motels bathurst, family caravan park bathurst, big4 bathurst, jenolan caves family, abercrombie caves kids, playgrounds bathurst, kid friendly restaurants bathurst"
      canonicalPath="/family"
      structuredData={[faqSchema]}
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Family", path: "/family" },
      ]}
    />
    <Navbar />
    <main className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            For Families
          </span>
          <h1 className="text-3xl md:text-5xl font-heading text-foreground mb-5">
            Family Holidays in Bathurst NSW
          </h1>
          <p className="text-muted-foreground max-w-3xl mx-auto font-body text-lg leading-relaxed">
            Hands-on attractions, giant playgrounds, family-friendly stays and easy day trips —
            the perfect school holiday escape from Sydney.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {items.map((it) => (
            <Card key={it.title} className="border-border/50 bg-card">
              <CardContent className="p-5">
                <it.icon size={22} className="text-primary mb-3" />
                <h2 className="font-heading text-lg text-foreground mb-2">{it.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="rounded-xl bg-muted/50 border border-border p-8 text-center mb-12">
          <h2 className="font-heading text-2xl text-foreground mb-3">Book a Family-Friendly Stay</h2>
          <p className="text-muted-foreground font-body mb-6 max-w-xl mx-auto">
            Caravan parks, family motels and self-contained homes — all kid-tested.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.booking.com/searchresults.html?ss=Bathurst+NSW+Australia&aid=304142&nflt=ht_id%3D204"
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
            >
              Family Hotels & Apartments <ArrowRight size={14} />
            </a>
            <a
              href="https://www.getyourguide.com/bathurst-l97232/?partner_id=0IQTGX8&utm_medium=online_publisher"
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-primary text-primary font-medium text-sm hover:bg-primary/5 transition-colors"
            >
              Family Tours & Tickets <ArrowRight size={14} />
            </a>
            <Link
              to="/attractions"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-muted-foreground font-medium text-sm hover:text-foreground transition-colors"
            >
              Top Attractions <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      <SEOContent
        intro="A complete family travel guide to Bathurst NSW — kid-friendly attractions, the best family accommodation, restaurants that welcome children and easy day trips for school holidays."
        sections={seoSections}
        keywordsCloud={keywords}
      />

      <FAQSection
        faqs={faqs}
        structuredData={faqSchema}
        title="Family Holidays FAQs"
        subtitle="Everything parents ask about visiting Bathurst with kids."
      />
    </main>
    <Footer />
  </div>
);

export default FamilyPage;
