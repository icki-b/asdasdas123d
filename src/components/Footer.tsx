import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">
              <span className="text-primary">LED</span>Trunk
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Premium oświetlenie LED do Twojego samochodu. 
              Jakość, design i funkcjonalność w jednym.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Kontakt</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span>kontakt@ledtrunk.pl</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span>+48 123 456 789</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Warszawa, Polska</span>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Informacje</h4>
            <div className="space-y-2">
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Regulamin
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Polityka prywatności
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Zwroty i reklamacje
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Wysyłka
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 LEDTrunk. Wszystkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
