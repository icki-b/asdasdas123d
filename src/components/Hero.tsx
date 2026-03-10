import { Button } from "@/components/ui/button";
import { ShoppingCart, Zap, Droplets, Battery } from "lucide-react";
import heroImage from "@/assets/hero-bike-light.jpg";

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
          alt="Lampka rowerowa LED 1000 lumenów"
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
            <span className="text-sm font-medium text-primary">Bestseller 2025</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
            <span className="text-foreground">Lampka Rowerowa</span>
            <br />
            <span className="text-primary text-glow">1000 Lumenów</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
            Profesjonalna lampka LED z powerbankiem. 
            Wodoodporna, ładowana przez USB-C, idealna na każdą trasę.
          </p>

          {/* Features Pills */}
          <div className="flex flex-wrap gap-3 mb-8">
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-card border border-border">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground">1000 lm</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-card border border-border">
              <Droplets className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground">IPX5</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-card border border-border">
              <Battery className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground">Power Bank</span>
            </div>
          </div>

          {/* Price & CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl md:text-5xl font-extrabold text-foreground">79,99 zł</span>
                <span className="text-lg text-muted-foreground line-through">149,99 zł</span>
              </div>
              <p className="text-sm text-primary font-medium mt-1">Oszczędzasz 70 zł (-47%)</p>
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
              <p className="text-2xl font-bold text-foreground">4.4k+</p>
              <p className="text-xs text-muted-foreground">Sprzedanych</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">4.8★</p>
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
