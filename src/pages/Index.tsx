import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyVisit from "@/components/WhyVisit";
import Attractions from "@/components/Attractions";
import Activities from "@/components/Activities";
import BookingWidget from "@/components/BookingWidget";
import Blog from "@/components/Blog";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/FAQSection";
import SEOContent from "@/components/SEOContent";
import AffiliateGrid from "@/components/AffiliateGrid";

const homeSeoSections = [
  {
    heading: "Discover the Best Accommodation in Bathurst NSW",
    body: [
      "Bathurst, located 200 km west of Sydney in the heart of the New South Wales Central Tablelands, is Australia's oldest inland city and one of the most rewarding regional destinations in the country. Visitors arrive year-round for the Bathurst 1000 motorsport festival, gold-rush heritage trails, cool-climate wineries, world-class museums, scenic bushwalks and the relaxed café culture along George Street.",
      "Whether you are searching for a motel near Mount Panorama, a family caravan park, a luxury hotel suite, a romantic bed & breakfast or a self-contained Airbnb rental in the Bathurst CBD, this guide brings together the most useful information about places to stay in Bathurst NSW. We cover prices, neighbourhoods, amenities, accessibility, pet policies and seasonal availability so that you can book with complete confidence.",
    ],
  },
  {
    heading: "Where to Stay: Mount Panorama, CBD & Surrounding Suburbs",
    body: [
      "Bathurst accommodation is concentrated in three main areas. Properties near Mount Panorama Circuit (Conrod Straight, Panorama Avenue and Wahluu) put you within walking distance of the legendary 6.213 km racetrack and the National Motor Racing Museum. Stays in the CBD around George Street, William Street and Russell Street are ideal for foodies, heritage walkers and travellers who want easy access to restaurants, the Bathurst Regional Art Gallery and Machattie Park.",
      "Outer suburbs and rural retreats — including Kelso, West Bathurst, Eglinton, Perthville and Sofala — offer larger family homes, farm stays and quiet country B&Bs. They are popular with groups attending the Bathurst 1000, weekend wine-trail visitors and travellers who want a peaceful base for exploring Hill End, Abercrombie Caves, the Macquarie River and the wider Central West NSW region.",
    ],
  },
  {
    heading: "Best Time to Visit Bathurst NSW",
    body: [
      "The shoulder seasons of autumn (March–May) and spring (September–November) deliver the most enjoyable weather for sightseeing, with mild days, cool nights and stunning natural colour. Spring brings wildflowers and the famous Bathurst Spring Spectacular at Machattie Park, while autumn paints the heritage streetscape in golden leaves — perfect for photography.",
      "October is dominated by the Bathurst 1000 Supercars race, when accommodation books out 6–12 months in advance and rates rise sharply. November to February delivers warm days for wine touring, kayaking on the Macquarie River and outdoor dining. Winter (June–August) is cooler with occasional frost and is the ideal time for cosy retreats, fireside dining and quieter heritage tours.",
    ],
  },
  {
    heading: "Things to Do Beyond Mount Panorama",
    body: [
      "Drive the Mount Panorama Circuit for free as a public road, then dive deeper into the city's story at the Australian Fossil & Mineral Museum, Bathurst Goldfields, Abercrombie House and the Bathurst Regional Art Gallery. Outdoor lovers can explore Evans Crown Nature Reserve, Mount Canobolas, Ben Chifley Dam, Sofala ghost town and the Wiradjuri walking tracks along the Macquarie River.",
      "The surrounding Central West wine region — including Orange, Mudgee, Millthorpe and Rylstone — is home to award-winning cool-climate Chardonnay, Shiraz and sparkling. Combine cellar-door visits with farm-gate produce, paddock-to-plate restaurants and weekend farmers' markets for an unforgettable food and wine break in regional NSW.",
    ],
  },
  {
    heading: "How to Get to Bathurst NSW",
    body: [
      "Bathurst is one of the easiest regional NSW destinations to reach from Sydney. The most popular option is to drive west along the M4 Motorway and Great Western Highway (A32) — a scenic 200 km / 3-hour drive that climbs through the Blue Mountains via Katoomba, Mount Victoria and Lithgow before descending into the Central Tablelands. The road is sealed all the way and there are plenty of fuel stops, lookouts and food breaks along the route.",
      "NSW TrainLink operates the daily Bathurst Bullet rail service from Sydney Central Station, taking around 3.5 hours via Lithgow. Bathurst Airport (BHS) offers regional flights connecting to Sydney with FlyPelican. Long-distance coaches operate via Greyhound and Australia Wide Coaches. Once in Bathurst, you'll want a rental car or rideshare to reach Mount Panorama, the wineries and surrounding attractions.",
    ],
  },
  {
    heading: "Average Bathurst Accommodation Prices in 2026",
    body: [
      "Off-peak accommodation in Bathurst is excellent value compared to coastal NSW. Budget motels start around $90–$130 per night, mid-range hotels and B&Bs sit at $150–$250, and premium properties such as Rydges Mount Panorama and luxury homes range from $250–$500. Caravan park sites cost $30–$60 (powered) and ensuite cabins from $120. Most rates include free parking and Wi-Fi.",
      "During the Bathurst 1000 race week in October, expect prices to rise 3–5x with minimum 3–5 night stays. Other peak periods include the Bathurst 12 Hour (February), Easter long weekend, NSW school holidays, and the Spring Spectacular flower show. Booking 3–6 months ahead for these events secures the best choice and the best rates — last-minute Bathurst accommodation during peak times is rare and expensive.",
    ],
  },
  {
    heading: "Top Day Trips from Bathurst",
    body: [
      "Within 90 minutes of central Bathurst you can reach some of the most scenic destinations in regional NSW. Highlights include the Orange wine region (40 min — 60+ cellar doors and the Mount Canobolas wine trail), Mudgee (90 min — heritage town and 35+ wineries), Jenolan Caves (90 min — Australia's most spectacular limestone caves), the Lithgow Zig Zag Railway (60 min), Sofala ghost town (45 min — gold-rush village) and Hill End Historic Site (75 min — preserved 1870s mining town).",
      "Adventure-seekers can drive to the Capertee Valley (the world's second-largest canyon after the Grand Canyon), Wollemi National Park, Abercrombie Caves (50 min — limestone caves with the largest natural arch in the southern hemisphere) and the Burrendong Dam reservoir. Pack a picnic, fill up on fuel, and you'll have one of the most rewarding scenic drive itineraries available within easy reach of Sydney.",
    ],
  },
  {
    heading: "Bathurst Weather, Seasons & What to Pack",
    body: [
      "Bathurst sits at 670 m elevation, giving it a true four-season climate. Summer (Dec–Feb) is warm and dry — average maximums 28°C, minimums 13°C — perfect for outdoor dining, kayaking and wine tours. Autumn (Mar–May) brings golden foliage across the heritage streetscape with maximums of 18–24°C. Winter (Jun–Aug) is cold with average minimums of 0–3°C, occasional frost and the rare snow flurry — pack layers, a beanie and a warm jacket. Spring (Sep–Nov) delivers wildflowers, the Bathurst Spring Spectacular and warming weather.",
      "Year-round packing tips: bring layers (the temperature can swing 15–20°C between morning and afternoon), comfortable walking shoes for the heritage trail, sun protection (the Australian UV is intense even on cool days), an empty tote for farmers market and cellar-door purchases, a refillable water bottle, and a smart-casual outfit for vineyard restaurants. Race-week visitors should also bring ear protection, a folding chair and a poncho for typical spring rain.",
    ],
  },
];

