/**
 * ========================================
 * PRODUCT TEMPLATE CONFIGURATION
 * ========================================
 * 
 * This file contains all product-specific data for the landing page.
 * In Shopify Liquid, these values will be replaced with dynamic data:
 * 
 * SHOPIFY LIQUID MAPPING:
 * ─────────────────────────────────────────────────────────────────
 * productConfig.title              → {{ product.title }}
 * productConfig.description        → {{ product.description }}
 * productConfig.badge              → {{ product.metafields.custom.badge }}
 * productConfig.heroImage          → {{ product.featured_image | image_url }}
 * productConfig.productImage       → {{ product.images[0] | image_url }}
 * 
 * variant.price                    → {{ variant.price | money }}
 * variant.compareAtPrice           → {{ variant.compare_at_price | money }}
 * variant.lowestPrice30Days        → {{ product.metafields.custom.lowest_price_30d | money }}
 * 
 * features                         → {% for block in section.blocks %}
 * faqs                             → {% for block in section.blocks where type == 'faq' %}
 * ─────────────────────────────────────────────────────────────────
 */

import { 
  Zap, Droplets, Wrench, Battery, Car, Lightbulb,
  LucideIcon 
} from "lucide-react";

// ============================================
// PRODUCT BASIC INFO
// ============================================
// Shopify Liquid: {{ product.title }}, {{ product.description }}

export const productConfig = {
  // Main product info
  title: "Oświetlenie LED do Bagażnika",
  shortTitle: "Bagażnika LED",
  description: "Automatyczne oświetlenie bagażnika z czujnikiem ruchu. Bezprzewodowe, wodoodporne i łatwe w montażu.",
  longDescription: "Automatyczne oświetlenie z czujnikiem ruchu. Zapala się gdy otwierasz bagażnik i gaśnie po zamknięciu. Wodoodporne, elastyczne i łatwe w montażu.",
  
  // Badge
  badge: "Bestseller 2024",
  discountBadge: "-44%",
  
  // Images - Shopify Liquid: {{ product.featured_image | image_url }}
  heroImage: "/src/assets/hero-trunk-led.jpg",
  productImage: "/src/assets/led-strip-product.jpg",
  heroImageAlt: "Oświetlenie bagażnika LED",
  productImageAlt: "LED Strip do bagażnika",
  
  // Stats for social proof
  stats: {
    soldCount: "10k+",
    soldLabel: "Sprzedanych",
    rating: "4.9★",
    ratingLabel: "Ocena",
    shipping: "24h",
    shippingLabel: "Wysyłka",
  },
  
  // Trust badges
  trustBadges: {
    freeShipping: "Darmowa wysyłka",
    returnPolicy: "30 dni zwrotu",
    warranty: "2 lata gwarancji",
  },
};

// ============================================
// PRODUCT VARIANTS
// ============================================
// Shopify Liquid: {% for variant in product.variants %}

export interface ProductVariant {
  id: string;
  name: string;
  option1: string;        // e.g., length, size
  option1Label: string;
  option2: string;        // e.g., color, material
  option2Label: string;
  price: number;
  compareAtPrice: number;
  lowestPrice30Days: number;
}

export const productVariants: ProductVariant[] = [
  { 
    id: "2m-white", 
    name: "2M Biały", 
    option1: "2 metry", 
    option1Label: "Długość",
    option2: "Zimny biały", 
    option2Label: "Kolor",
    price: 49.99, 
    compareAtPrice: 89.99, 
    lowestPrice30Days: 45.99 
  },
  { 
    id: "2m-warm", 
    name: "2M Ciepły", 
    option1: "2 metry", 
    option1Label: "Długość",
    option2: "Ciepły biały", 
    option2Label: "Kolor",
    price: 49.99, 
    compareAtPrice: 89.99, 
    lowestPrice30Days: 45.99 
  },
  { 
    id: "4m-white", 
    name: "4M Biały", 
    option1: "4 metry", 
    option1Label: "Długość",
    option2: "Zimny biały", 
    option2Label: "Kolor",
    price: 69.99, 
    compareAtPrice: 125.99, 
    lowestPrice30Days: 65.99 
  },
  { 
    id: "4m-warm", 
    name: "4M Ciepły", 
    option1: "4 metry", 
    option1Label: "Długość",
    option2: "Ciepły biały", 
    option2Label: "Kolor",
    price: 69.99, 
    compareAtPrice: 125.99, 
    lowestPrice30Days: 65.99 
  },
];

