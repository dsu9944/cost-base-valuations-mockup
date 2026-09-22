# Website handoff — design4 · Tesla + valuation graphics

**From:** Designer · **To:** Website (652179)  
**Date:** 22 Sep 2026 AEST  
**Joe:** Tesla lane · address-only · **no headline** · **add graphics like Tesla but residential valuations**  
**Cache:** `?v=design4` (or `design4b` if already pushed without graphics)  
**Preview only · no publish until Joe OK on live**

## Intent

tesla.com energy: clean, simple, informative, obvious **order** path — black/white, sparse chrome, solid black CTAs.  
**Plus** cinematic / product graphics about **residential valuations** (house + tax date), not cars, not stock people.

## Product locks

- Address-only hero — **no H1 / no headline**  
- As at **1 July 2027** · from-**$229** · legal5 copy/steps  
- NSW & VIC · no invented claims · no faces · no Call in header · scrub footer Call  
- Formspree deferred  

## Tokens

```css
:root {
  --bg: #FFFFFF;
  --bg-soft: #F4F4F4;
  --text: #171A20;
  --text-secondary: #393C41;
  --muted: #5C5E62;
  --border: #D0D1D2;
  --cta: #171A20;
  --cta-hover: #000000;
  --cta-text: #FFFFFF;
  --max: 560px;
  --font: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  --header-h: 52px;
  --tap: 48px;
  --radius: 4px;
}
```

No teal · no `#0066FF` · no grey SaaS card stack · no soft multi-shadow chrome.

## Graphics (Tesla-like, valuation-themed)

Tesla uses full-bleed product imagery between sparse order sections. We do the same with **property / date** imagery.

### Asset direction (create or source under `images/`)

1. **`hero-property.jpg` (or webp)** — Full-bleed cinematic AU **residential** exterior (suburban house or low-rise, dusk/dawn, no people, no logos). Dark gradient scrim bottom/centre so a white or light address field stays readable **if** form sits on image; OR keep form on white and use image as a full-viewport band **below** the address block (safer for address-only lock).  
2. **`date-lock.svg` or typographic panel** — Large quiet graphic: **1 JUL 2027** / calendar-lock motif (line art, black on white or white on dark photo). Not clip-art.  
3. Optional mid-page: second residential still (different angle) behind “from $229” band with dark scrim + white type.

**Hard no:** stock smiling faces, AI people, maps with pins that look proptech-spammy, car imagery, luxury yacht/prestige staging.

### Placement (recommended)

```
[thin header: wordmark | Order]
[ADDRESS-ONLY block on white — no headline]
[full-bleed graphic band: AU house photo + optional “1 JUL 2027” overlay — no marketing H1]
[order block: Signed valuation from $229 + black CTA]
[flat steps — no cards]
[footer]
```

If photo-behind-form is too hard for contrast, **prefer photo band between estimate and price** (Tesla section rhythm).

## Layout

### Header
Wordmark · **Order** → enquire · no Call  

### Hero
**No headline.** Address label + thin-border input + black **Get free desktop estimate** + quiet legal5 hint.

### Graphic band
Full-bleed residential photo (~70–100vh on desktop / ~50vh mobile), object-fit cover; optional centred white **1 JUL 2027** in large light type (graphic, not page H1). No paragraph of marketing copy on the photo.

### Price / order
Hairline or just spacing on white — **from $229**, as-at line, black enquire CTA, muted pricing-note (full legal5 text).

### Steps
Flat legal5 steps — no elevated cards.

### Why
No faces.

## Acceptance

1. Tesla-clean black/white order UI  
2. Zero hero headline  
3. At least one strong residential-valuation graphic band (house and/or date)  
4. No faces / no teal / no electric blue  
5. legal5 locks intact  

Ping Designer with `?v=design4` URL + screenshots (include graphic band).

## Rev design4b (Joe 22 Sep 21:13 AEST)

**Remove** large **1 JUL 2027** (or any date) typographic overlay on the photo band.  
Keep full-bleed residential graphic.  
As-at **1 July 2027** remains only in normal UI copy (result note, sku-meta, etc.).
