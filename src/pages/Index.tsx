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

const structuredData = {
  "@context": "https://schema.org",
  "@type": "TouristDestination",
  name: "Bathurst, NSW",
  description:
    "Australia's oldest inland city, home to the famous Mount Panorama racing circuit, gold rush heritage, and award-winning wineries. Find the best accommodation in Bathurst NSW.",
  url: "https://bathurstaccommodation.com/",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bathurst",
    addressRegion: "NSW",
    addressCountry: "AU",
  },
  touristType: ["Adventure", "Cultural", "Wine", "Motorsport"],
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
        title="Bathurst Accommodation | Best Hotels, Motels & Stays Near Mount Panorama"
        description="Find the best accommodation in Bathurst NSW. Compare motels, hotels, caravan parks, Airbnb & B&Bs near Mount Panorama. Book tours, explore attractions & plan your perfect trip."
        canonicalPath="/"
        structuredData={structuredData}
      />
      <Navbar />
      <Hero />
      <WhyVisit />
      <Attractions />
      <Activities />
      <BookingWidget />
      <Blog />
      <FAQSection faqs={homeFaqs} structuredData={faqStructuredData} />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
