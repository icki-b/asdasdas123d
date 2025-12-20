import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const Header = () => {
  const scrollToProduct = () => {
    document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="text-xl font-bold text-foreground">
            <span className="text-primary">LED</span>Trunk
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#product" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Produkt
            </a>
            <a href="#features" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Zalety
            </a>
            <a href="#faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              FAQ
            </a>
          </nav>

          {/* CTA */}
          <Button variant="neon" size="sm" onClick={scrollToProduct}>
            <ShoppingCart className="w-4 h-4" />
            <span className="hidden sm:inline">Kup teraz</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
