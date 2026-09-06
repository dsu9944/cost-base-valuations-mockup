# Lock the Date Valuations — static site mockup

Draft HTML/CSS/vanilla JS mockup for **Lock the Date** / Lock the Date Valuations: signed market value for the tax date that splits an Australian rental investor’s gain (30 June 2027 spike + evergreen first-rented / change-of-use dates).

**Strategy:** mass-market AU rental investors; ICP ~45–65 higher-income one-property NSW/VIC holder with an accountant. Brand the **date**. Enemy: ATO straight-line formula + waiting until 2035. Model stays secret (back-office only — never sell automation).

**Visual:** calm date-stamp / ledger feel; serious typography; white space; tax-adjacent professional — not flashy proptech.

**Not live.** No backend, no payments. Intake builds a client-side JSON handoff payload only. Do **not** git push from casual edits unless the parent agent owns the push.

## Open locally

```bash
cd /workspace/valuation-site-mockup
python3 -m http.server 8080
```

Then open [http://127.0.0.1:8080/](http://127.0.0.1:8080/). Also works via `file://` / GitHub Pages from repo root.

## Page structure

| File | Purpose |
|------|---------|
| `index.html` | Homepage — hero → why it matters → products → how it works (4 steps) → for/not for → accountants → CTA |
| `start.html` | Wizard: context → product → details → confirm + JSON |
| `privacy.html` | Privacy stub (DRAFT) |
| `terms.html` | Terms stub (DRAFT) |
| `styles.css` | Shared ledger / date-stamp styles |
| `app.js` | Nav, wizard, intake JSON builder |

**Legacy redirects:**

| Old file | Goes to |
|----------|---------|
| `products.html` | `index.html#products` |
| `how-it-works.html` | `index.html#how` |
| `records.html` | `start.html` |
| `intake.html` | `start.html` (+ query string preserved) |

## Product truth

- Sell **AVI-signed** residential market valuations **as at** a tax date. Never sell AVM / automated / instant estimate / AI valuation as the product.
- Working brand: **Lock the Date** (not “Cost Base Valuations”).
- Scope: **NSW & VIC** residential investment tax dates only — not lending, commercial, rural, prestige, or sale appraisal.
- We do **not** give tax advice; accountants apply the report.
- SKUs (intake keys unchanged):
  - `cgt_retrospective` — **tax-date desktop** (first rented / other past dates): **from $229** signed; 15+ years / thin comps +$50 (cap **$279**), then quote. Turnaround **3 business days**. State desktop limits honestly.
  - `mv_2027_06_30` — **30 June 2027 inspected** (tax-recommended): **from $369**; regional/complex from **$449**. Turnaround **5–7 business days**.
  - `mv_2027_06_30_desktop` — SKU2 desktop restricted **$269** — **OFF** until George enables.
- Kill on site: AVM, automated, instant estimate, AI valuation, “Cost Base Valuations” naming, $149 assessment framing, proptech hype.

## Handoff JSON (intake)

Shape unchanged: `jobId`, `sku` (`cgt_retrospective` \| `mv_2027_06_30`), `purpose`, `valuationDate`, `property`, `client`, `docs`, `recordsTried`, `notes`, `createdAt`.

## Brand / design

- **Lock the Date** / Lock the Date Valuations — DRAFT banner + footer badge
- Palette: deep navy, restrained terracotta stamp accent, sand/cream; Fraunces + DM Sans
- Master line: “Signed market value for the tax date that splits your gain.”
