# Lock the Date Valuations — static site mockup

Draft HTML/CSS/vanilla JS mockup for **Lock the Date** / Lock the Date Valuations: signed market value for the tax date that splits an Australian rental investor’s gain (30 June 2027 spike + evergreen first-rented / change-of-use dates).

**Strategy:** mass-market AU rental investors; ICP ~45–65 higher-income one-property NSW/VIC holder with an accountant. Brand the **date**. Enemy: ATO straight-line formula + waiting until 2035. Model stays secret (back-office only — never sell automation).

**Funnel (Tesla / UX framing):**
1. **FREE Stage 1** — address + purpose/tax date → **fake/demo indicative estimate** (hardcoded AU$ figure + range) with heavy disclaimer: not a valuation, not for tax, illustrative only.
2. **PAID Stage 2** — **Full signed valuation**: George-signed comprehensive assessment usable for tax/CGT. Call or short enquire note. **No** private doc uploads / evidence vault on the public site.

**Design system:** paper `#F7F5F0` · ink `#1A1A1A` · oxblood `#6B2E2E` · Fraunces (H1 only) + IBM Plex Sans · calm AU professional services, not SaaS.

**Not live.** Marketing + estimate **UX mock** only. **No real estimate engine, no API, no file uploads.** Do **not** git push from casual edits unless the parent agent owns the push.

## Open locally

```bash
cd /workspace/valuation-site-mockup
python3 -m http.server 8080
```

Then open [http://127.0.0.1:8080/](http://127.0.0.1:8080/). Also works via `file://` / GitHub Pages from repo root.

## Page structure

| File | Purpose |
|------|---------|
| `index.html` | Homepage — hero (FB cut-through) → full signed valuation products → stories → why → how → FAQ → scope → accountants → CTA |
| `start.html` | **Free indicative estimate** UX mock — address + date/purpose form → hardcoded demo result + disclaimer + full signed valuation upsell / enquire |
| `privacy.html` | Privacy stub (DRAFT) — no property docs on site; free demo uses address + date only |
| `terms.html` | Terms stub (DRAFT) |
| `styles.css` | Shared paper / ink / oxblood design system + estimate UX |
| `app.js` | Mobile nav + client-side demo estimate reveal (hardcoded; no calculation) |

**Legacy redirects:**

| Old file | Goes to |
|----------|---------|
| `products.html` | `index.html#products` |
| `how-it-works.html` | `index.html#how` |
| `records.html` | `start.html` (estimate flow) |
| `intake.html` | `start.html` (estimate flow) |

## Copy rules (keep)

- Never brand as **AVM**
- Free = **indicative estimate**
- Paid = **signed valuation by a qualified valuer**
- AVI off browse path
- Vs Domain/REA: we estimate **as at a CGT date** (retrospective / 30 June 2027), not “today’s” consumer estimate

## Product truth

- Sell **signed** residential market valuations **as at** a tax date. Never sell AVM / automated / AI valuation as the product.
- Working brand: **Lock the Date** (not “Cost Base Valuations”).
- Scope: **NSW & VIC** residential investment tax dates only — not lending, commercial, rural, prestige, or sale appraisal.
- We do **not** give tax advice; accountants apply the report.
- Free Stage 1 is demo-only on the site; Stage 2 purchase via phone (`1300 000 000` placeholder) or short enquire note.
- SKUs (price cues):
  - `cgt_retrospective` — **past-date desktop valuation** (first rented / other past dates — done from records, no site inspection): **from $229** signed; 15+ years / thin comps +$50 (cap **$279**), then quote. Turnaround **3 business days**.
  - `mv_2027_06_30` — **30 June 2027 inspected** (tax-recommended): **from $369**; regional/complex from **$449**. Turnaround **5–7 business days**.
  - `mv_2027_06_30_desktop` — SKU2 desktop restricted **$269** — **OFF** until George enables (AVI / not on browse path).
- Kill on site: AVM branding, automated/AI valuation as product, “Cost Base Valuations” naming, $149 assessment framing, proptech hype, public evidence vault / private doc uploads.

## Demo estimate behaviour

Hardcoded placeholder, e.g. **Indicative estimate as at [date]: $1,050,000** (illustrative demo — not calculated), with an illustrative range. Obviously a mock for UX review.

## Brand / design

- **Lock the Date** / Lock the Date Valuations — no draft banners in main UI; tiny footer note only
- Palette: off-white paper, deep ink, one oxblood accent; Fraunces H1 + IBM Plex Sans body
- Master line: “Signed market value for the tax date that splits your gain.”
- Privacy line: “We don’t collect property documents on this website. Free estimate uses address + date only for the demo.”
