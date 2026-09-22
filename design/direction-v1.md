# Website handoff — design1 · modern clean 2026

**From:** Designer  
**To:** Website (652179)  
**Date:** 22 Sep 2026 AEST  
**Joe:** BMT OK + soften CTAs + **“modern clean look, like a 2026 website”**  
**Cache-bust:** `?v=design1` or `design1b` / `design2` if already pushed  
**Preview only — no publish until Joe OK**

## Product locks (unchanged)

- Address-only hero — no H1, no date picker  
- Free indicative **as at 1 July 2027**  
- Single paid: Signed valuation **from $229**  
- Keep all compliance copy text; quiet the visual weight only  
- No faces · no electric `#0066FF` · no multi-SKU · no invented claims  

## Design intent (2026 clean)

Think Linear / Stripe / modern fintech-tax: soft surfaces, subtle elevation, generous radius, calm neutrals, one teal accent. **Not** harsh 2px black frames, not skeletal empty white, not prestige dark, not Zillow blue.

## 1. Tokens

```css
:root {
  --bg: #F7F8FA;
  --bg-elevated: #FFFFFF;
  --bg-soft: #EEF1F4;
  --bg-muted: #E4E8ED;
  --text: #0B0F14;
  --text-secondary: #3A4450;
  --muted: #6B7280;
  --border: #E5E7EB;
  --border-strong: #D1D5DB;
  --accent: #0F6B6B;
  --accent-hover: #0A5555;
  --accent-soft: #E6F3F3;
  --cta: #0F6B6B;
  --cta-hover: #0A5555;
  --cta-text: #FFFFFF;
  --success: #0A7A3E;
  --success-bg: #E6F7ED;
  --shadow-sm: 0 1px 2px rgba(11, 15, 20, 0.04);
  --shadow-md: 0 4px 16px rgba(11, 15, 20, 0.06), 0 1px 3px rgba(11, 15, 20, 0.04);
  --radius: 10px;
  --radius-lg: 16px;
  --radius-pill: 999px;
  --max: 720px; /* content column — modern narrow focus */
  --font: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  --header-h: 64px;
  --tap: 48px;
}
```

Page background = `--bg` (soft grey). Cards/forms = `--bg-elevated` + `--shadow-md` + 1px `--border` (no 2px ink frames).

## 2. Type (2026)

| Role | Spec |
|------|------|
| Estimate figure | `clamp(2.25rem, 8vw, 3.25rem)` / 700 (not 800) / tight tracking |
| Price “from $229” | ~2rem / 700 |
| h2 | 1.35rem / 600 |
| h3 | 1.05rem / 600 |
| Body | 15–16px / 1.55 / 400 |
| Label | 0.8rem / 500 / secondary |
| Hint / pricing-note / footer | 0.75rem / 400 / muted · line-height 1.5 |

Prefer weight **600** over **700/800** for chrome. Letter-spacing: headings `-0.02em`.

## 3. Buttons (soft CTAs — Joe)

- `.btn-primary`: teal fill, white text, **radius 10–12px** (not pill unless small chips), min-height 48px, no heavy border  
- Hover: `--cta-hover` + slight brightness; optional soft teal glow `0 0 0 4px var(--accent-soft)`  
- `.btn-outline`: white/elevated fill, 1px `--border-strong` or `--border`, ink text  
- Links: teal, no underline until hover  
- **No solid black/ink primary fills**

## 4. Components

### Header
- Height 64px; white/elevated or translucent blur on scroll OK  
- Wordmark 600–700 ink; **Enquire** teal text  
- No placeholder Call  

### Hero `.avm-box`
- Elevated white card, `radius-lg`, `shadow-md`, 1px light border  
- Padding 1.25–1.5rem  
- Input: light border, radius 10px, focus ring teal soft (3–4px)  
- Full-width teal primary CTA  

### SKU card
- Same elevated treatment (not thick blue/black border)  
- Optional left or top 3px teal accent bar **or** soft teal tint on price meta only  
- Teal primary enquire button  
- `.pricing-note` outside/below card, muted, max-width readable  

### Steps
- Horizontal on desktop / stack mobile  
- Soft numbered circles (teal text on `--accent-soft` fill) or simple `01` muted  
- No faces anywhere  

### Why
- Remove all `story-face` imgs  
- Story rows as elevated or divider-only list  

### Footer
- Soft `--bg` or slightly darker soft grey; muted links; no heavy charcoal slab unless contrast needs it — if dark footer, keep it simple and light text, not maroon  

## 5. Spacing

- Section gaps 2.5–3.5rem  
- Stack gap inside cards 0.75–1rem  
- Avoid huge empty desktop void: centre column `--max: 720px`, comfortable padding  

## 6. Kill

- Electric `#0066FF`  
- Ink/black primary button fills  
- 2px black “boxy” frames  
- Stock faces  
- Serif / dark prestige / oxblood  
- Loud yellow warning badges — use soft neutral badge  

## 7. Acceptance

Private tab preview:

1. Feels like a **2026** product site (soft elevation, calm type)  
2. Teal CTAs, not black blocks, not Zillow blue  
3. Address-only + from-$229 + as-at 1 July 2027 intact  
4. Compliance readable but quiet  
5. No faces  

Ping Designer with live URL + screenshots.
