# ECD 1.0.1

The End Chronic Disease website as it stood on 12 November 2026. This version replaces ECD 1.0 as the reference copy of the site: it adds the Terms of Service, the accessibility and loading work, and the fixes from the pre-submission QA sweep, including a News page fault that is present in the 1.0 copy.

| | |
|---|---|
| Live site | https://www.endchronicdisease.org |
| Git tag | `v1.0.1` on commit `d29df01` (committed 11 November 2026) |
| GitHub tag page | https://github.com/endchronicdisease/ecd-website/releases/tag/v1.0.1 |
| Previous version | `v1.0` on commit `f1b28c5`, documented in `ECD-1.0.md` |
| Hosting | Netlify, built automatically from the `main` branch |
| Framework | Astro 5 static site, no CMS, vanilla JavaScript |
| Pages in the sitemap | 33 |
| Commits since the repo began (10 September 2026) | 168 |

## How to get back to this exact version

- **In GitHub**: open the `v1.0.1` tag. The source code zip there is the site at this point.
- **On a computer with the repo**: `git checkout v1.0.1` shows the files as they were. `git checkout main` returns to the current site.
- **Offline copy**: the `ECD 1.0.1` folder in the website build project holds a zip of the built site, a zip of the source code, and full-page captures of the ten main pages at desktop and phone widths. The built site zip can be opened locally or uploaded to any static host without a build step.

The built site zip was checked against the live site on 12 November 2026. All 33 pages and the 404 page are identical, apart from the contact form tag on Get Involved, which Netlify rewrites when it publishes.

## What changed since 1.0

### Fixed

- **News page duplicates.** A tag error in the News card template, introduced with the last 1.0 change on 6 November, made every story appear a second time below the grid at full width. Fixed on 10 November. The 1.0 tag and the `ECD 1.0` folder still contain the fault.
- **Farm to Fork Radio link.** The dead episode link now goes to the producer's main page.
- **Layout and structure.** Phone layouts for the About hero panel, lifespan rows, and chart titles; wrapped button labels; footer spacing on Get Involved, Privacy, Terms, and the 404 page; the page landmark on Home; and "501(c)(3)", "501(c)(4)", and the EIN no longer break across lines.
- **Home.** The "See all of our work" button lines up with the right edge of the third photo tile.
- **Test page removed.** `/motion-check.html` is gone.

### Added

- **Terms of Service** at `/terms/`, from counsel's document dated 6 November 2026, linked from every footer below the Privacy Policy. The page uses "website" where counsel's PDF has "web site"; the text is otherwise as supplied.
- **Candid Platinum Seal of Transparency 2026** in the footer, replacing the Bronze seal.
- **Pause controls** for the Home hero slideshow, the Home press logo strip, and the About ribbons.
- **Search** now covers every Insights article, every News item, the Privacy Policy, and the Terms of Service.
- **News filter links.** A News address can carry a topic, outlet, type, place, or search term, and the filters appear without JavaScript.

### Changed

- **Advocacy wording.** Bills and lobbying in six Insights articles are attributed to "End Chronic Disease's affiliated 501(c)(4)". The California article's headline changed to match.
- **Keyboard and screen reader use.** Focus stays inside an open Team bio, the phone menu follows its visual order, Escape returns focus to the menu button, the Donate amount buttons announce which is selected, and the custom amount field shows focus.
- **Loading.** On phones the Home hero photograph loads before analytics, press logos, and secondary fonts, with a smaller phone version of the tissue photograph on Home and About. Fallback fonts are matched in size so text does not shift when the real fonts arrive.

## What the 1.0.1 site contains

### Main pages (10)

| Page | Path | Notes |
|---|---|---|
| Home | `/` | 12-photo hero montage with pause control, "as seen in" press strip, mission, pillars, featured work, newsletter sign-up |
| About | `/about/` | Disease ribbons, prevalence statistics, younger-adults chart, spending figure, ten factors, prevention narrative |
| Our Work | `/our-work/` | Educate, Advocate, Inspire; state reach map; program detail |
| Team | `/team/` | Staff and board bios with modals and external links |
| Insights | `/insights/` | Hub for 23 ECD-written articles with RSS feed at `/insights.xml` |
| News | `/news/` | 59 press items across 36 outlets with filters and search; RSS feed at `/news.xml` |
| Get Involved | `/get-involved/` | Contact form (HubSpot), newsletter, social links |
| Donate | `/donate/` | Amount picker linking to Anedot |
| Privacy Policy | `/privacy/` | Counsel-approved policy effective 4 November 2026, linked from every footer |
| Terms of Service | `/terms/` | Counsel-supplied terms, linked from every footer |

A custom 404 page, `llms.txt`, `robots.txt`, and the sitemap are also included.

### Insights articles (23)

The same 23 articles as 1.0. One headline changed: "California update: two bills backed by End Chronic Disease's affiliated 501(c)(4) signed into law" (Oct 2026).

### Design system

Unchanged from 1.0: Chronicle Display for narrative prose (Newsreader stands in until the Chronicle webfonts are installed), Graphik for headlines, navigation, data, and interface text, Coming Soon for eyebrows, annotations, and large statistics; sky blue #6FA4E2 and earth green #67A081; one 1240px content axis with 56px section padding.

### Integrations

- Google Analytics (G-VWQH92XELT)
- HubSpot tracking; contact and newsletter submissions create HubSpot contacts
- Netlify Forms also records every contact form submission as a backup
- Anedot for donations
- Candid Platinum Seal of Transparency 2026 in the footer, linking to ECD's Candid profile

## Checks run on this version

- **QA sweep, 10 November**: 34 pages at four screen widths on the live site, with no script errors, no broken images, no sideways scrolling, and no unbalanced HTML.
- **Accessibility (WCAG 2.1 A and AA, automated)**: the only remaining finding is color contrast on the brand blue, green, and grey text. Pause controls, the Team bio focus trap, the phone menu order, and the Donate picker were tested with real key presses.
- **Google Ad Grants website policy**: reviewed on 10 November; no outstanding items after the Farm to Fork link change.
- **Home on a slow phone connection**: Lighthouse mobile performance 99 to 100.

## Notes on the offline copy

- The phone captures of News and the Terms of Service stop at 16,000 pixels, the tallest image the capture tool produces. The desktop captures of both are complete.
- The `ECD 1.0` folder is kept for the record. Its files are unchanged apart from the release notes, which now point to this version.

## Known follow-ups not part of 1.0.1

- Decide on color contrast: darker shades for small blue, green, and grey text would clear the last automated accessibility finding.
- Install the licensed Chronicle Display webfonts (Newsreader is the stand-in).
- Submit the Google Ad Grants application.
- Captions on four YouTube videos are auto-generated only.
- The Illinois map and Staten Island chart in two Insights articles are hard to read on phones.
- Wikidata entry and Candid profile alignment.
- Reduce-motion behavior check on iPhone.
