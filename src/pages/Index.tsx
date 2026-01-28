import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AsSeenOn from "@/components/AsSeenOn";
import MarqueeSection from "@/components/MarqueeSection";
import Features from "@/components/Features";
import ComparisonTable from "@/components/ComparisonTable";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import ProductSection from "@/components/ProductSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import CountdownTimer from "@/components/CountdownTimer";
import { themeConfig } from "@/config/theme";

/**
 * Index Page - Shrine Style Product Landing
 * 
 * SHOPIFY LIQUID CONVERSION:
 * - Sections are conditionally rendered based on theme settings
 * - Shopify Liquid: {% if section.settings.show_as_seen_on %}
 */

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <CountdownTimer />
      <Header />
      <Hero />
      
      {/* Shopify Liquid: {% if section.settings.show_as_seen_on %} */}
      {themeConfig.sections.asSeenOn && <AsSeenOn />}
      {/* Shopify Liquid: {% endif %} */}
      
      {/* Shopify Liquid: {% if section.settings.show_marquee %} */}
      {themeConfig.sections.marquee && <MarqueeSection />}
      {/* Shopify Liquid: {% endif %} */}
      
      {/* Shopify Liquid: {% if section.settings.show_features %} */}
      {themeConfig.sections.features && (
        <section id="features">
          <Features />
        </section>
      )}
      {/* Shopify Liquid: {% endif %} */}
      
      {/* Shopify Liquid: {% if section.settings.show_comparison %} */}
      {themeConfig.sections.comparison && <ComparisonTable />}
      {/* Shopify Liquid: {% endif %} */}
      
      {/* Shopify Liquid: {% if section.settings.show_testimonials %} */}
      {themeConfig.sections.testimonials && <TestimonialsCarousel />}
      {/* Shopify Liquid: {% endif %} */}
      
      <ProductSection />
      
      {/* Shopify Liquid: {% if section.settings.show_faq %} */}
      {themeConfig.sections.faq && (
        <section id="faq">
          <FAQ />
        </section>
      )}
      {/* Shopify Liquid: {% endif %} */}
      
      <Footer />
    </main>
  );
};

export default Index;
