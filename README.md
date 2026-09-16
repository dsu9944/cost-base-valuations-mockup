# Lock the Date Valuations — demand-validation landing

Static HTML/CSS/vanilla JS landing for **Lock the Date** / Lock the Date Valuations: signed market value for the tax date that splits an Australian rental investor’s gain (30 June 2027 spike + evergreen first-rented / change-of-use dates).

**Ship target:** Friday 19 Sep 2026, 5pm AEST — demand validation (leads), not a live estimate engine.

**Strategy:** mass-market AU rental investors; ICP ~45–65 higher-income one-property NSW/VIC holder with an accountant. Brand the **date**. Enemy: ATO straight-line formula + waiting until 2035. Model stays secret (back-office only — never sell automation).

**Funnel (Tesla / UX framing):**
1. **FREE Stage 1** — address + purpose/tax date → **indicative estimate** (illustrative figures until the model is live) with clear disclaimer: not a valuation, not for tax.
2. **PAID Stage 2** — **Request a signed valuation**: George-signed comprehensive assessment usable for tax/CGT. Call or Formspree enquire. **No** private doc uploads / evidence vault on the public site.

**Design system:** paper `#F7F5F0` · ink `#1A1A1A` · oxblood `#6B2E2E` · Fraunces (H1 only) + IBM Plex Sans · calm AU professional services, not SaaS.

**Out of scope for this ship:** live estimate model, Stripe checkout, ASIC, evidence vault. Do **not** git push unless the parent agent owns the push.

## Open locally

```bash
cd /workspace/valuation-site-mockup
python3 -m http.server 8080
```

Then open [http://127.0.0.1:8080/](http://127.0.0.1:8080/). Also works via `file://` / GitHub Pages from repo root.

## Formspree (required for live lead capture)

The enquire form on `start.html` posts to:

```html
action="https://formspree.io/f/xxxxxxxx"
```

**Joe must replace `xxxxxxxx` with his Formspree form ID** before collecting real leads:

1. Sign up / log in at [https://formspree.io](https://formspree.io)
2. Create a form (e.g. “Lock the Date — signed valuation enquire”)
3. Copy the form endpoint ID (the part after `/f/`)
4. In `start.html`, find `https://formspree.io/f/xxxxxxxx` and replace `xxxxxxxx` with your ID
5. Optional: set notification email in the Formspree dashboard
6. Redeploy / refresh the static host

**Fields submitted:** `name`, `email`, `phone` (optional), `property_address`, `tax_date`, `message`, plus `_subject`.

**Behaviour:**
- With a real Formspree ID: AJAX POST → thank-you success state on the page (no redirect)
- While still `xxxxxxxx`: client-side success state so you can review the funnel offline (nothing is emailed)

## Page structure

| File | Purpose |
|------|---------|
| `index.html` | Homepage — hero (FB cut-through) → signed valuation products → stories → why → how → FAQ → scope → accountants → CTA |
| `start.html` | **Free indicative estimate** → illustrative result + disclaimer → **Request a signed valuation** (Formspree enquire) |
| `privacy.html` | Privacy stub — no property docs on site; free estimate uses address + date; enquire collects contact details via Formspree |
| `terms.html` | Terms stub |
| `styles.css` | Shared paper / ink / oxblood design system |
| `app.js` | Mobile nav + illustrative estimate reveal + Formspree enquire / success state |

**Legacy redirects:**

| Old file | Goes to |
|----------|---------|
| `products.html` | `index.html#products` |
| `how-it-works.html` | `index.html#how` |
| `records.html` | `start.html` |
| `intake.html` | `start.html` |

## Copy rules (keep)

- Never brand as **AVM**
- Free = **indicative estimate**
- Paid = **signed valuation by a qualified valuer**
- CTAs: **Request a signed valuation** / **Arrange a signed valuation** (never “buy the stamp”)
- AVI off browse path
- Vs Domain/REA: we estimate **as at a CGT date** (retrospective / 30 June 2027), not “today’s” consumer estimate
- Tiny footer note OK: “Indicative estimate is illustrative until the model is live”

## Product truth

- Sell **signed** residential market valuations **as at** a tax date. Never sell AVM / automated / AI valuation as the product.
- Working brand: **Lock the Date** (not “Cost Base Valuations”).
- Scope: **NSW & VIC** residential investment tax dates only — not lending, commercial, rural, prestige, or sale appraisal.
- We do **not** give tax advice; accountants apply the report.
- Stage 2: phone (`1300 000 000` placeholder) or Formspree enquire. Stripe checkout not live — waitlist note OK.
- SKUs (price cues):
  - `cgt_retrospective` — **past-date desktop valuation** (first rented / other past dates — done from records, no site inspection): **from $229** signed; 15+ years / thin comps +$50 (cap **$279**), then quote. Turnaround **3 business days**.
  - `mv_2027_06_30` — **30 June 2027 inspected** (tax-recommended): **from $369**; regional/complex from **$449**. Turnaround **5–7 business days**.
  - `mv_2027_06_30_desktop` — SKU2 desktop restricted **$269** — **OFF** until George enables (AVI / not on browse path).
- Kill on site: AVM branding, automated/AI valuation as product, “Cost Base Valuations” naming, $149 assessment framing, proptech hype, public evidence vault / private doc uploads, “buy the stamp”.

## Indicative estimate behaviour

Illustrative placeholder, e.g. **Indicative estimate as at [date]: $1,050,000** with an illustrative range. Not calculated from market data until the model is live. Framed clearly as indicative / not for tax.

## Ship checklist (Fri 19 Sep 2026 5pm AEST)

- [ ] Replace Formspree `xxxxxxxx` in `start.html` with Joe’s form ID
- [ ] Confirm Formspree notification email receives test enquire
- [ ] Spot-check funnel: home → free estimate → result → enquire → success state
- [ ] Spot-check CTAs say “Request / Arrange a signed valuation” (no “buy the stamp”)
- [ ] Confirm no document upload / vault UI on public pages
- [ ] Confirm AVI / restricted desktop SKU not on browse path
- [ ] Replace phone `1300 000 000` and ABN / email placeholders when ready
- [ ] Host static files (GitHub Pages / Netlify / S3 / etc.) — no server required
- [ ] Privacy / terms still stubs — replace with counsel text before paid engagements at scale
- [ ] Do **not** git push from casual edits unless the owning agent/process pushes deliberately

## Brand / design

- **Lock the Date** / Lock the Date Valuations — no draft banners in main UI; tiny footer note only
- Palette: off-white paper, deep ink, one oxblood accent; Fraunces H1 + IBM Plex Sans body
- Master line: “Signed market value for the tax date that splits your gain.”
- Privacy line: “We don’t collect property documents on this website. Free estimate uses address + date only.”
