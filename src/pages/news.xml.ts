import { loadNews, rfcDate, esc } from '../lib/news.mjs';

// RSS feed of the News page, newest first. Dates carry month precision only,
// so each item is stamped the first of its month.
export function GET() {
  const { CDN, DATA } = loadNews();
  const SITE = 'https://www.endchronicdisease.org';
  const items = DATA.map((d) => `    <item>
      <title>${esc(d.t)}</title>
      <link>${esc(d.u)}</link>
      <guid isPermaLink="true">${esc(d.u)}</guid>
      <description>${esc(d.b)}</description>
      <pubDate>${rfcDate(d.d)}</pubDate>
      <source url="${SITE}/news.xml">${esc(d.o)}</source>
${d.g.map((g) => `      <category>${esc(g)}</category>`).join('\n')}
      <enclosure url="${SITE}${CDN}${esc(d.i)}" type="image/webp" length="0" />
    </item>`).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>End Chronic Disease in the news</title>
    <link>${SITE}/news/</link>
    <atom:link href="${SITE}/news.xml" rel="self" type="application/rss+xml" />
    <description>Press coverage, interviews, and commentary from End Chronic Disease.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