const homeKeywords = [
  "Bathurst accommodation",
  "accommodation Bathurst NSW",
  "places to stay in Bathurst",
  "motels Bathurst",
  "hotels Bathurst NSW",
  "Mount Panorama accommodation",
  "Bathurst 1000 accommodation",
  "caravan parks Bathurst",
  "Airbnb Bathurst",
  "B&B Bathurst NSW",
  "pet friendly accommodation Bathurst",
  "family accommodation Bathurst",
  "cheap motels Bathurst",
  "luxury hotels Bathurst",
  "Central West NSW stays",
  "weekend getaway Bathurst",
  "Bathurst CBD hotels",
  "Bathurst race week stays",
  "things to do in Bathurst",
  "Bathurst NSW tourism",
  "visit Bathurst",
  "Sydney to Bathurst",
  "Bathurst Bullet train",
  "Bathurst weather",
  "Bathurst day trips",
  "Orange wine region",
  "Mudgee wineries",
  "Jenolan Caves day trip",
  "Bathurst restaurants",
  "Bathurst farmers market",
  "Two Heads Brewing",
  "Mount Panorama Circuit",
  "National Motor Racing Museum",
  "Bathurst Goldfields",
  "Australian Fossil Mineral Museum",
  "Abercrombie House",
  "Machattie Park",
  "Bathurst weekend",
  "Central Tablelands NSW",
  "Wiradjuri country",
  "Bathurst itinerary",
  "Bathurst spring spectacular",
  "Bathurst winter festival",
];

