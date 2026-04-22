import { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
  structuredData: Record<string, unknown>;
  title?: string;
  subtitle?: string;
}

const FAQSection = ({
  faqs,
  structuredData,
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about visiting and staying in Bathurst NSW.",
}: FAQSectionProps) => {
  useEffect(() => {
    const existingScript = document.querySelector('script[data-seo="faq-schema"]');
    if (existingScript) existingScript.remove();

    const script = document.createElement("script");
    script.setAttribute("type", "application/ld+json");
    script.setAttribute("data-seo", "faq-schema");
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      const s = document.querySelector('script[data-seo="faq-schema"]');
      if (s) s.remove();
    };
  }, [structuredData]);

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            FAQ
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading text-foreground mb-3">
            {title}
          </h2>
          <p className="text-muted-foreground font-body text-base sm:text-lg max-w-xl mx-auto">
            {subtitle}
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="border border-border/50 rounded-lg px-4 sm:px-5 bg-card data-[state=open]:shadow-sm transition-shadow"
            >
              <AccordionTrigger className="text-left font-heading text-sm sm:text-base md:text-lg text-foreground hover:no-underline py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-body text-sm sm:text-base leading-relaxed pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
