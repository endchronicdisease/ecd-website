# End Chronic Disease — Website

Source code for the End Chronic Disease website (endchronicdisease.org).

Static site built with [Astro](https://astro.build); deployed automatically via Netlify on every push to `main` (build: `npm run build`, publish: `dist`).

## Structure

- `src/pages/*.astro` — the seven pages (Home, About, Our Work, Team, News, Get Involved, Donate)
- `src/raw/*.body.html` — each page's markup, converted faithfully from the approved Claude Design mockups
- `src/raw/*.style.css` — per-page styles (fonts, keyframes, footer grid breakpoints)
- `src/layouts/Base.astro` — shared head: meta, fonts, Google Analytics (G-VWQH92XELT), HubSpot tracking (portal 50818861)
- `public/assets/` — brand art, photography, pillar marks, Graphik webfonts
- `public/us-reach-map.html` — the D3 map of states where ECD works, embedded in Our Work as an
  iframe; edit the `REACH` list there to change which states are shaded
- `public/assets/og-image.jpg` — the 1200×630 image used when pages are shared on social media
- `public/scripts/` — page behavior (vanilla JS, no framework):
  - `search.js` — site-wide search dialog (merged index across all pages)
  - `home.js` — hero montage slide/dot sync
  - `team.js` — team bio modals
  - `donate.js` — donation amount picker; CTA links to Anedot with the chosen amount
  - `news-data.js` — **the news archive data. Add new press items here.**
  - `news.js` — news filtering/search renderer
  - `newsletter.js` — newsletter signups submit to HubSpot form 13d38552-7b0e-4e33-95d6-02387cb1674d

## Adding a news item

Edit `public/scripts/news-data.js` and add an object to the top of `DATA` (fields documented in that file). Commit and push; Netlify deploys automatically.

## Integrations

- Donations: Anedot (`secure.anedot.com/end-chronic-disease-c3`), synced to HubSpot inside those platforms
- Newsletter: HubSpot form → HubSpot's Mailchimp integration keeps the Mailchimp audience in sync
- Analytics: GA4 `G-VWQH92XELT`; HubSpot tracking portal `50818861`

## Known follow-ups

- Nothing on the site depends on Webflow any more: team headshots live in
  `public/assets/photos/team/` and news thumbnails in `public/assets/photos/news/`
  (the `CDN` prefix in `news-data.js` now points there, so a new item's `i` is just its
  filename in that folder). The news thumbnails total ~43 MB and have not been optimised.
- Chronicle Display webfonts are not yet licensed/installed; Newsreader is the live
  stand-in (Chronicle is first in the font stack, so adding the woff2 files and
  @font-face rules swaps it automatically).
- Pages are desktop-first (1440px design width) per the approved mockups. Phone and
  tablet layouts come from `src/styles/mobile.css`, one shared stylesheet loaded by
  `Base.astro`: because the page markup is inline-styled, it targets patterns in the
  style attribute (`[style*="..."]`) with `!important`, at breakpoints of 1180px
  (hamburger nav, since the full nav only fits above that), 900px (two-column grids)
  and 600px (single column). The header is sticky at every width. The hamburger menu is
  `public/scripts/nav.js` plus the `.ecd-nav` / `.ecd-nav-links` hooks on each page's
  header. When adding a new desktop layout pattern, check it at 375px and add a rule
  there if it does not collapse on its own.
