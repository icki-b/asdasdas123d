import { Button } from "@/components/ui/button";
import { ShoppingCart, Check, Star } from "lucide-react";
import { 
  productConfig, 
  defaultVariant,
  productBenefits,
  ctaButtons 
} from "@/config/product";
import heroImage from "@/assets/hero-trunk-led.jpg";

/**
 * Hero Section - Shrine Style (Image Left, Text Right)
 * 
 * SHOPIFY LIQUID CONVERSION:
 * - productConfig.title → {{ product.title }}
 * - productConfig.description → {{ product.description }}
 * - defaultVariant.price → {{ product.selected_or_first_available_variant.price | money }}
 * - heroImage → {{ product.featured_image | image_url: width: 800 }}
 */

const Hero = () => {
  const scrollToProduct = () => {
    document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Calculate savings
  const savings = defaultVariant.compareAtPrice - defaultVariant.price;
  const discountPercent = Math.round((savings / defaultVariant.compareAtPrice) * 100);

  return (
    <section className="relative min-h-screen flex items-center pt-20 md:pt-0">
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-80px)]">
          
          {/* Left: Product Image */}
          {/* Shopify Liquid: {{ product.featured_image | image_url: width: 800 }} */}
          <div className="relative order-2 lg:order-1 flex items-center justify-center">
            <div className="relative w-full max-w-lg lg:max-w-none">
              {/* Discount badge */}
              {/* Shopify Liquid: {% if product.compare_at_price > product.price %} */}
              <div className="absolute -top-4 -right-4 z-10 bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold text-lg shadow-brand">
                {productConfig.discountBadge}
              </div>
              {/* Shopify Liquid: {% endif %} */}
              
              {/* Product image with gradient background */}
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 p-8">
                <img 
                  src={heroImage} 
                  alt={productConfig.heroImageAlt}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              
              {/* Floating rating badge */}
              <div className="absolute -bottom-4 left-4 bg-background border border-border rounded-2xl px-4 py-3 shadow-soft flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-sm font-medium text-foreground">{productConfig.stats.rating}</span>
                <span className="text-xs text-muted-foreground">({productConfig.stats.soldCount})</span>
              </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="order-1 lg:order-2 py-8 lg:py-16">
            {/* Badge */}
            {/* Shopify Liquid: {% if product.metafields.custom.badge %} */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-sm font-semibold text-primary">{productConfig.badge}</span>
            </div>
            {/* Shopify Liquid: {% endif %} */}

            {/* Main Heading */}
            {/* Shopify Liquid: {{ product.title }} */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-foreground">
              {productConfig.title}
            </h1>

            {/* Description */}
            {/* Shopify Liquid: {{ product.description | truncate: 200 }} */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
              {productConfig.longDescription}
            </p>

            {/* Benefits list with checkmarks */}
            {/* Shopify Liquid: {% for block in section.blocks where type == 'benefit' %} */}
            <ul className="space-y-3 mb-8">
              {productBenefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
            {/* Shopify Liquid: {% endfor %} */}

            {/* Price & CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
              <div>
                <div className="flex items-baseline gap-3">
                  {/* Shopify Liquid: {{ product.selected_or_first_available_variant.price | money }} */}
                  <span className="text-4xl md:text-5xl font-extrabold text-foreground">
                    {defaultVariant.price.toFixed(2)} zł
                  </span>
                  {/* Shopify Liquid: {{ product.selected_or_first_available_variant.compare_at_price | money }} */}
                  <span className="text-xl text-muted-foreground line-through">
                    {defaultVariant.compareAtPrice.toFixed(2)} zł
                  </span>
                </div>
                <p className="text-sm text-primary font-semibold mt-1">
                  Oszczędzasz {savings.toFixed(2)} zł (-{discountPercent}%)
                </p>
              </div>
            </div>
            
            <Button 
              variant="default" 
              size="lg"
              onClick={scrollToProduct}
              className="text-lg px-8 py-6 h-auto shadow-brand hover:shadow-brand-lg transition-all"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              {/* Shopify Liquid: {{ section.settings.cta_text | default: 'Kup Teraz' }} */}
              {ctaButtons.hero}
            </Button>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-4 mt-8 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                {productConfig.trustBadges.freeShipping}
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                {productConfig.trustBadges.returnPolicy}
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                {productConfig.trustBadges.warranty}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
