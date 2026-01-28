import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Check, Truck, RotateCcw, Shield, Info } from "lucide-react";
import productImage from "@/assets/led-strip-product.jpg";
import { 
  productConfig, 
  productVariants, 
  productBenefits,
  ctaButtons 
} from "@/config/product";

/**
 * Product Section - Template Component
 * 
 * SHOPIFY LIQUID CONVERSION:
 * - productConfig.title → {{ product.title }}
 * - productConfig.longDescription → {{ product.description }}
 * - productVariants → {% for variant in product.variants %}
 * - variant.price → {{ variant.price | money }}
 * - variant.compareAtPrice → {{ variant.compare_at_price | money }}
 * - variant.lowestPrice30Days → {{ product.metafields.custom.lowest_price_30d | money }}
 * - productImage → {{ product.featured_image | image_url }}
 */

const ProductSection = () => {
  const [selectedVariant, setSelectedVariant] = useState(productVariants[0]);
  const [quantity, setQuantity] = useState(1);

  // Calculate discount percentage
  const discountPercent = Math.round(
    ((selectedVariant.compareAtPrice - selectedVariant.price) / selectedVariant.compareAtPrice) * 100
  );

  return (
    <section id="product" className="py-20 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Product Image */}
          {/* Shopify Liquid: {{ product.featured_image | image_url | image_tag }} */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden bg-card border border-border">
              <img 
                src={productImage}
                alt={productConfig.productImageAlt}
                className="w-full aspect-square object-cover"
              />
              {/* Discount Badge */}
              {/* Shopify Liquid: {% if product.compare_at_price > product.price %} */}
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-destructive text-destructive-foreground text-sm font-bold">
                -{discountPercent}%
              </div>
              {/* Shopify Liquid: {% endif %} */}
            </div>
            
            {/* Floating Features */}
            <div className="absolute -bottom-4 left-4 right-4 flex justify-center gap-4">
              <div className="px-4 py-2 rounded-full bg-card border border-border shadow-lg flex items-center gap-2">
                <Truck className="w-4 h-4 text-primary" />
                <span className="text-xs font-medium text-foreground">{productConfig.trustBadges.freeShipping}</span>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div>
            {/* Badge */}
            {/* Shopify Liquid: {% if product.metafields.custom.product_badge %} */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 mb-4">
              <span className="text-xs font-medium text-primary">Bestseller</span>
            </div>
            {/* Shopify Liquid: {% endif %} */}

            {/* Product Title */}
            {/* Shopify Liquid: {{ product.title }} */}
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {productConfig.title}
            </h2>

            {/* Product Description */}
            {/* Shopify Liquid: {{ product.description }} */}
            <p className="text-muted-foreground mb-6">
              {productConfig.longDescription}
            </p>

            {/* Variants */}
            {/* Shopify Liquid: {% for variant in product.variants %} */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-foreground mb-3">Wybierz wariant:</h3>
              <div className="grid grid-cols-2 gap-3">
                {productVariants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant)}
                    className={`p-4 rounded-xl border-2 transition-all text-left ${
                      selectedVariant.id === variant.id
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    {/* Shopify Liquid: {{ variant.title }} */}
                    <p className="font-semibold text-foreground">{variant.name}</p>
                    {/* Shopify Liquid: {{ variant.option1 }} • {{ variant.option2 }} */}
                    <p className="text-xs text-muted-foreground">{variant.option1} • {variant.option2}</p>
                    {/* Shopify Liquid: {{ variant.price | money }} */}
                    <p className="text-sm font-bold text-primary mt-1">{variant.price.toFixed(2)} zł</p>
                  </button>
                ))}
              </div>
            </div>
            {/* Shopify Liquid: {% endfor %} */}

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

            {/* Price Block */}
            <div className="mb-6 p-4 rounded-xl bg-card border border-border">
              <div className="flex items-baseline gap-3 mb-2">
                {/* Shopify Liquid: {{ variant.price | money }} */}
                <span className="text-3xl font-extrabold text-foreground">
                  {(selectedVariant.price * quantity).toFixed(2)} zł
                </span>
                {/* Shopify Liquid: {{ variant.compare_at_price | money }} */}
                <span className="text-lg text-muted-foreground line-through">
                  {(selectedVariant.compareAtPrice * quantity).toFixed(2)} zł
                </span>
              </div>
              
              {/* Omnibus Directive - Lowest price from last 30 days */}
              {/* Shopify Liquid: {% if product.metafields.custom.lowest_price_30d %} */}
              <div className="flex items-center gap-2 py-2 px-3 mb-2 rounded-lg bg-muted/50 border border-border/50">
                <Info className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                <p className="text-xs text-muted-foreground">
                  Najniższa cena z ostatnich 30 dni:{" "}
                  {/* Shopify Liquid: {{ product.metafields.custom.lowest_price_30d | money }} */}
                  <span className="font-medium text-foreground">
                    {(selectedVariant.lowestPrice30Days * quantity).toFixed(2)} zł
                  </span>
                </p>
              </div>
              {/* Shopify Liquid: {% endif %} */}
              
              <p className="text-sm text-primary font-medium">
                Oszczędzasz {((selectedVariant.compareAtPrice - selectedVariant.price) * quantity).toFixed(2)} zł
              </p>
            </div>

            {/* Add to Cart */}
            {/* Shopify Liquid: <button type="submit" name="add" ...> */}
            <Button variant="brand" size="xl" className="w-full mb-6">
              <ShoppingCart className="w-5 h-5" />
              {ctaButtons.product}
            </Button>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-3 rounded-lg bg-card border border-border">
                <Truck className="w-5 h-5 text-primary mx-auto mb-1" />
                <p className="text-xs text-foreground font-medium">{productConfig.trustBadges.freeShipping}</p>
              </div>
              <div className="text-center p-3 rounded-lg bg-card border border-border">
                <RotateCcw className="w-5 h-5 text-primary mx-auto mb-1" />
                <p className="text-xs text-foreground font-medium">{productConfig.trustBadges.returnPolicy}</p>
              </div>
              <div className="text-center p-3 rounded-lg bg-card border border-border">
                <Shield className="w-5 h-5 text-primary mx-auto mb-1" />
                <p className="text-xs text-foreground font-medium">{productConfig.trustBadges.warranty}</p>
              </div>
            </div>

            {/* Benefits List */}
            {/* Shopify Liquid: {% for block in section.blocks where type == 'benefit' %} */}
            <div className="mt-6 space-y-2">
              {productBenefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
            {/* Shopify Liquid: {% endfor %} */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
