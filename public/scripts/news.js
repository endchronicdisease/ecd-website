/* News page behavior. Requires /scripts/news-data.js to be loaded first (it defines window.ECD_NEWS).
   Works with <script defer>; also safe if loaded while the document is still parsing. */
(function () {
  'use strict';

  function init() {
    if (!window.ECD_NEWS) return;
    var CDN = window.ECD_NEWS.CDN;
    var DATA = window.ECD_NEWS.DATA;

    var LOC = {
      'Arizona State House':'Arizona','FOX 11 Los Angeles':'California','FOX LA':'California','FOX40':'California',
      'Gold Mountain California News':'California','KABC':'California','KRON':'California','KTLA 5':'California',
      'Los Angeles Daily News':'California','Sacramento Bee':'California','Fox 5 DC':'Washington, DC',
      'WUSA 9':'Washington, DC','CBS 6 Albany':'New York','City & State New York':'New York','New York Post':'New York',
      'KCTV 5':'Missouri','WHAS 11':'Indiana','KTNV':'Nevada','WAND News':'Illinois','Good Day Alabama':'Alabama',
      'Rutland Herald':'Vermont','Champions for Youth':'Virginia','Spectrum News':'New York'
    };
    var nationalDefault = 'National';
    var VERB = {TV:'Watch on', Testimony:'Watch on', Podcast:'Listen on', Radio:'Listen on', Article:'Read in', 'Op-ed':'Read in', Poll:'Read'};
    var THE = ['New York Post','Sacramento Bee','Wall Street Journal','Washington Examiner'];
    // Shared editorial finish for card thumbnails: ~5% perceptual lift, no colour cast.
    var BASE_FINISH = 'brightness(1.015) contrast(.972) saturate(.985)';

    var state = {topic: [], type: 'All types', outlet: 'All outlets', place: 'All locations', q: ''};

    function locsOf(d) { return [LOC[d.o] || nationalDefault].concat(d.L || []); }
    function kindsOf(d) { return [d.k].concat(d.K || []); }
    function ctaFor(d) {
      return d.o === 'End Chronic Disease' ? 'View poll'
        : (VERB[d.k] || 'Read in') + ' ' + (THE.indexOf(d.o) >= 0 ? 'the ' + d.o : d.o);
    }
    function finish(x) { return x ? x + ' ' + BASE_FINISH : BASE_FINISH; }
    function esc(s) {
      return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }

    // Static option lists (computed from DATA once; they do not change with filtering).
    var topics = [];
    DATA.forEach(function (d) { d.g.forEach(function (g) { if (topics.indexOf(g) < 0) topics.push(g); }); });
    topics.sort();
    var typeOptions = ['All types'].concat(DATA.reduce(function (a, d) { return a.concat(kindsOf(d)); }, []).filter(function (k, i, a) { return a.indexOf(k) === i; }).sort());
    var outletOptions = ['All outlets'].concat(DATA.map(function (d) { return d.o; }).filter(function (k, i, a) { return a.indexOf(k) === i; }).sort());
    var placeOptions = ['All locations'].concat(DATA.reduce(function (a, d) { return a.concat(locsOf(d)); }, []).filter(function (k, i, a) { return a.indexOf(k) === i; }).sort(function (a, b) { return a === 'National' ? -1 : b === 'National' ? 1 : a.localeCompare(b); }));

    var elSearch = document.getElementById('news-search');
    var elClear = document.getElementById('ecdNewsClear');
    var elChips = document.getElementById('ecdNewsChips');
    var elType = document.getElementById('ecdNewsType');
    var elOutlet = document.getElementById('ecdNewsOutlet');
    var elPlace = document.getElementById('ecdNewsPlace');
    var elDirty = document.getElementById('ecdNewsDirty');
    var elSummary = document.getElementById('ecdNewsSummary');
    var elItems = document.getElementById('ecdNewsItems');
    var elEmpty = document.getElementById('ecdNewsEmpty');
    if (!elSearch || !elChips || !elType || !elOutlet || !elPlace || !elSummary || !elItems || !elEmpty || !elClear || !elDirty) return;

    function fillSelect(sel, options) {
      sel.innerHTML = options.map(function (o) {
        return '<option value="' + esc(o) + '">' + esc(o) + '</option>';
      }).join('\n');
    }
    fillSelect(elType, typeOptions);
    fillSelect(elOutlet, outletOptions);
    fillSelect(elPlace, placeOptions);

    function render() {
      var type = state.type, outlet = state.outlet, place = state.place, q = state.q;
      var terms = q.trim().toLowerCase().split(/\s+/).filter(Boolean);
      function hay(d) {
        return {
          title: d.t.toLowerCase(),
          tags: d.g.join(' ').toLowerCase(),
          outlet: d.o.toLowerCase(),
          kind: kindsOf(d).join(' ').toLowerCase(),
          place: locsOf(d).join(' ').toLowerCase(),
          body: (d.b || '').toLowerCase()
        };
      }
      function score(d) {
        if (!terms.length) return 1;
        var f = hay(d);
        var total = 0;
        for (var i = 0; i < terms.length; i++) {
          var t = terms[i];
          var s = 0;
          if (f.title.indexOf(t) >= 0) s += 100;
          if (f.tags.indexOf(t) >= 0) s += 40;
          if (f.outlet.indexOf(t) >= 0) s += 30;
          if (f.kind.indexOf(t) >= 0) s += 20;
          if (f.place.indexOf(t) >= 0) s += 15;
          if (f.body.indexOf(t) >= 0) s += 8;
          if (!s) return 0;
          total += s;
        }
        return total;
      }
      function matchTO(d) {
        return (type === 'All types' || kindsOf(d).indexOf(type) >= 0) && (outlet === 'All outlets' || d.o === outlet) && (place === 'All locations' || locsOf(d).indexOf(place) >= 0);
      }

      var sel = Array.isArray(state.topic) ? state.topic : (state.topic === 'All' ? [] : [state.topic]);

      // Chips
      var chipsHtml = ['All'].concat(topics).map(function (label) {
        var on = label === 'All' ? sel.length === 0 : sel.indexOf(label) >= 0;
        var count = DATA.filter(function (d) { return (label === 'All' || d.g.indexOf(label) >= 0) && matchTO(d) && score(d) > 0; }).length;
        var bg = on ? '#6FA4E2' : '#ffffff', fg = on ? '#ffffff' : '#757575', bd = on ? '#6FA4E2' : '#DBD6CE';
        return '<button type="button" data-chip="' + esc(label) + '" style="display:inline-flex;align-items:baseline;gap:8px;padding:12px 18px;border-radius:999px;cursor:pointer;font:600 14px/1 \'Graphik\',\'Hanken Grotesk\',sans-serif;background:' + bg + ';color:' + fg + ';border:1.5px solid ' + bd + '">\n' +
          '<span>' + esc(label) + '</span>\n' +
          '<span style="font-weight:400;opacity:.65">' + count + '</span>\n' +
          '</button>';
      }).join('\n');
      elChips.innerHTML = chipsHtml;

      // Items
      var filtered = DATA.filter(function (d) { return (sel.length === 0 || sel.some(function (t) { return d.g.indexOf(t) >= 0; })) && matchTO(d) && score(d) > 0; });
      if (terms.length) filtered = filtered.slice().sort(function (a, b) { return score(b) - score(a); });

      elItems.innerHTML = filtered.map(function (d) {
        var it = {title: d.t, outlet: d.o, kind: d.k, date: d.d, url: d.u, img: CDN + d.i, blurb: d.b, cta: ctaFor(d), zoom: d.z ? 'scale(1.05) translateY(1.5%)' : 'none', filter: finish(d.x), fit: d.f ? 'contain' : 'cover'};
        return '<a class="ecd-card" href="' + esc(it.url) + '" target="_blank" rel="noopener" style="display:block;text-decoration:none">\n' +
          '<span style="display:block;background:#E6E2DA;border-radius:12px;overflow:hidden;aspect-ratio:16/10"><img loading="lazy" src="' + esc(it.img) + '" alt="" style="width:100%;height:100%;object-fit:' + it.fit + ';display:block;transform:' + it.zoom + ';filter:' + it.filter + '"></span>\n' +
          '<span style="display:block;margin:18px 0 0;line-height:1.45">\n' +
          '<span style="font:600 14.5px/1 \'Graphik\',\'Hanken Grotesk\',sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#6FA4E2">' + esc(it.kind) + '</span>\n' +
          '<span aria-hidden="true" style="font:400 14.5px/1 \'Graphik\',\'Hanken Grotesk\',sans-serif;color:#B4AFA6;margin:0 5px">|</span>\n' +
          '<span style="font:500 14.5px/1.45 \'Graphik\',\'Hanken Grotesk\',sans-serif;letter-spacing:.09em;text-transform:uppercase;color:#6B6763">' + esc(it.outlet) + '</span>\n' +
          '<span style="font:400 14.5px/1.45 \'Graphik\',\'Hanken Grotesk\',sans-serif;color:#757575;white-space:nowrap"><span aria-hidden="true" style="color:#B4AFA6;margin:0 5px">|</span>' + esc(it.date) + '</span>\n' +
          '</span>\n' +
          '<span class="ecd-card-t" style="display:block;margin:10px 0 0;font:600 21px/1.26 \'Graphik\',\'Hanken Grotesk\',sans-serif;letter-spacing:-.014em;color:#757575;text-wrap:pretty">' + esc(it.title) + '</span>\n' +
          '<span class="ecd-card-b" style="display:block;margin:10px 0 0;font:400 17px/1.6 \'Chronicle Display\',\'Newsreader\',Georgia,serif;color:#757575;text-wrap:pretty">' + esc(it.blurb) + '</span>\n' +
          '</a>';
      }).join('\n');

      // Summary
      var bits = [];
      if (sel.length) bits.push(sel.map(function (t) { return t.toLowerCase(); }).join(' + '));
      if (type !== 'All types') bits.push(type);
      if (outlet !== 'All outlets') bits.push(outlet);
      if (place !== 'All locations') bits.push(place);
      if (terms.length) bits.unshift('“' + q.trim() + '”');
      elSummary.textContent = filtered.length + (filtered.length === 1 ? ' story' : ' stories') + (bits.length ? ' · ' + bits.join(' · ') : '');

      // Empty state
      var emptyMsg = terms.length ? 'No stories match your search. Try another term or clear your filters.' : 'Nothing matches those filters yet';
      elEmpty.innerHTML = filtered.length === 0 ?
        '<div style="padding:70px 0;text-align:center">\n' +
        '<div style="font:400 30px/1.2 \'Coming Soon\',cursive;color:#848484">' + esc(emptyMsg) + '</div>\n' +
        '<button type="button" data-action="reset" style="margin:20px 0 0;background:none;border:none;cursor:pointer;padding:0;font:600 13px/1 \'Graphik\',\'Hanken Grotesk\',sans-serif;letter-spacing:.1em;text-transform:uppercase;color:#6FA4E2">Clear all filters</button>\n' +
        '</div>' : '';

      // Clear-search button (only while there is a query)
      var hasQuery = q.trim().length > 0;
      elClear.innerHTML = hasQuery ?
        '<button type="button" data-action="clear-query" aria-label="Clear search" style="position:absolute;right:8px;top:50%;transform:translateY(-50%);width:30px;height:30px;display:flex;align-items:center;justify-content:center;background:none;border:none;cursor:pointer;font:400 19px/1 \'Graphik\',\'Hanken Grotesk\',sans-serif;color:#9a9a9a">&times;</button>' : '';

      // Clear-all button (only while any filter is active)
      var dirty = sel.length > 0 || type !== 'All types' || outlet !== 'All outlets' || place !== 'All locations' || q.trim().length > 0;
      elDirty.innerHTML = dirty ?
        '<button type="button" data-action="reset" style="background:none;border:none;cursor:pointer;padding:0;font:600 13px/1 \'Graphik\',\'Hanken Grotesk\',sans-serif;letter-spacing:.1em;text-transform:uppercase;color:#6FA4E2">Clear all</button>' : '';

      // Controls reflect state
      if (elSearch.value !== state.q) elSearch.value = state.q;
      elType.value = state.type;
      elOutlet.value = state.outlet;
      elPlace.value = state.place;
    }

    function setState(patch) {
      for (var k in patch) { if (Object.prototype.hasOwnProperty.call(patch, k)) state[k] = patch[k]; }
      render();
    }
    function reset() {
      setState({topic: [], type: 'All types', outlet: 'All outlets', place: 'All locations', q: ''});
    }

    elSearch.addEventListener('input', function (e) { setState({q: e.target.value}); });
    elType.addEventListener('change', function (e) { setState({type: e.target.value}); });
    elOutlet.addEventListener('change', function (e) { setState({outlet: e.target.value}); });
    elPlace.addEventListener('change', function (e) { setState({place: e.target.value}); });

    elChips.addEventListener('click', function (e) {
      var btn = e.target;
      while (btn && btn !== elChips && !(btn.hasAttribute && btn.hasAttribute('data-chip'))) btn = btn.parentNode;
      if (!btn || btn === elChips) return;
      var label = btn.getAttribute('data-chip');
      var sel = state.topic;
      setState({topic: label === 'All' ? [] :
        (sel.indexOf(label) >= 0 ? sel.filter(function (x) { return x !== label; }) : sel.concat([label]))});
    });
    elClear.addEventListener('click', function (e) {
      var btn = e.target;
      while (btn && btn !== elClear && !(btn.getAttribute && btn.getAttribute('data-action') === 'clear-query')) btn = btn.parentNode;
      if (!btn || btn === elClear) return;
      setState({q: ''});
    });
    function resetHandler(container) {
      return function (e) {
        var btn = e.target;
        while (btn && btn !== container && !(btn.getAttribute && btn.getAttribute('data-action') === 'reset')) btn = btn.parentNode;
        if (!btn || btn === container) return;
        reset();
      };
    }
    elDirty.addEventListener('click', resetHandler(elDirty));
    elEmpty.addEventListener('click', resetHandler(elEmpty));

    render();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