const homeFaqs = [
  {
    question: "What is the best area to stay in Bathurst NSW?",
    answer: "The best areas to stay in Bathurst depend on your plans. For motorsport fans, motels near Mount Panorama offer the closest access to the circuit. For exploring heritage and dining, staying in or near the CBD on George Street puts you within walking distance of restaurants, shops, and attractions. Families often prefer caravan parks on the outskirts for space and facilities.",
  },
  {
    question: "How far is Bathurst from Sydney?",
    answer: "Bathurst is approximately 200 kilometres west of Sydney, about a 3-hour drive via the Great Western Highway (M4/A32). NSW TrainLink also operates daily train services from Sydney Central Station to Bathurst, taking around 3.5 hours. Bathurst Airport (BHS) offers regional flight connections.",
  },
  {
    question: "When is the best time to visit Bathurst?",
    answer: "Autumn (March–May) offers golden foliage and mild days perfect for outdoor activities. Spring (September–November) brings wildflowers and pleasant temperatures. The Bathurst 1000 in October is the biggest event but accommodation books out early. Winter is ideal for cosy retreats, while summer offers long days for exploring wineries and nature reserves.",
  },
  {
    question: "Is Bathurst worth visiting outside of race week?",
    answer: "Absolutely! Bathurst is a year-round destination with gold-rush heritage sites, world-class museums, beautiful gardens, wineries, bushwalking trails, and a thriving food and café scene. Many visitors prefer the quieter months for better availability, lower prices, and a more relaxed experience.",
  },
  {
    question: "What types of accommodation are available in Bathurst?",
    answer: "Bathurst offers a wide range of accommodation including motels (from $90/night), full-service hotels, caravan parks and camping grounds, Airbnb and private rentals, and charming bed & breakfasts. During major events like the Bathurst 1000, booking well in advance is essential as the city's accommodation fills up quickly.",
  },
  {
    question: "What are the top things to do in Bathurst?",
    answer: "Top attractions include driving the Mount Panorama Circuit, visiting the National Motor Racing Museum, panning for gold at the Bathurst Goldfields, exploring the Australian Fossil & Mineral Museum, wine tasting at local cellar doors, bushwalking at Evans Crown Nature Reserve, and strolling through the heritage-listed Machattie Park.",
  },
];

const SITE_URL = "https://bathurstaccommodation.com";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "TouristDestination",
  "@id": `${SITE_URL}/#destination`,
  name: "Bathurst, NSW",
  description:
    "Australia's oldest inland city, home to the famous Mount Panorama racing circuit, gold rush heritage, and award-winning wineries. Find the best accommodation in Bathurst NSW.",
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/favicon.png`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bathurst",
    addressRegion: "NSW",
    postalCode: "2795",
    addressCountry: "AU",
  },
  touristType: ["Adventure", "Cultural", "Wine", "Motorsport", "Family", "Heritage"],
  geo: {
    "@type": "GeoCoordinates",
    latitude: -33.4193,
    longitude: 149.5788,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "@id": `${SITE_URL}/#business`,
  name: "Bathurst Accommodation",
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/favicon.png`,
  description: "Independent online guide for accommodation, attractions and tours in Bathurst NSW.",
  priceRange: "$$",
  areaServed: {
    "@type": "City",
    name: "Bathurst",
    containedInPlace: { "@type": "AdministrativeArea", name: "New South Wales" },
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bathurst",
    addressRegion: "NSW",
    postalCode: "2795",
    addressCountry: "AU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -33.4193,
    longitude: 149.5788,
  },
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Bathurst Accommodation NSW 2026 | Hotels, Motels & Stays Near Mount Panorama"
        description="Compare 100+ Bathurst accommodation options: motels from $90, hotels, Airbnb, caravan parks & B&Bs near Mount Panorama. Best rates, reviews & race-week tips."
        keywords="bathurst accommodation, accommodation bathurst nsw, places to stay in bathurst, bathurst motels, bathurst hotels, mount panorama accommodation, bathurst 1000 accommodation, cheap accommodation bathurst, luxury hotels bathurst, airbnb bathurst nsw, b&b bathurst, pet friendly accommodation bathurst, family accommodation bathurst, weekend getaway bathurst, central west nsw stays"
        canonicalPath="/"
        structuredData={[structuredData, localBusinessSchema, faqStructuredData]}
        breadcrumbs={[{ name: "Home", path: "/" }]}
      />
      <Navbar />
      <Hero />
      <WhyVisit />
      <Attractions />
      <Activities />
      <BookingWidget />
      <Blog />
      <AffiliateGrid />
      <SEOContent
        intro="Planning a trip to Bathurst, NSW? This page brings together the most useful local knowledge about Bathurst accommodation, attractions, tours and travel logistics so you can build the perfect itinerary in minutes."
        sections={homeSeoSections}
        keywordsCloud={homeKeywords}
      />
      <FAQSection faqs={homeFaqs} structuredData={faqStructuredData} />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
