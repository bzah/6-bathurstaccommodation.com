import { Link } from "react-router-dom";
import { ArrowRight, Utensils, Coffee, Beer, Pizza } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/FAQSection";
import SEOContent from "@/components/SEOContent";

const seoSections = [
  {
    heading: "Where to Eat in Bathurst NSW: The Complete Food Guide",
    body: [
      "Bathurst's food scene punches well above its weight. Within the heritage CBD you'll find award-winning fine-dining restaurants, modern Australian bistros, wood-fired pizzerias, craft breweries, specialty coffee roasters, French-inspired patisseries and a thriving farmers market scene. Standout venues include Church Bar (pizza in a converted heritage church), Webb & Co (modern Australian), Hub Café (all-day brunch), Cobblestone Lane Café, The Black Sheep Inn at Spring Hill (paddock-to-plate dining) and the Two Heads Brewing taproom.",
      "The wider Central West produces some of Australia's best regional produce — cool-climate wines, truffles, lamb, free-range beef, stone fruit, cherries, olives, honey and artisan cheeses. Many cafés and restaurants build their menus around named local producers, and the Bathurst Farmers Market on the 4th Saturday of each month brings them all together with food stalls, coffee carts and live music.",
    ],
  },
  {
    heading: "Cafés, Brunch & Specialty Coffee",
    body: [
      "Bathurst takes its coffee seriously. Top spots include The Hub Café (all-day brunch, huge portions), Cobblestone Lane Café (laneway courtyard), Church Bar (pizza and barista coffee), Annie's Old Fashioned Ice Cream Parlour and the William Inglis precinct cafés. For specialty single-origin coffee, Mockingbird Coffee Bar and the Bathurst Coffee Co. roastery serve some of the best brews in regional NSW.",
      "Brunch culture is strong on Saturday and Sunday mornings — expect a 15–20 minute wait at the most popular venues between 9 and 11 am. Most cafés open from 7 am for early risers and offer takeaway pastries, breakfast burritos and barista coffee for visitors heading out to Mount Panorama, the wineries or day trips. Vegan, gluten-free and dairy-free menus are widely available.",
    ],
  },
  {
    heading: "Pubs, Breweries & Craft Beer",
    body: [
      "Bathurst's heritage pub scene is anchored by classics including the Knickerbocker Hotel, Royal Hotel, Family Hotel, Park Hotel and the historic Royal on William. Most offer hearty pub meals from $20–$35, kids' menus, beer gardens and live sport. The Knickerbocker has a strong reputation for quality steaks and a broad craft beer line-up.",
      "Two Heads Brewing is Bathurst's most popular craft brewery with a relaxed taproom, kids' playground, regular food trucks, brewery tours and a rotating tap list of pale ales, IPAs, lagers, sours and seasonal specials. The Bathurst Wine Bar and Stockmans Wine Bar add cellar-door experiences in the city centre, perfect for a pre-dinner tasting flight before walking to a heritage restaurant.",
    ],
  },
  {
    heading: "Fine Dining, Vineyard Lunches & Special Occasions",
    body: [
      "For a special-occasion dinner, Webb & Co, The Black Sheep Inn (Spring Hill, 25 min) and Renzaglia Wines' seasonal vineyard lunches consistently top local lists. Menus change seasonally and showcase Central West produce — truffles, lamb, free-range pork, native ingredients, local cheeses and the best of cool-climate wine. Expect 2–3 course mains $40–$55, tasting menus $90–$130 with optional wine pairings.",
      "If you have a car, the nearby Orange wine region is one of Australia's best food destinations. Highly recommended vineyard restaurants include Charred at Patina, Lolli Redini, Sweet Sour Salt Umami, Union Bank Wine Bar and Racine. Most are 40–60 minutes from Bathurst and bookings are essential, especially on Friday and Saturday nights and during F.O.O.D. Week and the Orange Wine Festival.",
    ],
  },
];

const keywords = [
  "Bathurst restaurants",
  "where to eat Bathurst",
  "best cafes Bathurst",
  "Church Bar Bathurst",
  "Webb and Co Bathurst",
  "Two Heads Brewing",
  "fine dining Bathurst",
  "Bathurst farmers market",
  "specialty coffee Bathurst",
  "Bathurst pubs",
  "kid friendly restaurants Bathurst",
  "vineyard restaurants Orange",
  "Black Sheep Inn Spring Hill",
  "Bathurst breakfast",
  "Bathurst brunch",
  "Bathurst craft beer",
  "Bathurst wine bar",
  "Central West NSW dining",
];

