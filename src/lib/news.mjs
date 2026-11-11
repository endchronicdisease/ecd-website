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
// The topic chips and the three dropdowns are drawn by /scripts/news.js. Left empty in the HTML they
// appear only after the script runs and push the page down. This runs that same script at build time
// against stub elements and returns what it draws in its default state, so the page ships with the
// controls already in place and the script's own first render changes nothing. If the script ever
// needs something the stubs lack, this returns null and the page falls back to drawing them on load.
export function prerenderNewsControls() {
  try {
    const src = fs.readFileSync(new URL('../../public/scripts/news.js', import.meta.url), 'utf8');
    const els = {};
    const stub = (id) => els[id] || (els[id] = { id, innerHTML: '', textContent: '', value: '', addEventListener() {}, getAttribute() { return null; }, hasAttribute() { return false; } });
    const document = { readyState: 'complete', getElementById: stub, addEventListener() {} };
    vm.runInNewContext(src, { window: { ECD_NEWS: loadNews() }, document });
    const out = { chips: els.ecdNewsChips.innerHTML, type: els.ecdNewsType.innerHTML, outlet: els.ecdNewsOutlet.innerHTML, place: els.ecdNewsPlace.innerHTML };
    return out.chips && out.type && out.outlet && out.place ? out : null;
  } catch (e) {
    return null;
  }
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
