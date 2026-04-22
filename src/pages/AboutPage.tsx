import { Link } from "react-router-dom";
import { MapPin, Users, Heart, Award, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const AboutPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Bathurst Accommodation",
    description:
      "Your trusted guide to finding the best accommodation in Bathurst, NSW. We help visitors discover hotels, motels, caravan parks, B&Bs and Airbnb options near Mount Panorama and across Australia's oldest inland city.",
    url: "https://bathurstaccommodation.com",
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
    areaServed: {
      "@type": "City",
      name: "Bathurst",
      containedInPlace: {
        "@type": "State",
        name: "New South Wales",
      },
    },
    sameAs: [],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="About Bathurst Accommodation | Independent Local Guide to Bathurst NSW Stays"
        description="BathurstAccommodation.com is an independent local guide to the best motels, hotels, Airbnb & B&Bs near Mount Panorama in Bathurst NSW, Australia."
        keywords="about Bathurst Accommodation, Bathurst travel guide, local Bathurst NSW guide, Bathurst tourism, Mount Panorama travel, Central West NSW guide, independent accommodation guide Bathurst"
        canonicalPath="/about"
        structuredData={structuredData}
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              About Us
            </span>
            <h1 className="text-3xl md:text-5xl font-heading text-foreground mb-5">
              About Bathurst Accommodation
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto font-body text-lg leading-relaxed">
              We're passionate about helping visitors discover the best of Bathurst, NSW — from finding the perfect place to stay to exploring everything this incredible region has to offer.
            </p>
          </div>

          <div className="prose-custom font-body space-y-8 mb-16">
            <div className="rounded-xl bg-card border border-border/50 p-8">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="text-primary" size={24} />
                <h2 className="font-heading text-2xl text-foreground">Our Mission</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                BathurstAccommodation.com was created to be the most comprehensive and helpful resource for anyone planning a trip to Bathurst. Whether you're coming for the Bathurst 1000, a weekend getaway, a family holiday, or a business trip, we aim to make finding the right accommodation simple and stress-free.
              </p>
            </div>

            <div className="rounded-xl bg-card border border-border/50 p-8">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="text-primary" size={24} />
                <h2 className="font-heading text-2xl text-foreground">Local Knowledge</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                We know Bathurst inside and out. Our guides are written with genuine local knowledge, covering everything from the best motels near Mount Panorama to hidden gem wineries, family-friendly attractions, and seasonal events. We update our content regularly to ensure you always have the most current information.
              </p>
            </div>

            <div className="rounded-xl bg-card border border-border/50 p-8">
              <div className="flex items-center gap-3 mb-4">
                <Users className="text-primary" size={24} />
                <h2 className="font-heading text-2xl text-foreground">Who We Help</h2>
              </div>
              <ul className="text-muted-foreground leading-relaxed space-y-2">
                <li>🏁 <strong className="text-foreground">Motorsport fans</strong> looking for race-week accommodation near Mount Panorama</li>
                <li>👨‍👩‍👧‍👦 <strong className="text-foreground">Families</strong> planning holidays with kid-friendly activities and stays</li>
                <li>🍷 <strong className="text-foreground">Couples</strong> seeking romantic getaways with wineries and fine dining</li>
                <li>🎒 <strong className="text-foreground">Solo travellers</strong> exploring Australia's oldest inland city</li>
                <li>💼 <strong className="text-foreground">Business travellers</strong> needing convenient, comfortable accommodation</li>
              </ul>
            </div>

            <div className="rounded-xl bg-card border border-border/50 p-8">
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-primary" size={24} />
                <h2 className="font-heading text-2xl text-foreground">Affiliate Disclosure</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                BathurstAccommodation.com contains affiliate links. When you book accommodation or tours through our links, we may earn a small commission at no extra cost to you. This helps us maintain and improve this free resource. We only recommend services and properties we believe offer genuine value to our visitors.
              </p>
            </div>
          </div>

          <div className="rounded-xl bg-muted/50 border border-border p-8 text-center">
            <h2 className="font-heading text-2xl text-foreground mb-3">Start Planning Your Trip</h2>
            <p className="text-muted-foreground font-body mb-6 max-w-xl mx-auto">
              Explore accommodation options, attractions, and tours to make the most of your Bathurst visit.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/accommodation-types" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity">
                Browse Accommodation <ArrowRight size={14} />
              </Link>
              <Link to="/attractions" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-primary text-primary font-medium text-sm hover:bg-primary/5 transition-colors">
                See Attractions <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
