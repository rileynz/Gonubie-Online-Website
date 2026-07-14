# Gonubie Limited — RILEY Honey website

Static site for Gonubie Limited, a family-run honey exporter on New Zealand's
Coromandel Peninsula, trading as RILEY.

## Structure

```
index.html          Home
products.html        Full RILEY range, pack sizes, corporate gift, RILEY Mead
provenance.html       Mānuka, MGO/UMF grading, Coromandel apiary
about.html            Company story
contact.html          Contact details + enquiry form (mailto-based)
css/style.css         Shared stylesheet
js/main.js            Mobile nav toggle
images/*.svg          Original illustrations (no stock photography)
```

No build step, no dependencies, no backend. Every page is plain HTML/CSS
with one small JS file for the mobile menu, so it can be served as-is.

## Deploying to Cloudflare Pages via GitHub

1. Push this folder to a GitHub repository (root of the repo, or a
   subfolder if you set the build output directory accordingly).
2. In Cloudflare Pages, create a project and connect the repository.
3. Build settings:
   - **Framework preset:** None
   - **Build command:** (leave blank)
   - **Build output directory:** `/` (or the path to this folder if it's
     not at the repo root)
4. Deploy. Cloudflare will serve the static files directly — there's
   nothing to compile.

## Editing content

- Product grades and pack sizes live in the `<table class="ledger">` and
  `.pack-card` blocks in `products.html`.
- Contact details (phone, email, address) appear in `contact.html` and in
  the footer of every page — update all instances if they change.
- Colours and fonts are defined once as CSS custom properties at the top
  of `css/style.css`.
- The contact form doesn't send data anywhere itself; it opens the
  visitor's email client via a `mailto:` link addressed to the email set
  in `contact.html`. To collect submissions server-side instead, swap the
  form's `onsubmit` handler for a POST to a form backend (e.g. Cloudflare
  Pages Functions, Formspree) or a Cloudflare Worker.

## Images

All artwork in `/images` is original SVG illustration created for this
site — no stock photography or third-party images are used. Replace any
of them with real product photography later by swapping the `<img src>`
paths in the HTML.
