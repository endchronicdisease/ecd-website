import { loadNews } from '../../lib/news.mjs';
import { INSIGHTS } from '../../lib/insights.mjs';

// Search data generated at build time, so site search can never fall behind the content:
// every News item, every Insights article, and the pages added after the original index was written.
// /scripts/search.js loads this file the first time the search dialog is opened and merges it into
// its index. Record shape matches search.js: [section, kind, title, keywords, excerpt, page key, url].
export function GET() {
  const { DATA } = loadNews();
  const news = DATA.map((d) => ['News', d.k, d.t, [d.o, ...(d.g || []), d.d].join(', ').toLowerCase(), d.b || '', 'news', d.u]);
  const insights = INSIGHTS.map((it) => ['Insights', it.kind || 'Spotlight', it.title, ['insights', ...(it.topics || []), it.month].join(', ').toLowerCase(), it.blurb || '', 'insights', it.url]);
  const pages = [
    ['Insights', 'Page', 'Insights from End Chronic Disease', 'insights,explainers,spotlights,research,journalism,newsletter', 'Research explainers and spotlights on studies, policy, journalism, and events, written by End Chronic Disease.', 'insights'],
    ['Privacy', 'Page', 'Website privacy policy', 'privacy,privacy policy,cookies,data,analytics,personal information', 'How End Chronic Disease Institute, Inc. collects, uses, and protects information on this website.', 'privacy'],
    ['Terms', 'Page', 'Terms of service', 'terms,terms of service,terms of use,legal,conditions', 'The terms that govern use of this website and the services of End Chronic Disease Institute, Inc.', 'terms'],
  ];
  const js = 'window.ECD_SEARCH_DATA=' + JSON.stringify([...pages, ...insights, ...news]).replace(/</g, '\\u003c') + ';\n';
  return new Response(js, { headers: { 'Content-Type': 'application/javascript; charset=utf-8' } });
}
