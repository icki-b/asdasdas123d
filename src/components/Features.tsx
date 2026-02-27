import { Zap, Droplets, Wrench, Battery, Car, Lightbulb } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Automatyczne Włączanie",
    description: "Światło zapala się automatycznie po otwarciu bagażnika i gaśnie po zamknięciu."
  },
  {
    icon: Droplets,
    title: "100% Wodoodporne",
    description: "Klasa szczelności IP65 - odporne na deszcz, wilgoć i rozbryzgi wody."
  },
  {
    icon: Wrench,
    title: "Montaż w 5 Minut",
    description: "Samoprzylepna taśma 3M - nie wymaga wiercenia ani specjalnych narzędzi."
  },
  {
    icon: Battery,
    title: "Bezprzewodowe",
    description: "Wbudowana bateria - brak kabli i skomplikowanej instalacji."
  },
  {
    icon: Car,
    title: "Uniwersalne",
    description: "Pasuje do każdego samochodu - osobowego, SUV, kombi i dostawczego."
  },
  {
    icon: Lightbulb,
    title: "Wysoka Jasność",
    description: "Ultra jasne diody LED oświetlają cały bagażnik równomiernie."
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
            Nasze oświetlenie LED to połączenie praktyczności, jakości i nowoczesnego designu.
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
