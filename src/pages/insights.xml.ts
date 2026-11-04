import { INSIGHTS, esc } from '../lib/insights.mjs';
export function GET() {
  const SITE = 'https://www.endchronicdisease.org';
  const items = INSIGHTS.map((it) => `    <item>
      <title>${esc(it.title)}</title>
      <link>${SITE}${esc(it.url)}</link>
      <guid isPermaLink="true">${SITE}${esc(it.url)}</guid>
      <description>${esc(it.blurb)}</description>
      <pubDate>${new Date(it.date + 'T12:00:00Z').toUTCString()}</pubDate>
${it.topics.map((g) => `      <category>${esc(g)}</category>`).join('\n')}
      <enclosure url="${SITE}${esc(it.image)}" type="image/webp" length="0" />
    </item>`).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Insights from End Chronic Disease</title>
    <link>${SITE}/insights/</link>
    <atom:link href="${SITE}/insights.xml" rel="self" type="application/rss+xml" />
    <description>Research explainers and spotlights from End Chronic Disease: what new studies found, and the policy moves, journalism, and events shaping prevention.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
