/**
 * ========================================
 * THEME CONFIGURATION
 * ========================================
 * 
 * This file contains theme settings for the landing page.
 * In Shopify Liquid, these values will be replaced with theme settings:
 * 
 * SHOPIFY LIQUID MAPPING:
 * ─────────────────────────────────────────────────────────────────
 * themeConfig.brandColor       → {{ settings.brand_color }}
 * themeConfig.mode             → {{ settings.color_mode }}
 * themeConfig.heroStyle        → {{ section.settings.hero_style }}
 * ─────────────────────────────────────────────────────────────────
 */

export interface ThemeConfig {
  // Brand color in HSL format (without 'hsl()' wrapper)
  brandColor: string;
  brandColorLight: string;
  brandColorDark: string;
  
  // Color mode
  mode: "light" | "dark";
  
  // Hero section style
  heroStyle: "image-left" | "image-right" | "centered";
  
  // Sections visibility
  sections: {
    asSeenOn: boolean;
    marquee: boolean;
    comparison: boolean;
    testimonials: boolean;
    features: boolean;
    faq: boolean;
  };
}

// Shopify Liquid: {{ settings.brand_color }}, {{ settings.color_mode }}
export const themeConfig: ThemeConfig = {
  // Orange-red brand color (Shrine style)
  brandColor: "15 100% 55%",
  brandColorLight: "15 100% 65%",
  brandColorDark: "15 100% 45%",
  
  // Light mode for Shrine-style look
  mode: "light",
  
  // Product image on left, text on right
  heroStyle: "image-left",
  
  // All sections enabled
  sections: {
    asSeenOn: true,
    marquee: true,
    comparison: true,
    testimonials: true,
    features: true,
    faq: true,
  },
};

// ============================================
// SOCIAL PROOF - "AS SEEN ON" SECTION
// ============================================
// Shopify Liquid: {% for block in section.blocks where type == 'logo' %}

export interface SocialProofLogo {
  name: string;
  // In production, these would be actual logo URLs
  // Shopify Liquid: {{ block.settings.logo | image_url }}
}

export const socialProof = {
  title: "Widziane w",
  logos: [
    { name: "Auto Świat" },
    { name: "Moto.pl" },
    { name: "Auto Bild" },
    { name: "Top Gear" },
    { name: "Gazeta.pl" },
  ] as SocialProofLogo[],
};

// ============================================
// MARQUEE SECTION
// ============================================
// Shopify Liquid: {% for block in section.blocks where type == 'marquee_item' %}

export const marqueeItems = [
  "✨ Darmowa wysyłka",
  "⭐ 10,000+ zadowolonych klientów",
  "🔒 30 dni na zwrot",
  "🏆 Bestseller 2024",
  "💡 Automatyczne włączanie",
  "💧 100% wodoodporne",
  "🔧 Montaż w 5 minut",
  "🔋 Bezprzewodowe",
];

// ============================================
// COMPARISON TABLE
// ============================================
// Shopify Liquid: {% for block in section.blocks where type == 'comparison_row' %}

export interface ComparisonFeature {
  name: string;
  us: boolean;
  others: boolean;
}

export const comparisonConfig = {
  title: "Dlaczego my?",
  subtitle: "Porównaj nasze rozwiązanie z konkurencją",
  usLabel: "Nasze LED",
  othersLabel: "Konkurencja",
  features: [
    { name: "Bezprzewodowa instalacja", us: true, others: false },
    { name: "Automatyczne włączanie", us: true, others: false },
    { name: "Wodoodporność IP65", us: true, others: false },
    { name: "Gwarancja 2 lata", us: true, others: false },
    { name: "Montaż bez narzędzi", us: true, others: false },
    { name: "Uniwersalne dopasowanie", us: true, others: true },
    { name: "Ładowanie USB", us: true, others: false },
    { name: "30 dni na zwrot", us: true, others: false },
  ] as ComparisonFeature[],
};

// ============================================
// TESTIMONIALS CAROUSEL
// ============================================
// Shopify Liquid: {% for block in section.blocks where type == 'testimonial' %}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  // Shopify Liquid: {{ block.settings.avatar | image_url }}
  avatar?: string;
}

export const testimonialsConfig = {
  title: "Co mówią nasi klienci",
  subtitle: "Dołącz do tysięcy zadowolonych kierowców",
  testimonials: [
    {
      name: "Marek Kowalski",
      role: "Właściciel BMW X5",
      content: "Rewelacyjny produkt! Montaż zajął mi dosłownie 5 minut, a efekt jest niesamowity. Teraz zawsze widzę co mam w bagażniku.",
      rating: 5,
    },
    {
      name: "Anna Nowak",
      role: "Kierowca Audi A4",
      content: "Szukałam czegoś takiego od dawna. Automatyczne włączanie to game changer - nie muszę o niczym pamiętać.",
      rating: 5,
    },
    {
      name: "Piotr Wiśniewski",
      role: "Właściciel VW Passat",
      content: "Jakość wykonania na najwyższym poziomie. Wodoodporność przetestowana - działa bez zarzutu nawet w deszczu.",
      rating: 5,
    },
    {
      name: "Katarzyna Zielińska",
      role: "Kierowca Mercedes GLC",
      content: "Polecam każdemu! Produkt robi dokładnie to, co obiecuje. Obsługa klienta też na medal.",
      rating: 5,
    },
    {
      name: "Tomasz Lewandowski",
      role: "Właściciel Ford Focus",
      content: "Nie spodziewałem się, że tak prosty gadżet może tak ułatwić życie. Świetny zakup!",
      rating: 5,
    },
  ] as Testimonial[],
};
