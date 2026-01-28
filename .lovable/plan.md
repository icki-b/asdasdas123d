
## Plan: Przebudowa szablonu na styl Shrine (jasny motyw produktowy)

### Analiza różnic

**Obecny styl:**
- Ciemny motyw z neonowymi akcentami (niebieski)
- Animowane kule w tle (abstrakcyjne)
- Tekst po lewej, animacja po prawej

**Shrine Demo (docelowy styl):**
- Jasny header + żywy kolorowy Hero (czerwono-pomarańczowy gradient)
- Zdjęcie produktu po lewej, tekst po prawej
- Wyraźna kolorystyka marki (jeden dominujący kolor)
- Sekcja "As seen on" z logami mediów
- Przewijany pasek z hasłami (marquee)
- Tabela porównawcza "Us vs Others"
- Karuzela opinii ekspertów
- Sekcja z ikonami benefitów

---

### Zakres zmian

**1. Nowa paleta kolorów (konfigurowalna)**

Dodanie nowej zmiennej koloru marki w `product.ts`:
```typescript
export const themeConfig = {
  brandColor: "15 100% 55%", // pomarańczowo-czerwony HSL
  brandColorLight: "15 100% 65%",
  heroGradient: "from-brand to-brand-light",
  mode: "light", // lub "dark"
}
```

**2. Hero - przebudowa layoutu**

Zmiana z "tekst + abstrakcja" na "obraz produktu + tekst":
- Lewa strona: zdjęcie produktu (pełna wysokość)
- Prawa strona: tekst na kolorowym tle
- Gradient jako tło zamiast animowanych kul
- Usunięcie HeroBackground.tsx na rzecz prostego gradientu

**3. Nowa sekcja: "As Seen On" (Social Proof)**

Pasek z logami mediów/partnerów:
```typescript
// W product.ts
export const socialProof = {
  title: "Widziane w",
  logos: ["/logos/auto-swiat.png", "/logos/moto.png", ...]
}
```

**4. Nowa sekcja: Marquee (przewijane hasła)**

Automatycznie przewijany pasek z benefitami:
- Utworzenie `MarqueeSection.tsx`
- Hasła pobierane z konfiguracji

**5. Nowa sekcja: Porównanie "My vs Konkurencja"**

Tabela porównawcza pokazująca przewagi produktu:
```typescript
// W product.ts
export const comparisonTable = {
  title: "Niepokonane korzyści",
  features: [
    { name: "Bezprzewodowy", us: true, others: false },
    { name: "Gwarancja 2 lata", us: true, others: false },
    ...
  ]
}
```

**6. Nowa sekcja: Karuzela ekspertów/opinii**

Karuzela zdjęć z opiniami:
- Wykorzystanie istniejącego `embla-carousel-react`
- Konfiguracja w `product.ts`

**7. Aktualizacja Features na styl ikonowy**

Zmiana z siatki kart na listę z ikonami i checkmarkami (jak w Shrine)

---

### Szczegóły techniczne

**Nowe komponenty:**
- `src/components/AsSeenOn.tsx` - sekcja z logami
- `src/components/MarqueeSection.tsx` - przewijany pasek
- `src/components/ComparisonTable.tsx` - tabela porównawcza
- `src/components/TestimonialsCarousel.tsx` - karuzela opinii
- `src/components/BenefitsWithIcons.tsx` - lista z ikonami

**Zmiany w istniejących:**
- `src/index.css` - nowe zmienne kolorów, tryb jasny
- `src/config/product.ts` - rozszerzenie o nowe sekcje
- `src/components/Hero.tsx` - nowy layout z obrazem
- `src/components/Features.tsx` - opcjonalna zmiana stylu
- `src/pages/Index.tsx` - dodanie nowych sekcji

**Usuwane:**
- `src/components/HeroBackground.tsx` - zastąpione prostym gradientem

---

### Konfigurowalność motywu

Cały motyw będzie konfigurowalny z jednego miejsca:
```typescript
export const themeConfig = {
  // Kolor marki (HSL bez nawiasów)
  brandColor: "15 100% 55%",
  
  // Tryb kolorystyczny
  mode: "light", // "light" | "dark"
  
  // Styl Hero
  heroStyle: "image-left", // "image-left" | "image-right" | "centered"
  
  // Włączone sekcje
  sections: {
    asSeenOn: true,
    marquee: true,
    comparison: true,
    testimonials: true,
  }
}
```

---

### Kolejność wdrożenia

1. Dodanie themeConfig i nowych zmiennych CSS
2. Przebudowa Hero na nowy layout
3. Dodanie sekcji "As Seen On"
4. Dodanie MarqueeSection
5. Dodanie ComparisonTable
6. Dodanie TestimonialsCarousel
7. Integracja wszystkiego w Index.tsx
8. Testy responsywności

---

### Przygotowanie pod Shopify Liquid

Wszystkie nowe elementy będą miały komentarze wskazujące odpowiedniki Liquid:
```javascript
// Shopify Liquid: {% for block in section.blocks where type == 'logo' %}
{socialProof.logos.map(...)}

// Shopify Liquid: {{ section.settings.brand_color }}
style={{ background: `hsl(${themeConfig.brandColor})` }}
```
