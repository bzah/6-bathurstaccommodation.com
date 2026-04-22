import { Link } from "react-router-dom";
import { ArrowRight, Wine, Grape, MapPin, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/FAQSection";
import SEOContent from "@/components/SEOContent";

const seoSections = [
  {
    heading: "Bathurst & Central West NSW Wineries: The Cool-Climate Wine Capital",
    body: [
      "Bathurst sits at the eastern gateway to one of Australia's most exciting cool-climate wine regions. Within a 90-minute drive you can visit more than 80 cellar doors across Bathurst, Orange, Mudgee, Millthorpe, Rylstone and Cowra. The high elevation (600–1,100 m), volcanic soils and four distinct seasons produce elegant, food-friendly wines including award-winning Chardonnay, Pinot Noir, Shiraz, Sauvignon Blanc, Riesling and traditional-method sparkling.",
      "Local Bathurst wineries include Renzaglia Wines, Vale Creek Wines, Winburndale Wines, Stockman's Ridge and Tamburlaine Organic Wines. Most cellar doors are open Friday to Sunday with extended hours during long weekends and major events. Many offer cheese and charcuterie boards, vineyard lunches, sunset platters and live music. Tasting fees are typically $10–$25 and refundable on a bottle purchase.",
    ],
  },
  {
    heading: "The Orange Wine Region — 40 Minutes from Bathurst",
    body: [
      "The Orange wine region is consistently ranked among the top three cool-climate wine regions in Australia. More than 60 cellar doors line the Mount Canobolas wine trail, Borenore, Nashdale and the heritage village of Millthorpe. Standout producers include Philip Shaw, Ross Hill, Printhie, Swinging Bridge, Bloodwood, Patina, See Saw, Cumulus and Brangayne. The region is famous for high-altitude Chardonnay, Pinot Noir, Shiraz and aromatic whites.",
      "Combine cellar-door visits with the Orange Farmers Market (second Saturday of each month), the F.O.O.D. Week festival in April, and the Orange Wine Festival in October. Excellent vineyard restaurants include Charred at Patina, Lolli Redini, Sweet Sour Salt Umami and the Union Bank Wine Bar. Most Orange cellar doors are open Wednesday–Sunday with reservations recommended on long weekends.",
    ],
  },
  {
    heading: "Mudgee, Rylstone & the Rolling Heritage Wine Towns",
    body: [
      "Mudgee, 90 minutes north of Bathurst, is one of the oldest wine regions in NSW with vines first planted in the 1850s. The town blends heritage charm with more than 35 cellar doors including Robert Stein, Logan Wines, Lowe Wines, Huntington Estate, di Lusso Estate (Italian varietals), Pieter van Gent and Vinifera Wines. The annual Mudgee Wine + Food Festival in September fills the streets with producers, chefs and live music.",
      "Smaller villages — Rylstone, Lue and Gulgong — add boutique cellar doors, organic wineries and historic gold-rush streetscapes. The Mudgee region is renowned for full-bodied Shiraz, Cabernet Sauvignon and increasingly impressive Italian and Spanish varietals. Many wineries offer accommodation in vineyard cottages, perfect for a romantic two-night escape from Sydney via Bathurst.",
    ],
  },
  {
    heading: "How to Plan a Wine Trail from Bathurst",
    body: [
      "Self-driving the Central West wine trail gives the most flexibility, but a designated driver is essential — police randomly breath-test throughout the region. Most travellers book a guided wine tour with hotel pickup so everyone can taste freely. Tours typically visit 4–6 cellar doors, include lunch at a vineyard restaurant and last 6–8 hours. Prices range from $150 (small group day tour) to $350+ (private tour with luxury vehicle).",
      "Recommended itineraries: One day — choose either Orange or Mudgee. Two days — Bathurst wineries Friday afternoon, Orange all day Saturday with a vineyard lunch, return Sunday. Three days — add Mudgee or Rylstone with an overnight in a vineyard cottage. Spring (Sept–Nov) and autumn (March–May) deliver the best weather for cellar-door visits and outdoor lunches.",
    ],
  },
];

const keywords = [
  "Bathurst wineries",
  "Central West wine region",
  "Orange wine region",
  "Mudgee wine region",
  "wine tours Bathurst",
  "wineries near Bathurst",
  "cool climate wines NSW",
  "Renzaglia Wines",
  "Philip Shaw winery",
  "Logan Wines Mudgee",
  "Robert Stein winery",
  "Mount Canobolas wine trail",
  "Millthorpe cellar doors",
  "vineyard lunch NSW",
  "Orange Wine Festival",
  "Mudgee Wine Food Festival",
  "wine weekend Bathurst",
  "private wine tour Orange",
];

const faqs = [
  {
    question: "Are there wineries in Bathurst itself?",
    answer: "Yes. Local Bathurst wineries include Renzaglia Wines, Vale Creek Wines, Winburndale Wines, Stockman's Ridge and Tamburlaine Organic Wines. Most are open Friday to Sunday with cellar-door tastings, platters and seasonal events. Tasting fees are typically $10–$25 and refundable on a bottle purchase.",
  },
  {
    question: "How far is the Orange wine region from Bathurst?",
    answer: "The Orange wine region is approximately 60 km / 40 minutes' drive west of Bathurst on the Mitchell Highway. With 60+ cellar doors, vineyard restaurants and the Mount Canobolas wine trail, it's the most popular day trip from Bathurst for wine lovers.",
  },
  {
    question: "Can I do a Bathurst wine tour without driving?",
    answer: "Yes. Local operators run small-group and private wine tours from Bathurst with hotel pickup, visiting 4–6 cellar doors, vineyard lunch and 6–8 hours of touring. Prices range from $150 per person for shared tours to $350+ for private luxury tours.",
  },
  {
    question: "What is the best time of year for wine touring near Bathurst?",
    answer: "Spring (September–November) and autumn (March–May) offer the best weather for outdoor vineyard lunches and tastings. The Orange F.O.O.D. Week (April), Orange Wine Festival (October) and Mudgee Wine + Food Festival (September) are highlights of the regional calendar.",
  },
  {
    question: "Which Mudgee wineries should I visit?",
    answer: "Top Mudgee cellar doors include Robert Stein, Logan Wines, Lowe Wines, Huntington Estate, di Lusso Estate (Italian varietals), Pieter van Gent and Vinifera Wines. Most are open daily with vineyard restaurants and accommodation cottages on site.",
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

const wineries = [
  { name: "Renzaglia Wines", region: "Bathurst", style: "Chardonnay, Sangiovese, Cabernet", icon: Wine },
  { name: "Vale Creek Wines", region: "Bathurst", style: "Cool-climate Chardonnay & Shiraz", icon: Grape },
  { name: "Philip Shaw", region: "Orange", style: "Premium Chardonnay & Pinot Noir", icon: Sparkles },
  { name: "Ross Hill Wines", region: "Orange", style: "Carbon-neutral, family-owned", icon: Wine },
  { name: "Printhie Wines", region: "Orange", style: "Award-winning sparkling", icon: Sparkles },
  { name: "Robert Stein", region: "Mudgee", style: "Riesling, Shiraz, on-site museum", icon: Wine },
  { name: "Logan Wines", region: "Mudgee", style: "Premium cool-climate range", icon: Grape },
  { name: "Lowe Wines", region: "Mudgee", style: "Organic & biodynamic", icon: Wine },
  { name: "di Lusso Estate", region: "Mudgee", style: "Italian varietals & cellar door restaurant", icon: Sparkles },
];

const WineriesPage = () => (
  <div className="min-h-screen">
    <SEOHead
      title="Bathurst & Central West NSW Wineries 2026 | Orange, Mudgee Wine Trails"
      description="Visit 80+ cellar doors near Bathurst: Orange wine region (40 min), Mudgee (90 min) & local wineries. Plan tastings, vineyard lunches & guided wine tours."
      keywords="bathurst wineries, central west wine region, orange wine region, mudgee wine region, wine tours bathurst, wineries near bathurst, cool climate wines nsw, renzaglia wines, philip shaw winery, logan wines mudgee, robert stein winery, mount canobolas wine trail, millthorpe cellar doors, vineyard lunch nsw, wine weekend bathurst"
      canonicalPath="/wineries"
      structuredData={[faqSchema]}
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Wineries", path: "/wineries" },
      ]}
    />
    <Navbar />
    <main className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Wine Country
          </span>
          <h1 className="text-3xl md:text-5xl font-heading text-foreground mb-5">
            Wineries Near Bathurst NSW
          </h1>
          <p className="text-muted-foreground max-w-3xl mx-auto font-body text-lg leading-relaxed">
            From local Bathurst cellar doors to the world-famous Orange and Mudgee wine regions —
            plan an unforgettable cool-climate wine weekend.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {wineries.map((w) => (
            <Card key={w.name} className="border-border/50 bg-card hover:shadow-[var(--shadow-elevated)] transition-all">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <w.icon size={18} className="text-primary" />
                  <span className="text-xs font-medium text-primary uppercase tracking-wide">{w.region}</span>
                </div>
                <h2 className="font-heading text-lg text-foreground mb-1">{w.name}</h2>
                <p className="text-sm text-muted-foreground">{w.style}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="rounded-xl bg-muted/50 border border-border p-8 text-center mb-12">
          <h2 className="font-heading text-2xl text-foreground mb-3">Book a Wine Tour</h2>
          <p className="text-muted-foreground font-body mb-6 max-w-xl mx-auto">
            Skip the driving — small-group and private wine tours visit 4–6 cellar doors with lunch.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.getyourguide.com/bathurst-l97232/?partner_id=0IQTGX8&utm_medium=online_publisher&q=wine"
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
            >
              Book Wine Tours <ArrowRight size={14} />
            </a>
            <a
              href="https://www.booking.com/searchresults.html?ss=Orange+NSW+Australia&aid=304142"
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-primary text-primary font-medium text-sm hover:bg-primary/5 transition-colors"
            >
              Stays in Wine Country <ArrowRight size={14} />
            </a>
            <Link
              to="/restaurants"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-muted-foreground font-medium text-sm hover:text-foreground transition-colors"
            >
              Where to Eat <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      <SEOContent
        intro="The Bathurst region is the gateway to one of Australia's most exciting cool-climate wine areas, with 80+ cellar doors across Bathurst, Orange, Mudgee, Millthorpe and Rylstone all within 90 minutes."
        sections={seoSections}
        keywordsCloud={keywords}
      />

      <FAQSection
        faqs={faqs}
        structuredData={faqSchema}
        title="Wineries FAQs"
        subtitle="Common questions about wine touring near Bathurst NSW."
      />
    </main>
    <Footer />
  </div>
);

export default WineriesPage;
