import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyVisit from "@/components/WhyVisit";
import Attractions from "@/components/Attractions";
import Activities from "@/components/Activities";
import BookingWidget from "@/components/BookingWidget";
import Blog from "@/components/Blog";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyVisit />
      <Attractions />
      <Activities />
      <BookingWidget />
      <Blog />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
