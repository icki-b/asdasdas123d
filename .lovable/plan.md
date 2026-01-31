
## Plan: Poprawka pozycjonowania Headera względem CountdownTimer

### Problem
Na screenshocie widać, że header z logo "LEDTrunk" nachodzi na pasek Flash Sale. Aktualna wartość `top-[72px]` na mobile jest niewystarczająca, ponieważ CountdownTimer w układzie mobilnym (`flex-col`) ma większą wysokość (~96px).

### Rozwiązanie

**Zmiana w `src/components/Header.tsx`:**

Aktualna wartość:
```tsx
className="fixed top-[72px] sm:top-[52px] ..."
```

Nowa wartość:
```tsx
className="fixed top-[100px] sm:top-[52px] ..."
```

### Szczegóły techniczne

Wysokość CountdownTimer na mobile:
- Padding: `py-3` = 24px (12px top + 12px bottom)
- Wiersz 1 (Flash Sale): ~24px
- Gap między wierszami: `gap-3` = 12px  
- Wiersz 2 (Timer z boxami): ~36px
- **Suma: ~96px**

Ustawienie `top-[100px]` da ~4px buforu i zapewni, że header będzie zawsze poniżej countdown timera na urządzeniach mobilnych.

Na desktop (`sm:`) wartość `top-[52px]` pozostaje bez zmian, bo tam CountdownTimer jest w jednym wierszu.
