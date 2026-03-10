import { Zap, Droplets, Battery, Bike, Flashlight, Usb } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "1000 Lumenów",
    description: "Ultra jasny reflektor LED oświetla drogę nawet w kompletnej ciemności na dystansie do 200m."
  },
  {
    icon: Droplets,
    title: "Wodoodporna IPX5",
    description: "Odporna na deszcz i rozbryzgi wody. Jedź bez obaw w każdych warunkach pogodowych."
  },
  {
    icon: Battery,
    title: "Power Bank",
    description: "Wbudowany akumulator 5000mAh służy również jako powerbank do ładowania telefonu."
  },
  {
    icon: Usb,
    title: "Ładowanie USB-C",
    description: "Szybkie ładowanie przez USB-C. Pełne naładowanie w zaledwie 2-3 godziny."
  },
  {
    icon: Bike,
    title: "Uniwersalny Montaż",
    description: "Pasuje do każdego roweru - MTB, szosowego, crossowego i miejskiego. Montaż bez narzędzi."
  },
  {
    icon: Flashlight,
    title: "6 Trybów Świecenia",
    description: "Od oszczędnego po ultra jasny. Tryb stroboskopowy zwiększa widoczność w ruchu miejskim."
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Dlaczego Warto?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Profesjonalna lampka rowerowa łącząca moc, wytrzymałość i funkcję powerbanku.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