// Default variant for Hero display
// Shopify Liquid: {{ product.selected_or_first_available_variant }}
export const defaultVariant = productVariants[0];

// ============================================
// PRODUCT FEATURES (Hero pills)
// ============================================
// Shopify Liquid: {% for block in section.blocks where type == 'feature_pill' %}

export interface FeaturePill {
  icon: LucideIcon;
  label: string;
}

export const featurePills: FeaturePill[] = [
  { icon: Zap, label: "Auto-sensing" },
  { icon: Droplets, label: "Wodoodporne" },
  { icon: Lightbulb, label: "2 lata gwarancji" },
];

// ============================================
// PRODUCT BENEFITS (Bullet points)
// ============================================
// Shopify Liquid: {% for block in section.blocks where type == 'benefit' %}

export const productBenefits: string[] = [
  "Automatyczne włączanie/wyłączanie",
  "Wodoodporna konstrukcja IP65",
  "Montaż bez narzędzi w 5 minut",
  "Pasuje do każdego samochodu",
];

// ============================================
// DETAILED FEATURES (Features section)
// ============================================
// Shopify Liquid: {% for block in section.blocks where type == 'feature' %}

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const features: Feature[] = [
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

// Features section header
export const featuresSection = {
  title: "Dlaczego Warto?",
  description: "Nasze oświetlenie LED to połączenie praktyczności, jakości i nowoczesnego designu.",
};

// ============================================
// FAQ SECTION
// ============================================
// Shopify Liquid: {% for block in section.blocks where type == 'faq' %}

export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: "Czy pasuje do każdego samochodu?",
    answer: "Tak! Nasze oświetlenie LED jest uniwersalne i pasuje do każdego typu samochodu - osobowego, SUV, kombi, czy dostawczego. Elastyczna taśma dopasowuje się do każdego kształtu bagażnika."
  },
  {
    question: "Jak działa automatyczne włączanie?",
    answer: "Oświetlenie posiada wbudowany czujnik ruchu/wibracji. Gdy otwierasz bagażnik, światło automatycznie się zapala. Po zamknięciu gaśnie po kilku sekundach, oszczędzając baterię."
  },
  {
    question: "Czy wymaga podłączenia do instalacji elektrycznej?",
    answer: "Nie! To całkowicie bezprzewodowe rozwiązanie. Zasilane jest wbudowaną baterią, którą można ładować przez USB. Jedno ładowanie wystarcza na wiele miesięcy użytkowania."
  },
  {
    question: "Czy jest wodoodporne?",
    answer: "Tak, nasze oświetlenie posiada klasę szczelności IP65, co oznacza pełną odporność na kurz i rozbryzgi wody. Możesz je bezpiecznie używać nawet w deszczowe dni."
  },
  {
    question: "Jak zamontować oświetlenie?",
    answer: "Montaż jest banalnie prosty i zajmuje około 5 minut. Wystarczy oczyścić powierzchnię, odkleić folię ochronną z taśmy samoprzylepnej 3M i przykleić pasek LED w wybranym miejscu. Nie wymaga żadnych narzędzi ani wiercenia."
  },
  {
    question: "Jaki jest czas dostawy?",
    answer: "Zamówienia wysyłamy w ciągu 24 godzin. Standardowa dostawa to 3-5 dni roboczych. Oferujemy również darmową wysyłkę przy każdym zamówieniu!"
  },
  {
    question: "Co jeśli produkt mi nie odpowiada?",
    answer: "Oferujemy 30-dniową gwarancję satysfakcji. Jeśli z jakiegokolwiek powodu produkt Ci nie odpowiada, zwrócimy Ci 100% pieniędzy - bez zadawania pytań."
  }
];

export const faqSection = {
  title: "Często Zadawane Pytania",
  description: "Znajdź odpowiedzi na najczęściej zadawane pytania",
};

// ============================================
// COUNTDOWN TIMER CONFIG
// ============================================
// Shopify Liquid: {{ section.settings.countdown_hours }}

export const countdownConfig = {
  text: "🔥 FLASH SALE! Promocja kończy się za:",
  hours: 2,
  minutes: 30,
  seconds: 0,
};

// ============================================
// CTA BUTTONS TEXT
// ============================================

export const ctaButtons = {
  hero: "Kup Teraz",
  product: "Dodaj do koszyka",
};
