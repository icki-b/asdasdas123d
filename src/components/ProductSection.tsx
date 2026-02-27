import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Check, Truck, RotateCcw, Shield } from "lucide-react";
import productImage from "@/assets/led-strip-product.jpg";

const variants = [
  { id: "2m-white", name: "2M Biały", length: "2 metry", color: "Zimny biały", price: 49.99 },
  { id: "2m-warm", name: "2M Ciepły", length: "2 metry", color: "Ciepły biały", price: 49.99 },
  { id: "4m-white", name: "4M Biały", length: "4 metry", color: "Zimny biały", price: 69.99 },
  { id: "4m-warm", name: "4M Ciepły", length: "4 metry", color: "Ciepły biały", price: 69.99 },
];

const ProductSection = () => {
  const [selectedVariant, setSelectedVariant] = useState(variants[0]);
  const [quantity, setQuantity] = useState(1);

  return (
    <section id="product" className="py-20 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Product Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden bg-card border border-border">
              <img 
                src={productImage}
                alt="LED Strip do bagażnika"
                className="w-full aspect-square object-cover"
              />
              {/* Discount Badge */}
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-destructive text-destructive-foreground text-sm font-bold">
                -44%
              </div>
            </div>
            
            {/* Floating Features */}
            <div className="absolute -bottom-4 left-4 right-4 flex justify-center gap-4">
              <div className="px-4 py-2 rounded-full bg-card border border-border shadow-lg flex items-center gap-2">
                <Truck className="w-4 h-4 text-primary" />
                <span className="text-xs font-medium text-foreground">Darmowa wysyłka</span>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 mb-4">
              <span className="text-xs font-medium text-primary">Bestseller</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Oświetlenie LED do Bagażnika
            </h2>

            <p className="text-muted-foreground mb-6">
              Automatyczne oświetlenie z czujnikiem ruchu. Zapala się gdy otwierasz bagażnik 
              i gaśnie po zamknięciu. Wodoodporne, elastyczne i łatwe w montażu.
            </p>

            {/* Variants */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-foreground mb-3">Wybierz wariant:</h3>
              <div className="grid grid-cols-2 gap-3">
                {variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant)}
                    className={`p-4 rounded-xl border-2 transition-all text-left ${
                      selectedVariant.id === variant.id
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <p className="font-semibold text-foreground">{variant.name}</p>
                    <p className="text-xs text-muted-foreground">{variant.length} • {variant.color}</p>
                    <p className="text-sm font-bold text-primary mt-1">{variant.price.toFixed(2)} zł</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-foreground mb-3">Ilość:</h3>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-foreground hover:bg-card transition-colors"
                >
                  -
                </button>
                <span className="w-12 text-center font-semibold text-foreground">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-foreground hover:bg-card transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Price */}
            <div className="mb-6 p-4 rounded-xl bg-card border border-border">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-3xl font-extrabold text-foreground">
                  {(selectedVariant.price * quantity).toFixed(2)} zł
                </span>
                <span className="text-lg text-muted-foreground line-through">
                  {(selectedVariant.price * 1.8 * quantity).toFixed(2)} zł
                </span>
              </div>
              <p className="text-sm text-primary font-medium">
                Oszczędzasz {((selectedVariant.price * 0.8) * quantity).toFixed(2)} zł
              </p>
            </div>

            {/* Add to Cart */}
            <Button variant="hero" size="xl" className="w-full mb-6">
              <ShoppingCart className="w-5 h-5" />
              Dodaj do koszyka
            </Button>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-3 rounded-lg bg-card border border-border">
                <Truck className="w-5 h-5 text-primary mx-auto mb-1" />
                <p className="text-xs text-foreground font-medium">Darmowa wysyłka</p>
              </div>
              <div className="text-center p-3 rounded-lg bg-card border border-border">
                <RotateCcw className="w-5 h-5 text-primary mx-auto mb-1" />
                <p className="text-xs text-foreground font-medium">30 dni zwrotu</p>
              </div>
              <div className="text-center p-3 rounded-lg bg-card border border-border">
                <Shield className="w-5 h-5 text-primary mx-auto mb-1" />
                <p className="text-xs text-foreground font-medium">2 lata gwarancji</p>
              </div>
            </div>

            {/* Benefits List */}
            <div className="mt-6 space-y-2">
              {[
                "Automatyczne włączanie/wyłączanie",
                "Wodoodporna konstrukcja IP65",
                "Montaż bez narzędzi w 5 minut",
                "Pasuje do każdego samochodu"
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
