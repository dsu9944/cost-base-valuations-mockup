# Lock the Date Valuations — static site mockup

Draft HTML/CSS/vanilla JS mockup for **Lock the Date** / Lock the Date Valuations: signed market value for the tax date that splits an Australian rental investor’s gain (30 June 2027 spike + evergreen first-rented / change-of-use dates).

**Strategy:** mass-market AU rental investors; ICP ~45–65 higher-income one-property NSW/VIC holder with an accountant. Brand the **date**. Enemy: ATO straight-line formula + waiting until 2035. Model stays secret (back-office only — never sell automation).

**Design system:** paper `#F7F5F0` · ink `#1A1A1A` · oxblood `#6B2E2E` · Fraunces (H1 only) + IBM Plex Sans · calm AU professional services, not SaaS.

**Not live.** Marketing + **call-only** booking mockup. **No online intake, no forms collecting address/email/docs, no file uploads, no client-side JSON handoff.** Private details stay offline / over the phone. Do **not** git push from casual edits unless the parent agent owns the push.

## Open locally

```bash
cd /workspace/valuation-site-mockup
python3 -m http.server 8080
```

Then open [http://127.0.0.1:8080/](http://127.0.0.1:8080/). Also works via `file://` / GitHub Pages from repo root.

## Page structure

| File | Purpose |
|------|---------|
| `index.html` | Homepage — hero → products → stories → why → how → FAQ → scope → accountants → CTA |
| `start.html` | Call-to-book landing — big phone CTA, what to have ready verbally, privacy reassurance |
| `privacy.html` | Privacy stub (DRAFT) — site does not collect docs/personal details |
| `terms.html` | Terms stub (DRAFT) |
| `styles.css` | Shared paper / ink / oxblood design system |
| `app.js` | Mobile nav + active nav only |

**Legacy redirects:**

| Old file | Goes to |
|----------|---------|
| `products.html` | `index.html#products` |
| `how-it-works.html` | `index.html#how` |
| `records.html` | `start.html` (call landing) |
| `intake.html` | `start.html` (call landing) |

## Product truth

- Sell **signed** residential market valuations **as at** a tax date. Never sell AVM / automated / instant estimate / AI valuation as the product.
- Working brand: **Lock the Date** (not “Cost Base Valuations”).
- Scope: **NSW & VIC** residential investment tax dates only — not lending, commercial, rural, prestige, or sale appraisal.
- We do **not** give tax advice; accountants apply the report.
- Book by phone only (`1300 000 000` placeholder). No online data collection.
- SKUs (internal labels for ops; not collected via web forms):
  - `cgt_retrospective` — **tax-date desktop** (first rented / other past dates): **from $229** signed; 15+ years / thin comps +$50 (cap **$279**), then quote. Turnaround **3 business days**. State desktop limits honestly.
  - `mv_2027_06_30` — **30 June 2027 inspected** (tax-recommended): **from $369**; regional/complex from **$449**. Turnaround **5–7 business days**.
  - `mv_2027_06_30_desktop` — SKU2 desktop restricted **$269** — **OFF** until George enables.
- Kill on site: AVM, automated, instant estimate, AI valuation, “Cost Base Valuations” naming, $149 assessment framing, proptech hype, online intake / private data upload.

## Brand / design

- **Lock the Date** / Lock the Date Valuations — no draft banners in main UI; tiny footer note only
- Palette: off-white paper, deep ink, one oxblood accent; Fraunces H1 + IBM Plex Sans body
- Master line: “Signed market value for the tax date that splits your gain.”
- Privacy line (footer / call page): “We don’t collect property documents or personal details through this website.”
