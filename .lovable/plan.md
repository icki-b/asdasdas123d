

## Plan: Dodanie informacji o najniższej cenie (Omnibus) z przygotowaniem pod Shopify Liquid

### Cel
Dodanie wyświetlania najniższej ceny z ostatnich 30 dni zgodnie z **Dyrektywą Omnibus UE**, z kodem przygotowanym do łatwej konwersji na szablon Shopify Liquid.

### Co zostanie dodane

**1. Sekcja ProductSection - rozszerzenie bloku cenowego**
- Aktualna cena promocyjna (duża, wyróżniona)
- Przekreślona cena regularna
- **Nowa linijka**: "Najniższa cena z ostatnich 30 dni: XX,XX zł"
- Informacja o oszczędnościach

**2. Sekcja Hero - pod ceną**
- Dodanie informacji o najniższej cenie w mniejszym formacie

### Struktura danych (przygotowana pod Liquid)

Kod będzie używał zmiennych z komentarzami wskazującymi odpowiedniki Liquid:

```text
React (placeholder)          →  Shopify Liquid
─────────────────────────────────────────────────
variant.price                →  {{ variant.price | money }}
variant.compare_at_price     →  {{ variant.compare_at_price | money }}
variant.lowestPrice30Days    →  {{ product.metafields.custom.lowest_price_30d | money }}
```

### Wygląd

```text
┌─────────────────────────────────────────────┐
│  49,99 zł          89,99 zł (przekreślona)  │
│  ─────────────────────────────────────────  │
│  ⓘ Najniższa cena z ostatnich 30 dni:       │
│    45,99 zł                                 │
│  ─────────────────────────────────────────  │
│  Oszczędzasz 40 zł                          │
└─────────────────────────────────────────────┘
```

### Szczegóły techniczne

**Zmiany w `ProductSection.tsx`:**
1. Dodanie pola `lowestPrice30Days` do każdego wariantu
2. Rozszerzenie bloku cenowego o nową linijkę z ikoną informacji
3. Komentarze Liquid przy każdej cenie dla łatwej konwersji

**Zmiany w `Hero.tsx`:**
1. Dodanie linijki z najniższą ceną pod główną ceną

**Styl informacji Omnibus:**
- Mniejsza czcionka (text-xs)
- Kolor: text-muted-foreground
- Ikona informacji (Info icon z lucide-react)
- Subtelne tło dla wyróżnienia

### Komentarze Liquid w kodzie

Każde miejsce z ceną będzie miało komentarz pokazujący jak to zamienić:

```javascript
// Shopify Liquid: {{ variant.price | money }}
{variant.price.toFixed(2)} zł

// Shopify Liquid: {{ product.metafields.custom.lowest_price_30d | money }}
{variant.lowestPrice30Days.toFixed(2)} zł
```

### Wymagane metafield w Shopify

Po konwersji na Liquid, w Shopify trzeba będzie utworzyć metafield:
- **Namespace**: `custom`
- **Key**: `lowest_price_30d`
- **Type**: `money`

Shopify może automatycznie aktualizować to pole przez aplikację lub Flow.

