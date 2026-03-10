import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Check, Truck, RotateCcw, Shield } from "lucide-react";
import productImage from "@/assets/bike-light-product.jpg";

const variants = [
  { id: "4000-basic", name: "4000mAh Basic", battery: "4000mAh", remote: "Bez pilota", price: 79.99 },
  { id: "4000-remote", name: "4000mAh + Pilot", battery: "4000mAh", remote: "Z pilotem", price: 99.99 },
  { id: "5000-basic", name: "5000mAh Basic", battery: "5000mAh", remote: "Bez pilota", price: 99.99 },
  { id: "5000-remote", name: "5000mAh + Pilot", battery: "5000mAh", remote: "Z pilotem", price: 119.99 },
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
                alt="Lampka rowerowa LED 1000 lumenów"
                className="w-full aspect-square object-cover"
              />
              {/* Discount Badge */}
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-destructive text-destructive-foreground text-sm font-bold">
                -47%
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
              Lampka Rowerowa LED 1000lm
            </h2>

            <p className="text-muted-foreground mb-6">
              Profesjonalna lampka rowerowa z aluminium. 1000 lumenów, wodoodporna IPX5, 
              funkcja powerbanku, ładowanie USB-C. Idealna na MTB i szosę.
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
                    <p className="text-xs text-muted-foreground">{variant.battery} • {variant.remote}</p>
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
                  {(selectedVariant.price * 1.88 * quantity).toFixed(2)} zł
                </span>
              </div>
              <p className="text-sm text-primary font-medium">
                Oszczędzasz {((selectedVariant.price * 0.88) * quantity).toFixed(2)} zł
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
                <p className="text-xs text-foreground font-medium">Gwarancja jakości</p>
              </div>
            </div>

            {/* Benefits List */}
            <div className="mt-6 space-y-2">
              {[
                "Aluminiowa obudowa - lekka i wytrzymała (152g)",
                "Wodoodporna konstrukcja IPX5",
                "Funkcja powerbanku - naładuj telefon w trasie",
                "6 trybów świecenia + stroboskop",
                "Montaż na kierownicy bez narzędzi"
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
