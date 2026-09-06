# Cost Base Valuations — static site mockup

Draft HTML/CSS/vanilla JS mockup for a retail D2C Australian residential valuation product (investors reconstructing CGT cost base / AVI-signed market valuation reports).

**Design direction:** consumer product landing page — clear, bold, scannable — closer to a sharp tax/property consumer brand than a traditional valuer-firm brochure. Short sentences, obvious primary CTA ("Start my request"), social-proof strip, simple pricing, FAQ.

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

Retail IA (lean nav, one primary CTA):

| File | Purpose |
|------|---------|
| `index.html` | Retail landing — hero → how it works (3 steps) → pricing → trust → FAQ → CTA |
| `start.html` | Short wizard: records → choose report → details → confirm + JSON |
| `privacy.html` | Privacy stub (DRAFT) — footer only |
| `terms.html` | Terms stub (DRAFT) — footer only |
| `styles.css` | Shared retail styles |
| `app.js` | Nav highlight, wizard steps, intake JSON builder |

**Legacy redirects** (old bookmarks still work):

| Old file | Goes to |
|----------|---------|
| `products.html` | `index.html#pricing` |
| `how-it-works.html` | `index.html#how` |
| `records.html` | `start.html` |
| `intake.html` | `start.html` (+ query string preserved) |

**Top nav:** How it works · Pricing · FAQ · **Start my request**. Privacy/terms only in the footer.

## Product truth (marketing)

- Sell **AVI-signed residential market valuation reports** for CGT / cost base / 30 June 2027, prepared by a suitably qualified AVI valuer (George).
- Reports are framed for **ATO-process expectations** (not “ATO-grade” slogans or bargain “$149 assessment” language).
- **Do not advertise** AVM / automated valuation / instant estimate / AI valuation as the offer — any model use is back-office only, not the product.
- Funnel: try recover title / stamp duty / old contract first (cheaper), then signed valuation if records fail.
- Two active SKUs: `cgt_retrospective` · `mv_2027_06_30`. Desktop restricted SKU2 (`mv_2027_06_30_desktop`) is shown as **off / coming soon** until George enables it.
- **Working default pricing (incl. GST):**
  - SKU1 signed desktop retrospective (CGT cost base): **$229**; 15+ years / thin comps +$50 (cap **$279**), then quote. Turnaround **3 business days**.
  - SKU2 inspected 30 June 2027 market value: **$369**; regional/complex from **$449**. Turnaround **5–7 business days**.
  - SKU2 desktop restricted: **$269** — off / not available until enabled.
- Do **not** show HTW-style $149 assessment pricing. Keep retail/investor tone — not firm-brochure copy.

## Handoff JSON (intake)

On submit, the form displays a payload shaped like:

- `jobId`, `sku` (`cgt_retrospective` \| `mv_2027_06_30`), `purpose`, `valuationDate`
- `property` (address, state, postcode, propertyType)
- `client` (name, email, phone)
- `docs` (checkbox values + optional uploaded filenames)
- `recordsTried`, `notes`, `createdAt`

## Brand / design

- Placeholder brand: **Cost Base Valuations** (DRAFT banner + footer badge)
- Retail palette: deep navy, bright terracotta CTA, sand/cream cards; Fraunces + DM Sans 
- Mobile-first; bold pricing cards; FAQ accordion; proof strip under hero
