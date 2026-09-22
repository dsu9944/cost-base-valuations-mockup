# Direction — Tesla lane (clean / simple / informative / order)

**Joe (22 Sep 2026):** “Why can’t it be like the Tesla website” → “Clean, simple, informative and you can order.”  
**Status:** mock first · Website holds until Joe OK · no publish  

## DNA (from tesla.com, adapted)

- Black / white / huge type / almost no chrome  
- Informative in few words — not compliance walls as visual centre  
- **Order path obvious** — primary black CTAs (Estimate → Signed valuation enquire)  
- No card stacks, no soft grey SaaS wash, no teal, no electric blue, no faces  
- Full-bleed calm sections; whitespace is the design  

## Product locks (unchanged)

Address-only hero · as-at 1 July 2027 · from-$229 · legal5 compliance copy kept but **visually quiet** · NSW/VIC · no invented claims  

## Visual rules for Website (after Joe OK)

```css
--bg: #FFFFFF;
--text: #171A20;          /* Tesla-ish ink */
--muted: #5C5E62;
--border: #E2E3E3;
--cta: #171A20;           /* solid black primary — “Order” */
--cta-text: #FFFFFF;
--ghost-border: #171A20;
--max: 600px;
--font: "Inter", system-ui, sans-serif;
--header-h: 48–56px;
--radius: 4px;            /* sharper than SaaS soft */
```

- Header: wordmark + **Order** or Enquire text — no Call  
- Hero: large headline allowed **above** address field (Tesla informs then orders) — confirm with Joe if this breaks “no H1” legal5 lock; if H1 still forbidden, use oversized product line as non-H1 display text carefully OR keep address-first with massive price/order below  
- Address field: thin border / underline, not elevated card  
- Primary buttons: solid black, full width mobile  
- Price: large “from $229”; order CTA immediate  
- Steps: plain text list, no cards  
- Footer: quiet; scrub fake Call  

## Note on H1 lock

legal5 said no H1 question / address-only. Tesla needs a clear informative line. Prefer a short display line that is not a question (e.g. brand/master line already locked in README) if counsel still bans H1 — Designer will mark in handoff after Joe picks mock.
