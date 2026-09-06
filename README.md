# Cost Base Valuations — static site mockup

Draft HTML/CSS/vanilla JS mockup for an Australian residential valuation practice (D2C investors, CGT cost-base / AVI-signed market valuation reports).

**Not live.** No backend, no payments, no deploy. Intake builds a client-side JSON handoff payload only.

## Open locally

From this folder:

```bash
cd /workspace/valuation-site-mockup
python3 -m http.server 8080
```

Then open [http://127.0.0.1:8080/](http://127.0.0.1:8080/) in a browser.

You can also open `index.html` directly via `file://` (all assets are relative — works on GitHub Pages from repo root).

## Page structure

Simplified IA (fewer nav items, one primary CTA):

| File | Purpose |
|------|---------|
| `index.html` | Landing — investor headline, 3-step how it works, two report cards, trust, primary CTA |
| `start.html` | Combined wizard: records check → choose report → intake → handoff JSON |
| `privacy.html` | Privacy stub (DRAFT) — footer only |
| `terms.html` | Terms stub (DRAFT) — footer only |
| `styles.css` | Shared styles (warmer investor-facing palette + typography) |
| `app.js` | Nav highlight, wizard steps, intake JSON builder |

**Legacy redirects** (old bookmarks still work):

| Old file | Goes to |
|----------|---------|
| `products.html` | `index.html#pricing` |
| `how-it-works.html` | `index.html#how` |
| `records.html` | `start.html` |
| `intake.html` | `start.html` (+ query string preserved) |

**Top nav:** How it works · Pricing · **Get started** (primary). Privacy/terms only in the footer.

## Product truth (marketing)

- Sell **AVI-signed residential market valuation reports** for CGT / cost base / 30 June 2027, prepared by a suitably qualified AVI valuer (George).
- Reports are framed for **ATO-process expectations** (not “ATO-grade” slogans or bargain “$149 assessment” language).
- **Do not advertise** AVM / automated valuation / instant estimate / AI valuation as the offer — any model use is back-office only, not the product.
- Funnel: try recover title / stamp duty / old contract first (cheaper), then signed valuation if records fail.
- Two SKUs: `cgt_retrospective` · `mv_2027_06_30`.

## Handoff JSON (intake)

On submit, the form displays a payload shaped like:

- `jobId`, `sku` (`cgt_retrospective` \| `mv_2027_06_30`), `purpose`, `valuationDate`
- `property` (address, state, postcode, propertyType)
- `client` (name, email, phone)
- `docs` (checkbox values + optional uploaded filenames)
- `recordsTried`, `notes`, `createdAt`

## Brand / design

- Placeholder brand: **Cost Base Valuations** (DRAFT banner + footer badge)
- Warmer investor palette: deep navy, terracotta, sand/cream; Fraunces + DM Sans via Google Fonts
- Subtle house mark in the logo; richer hero with 3-step card
