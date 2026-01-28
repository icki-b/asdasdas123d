import { socialProof } from "@/config/theme";

/**
 * As Seen On Section - Social Proof with Media Logos
 * 
 * SHOPIFY LIQUID CONVERSION:
 * - socialProof.title → {{ section.settings.title }}
 * - socialProof.logos → {% for block in section.blocks where type == 'logo' %}
 */

const AsSeenOn = () => {
  return (
    <section className="py-12 bg-secondary/50 border-y border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {/* Title */}
          {/* Shopify Liquid: {{ section.settings.title }} */}
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            {socialProof.title}
          </p>
          
          {/* Logos */}
          {/* Shopify Liquid: {% for block in section.blocks where type == 'logo' %} */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {socialProof.logos.map((logo, index) => (
              <div 
                key={index}
                className="text-muted-foreground/60 hover:text-foreground transition-colors"
              >
                {/* Shopify Liquid: {{ block.settings.logo | image_url: width: 120 }} */}
                {/* Placeholder text logos - replace with actual images in production */}
                <span className="text-lg font-semibold tracking-tight">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
          {/* Shopify Liquid: {% endfor %} */}
        </div>
      </div>
    </section>
  );
};

export default AsSeenOn;
