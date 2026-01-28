import { Star, Quote } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { testimonialsConfig } from "@/config/theme";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Testimonials Carousel - Customer Reviews
 * 
 * SHOPIFY LIQUID CONVERSION:
 * - testimonialsConfig.title → {{ section.settings.title }}
 * - testimonialsConfig.testimonials → {% for block in section.blocks where type == 'testimonial' %}
 */

const TestimonialsCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          {/* Shopify Liquid: {{ section.settings.title }} */}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {testimonialsConfig.title}
          </h2>
          {/* Shopify Liquid: {{ section.settings.subtitle }} */}
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {testimonialsConfig.subtitle}
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {/* Shopify Liquid: {% for block in section.blocks where type == 'testimonial' %} */}
              {testimonialsConfig.testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 pl-4"
                >
                  <div className="bg-background rounded-2xl p-6 h-full border border-border shadow-soft">
                    {/* Quote icon */}
                    <Quote className="w-10 h-10 text-primary/20 mb-4" />
                    
                    {/* Rating */}
                    {/* Shopify Liquid: {% for i in (1..block.settings.rating) %} */}
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>
                    {/* Shopify Liquid: {% endfor %} */}
                    
                    {/* Content */}
                    {/* Shopify Liquid: {{ block.settings.content }} */}
                    <p className="text-foreground mb-6 leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    
                    {/* Author */}
                    <div className="flex items-center gap-3">
                      {/* Shopify Liquid: {{ block.settings.avatar | image_url: width: 48 }} */}
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary font-bold text-lg">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        {/* Shopify Liquid: {{ block.settings.name }} */}
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        {/* Shopify Liquid: {{ block.settings.role }} */}
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* Shopify Liquid: {% endfor %} */}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              className="rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            {/* Dots */}
            <div className="flex gap-2">
              {testimonialsConfig.testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === selectedIndex ? "bg-primary" : "bg-border"
                  }`}
                  onClick={() => emblaApi?.scrollTo(index)}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              className="rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
