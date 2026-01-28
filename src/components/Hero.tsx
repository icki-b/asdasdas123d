import { Button } from "@/components/ui/button";
import { ShoppingCart, Info, Zap } from "lucide-react";
import heroImage from "@/assets/hero-trunk-led.jpg";
import { 
  productConfig, 
  defaultVariant, 
  featurePills,
  ctaButtons 
} from "@/config/product";

/**
 * Hero Section - Product Landing Template
 * 
 * SHOPIFY LIQUID CONVERSION:
 * - productConfig.title → {{ product.title }}
 * - productConfig.description → {{ product.description }}
 * - defaultVariant.price → {{ product.selected_or_first_available_variant.price | money }}
 * - defaultVariant.compareAtPrice → {{ product.selected_or_first_available_variant.compare_at_price | money }}
 * - defaultVariant.lowestPrice30Days → {{ product.metafields.custom.lowest_price_30d | money }}
 * - heroImage → {{ product.featured_image | image_url }}
 */

const Hero = () => {
  const scrollToProduct = () => {
    document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Calculate savings
  const savings = defaultVariant.compareAtPrice - defaultVariant.price;
  const discountPercent = Math.round((savings / defaultVariant.compareAtPrice) * 100);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-28 sm:pt-24">
      {/* Background Image with Overlay */}
      {/* Shopify Liquid: {{ product.featured_image | image_url | image_tag }} */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt={productConfig.heroImageAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-20">
        <div className="max-w-2xl animate-fade-in">
          {/* Badge */}
          {/* Shopify Liquid: {% if product.metafields.custom.badge %} */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <Zap className="w-4 h-4 text-primary" />
            {/* Shopify Liquid: {{ product.metafields.custom.badge }} */}
            <span className="text-sm font-medium text-primary">{productConfig.badge}</span>
          </div>
          {/* Shopify Liquid: {% endif %} */}

          {/* Main Heading */}
          {/* Shopify Liquid: {{ product.title | split: ' ' }} */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
            <span className="text-foreground">Oświetlenie</span>
            <br />
            <span className="text-primary text-glow">{productConfig.shortTitle}</span>
          </h1>

          {/* Description */}
          {/* Shopify Liquid: {{ product.description | truncate: 150 }} */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
            {productConfig.description}
          </p>

          {/* Features Pills */}
          {/* Shopify Liquid: {% for block in section.blocks where type == 'feature_pill' %} */}
          <div className="flex flex-wrap gap-3 mb-8">
            {featurePills.map((pill, index) => (
              <div key={index} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-card border border-border">
                <pill.icon className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground">{pill.label}</span>
              </div>
            ))}
          </div>
          {/* Shopify Liquid: {% endfor %} */}

          {/* Price & CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div>
              <div className="flex items-baseline gap-2">
                {/* Shopify Liquid: {{ product.selected_or_first_available_variant.price | money }} */}
                <span className="text-4xl md:text-5xl font-extrabold text-foreground">
                  {defaultVariant.price.toFixed(2)} zł
                </span>
                {/* Shopify Liquid: {{ product.selected_or_first_available_variant.compare_at_price | money }} */}
                <span className="text-lg text-muted-foreground line-through">
                  {defaultVariant.compareAtPrice.toFixed(2)} zł
                </span>
              </div>
              
              {/* Omnibus Directive - Lowest price from last 30 days */}
              {/* Shopify Liquid: {% if product.metafields.custom.lowest_price_30d %} */}
              <div className="flex items-center gap-1.5 mt-1 mb-1">
                <Info className="w-3 h-3 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">
                  Najniższa cena z 30 dni:{" "}
                  {/* Shopify Liquid: {{ product.metafields.custom.lowest_price_30d | money }} */}
                  <span className="font-medium">{defaultVariant.lowestPrice30Days.toFixed(2)} zł</span>
                </span>
              </div>
              {/* Shopify Liquid: {% endif %} */}
              
              <p className="text-sm text-primary font-medium">
                Oszczędzasz {savings.toFixed(2)} zł (-{discountPercent}%)
              </p>
            </div>
            
            <Button 
              variant="hero" 
              size="xl"
              onClick={scrollToProduct}
              className="group"
            >
              <ShoppingCart className="w-5 h-5 group-hover:animate-bounce" />
              {/* Shopify Liquid: {{ section.settings.cta_text | default: 'Kup Teraz' }} */}
              {ctaButtons.hero}
            </Button>
          </div>

          {/* Trust Badges / Stats */}
          {/* Shopify Liquid: {% for block in section.blocks where type == 'stat' %} */}
          <div className="flex items-center gap-6 mt-8 pt-8 border-t border-border/50">
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">{productConfig.stats.soldCount}</p>
              <p className="text-xs text-muted-foreground">{productConfig.stats.soldLabel}</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">{productConfig.stats.rating}</p>
              <p className="text-xs text-muted-foreground">{productConfig.stats.ratingLabel}</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">{productConfig.stats.shipping}</p>
              <p className="text-xs text-muted-foreground">{productConfig.stats.shippingLabel}</p>
            </div>
          </div>
          {/* Shopify Liquid: {% endfor %} */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
