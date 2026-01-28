import { Button } from "@/components/ui/button";
import { ShoppingCart, Zap, Shield, Droplets, Info } from "lucide-react";
import heroImage from "@/assets/hero-trunk-led.jpg";

const Hero = () => {
  const scrollToProduct = () => {
    document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-28 sm:pt-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Oświetlenie bagażnika LED"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-20">
        <div className="max-w-2xl animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Bestseller 2024</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
            <span className="text-foreground">Oświetlenie</span>
            <br />
            <span className="text-primary text-glow">Bagażnika LED</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
            Automatyczne oświetlenie bagażnika z czujnikiem ruchu. 
            Bezprzewodowe, wodoodporne i łatwe w montażu.
          </p>

          {/* Features Pills */}
          <div className="flex flex-wrap gap-3 mb-8">
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-card border border-border">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground">Auto-sensing</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-card border border-border">
              <Droplets className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground">Wodoodporne</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-card border border-border">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground">2 lata gwarancji</span>
            </div>
          </div>

          {/* Price & CTA */}
          {/* Shopify Liquid mapping:
              variant.price → {{ variant.price | money }}
              variant.compare_at_price → {{ variant.compare_at_price | money }}
              lowest_price_30d → {{ product.metafields.custom.lowest_price_30d | money }}
          */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div>
              <div className="flex items-baseline gap-2">
                {/* Shopify Liquid: {{ variant.price | money }} */}
                <span className="text-4xl md:text-5xl font-extrabold text-foreground">49,99 zł</span>
                {/* Shopify Liquid: {{ variant.compare_at_price | money }} */}
                <span className="text-lg text-muted-foreground line-through">89,99 zł</span>
              </div>
              
              {/* Omnibus Directive - Lowest price from last 30 days */}
              {/* Shopify Liquid: {% if product.metafields.custom.lowest_price_30d %} */}
              <div className="flex items-center gap-1.5 mt-1 mb-1">
                <Info className="w-3 h-3 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">
                  Najniższa cena z 30 dni:{" "}
                  {/* Shopify Liquid: {{ product.metafields.custom.lowest_price_30d | money }} */}
                  <span className="font-medium">45,99 zł</span>
                </span>
              </div>
              {/* Shopify Liquid: {% endif %} */}
              
              <p className="text-sm text-primary font-medium">Oszczędzasz 40 zł (-44%)</p>
            </div>
            
            <Button 
              variant="hero" 
              size="xl"
              onClick={scrollToProduct}
              className="group"
            >
              <ShoppingCart className="w-5 h-5 group-hover:animate-bounce" />
              Kup Teraz
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex items-center gap-6 mt-8 pt-8 border-t border-border/50">
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">10k+</p>
              <p className="text-xs text-muted-foreground">Sprzedanych</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">4.9★</p>
              <p className="text-xs text-muted-foreground">Ocena</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">24h</p>
              <p className="text-xs text-muted-foreground">Wysyłka</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
