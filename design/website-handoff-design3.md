# Website handoff — design3 (post–design2 reject)

**From:** Designer · **To:** Website (652179)  
**Date:** 22 Sep 2026 AEST  
**Joe:** rejected design2 · no fail-mode answer · Designer proceeding with denser crisp-white pass  
**Cache:** `?v=design3` · **preview only · no publish**

## Why design2 failed (Designer call)

- Soft grey page + stacked elevated cards → washed, generic SaaS, empty vertical stack  
- Two full-width cards (estimate + price) compete; steps as three more cards add chrome  
- Feels like a component library demo, not a dense BMT/fast-tax product page  

## Product locks (unchanged)

Address-only hero · as-at 1 July 2027 · from-$229 · legal5 copy/steps · no faces · no Call placeholder · no `#0066FF` · no ink primary fills · no claim invention  

## Direction: crisp white + dense mid-market

### Tokens

```css
:root {
  --bg: #FFFFFF;           /* was grey — crisp white */
  --bg-soft: #F4F6F8;      /* rare bands only */
  --bg-elevated: #FFFFFF;
  --bg-muted: #E8ECF0;
  --text: #0B0F14;
  --text-secondary: #3A4450;
  --muted: #5C6773;
  --border: #E2E8F0;
  --border-strong: #CBD5E1;
  --accent: #0F6B6B;       /* teal kept — Joe softened CTAs to teal */
  --accent-hover: #0A5555;
  --accent-soft: #E6F3F3;
  --cta: #0F6B6B;
  --cta-hover: #0A5555;
  --cta-text: #FFFFFF;
  --shadow-sm: 0 1px 2px rgba(11,15,20,0.05);
  --radius: 8px;
  --radius-lg: 12px;
  --max: 640px;            /* tighter column = denser feel */
  --header-h: 56px;
  --tap: 48px;
  --font: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
}
```

### Layout rules (vs design2)

1. **Page bg white** — no full-page grey wash  
2. **One hero surface only** for address form — light 1px border OR soft `--bg-soft` fill; **minimal or no drop shadow**  
3. **Price block not a second tall card** — sit directly under hero with a thin divider or compact band; price + CTA in a tighter block (less padding, less empty)  
4. **Steps:** single row of text/numbers **without** three elevated cards — simple list or hairline-separated row  
5. **Section padding:** 1.25–1.75rem mobile / ~2rem desktop (design2 was too airy)  
6. **Header 56px** — wordmark + Enquire teal text; **zero Call / phone placeholder** anywhere in header  
7. Primary buttons teal (unchanged soft-CTA call)  
8. Why: faces stay gone  

### Type

- Body 16px; labels 0.8rem / 500  
- Price ~1.75–2rem / 700 (slightly less huge than design2’s billboard)  
- Estimate figure 700 not 800  
- Pricing-note 0.75rem muted — keep all copy  

### Kill from design2

- Full-page `#F7F8FA`  
- Stacked large `shadow-md` cards for hero + SKU + each step  
- Featured card top teal bar if it makes the price block feel like another “app card”  
- Any “Call — number coming soon”  

## Acceptance

1. White page, denser, not grey SaaS dashboard  
2. Teal CTAs, no electric blue, no black fills  
3. Locks intact  
4. Feels closer to BMT/Duo density than Linear empty  

Ping Designer with `?v=design3` URL + screenshots.
