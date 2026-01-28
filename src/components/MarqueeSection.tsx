import { marqueeItems } from "@/config/theme";

/**
 * Marquee Section - Auto-scrolling Benefits Bar
 * 
 * SHOPIFY LIQUID CONVERSION:
 * - marqueeItems → {% for block in section.blocks where type == 'marquee_item' %}
 */

const MarqueeSection = () => {
  // Duplicate items for seamless loop
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <section className="py-4 bg-primary overflow-hidden">
      <div className="relative">
        {/* Shopify Liquid: {% for block in section.blocks where type == 'marquee_item' %} */}
        <div className="flex animate-marquee whitespace-nowrap">
          {items.map((item, index) => (
            <span 
              key={index}
              className="mx-8 text-primary-foreground font-semibold text-sm md:text-base"
            >
              {/* Shopify Liquid: {{ block.settings.text }} */}
              {item}
            </span>
          ))}
        </div>
        {/* Shopify Liquid: {% endfor %} */}
      </div>
    </section>
  );
};

export default MarqueeSection;
