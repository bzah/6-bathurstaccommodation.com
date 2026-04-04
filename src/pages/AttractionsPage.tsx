import { Link } from "react-router-dom";
import { MapPin, Camera, History, Wine, TreePine, Landmark, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

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

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Top Attractions in Bathurst NSW | Things to See & Do"
        description="Discover the best attractions in Bathurst NSW. From Mount Panorama and gold-rush heritage to wineries, gardens, and nature reserves. Plan your visit today."
        canonicalPath="/attractions"
        structuredData={structuredData}
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
      </main>
      <Footer />
    </div>
  );
};

export default AttractionsPage;