const faqs = [
  {
    question: "What are the best restaurants in Bathurst?",
    answer: "Top picks include Church Bar (wood-fired pizza in a heritage church), Webb & Co (modern Australian fine dining), The Black Sheep Inn at Spring Hill (paddock-to-plate), Two Heads Brewing (taproom and food trucks) and the seasonal vineyard lunches at Renzaglia Wines and other Central West cellar doors.",
  },
  {
    question: "Where's the best brunch in Bathurst?",
    answer: "The Hub Café, Cobblestone Lane Café, Church Bar and the William Inglis precinct cafés all serve outstanding all-day brunch. Expect a 15–20 minute wait between 9 and 11 am on weekends. Most open from 7 am for early starts.",
  },
  {
    question: "Is there craft beer in Bathurst?",
    answer: "Yes — Two Heads Brewing is Bathurst's flagship craft brewery with a taproom, kids' playground, food trucks, brewery tours and a rotating tap list. The Knickerbocker Hotel and Royal Hotel also stock excellent craft beer line-ups alongside their classic pub menus.",
  },
  {
    question: "When is the Bathurst Farmers Market?",
    answer: "The Bathurst Farmers Market is held on the 4th Saturday of each month from 8:30 am to 12:30 pm at the Bathurst Showground. Expect 40+ stalls of local produce, food trucks, specialty coffee, baked goods, cheese, honey, wine and live music.",
  },
  {
    question: "Are there vegan and gluten-free options in Bathurst?",
    answer: "Yes — most CBD cafés and restaurants offer plant-based, vegan and gluten-free options. Standouts include The Hub Café, Cobblestone Lane Café and Church Bar. Many vineyard restaurants in Orange and Mudgee also cater for special diets with advance notice.",
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

const venues = [
  { icon: Pizza, name: "Church Bar", style: "Wood-fired pizza in a heritage church", price: "$$" },
  { icon: Utensils, name: "Webb & Co", style: "Modern Australian fine dining", price: "$$$" },
  { icon: Beer, name: "Two Heads Brewing", style: "Craft brewery & taproom", price: "$$" },
  { icon: Coffee, name: "The Hub Café", style: "All-day brunch & barista coffee", price: "$$" },
  { icon: Utensils, name: "The Black Sheep Inn", style: "Paddock-to-plate (Spring Hill)", price: "$$$" },
  { icon: Coffee, name: "Cobblestone Lane Café", style: "Laneway brunch & coffee", price: "$$" },
];

const RestaurantsPage = () => (
  <div className="min-h-screen">
    <SEOHead
      title="Bathurst Restaurants & Cafés 2026 | Where to Eat, Brunch & Drink Guide"
      description="The best Bathurst restaurants, cafés, pubs & breweries: Church Bar, Webb & Co, Two Heads, vineyard dining, brunch spots & farmers market — full local food guide."
      keywords="bathurst restaurants, where to eat bathurst, best cafes bathurst, church bar bathurst, webb and co bathurst, two heads brewing, fine dining bathurst, bathurst farmers market, specialty coffee bathurst, bathurst pubs, kid friendly restaurants bathurst, vineyard restaurants orange, black sheep inn spring hill, bathurst brunch, bathurst craft beer, central west nsw dining"
      canonicalPath="/restaurants"
      structuredData={[faqSchema]}
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Restaurants", path: "/restaurants" },
      ]}
    />
    <Navbar />
    <main className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Eat & Drink
          </span>
          <h1 className="text-3xl md:text-5xl font-heading text-foreground mb-5">
            Bathurst Restaurants & Cafés
          </h1>
          <p className="text-muted-foreground max-w-3xl mx-auto font-body text-lg leading-relaxed">
            From wood-fired pizza in a heritage church to vineyard fine dining and Central West
            craft beer — the complete Bathurst food and drink guide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {venues.map((v) => (
            <Card key={v.name} className="border-border/50 bg-card hover:shadow-[var(--shadow-elevated)] transition-all">
              <CardContent className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <v.icon size={20} className="text-primary" />
                  <span className="text-xs font-medium text-muted-foreground">{v.price}</span>
                </div>
                <h2 className="font-heading text-lg text-foreground mb-1">{v.name}</h2>
                <p className="text-sm text-muted-foreground">{v.style}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="rounded-xl bg-muted/50 border border-border p-8 text-center mb-12">
          <h2 className="font-heading text-2xl text-foreground mb-3">Book a Food Experience</h2>
          <p className="text-muted-foreground font-body mb-6 max-w-xl mx-auto">
            Vineyard lunches, brewery tours and food trails across Bathurst and the Central West.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.getyourguide.com/bathurst-l97232/?partner_id=0IQTGX8&utm_medium=online_publisher&q=food"
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
            >
              Book Food & Wine Tours <ArrowRight size={14} />
            </a>
            <a
              href="https://www.booking.com/searchresults.html?ss=Bathurst+NSW+Australia&aid=304142"
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-primary text-primary font-medium text-sm hover:bg-primary/5 transition-colors"
            >
              Where to Stay <ArrowRight size={14} />
            </a>
            <Link
              to="/wineries"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-muted-foreground font-medium text-sm hover:text-foreground transition-colors"
            >
              Wineries Guide <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      <SEOContent
        intro="The complete Bathurst NSW food guide — fine dining, casual cafés, craft beer, vineyard restaurants, the farmers market and the best places to eat with kids or for special occasions."
        sections={seoSections}
        keywordsCloud={keywords}
      />

      <FAQSection
        faqs={faqs}
        structuredData={faqSchema}
        title="Restaurants & Cafés FAQs"
        subtitle="Common questions about eating and drinking in Bathurst."
      />
    </main>
    <Footer />
  </div>
);

export default RestaurantsPage;
