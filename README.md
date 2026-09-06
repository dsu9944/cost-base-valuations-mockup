# Cost Base Valuations — static site mockup

Draft multi-page HTML/CSS/vanilla JS mockup for an Australian residential valuation startup (D2C investors, CGT cost-base / signed desktop reports).

**Not live.** No backend, no payments, no deploy. Intake builds a client-side JSON handoff payload only.

## Open locally

From this folder:

```bash
cd /workspace/valuation-site-mockup
python3 -m http.server 8080
```

Then open [http://127.0.0.1:8080/](http://127.0.0.1:8080/) in a browser.

You can also open `index.html` directly via `file://` (all assets are relative).

## Pages

| File | Purpose |
|------|---------|
| `index.html` | Landing — investor value prop, trust, funnel CTA |
| `products.html` | Two SKUs with draft “From $X” pricing |
| `records.html` | Records-first step (title / stamp duty / old contract) |
| `intake.html` | Job intake → confirmation + pretty-printed handoff JSON |
| `how-it-works.html` | Process + licensed valuer signing |
| `privacy.html` | Privacy stub (DRAFT) |
| `terms.html` | Terms stub (DRAFT) |
| `styles.css` | Shared styles |
| `app.js` | Nav highlight + intake JSON builder |

## Handoff JSON (intake)

On submit, the form displays a payload shaped like:

- `jobId`, `sku` (`cgt_retrospective` \| `mv_2027_06_30`), `purpose`, `valuationDate`
- `property` (address, state, postcode, propertyType)
- `client` (name, email, phone)
- `docs` (checkbox values + optional uploaded filenames)
- `recordsTried`, `notes`, `createdAt`

## Brand / design

- Placeholder brand: **Cost Base Valuations** (marked DRAFT in footer + top banner)
- Palette: deep navy (`#0b1f3a`), warm off-white (`#f7f4ef`), accent copper (`#c47a3a`)
