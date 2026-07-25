# Gonubie Online — Website

Plain HTML/CSS/JS, no build step. Three pages:

- `index.html` — Home
- `manuka-honey.html` — Manuka Honey / products
- `partner.html` — Partner With Us / Contact (includes the enquiry form)

## Deploy via GitHub + Cloudflare Pages

1. Create a new GitHub repo (e.g. `gonubie-online`) and push these files to it
   (including the `css/` and `js/` folders, keeping the same names).
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**.
3. Pick the repo. Build settings:
   - **Framework preset:** None
   - **Build command:** (leave blank)
   - **Build output directory:** `/`
4. Deploy. Cloudflare gives you a `*.pages.dev` URL immediately.
5. To use `gonubieonline.co.nz`: in the Pages project, go to **Custom domains**
   and add it, then update the domain's DNS (CNAME) as Cloudflare instructs.

Every future push to the connected branch redeploys automatically.

## Things to finish before launch

- **Photos.** Real RILEY Honey product photos are now in `images/` and used
  throughout the site: the 500g Native Bush jar, the 250g and 500g Multifloral
  Manuka jars, the bulk drum, and the 12x500g export case. Still using a
  designed honeycomb-pattern background (no photo) for:
  - The hero banner on all three pages (no landscape/apiary photo was supplied)
  - The Luxury Gift Packs, Honey Sachets, and Private Label product tiles on
    the homepage, and the Private Label tile on the Manuka page (no matching
    product photos yet)
  Once you have landscape/apiary shots or photos of those specific products,
  send them over and I'll drop them in — or swap the `src` yourself, the
  `<img>` tags are plain and easy to find by searching `images/` in each file.

- **Contact form.** The form on `partner.html` isn't wired to send email yet —
  Cloudflare Pages is static hosting, so it needs a form backend. Easiest options:
  - [Formspree](https://formspree.io) — free tier, ~5 minutes to set up. Replace
    `action="REPLACE_WITH_FORMSPREE_ENDPOINT"` in `partner.html` with the endpoint
    Formspree gives you.
  - [Web3Forms](https://web3forms.com) — similar, no account needed for the access key.
  - A Cloudflare Pages Function, if you'd rather keep everything on Cloudflare.
  Until this is connected, submitting the form shows a message telling the
  visitor to email you directly instead.

- **LinkedIn.** Placeholder link on the contact page — add the real URL in
  `partner.html` (search for `[ADD LINKEDIN URL]`).

- **Downloads.** The catalogue/certificates/specifications buttons on
  `manuka-honey.html` currently open a pre-filled email. Once you have PDFs,
  point those links at the files directly (e.g. `href="documents/catalogue.pdf"`).

## SEO — what's built in, and what you still need to do

**Already in the code:**
- Unique, keyword-targeted `<title>` and meta description per page (aimed at
  phrases a real buyer searches — "bulk Manuka honey supplier NZ," "private
  label honey exporter," "MGO UMF Manuka honey" — not the word "honey" alone,
  which is dominated by huge brands and isn't the traffic you want anyway).
- Canonical tags, Open Graph and Twitter card tags (controls how the site
  looks when shared on WhatsApp, LinkedIn, Facebook etc.)
- Structured data (JSON-LD): Organization info on the homepage, Product info
  on the Manuka Honey page — this is what lets Google show rich results.
- `sitemap.xml` and `robots.txt` so search engines can find and crawl every page.

**You still need to do, once the site is live on the real domain:**
1. **Google Search Console** — add gonubieonline.co.nz, verify ownership,
   submit `sitemap.xml`. Free, and it's how you'll see what people actually
   search to find you. Do this the day it goes live.
2. **Bing Webmaster Tools** — same idea, smaller volume but 2 minutes to add.
3. **Google Business Profile** — even for a B2B/export business, a verified
   profile with your address builds trust and can appear in local results.
4. **Backlinks** — this is what actually moves rankings over time. Getting
   listed on IndiaMART/TradeIndia/ExportersIndia, NZTE's exporter directory,
   and any trade association you belong to, all count as legitimate backlinks.
5. **Fresh content** — a couple of blog-style pages (e.g. "What MGO and UMF
   actually mean," "How Manuka honey is graded") targeting real buyer
   questions will do far more for search visibility over 6–12 months than
   any one-time technical fix. Happy to help write these when you're ready.
6. **Replace the `og-cover.jpg` / `og-manuka.jpg` / `og-partner.jpg` image
   paths** referenced in the meta tags with real image files once you have
   photography — right now they point to files that don't exist yet.

Realistically: ranking for a single generic word like "honey" isn't
achievable for a new small-business site, and wouldn't send you the right
customers if it somehow happened. The aim here is to rank for the specific
phrases an importer or distributor actually types — that's a realistic,
winnable target, and it's what this setup is built for.

## Design notes

- Palette: deep forest green, gold, honey amber, cream — per the original brief.
- Honeycomb hexagon motif used structurally throughout (dividers, certification
  badges, process markers) rather than as decoration.
- No fake stats, no shop/login clutter, no cookie-banner plugin — the old site's
  main complaints. Three pages only, built to support enquiries via email,
  phone, and WhatsApp rather than direct online sales.
