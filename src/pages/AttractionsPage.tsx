import { Link } from "react-router-dom";
import { MapPin, Camera, History, Wine, TreePine, Landmark, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/FAQSection";
import SEOContent from "@/components/SEOContent";

const attractionsSeoSections = [
  {
    heading: "Things to Do in Bathurst NSW: A Complete Visitor Guide",
    body: [
      "Bathurst is one of regional Australia's most diverse short-break destinations. In a single weekend you can drive a world-famous motor-racing circuit, pan for real gold, walk through colonial sandstone streetscapes, taste cool-climate wines and watch a sunrise hot-air balloon glide over rolling farmland. The city sits 200 km west of Sydney via the Great Western Highway, making it a comfortable 3-hour drive or a scenic train journey on the NSW TrainLink Bathurst Bullet.",
      "Whether you arrive for the Bathurst 1000 V8 Supercars race, a school-holiday family trip, a romantic winery weekend or a heritage history tour, the attractions below are the most popular and highly rated experiences in Bathurst NSW. Most are open year-round, many are free or low-cost, and several are fully accessible for visitors with limited mobility, prams or wheelchairs.",
    ],
  },
  {
    heading: "Mount Panorama Circuit & Motorsport Heritage",
    body: [
      "Mount Panorama (also known by its traditional Wiradjuri name Wahluu) is Bathurst's defining landmark. The 6.213 km circuit climbs 174 metres up the side of the mountain through legendary corners such as Hell Corner, The Cutting, Skyline, The Esses, Forrest's Elbow and The Chase. Outside race events the track is a public road open to standard traffic at a 60 km/h speed limit, so any visitor can drive the full lap for free.",
      "At the foot of the mountain, the National Motor Racing Museum showcases decades of Australian touring car, Formula 1 and motorcycle history, including original Holden vs Ford rivalry cars, trophies and memorabilia. The Mount Panorama Lookout, the McPhillamy Park picnic area and the Sir Joseph Banks Native Flora Reserve offer panoramic views and a quieter side of the mountain.",
    ],
  },
  {
    heading: "Heritage, Museums & Family Attractions",
    body: [
      "The Australian Fossil & Mineral Museum on Howick Street holds the internationally significant Somerville Collection of minerals, gemstones and fossils, including a full-size Tyrannosaurus rex skeleton replica that delights children. Just 7 km away, the Bathurst Goldfields recreates a 1850s mining camp where families can pan for real gold, ride the mine railway and meet costumed interpreters.",
      "Other heritage highlights include Abercrombie House (one of Australia's grandest 1870s mansions), Old Government Cottage, the Bathurst Court House precinct, Chifley Home (former PM Ben Chifley's residence) and the heritage-listed Machattie Park with its Crago Fountain, begonia house and Victorian-era bandstand. The Bathurst Regional Art Gallery hosts the prestigious Hill End Art Prize and free rotating exhibitions from leading Australian artists.",
    ],
  },
  {
    heading: "Wineries, Nature Reserves & Day Trips",
    body: [
      "The Bathurst region is the gateway to the Central West NSW wine country. Local cellar doors include Renzaglia Wines, Vale Creek Wines, Winburndale Wines and Stockman's Ridge, while the world-famous Orange wine region is only 40 minutes away with dozens of producers along the Mount Canobolas wine trail. Mudgee, Rylstone and Millthorpe round out a perfect long-weekend wine itinerary.",
      "Outdoor lovers can explore Evans Crown Nature Reserve (granite tors and panoramic views), Ben Chifley Dam (picnics and birdwatching), Sofala (Australia's oldest surviving gold-rush town), Hill End Historic Site, Abercrombie Caves and the Macquarie River walking trails. Day trips to Jenolan Caves, the Blue Mountains, Lithgow and Mudgee are all within 60–90 minutes of central Bathurst.",
    ],
  },
];

const attractionsKeywords = [
  "things to do in Bathurst",
  "Bathurst attractions",
  "Mount Panorama Circuit",
  "National Motor Racing Museum",
  "Bathurst Goldfields",
  "Australian Fossil and Mineral Museum",
  "Abercrombie House Bathurst",
  "Machattie Park",
  "Bathurst Regional Art Gallery",
  "wineries near Bathurst",
  "Orange wine region",
  "Evans Crown Nature Reserve",
  "Sofala NSW",
  "Hill End Historic Site",
  "Abercrombie Caves",
  "Jenolan Caves day trip",
  "family things to do Bathurst",
  "free things to do Bathurst NSW",
];

const attractionsFaqs = [
  {
    question: "Can you drive the Mount Panorama Circuit for free?",
    answer: "Yes! The Mount Panorama Circuit is a public road open to regular traffic when racing events are not being held. You can drive the full 6.213 km circuit for free at any time. The speed limit is 60 km/h and the road is one-way. It's one of the most unique driving experiences in Australia.",
  },
  {
    question: "Is the Bathurst Goldfields suitable for children?",
    answer: "Absolutely! The Bathurst Goldfields is one of the most popular family attractions in the region. Children love panning for real gold and exploring the recreated 1850s mining camp. Kids under 5 enter free, and most families spend 2-3 hours at the site.",
  },
  {
    question: "What are the best free things to do in Bathurst?",
    answer: "Free activities include driving Mount Panorama Circuit, visiting the Bathurst Regional Art Gallery, strolling through Machattie Park and gardens, walking the Heritage Trail through the CBD, and bushwalking at Evans Crown Nature Reserve and Ben Chifley Dam.",
  },
  {
    question: "Are there wineries near Bathurst NSW?",
    answer: "Yes, the Bathurst region is a gateway to excellent cool-climate wine regions. Local cellar doors include Renzaglia Wines, Huntington Estate, and Donalds Range Estate. The nearby Orange wine region (40 min drive) is renowned for its chardonnay and shiraz, with dozens of cellar doors to visit.",
  },
  {
    question: "How many days do you need to explore Bathurst?",
    answer: "A weekend (2-3 days) is ideal for seeing the main highlights including Mount Panorama, museums, and a winery visit. For a more relaxed pace covering nature reserves, heritage sites, and the surrounding wine regions, 4-5 days allows you to explore without rushing.",
  },
];

const attractionsFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: attractionsFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const attractions = [
  {
    title: "Mount Panorama Circuit",
    description:
      "The world-famous 6.213km motor racing circuit and home of the Bathurst 1000. Open to the public as a regular road, you can drive the full circuit and experience the legendary corners — The Cutting, Skyline, and The Chase. Visit the National Motor Racing Museum at the base for decades of motorsport history.",
    icon: Camera,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=800&q=80",
    tags: ["Motorsport", "Iconic"],
  },
  {
    title: "Australian Fossil & Mineral Museum",
    description:
      "Home to the famous Somerville Collection, this museum features an extraordinary array of fossils, minerals, and gemstones from around the world. The star attraction is a full-size T-Rex skeleton replica. Housed in the beautifully restored 1876 Public School building.",
    icon: History,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
    tags: ["Museum", "Family-Friendly"],
  },
  {
    title: "Bathurst Goldfields",
    description:
      "Step back to the 1850s at this interactive heritage site. Pan for gold, explore a recreated mining camp, and learn about the pivotal gold rush that shaped Bathurst and Australia. A hands-on experience perfect for families and history enthusiasts.",
    icon: History,
    image: "https://images.unsplash.com/photo-1533929736562-6c5765f93891?auto=format&fit=crop&w=800&q=80",
    tags: ["Heritage", "Interactive"],
  },
  {
    title: "Machattie Park & Gardens",
    description:
      "This heritage-listed Victorian-era park sits in the heart of Bathurst. Stroll through ornamental gardens, admire the heritage bandstand, and enjoy the peaceful atmosphere beneath trees that are over a century old. The begonia house is a highlight in season.",
    icon: TreePine,
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80",
    tags: ["Gardens", "Relaxation"],
  },
  {
    title: "Abercrombie House",
    description:
      "One of Australia's grandest private heritage homes, this magnificent 1870s mansion features stunning interiors, beautiful gardens, and fascinating history. Guided tours reveal the life of a wealthy colonial family and the architectural splendour of the era.",
    icon: Landmark,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80",
    tags: ["Heritage", "Architecture"],
  },
  {
    title: "Central West Wineries",
    description:
      "The Bathurst region is a gateway to some of Australia's finest cool-climate wine regions. Visit cellar doors at properties like Renzaglia Wines, Huntington Estate, and Donalds Range Estate. The nearby Orange wine region is renowned for its chardonnay and shiraz.",
    icon: Wine,
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&q=80",
    tags: ["Wine", "Day Trip"],
  },
  {
    title: "Evans Crown Nature Reserve",
    description:
      "Just outside Bathurst, this reserve offers bushwalking trails through dramatic granite formations with panoramic views of the Central Tablelands. A great spot for nature photography and birdwatching, with trails suited to various fitness levels.",
    icon: TreePine,
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80",
    tags: ["Nature", "Bushwalking"],
  },
  {
    title: "Bathurst Regional Art Gallery",
    description:
      "Home to an impressive collection of Australian art, including the annual Hill End Art Prize. The gallery hosts rotating exhibitions, community events, and workshops. A cultural gem in the heart of the city that's free to visit.",
    icon: Camera,
    image: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&w=800&q=80",
    tags: ["Art", "Culture"],
  },
  {
    title: "Ben Chifley Dam",
    description:
      "Named after former Prime Minister Ben Chifley who hailed from Bathurst, this dam offers scenic walking trails, picnic areas, and excellent birdwatching opportunities. A peaceful bush setting perfect for a half-day outing.",
    icon: MapPin,
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
    tags: ["Nature", "Picnic"],
  },
];

const AttractionsPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: "Bathurst NSW Attractions",
    description: "Discover the top attractions in Bathurst NSW, from Mount Panorama Circuit to gold-rush heritage, stunning gardens, wineries, and outdoor adventures.",
    url: `${window.location.origin}/attractions`,
    touristType: ["Adventure tourists", "Cultural tourists", "Food tourists"],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${window.location.origin}/` },
      { "@type": "ListItem", position: 2, name: "Attractions", item: `${window.location.origin}/attractions` },
    ],
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Top 25+ Attractions in Bathurst NSW | Things to See & Do (2026 Guide)"
        description="The complete guide to attractions in Bathurst NSW — Mount Panorama Circuit, National Motor Racing Museum, Bathurst Goldfields, Abercrombie House, Machattie Park, wineries, nature reserves & free family activities. Local tips, prices & opening hours."
        keywords="things to do in Bathurst, Bathurst attractions, Mount Panorama Circuit, National Motor Racing Museum, Bathurst Goldfields, Abercrombie House, Machattie Park, wineries near Bathurst, Evans Crown, Hill End, Sofala, family activities Bathurst, free attractions Bathurst NSW"
        canonicalPath="/attractions"
        structuredData={[structuredData, attractionsFaqSchema, breadcrumbSchema]}
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Places to Visit
            </span>
            <h1 className="text-3xl md:text-5xl font-heading text-foreground mb-5">
              Top Attractions in Bathurst NSW
            </h1>
            <p className="text-muted-foreground max-w-3xl mx-auto font-body text-lg leading-relaxed">
              Australia's oldest inland city is packed with history, nature, culture, and adventure.
              From the iconic Mount Panorama to world-class wineries, here's everything worth seeing.
            </p>
          </div>

          {/* Attractions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {attractions.map((attraction) => (
              <Card
                key={attraction.title}
                className="group overflow-hidden border-border/50 bg-card hover:shadow-[var(--shadow-elevated)] transition-all duration-300"
              >
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img
                    src={attraction.image}
                    alt={attraction.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    {attraction.tags.map((tag) => (
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
                  <div className="flex items-center gap-2 mb-3">
                    <attraction.icon size={18} className="text-primary" />
                    <h2 className="font-heading text-lg text-foreground">{attraction.title}</h2>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {attraction.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Internal Links */}
          <div className="rounded-xl bg-muted/50 border border-border p-8 text-center">
            <h2 className="font-heading text-2xl text-foreground mb-3">Plan Your Bathurst Trip</h2>
            <p className="text-muted-foreground font-body mb-6 max-w-xl mx-auto">
              Find the perfect place to stay and book guided experiences for your visit.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/accommodation-types"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
              >
                Browse Accommodation <ArrowRight size={14} />
              </Link>
              <Link
                to="/tours"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-primary text-primary font-medium text-sm hover:bg-primary/5 transition-colors"
              >
                Explore Tours <ArrowRight size={14} />
              </Link>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-muted-foreground font-medium text-sm hover:text-foreground transition-colors"
              >
                Read Travel Tips <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        <SEOContent
          intro="Looking for the best things to do in Bathurst NSW? This in-depth guide covers the city's most popular attractions, hidden local gems and family-friendly experiences across motorsport, heritage, food, wine and the outdoors."
          sections={attractionsSeoSections}
          keywordsCloud={attractionsKeywords}
        />

        <FAQSection
          faqs={attractionsFaqs}
          structuredData={attractionsFaqSchema}
          title="Attractions FAQs"
          subtitle="Common questions about things to see and do in Bathurst."
        />
      </main>
      <Footer />
    </div>
  );
};

export default AttractionsPage;
