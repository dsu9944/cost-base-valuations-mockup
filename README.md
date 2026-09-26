# Ashford Valuations — static preview mockup

A static HTML/CSS/JavaScript preview of a website for a residential property valuation service (NSW and VIC). It is a design mockup only: **not live, not a working service, and not tax, legal or financial advice.**

## No data collected

- No forms send anything. There is no backend, no analytics, no cookies set by this site, and no payment.
- The free desktop estimate shows illustrative figures only.
- The quote and valuation-date choice on `start.html` are worked out in the browser; nothing is sent or stored. The "Place order" button is disabled.
- Phone, email, ABN, credentials and some copy are placeholders (highlighted in yellow where shown).
- Embedded news videos use YouTube's privacy-enhanced player behind a click-to-play preview; see `privacy.html`.

## Pages

| File | Purpose |
|------|---------|
| `index.html` | Home: free desktop estimate (illustrative), products, news teaser |
| `why.html` | The tax change: hypothetical example, news coverage, FAQ, scope |
| `start.html` | Full valuation: fixed-price quote and valuation-date choice (browser-only preview) |
| `privacy.html`, `terms.html` | Draft placeholders, not in force |
| `how-it-works.html`, `intake.html`, `products.html`, `records.html` | Redirects to current pages |
| `styles.css`, `app.js` | Shared styles and scripts |
| `fonts/` | Self-hosted Inter (SIL Open Font License, see `fonts/OFL.txt`) |

## Run locally

```
python3 -m http.server 8000
```

Then open http://localhost:8000/.
