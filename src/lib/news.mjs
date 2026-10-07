// Shared build-time loader for the News data file, used by the News page,
// the RSS feed and the structured data.
import fs from 'node:fs';
import vm from 'node:vm';
const MONTHS = {Jan:'01',Feb:'02',Mar:'03',Apr:'04',May:'05',Jun:'06',Jul:'07',Aug:'08',Sep:'09',Oct:'10',Nov:'11',Dec:'12'};
export function loadNews() {
  const src = fs.readFileSync(new URL('../../public/scripts/news-data.js', import.meta.url), 'utf8');
  const sandbox = { window: {} };
  vm.runInNewContext(src, sandbox);
  return sandbox.window.ECD_NEWS;
}
// 'Sep 2026' -> '2026-09' (display dates carry month precision only)
export function isoMonth(d) {
  const m = /^([A-Z][a-z]{2}) (\d{4})$/.exec(d || '');
  return m && MONTHS[m[1]] ? `${m[2]}-${MONTHS[m[1]]}` : null;
}
export function rfcDate(d) {
  const iso = isoMonth(d);
  return iso ? new Date(iso + '-01T12:00:00Z').toUTCString() : new Date().toUTCString();
}
export const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
