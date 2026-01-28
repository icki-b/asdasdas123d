import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs, faqSection } from "@/config/product";

/**
 * FAQ Section - Template Component
 * 
 * SHOPIFY LIQUID CONVERSION:
 * - faqSection.title → {{ section.settings.title }}
 * - faqSection.description → {{ section.settings.description }}
 * - faqs → {% for block in section.blocks where type == 'faq' %}
 */

const FAQ = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container max-w-3xl">
        {/* Section Header */}
        {/* Shopify Liquid: {{ section.settings.title }}, {{ section.settings.description }} */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {faqSection.title}
          </h2>
          <p className="text-muted-foreground">
            {faqSection.description}
          </p>
        </div>

        {/* FAQ Accordion */}
        {/* Shopify Liquid: {% for block in section.blocks where type == 'faq' %} */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border rounded-xl px-6 bg-background data-[state=open]:border-primary/50 transition-colors"
            >
              {/* Shopify Liquid: {{ block.settings.question }} */}
              <AccordionTrigger className="text-foreground hover:text-primary hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              {/* Shopify Liquid: {{ block.settings.answer }} */}
              <AccordionContent className="text-muted-foreground pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        {/* Shopify Liquid: {% endfor %} */}
      </div>
    </section>
  );
};

export default FAQ;
