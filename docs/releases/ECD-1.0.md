# ECD 1.0

The End Chronic Disease website as it stood on 9 November 2026, the first version recorded as a numbered release.

| | |
|---|---|
| Live site | https://www.endchronicdisease.org |
| Git tag | `v1.0` on commit `f1b28c5` (committed 6 November 2026) |
| GitHub release | https://github.com/endchronicdisease/ecd-website/releases/tag/v1.0 |
| Hosting | Netlify, built automatically from the `main` branch |
| Framework | Astro 5 static site, no CMS, vanilla JavaScript |
| Pages in the sitemap | 32 |
| Commits since the repo began (10 September 2026) | 157 |

## How to get back to this exact version

- **In GitHub**: open the `v1.0` tag or release. The source code zip there is the site at this point.
- **On a computer with the repo**: `git checkout v1.0` shows the files as they were. `git checkout main` returns to the current site.
- **Offline copy**: the `ECD 1.0` folder in the website build project holds a zip of the built site (what Netlify serves), a zip of the source code, and full-page captures of every main page at desktop and phone widths. The built site zip can be opened locally or uploaded to any static host without a build step.

## What the 1.0 site contains

### Main pages (9)

| Page | Path | Notes |
|---|---|---|
| Home | `/` | 12-photo hero montage, "as seen in" press strip, mission, pillars, featured work, newsletter sign-up |
| About | `/about/` | Disease ribbons, prevalence statistics, younger-adults chart, spending figure, ten factors, prevention narrative |
| Our Work | `/our-work/` | Educate, Advocate, Inspire; state reach map; program detail |
| Team | `/team/` | Staff and board bios with modals and external links |
| Insights | `/insights/` | Hub for 23 ECD-written articles with RSS feed at `/insights.xml` |
| News | `/news/` | 59 press items across 36 outlets with filters and search; RSS feed at `/news.xml` |
| Get Involved | `/get-involved/` | Contact form (HubSpot), newsletter, social links |
| Donate | `/donate/` | Amount picker linking to Anedot |
| Privacy Policy | `/privacy/` | Counsel-approved policy effective 4 November 2026, linked from every footer |

A custom 404 page, `llms.txt`, `robots.txt`, and the sitemap are also included.

### Insights articles (23)

- Americans are trying to eat healthier. The data tells a more complicated story. (Oct 2026)
- Calories in, calories out? What a new ultra-processed food study found. (Oct 2026)
- What Amish communities can teach us about chronic disease prevention (Oct 2026)
- California update: two End Chronic Disease-backed bills signed into law (Oct 2026)
- Back-to-school season brings renewed attention to student cellphone and screen use (Oct 2026)
- Why did taxi and ambulance drivers have the lowest share of Alzheimer's deaths? (Oct 2026)
- Volume on the recess conversation amplifies as parents and policymakers push for more play (Aug 2026)
- Alabama schools report great progress and cultural shifts after one year of phone-free classrooms (Aug 2026)
- California neurodegenerative disease registry bill moves forward; new momentum on dementia research, prevention, and early detection (Aug 2026)
- Play, passion, literature, arts: can these help fight chronic disease? (Aug 2026)
- Journalism spotlight: Staten Island investigates its local cancer crisis (Aug 2026)
- AAP calls for universal school meals nationwide (Jul 2026)
- Illinois advances statewide classroom cellphone restrictions; New York celebrates success from bell-to-bell bans (Jul 2026)
- Groundbreaking "food is medicine" study reduces hospitalizations among Medicaid recipients by 31% (Jul 2026)
- End Chronic Disease continues to elevate recess as a public health priority (Jul 2026)
- Journalism spotlight: "The number of people with Parkinson's is exploding. Are chemicals to blame?" (Jul 2026)
- Mike Mooney joins Fox & Friends to discuss his Parkinson's battle (Jul 2026)
- Bipartisan Vermont bill to phase out paraquat marks a major public health milestone (May 2026)
- Los Angeles Unified School District announces sweeping plan to reduce classroom screen time (May 2026)
- AAP issues first updated recess guidance in more than a decade as the national recess debate intensifies (May 2026)
- Kansas governor vetoes recess bill (May 2026)
- Texas launches $60 million rural health prevention initiative (May 2026)
- Kelly McKenna introduces Arthur Brooks at national youth health summit sponsored by End Chronic Disease (May 2026)

### Design system

- Typefaces: Chronicle Display for narrative prose (Newsreader stands in until the Chronicle webfonts are installed), Graphik for headlines, navigation, data, and interface text, Coming Soon for eyebrows, annotations, and large statistics.
- Color: sky blue #6FA4E2 higher on the page, earth green #67A081 lower; charcoal #757575 body text, #848484 secondary.
- Layout: one 1240px content axis with 56px section padding on every page; a separate `mobile.css` adapts every page below tablet width.
- Content rules: sentence-case headings, Oxford comma, no em dashes, advocacy attributed to the 501(c)(4) affiliate, no invented statistics.

### Integrations

- Google Analytics (G-VWQH92XELT)
- HubSpot tracking; contact and newsletter submissions create HubSpot contacts
- Netlify Forms also records every contact form submission as a backup
- Anedot for donations
- Candid Seal of Transparency in the footer, linking to ECD's Candid profile

### Image licensing

Every photograph on the site has a recorded source and licence in `PHOTO-CREDITS.md` at the repo root (Unsplash, Adobe Stock, Vecteezy, Webflow library, or ECD's own). Two AI-generated images are kept by decision and marked REVIEW there.

## Changes that led up to 1.0 (September to November 2026)

- Site rebuilt from the Claude Design mockups into an Astro static site and moved from Webflow to Netlify.
- Mobile layouts for all pages, accessibility pass (landmarks, card headings, reduced-motion), and site-wide search.
- Insights section launched with 23 articles and an RSS feed.
- News archive extended to 59 items with filters, search, and an RSS feed.
- Team page bios updated with credentials, paragraph breaks, and external links.
- Photo licence audit completed; unlicensed and AI-generated images replaced with licensed Adobe Stock photographs.
- Privacy policy published and linked from every page.
- Final 1.0 tidy: Insights preview removed from News, hero carousel trimmed to 12 photos, children's chronic conditions chart removed from About, News card meta line fixed.

## Known follow-ups not part of 1.0

- Install the licensed Chronicle Display webfonts (Newsreader is the stand-in).
- Google Ad Grants application (privacy link requirement is now met).
- Wikidata entry and Candid profile alignment.
- Reduce-motion behavior check on iPhone.
- Remove the `/motion-check.html` test page.
