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
        title="Bathurst Accommodation NSW | Hotels, Motels, Airbnb & Stays Near Mount Panorama"
        description="Find the best accommodation in Bathurst NSW — motels, hotels, Airbnb, caravan parks & B&Bs near Mount Panorama. Race-week tips & local guides."
        keywords="bathurst accommodation, accommodation bathurst, accommodation bathurst nsw, places to stay in bathurst, bathurst motels, bathurst hotels, mount panorama accommodation, bathurst 1000 accommodation, caravan parks bathurst, airbnb bathurst, b&b bathurst, pet friendly bathurst, family accommodation bathurst, central west nsw stays"
        canonicalPath="/"
        structuredData={[structuredData, localBusinessSchema, faqStructuredData]}
      />
      <Navbar />
      <Hero />
      <WhyVisit />
      <Attractions />
      <Activities />
      <BookingWidget />
      <Blog />
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
