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

  // Disease ribbons. Each ribbon's text is one list repeated several times along a path, and
  // the loop is seamless only if the text slides by exactly one repetition before wrapping.
  // The markup's SMIL <animate> carries hand-set distances that drift from the rendered width
  // once the web font loads, and restarting the animation with corrected values made the
  // ribbons visibly snap back to the start. So, once the ribbon font is available:
  //  1. measure one repetition from the rendered glyph advances plus the spacer nudges;
  //  2. take over from SMIL at the ribbon's current position and drive startOffset from
  //     requestAnimationFrame at the same speed, wrapping by that exact period.
  // Nothing restarts, so the hand-off and every wrap are invisible.
  function repeatUnit(tp) {
    // Shortest prefix (in characters) that repeats to make the whole string, and the index of
    // the last child node that completes it (the boundary falls on a spacer tspan).
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
      if (seen === p) return { chars: p, lastNode: i };
      if (seen > p) break;
    }
    return { chars: p, lastNode: -1 };
  }
  function measurePeriod(text, tp, unit) {
    // Glyph advances of one repetition plus the dx nudges on the spacer tspans. Checked against
    // the browser's own layout: glyph positions one period apart match to within 0.001 units,
    // whereas an ink-to-ink width measured on straight text is about 0.35 units off on the path.
    var period = text.getSubStringLength(0, unit.chars), seen = 0;
    for (var n = 0; n < tp.childNodes.length && seen < unit.chars; n++) {
      var node = tp.childNodes[n];
      if (node.nodeType === 1 && node.getAttribute('dx')) period += parseFloat(node.getAttribute('dx')) || 0;
      seen += node.textContent.length;
    }
    return period;
  }
  var ribbons = [], rafOn = false, last = null;
  function frame(now) {
    if (last !== null) {
      var dt = Math.min(0.1, (now - last) / 1000);
      ribbons.forEach(function (r) {
        r.offset += r.dir * r.speed * dt;
        // keep the offset within (-period, 0]: identical picture either side of the wrap
        while (r.offset <= -r.period) r.offset += r.period;
        while (r.offset > 0) r.offset -= r.period;
        r.tp.setAttribute('startOffset', r.offset.toFixed(3));
      });
    }
    last = now;
    if (rafOn) requestAnimationFrame(frame);
  }
  function tuneRibbons() {
    document.querySelectorAll('.ecd-ribbons svg').forEach(function (svg) {
      svg.querySelectorAll('textPath').forEach(function (tp) {
        var text = tp.parentNode, unit = repeatUnit(tp);
        if (!unit || !text.getSubStringLength) return;
        var period = measurePeriod(text, tp, unit);
        if (!period || !isFinite(period)) return;
        var r = ribbons.filter(function (x) { return x.tp === tp; })[0];
        if (r) {
          // Font arrived later than expected: adopt the new period. The offset stays where it
          // is, so nothing moves; only the wrap point changes.
          r.period = period;
          return;
        }
        var anim = tp.querySelector('animate');
        var from = anim ? parseFloat(anim.getAttribute('from')) || 0 : 0;
        var to = anim ? parseFloat(anim.getAttribute('to')) || 0 : -period;
        var dur = anim ? parseFloat(anim.getAttribute('dur')) || 100 : 100;
        var speed = Math.abs(to - from) / dur || 9;
        // Current position under SMIL, then take over from exactly there.
        var offset = tp.startOffset && tp.startOffset.animVal ? tp.startOffset.animVal.value : parseFloat(tp.getAttribute('startOffset')) || 0;
        if (anim) anim.remove();
        ribbons.push({ tp: tp, dir: to < from ? -1 : 1, speed: speed, period: period, offset: offset });
        tp.setAttribute('startOffset', offset.toFixed(3));
      });
    });
    if (ribbons.length && !rafOn && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      rafOn = true;
      requestAnimationFrame(frame);
    }
  }
  document.addEventListener('visibilitychange', function () { if (!document.hidden) last = null; });
  // Ask for the ribbon face explicitly: document.fonts.ready can resolve before a face that
  // nothing has requested yet starts loading, and a measurement in the fallback font is wrong.
  var fonts = document.fonts;
  var ready = fonts && fonts.load ? fonts.load("600 15.3px Graphik").then(function () { return fonts.ready; }) : Promise.resolve();
  ready.then(tuneRibbons, tuneRibbons);
  if (fonts && fonts.addEventListener) fonts.addEventListener('loadingdone', tuneRibbons);
})();
