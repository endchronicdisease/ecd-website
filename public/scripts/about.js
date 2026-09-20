(function () {
  // Younger-adults chart: on phones the SVG scales to a third of its size, so the
  // value and year labels are enlarged in SVG units to stay legible.
  var chart = document.querySelector('svg[viewBox="0 0 1060 476"]');
  if (chart && window.matchMedia('(max-width:600px)').matches) {
    chart.querySelectorAll('text').forEach(function (t) {
      if (t.closest('g[class^="ecd-hv-about"]')) return;
      var s = t.textContent.trim();
      var m = /font-size:([\d.]+)px/.exec(t.getAttribute('style') || '');
      var size = m ? parseFloat(m[1]) : parseFloat(t.getAttribute('font-size')) || 16;
      if (!/^(\d{4}|\d+%)$/.test(s)) return;
      var factor = 1.6;
      t.style.fontSize = (size * factor).toFixed(1) + 'px';
    });
  }

  // Disease ribbons. Each ribbon's text is one list repeated along a path. The obvious loop
  // (slide by one repetition, then jump back) is never quite seamless: the browser's rendered
  // advance per repetition differs from anything the DOM can measure by a few tenths of a unit,
  // and the difference changes with window size, so every wrap showed as a tick. Instead the
  // ribbons never wrap while anyone can see them:
  //  - the text is extended ahead of the motion by cloning one repetition, which leaves every
  //    glyph already on screen exactly where it is;
  //  - a repetition is removed from behind the motion (which shifts the whole string by one
  //    period and is the only step that could show) only while the ribbons are scrolled out of
  //    view, or, failing that, when the text has grown to its cap after many minutes in view;
  //  - each ribbon starts at a random point in its list so visitors see different names first.
  // Once the ribbon font is available the script takes over from the markup's SMIL animation,
  // keeping each ribbon's direction and speed.
  var REP_CAP = 10, RUNWAY = 5; // max repetitions kept; repetitions kept ahead of the motion
  function repeatUnit(tp) {
    var str = tp.textContent, p = 0;
    for (var q = 1; q <= str.length / 2; q++) {
      if (str.length % q !== 0) continue;
      var ok = true;
      for (var k = q; k < str.length; k += q) { if (str.substr(k, q) !== str.substr(0, q)) { ok = false; break; } }
      if (ok) { p = q; break; }
    }
    if (!p) return null;
    var nodes = tp.childNodes, seen = 0;
    for (var i = 0; i < nodes.length; i++) {
      seen += nodes[i].textContent.length;
      if (seen === p) return { chars: p, lastNode: i, reps: str.length / p };
      if (seen > p) break;
    }
    return null;
  }
  function measurePeriod(text, tp, unit) {
    // Glyph advances of one repetition plus the spacer nudges; close enough for bookkeeping.
    var period = text.getSubStringLength(0, unit.chars), seen = 0;
    for (var n = 0; n < tp.childNodes.length && seen < unit.chars; n++) {
      var node = tp.childNodes[n];
      if (node.nodeType === 1 && node.getAttribute('dx')) period += parseFloat(node.getAttribute('dx')) || 0;
      seen += node.textContent.length;
    }
    return period;
  }
  function appendRep(r) { r.unit.forEach(function (n) { r.tp.insertBefore(n.cloneNode(true), null); }); r.reps++; }
  function prependRep(r) {
    var first = r.tp.firstChild;
    r.unit.forEach(function (n) { r.tp.insertBefore(n.cloneNode(true), first); });
    r.reps++; r.offset -= r.period;
  }
  function dropFront(r) { for (var i = 0; i < r.unit.length; i++) r.tp.removeChild(r.tp.firstChild); r.reps--; r.offset += r.period; }
  function dropBack(r) { for (var i = 0; i < r.unit.length; i++) r.tp.removeChild(r.tp.lastChild); r.reps--; }
  var ribbons = [], rafOn = false, last = null, inView = true;
  function frame(now) {
    if (last !== null) {
      var dt = Math.min(0.1, (now - last) / 1000);
      ribbons.forEach(function (r) {
        r.offset += r.dir * r.speed * dt;
        var P = r.period, end = r.offset + r.reps * P; // arc position where the text ends
        if (r.dir < 0) {
          // Moving toward the start: grow the tail (free) to keep RUNWAY repetitions ahead; shed
          // the head out of view, or, at the cap, only once the runway is nearly used up.
          if (r.offset <= -2 * P && !inView) dropFront(r);
          else if (end < r.pathLen + RUNWAY * P) {
            if (r.reps < REP_CAP) appendRep(r);
            else if (r.offset <= -2 * P) dropFront(r);
          }
        } else {
          // Moving toward the end: keep repetitions queued before the path (prepending shifts
          // the string, so do it out of view or when nearly out of text), trim the tail freely.
          if (r.offset > -P && (!inView || r.offset > -0.2 * P)) prependRep(r);
          else if (r.offset > -RUNWAY * P && !inView && r.reps < REP_CAP) prependRep(r);
          if (end > r.pathLen + 2 * P && r.reps > 3) dropBack(r);
        }
        r.tp.setAttribute('startOffset', r.offset.toFixed(3));
      });
    }
    last = now;
    if (rafOn) requestAnimationFrame(frame);
  }
  function revealRibbons() {
    document.querySelectorAll('.ecd-ribbons').forEach(function (el) { el.classList.add('ecd-ribbons-ready'); });
  }
  function tuneRibbons() {
    document.querySelectorAll('.ecd-ribbons svg').forEach(function (svg) {
      svg.querySelectorAll('textPath').forEach(function (tp) {
        var text = tp.parentNode, unit = repeatUnit(tp);
        if (!unit || !text.getSubStringLength) return;
        var period = measurePeriod(text, tp, unit);
        if (!period || !isFinite(period)) return;
        var r = ribbons.filter(function (x) { return x.tp === tp; })[0];
        if (r) { r.period = period; return; } // a later font: only the bookkeeping changes
        var anim = tp.querySelector('animate');
        var from = anim ? parseFloat(anim.getAttribute('from')) || 0 : 0;
        var to = anim ? parseFloat(anim.getAttribute('to')) || 0 : -period;
        var dur = anim ? parseFloat(anim.getAttribute('dur')) || 100 : 100;
        var href = tp.getAttribute('href') || tp.getAttributeNS('http://www.w3.org/1999/xlink', 'href') || '';
        var path = href ? svg.querySelector(href) : null;
        var pathLen = path && path.getTotalLength ? path.getTotalLength() : 1300;
        if (anim) anim.remove();
        r = {
          tp: tp, dir: to < from ? -1 : 1, speed: Math.abs(to - from) / dur || 9, period: period,
          pathLen: pathLen, reps: unit.reps,
          unit: Array.prototype.slice.call(tp.childNodes, 0, unit.lastNode + 1).map(function (n) { return n.cloneNode(true); }),
          // Random start: somewhere within the first repetition. The text is still hidden at
          // this point (it is revealed below), so nothing visibly jumps.
          offset: -Math.random() * period
        };
        if (r.dir > 0) while (r.offset > -RUNWAY * r.period) prependRep(r);
        tp.setAttribute('startOffset', r.offset.toFixed(3));
        ribbons.push(r);
      });
    });
    revealRibbons();
    if (ribbons.length && !rafOn && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      rafOn = true;
      requestAnimationFrame(frame);
    }
  }
  document.addEventListener('visibilitychange', function () { if (!document.hidden) last = null; });
  if ('IntersectionObserver' in window) {
    var host = document.querySelector('.ecd-ribbons');
    if (host) new IntersectionObserver(function (entries) { inView = entries[0].isIntersecting; }, { rootMargin: '80px 0px' }).observe(host);
  }
  // Ask for the ribbon face explicitly: document.fonts.ready can resolve before a face that
  // nothing has requested yet starts loading, and a measurement in the fallback font is wrong.
  var fonts = document.fonts;
  var ready = fonts && fonts.load ? fonts.load("600 15.3px Graphik").then(function () { return fonts.ready; }) : Promise.resolve();
  ready.then(tuneRibbons, tuneRibbons);
  if (fonts && fonts.addEventListener) fonts.addEventListener('loadingdone', tuneRibbons);
  // Never leave the ribbons blank: if the font is very slow, show the text anyway after 3s.
  setTimeout(revealRibbons, 3000);
  if (fonts && fonts.addEventListener) fonts.addEventListener('loadingdone', tuneRibbons);
})();
