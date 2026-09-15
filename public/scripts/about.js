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

  // Disease ribbons: each ribbon's text is the same list repeated several times, and the
  // SMIL animation slides it by exactly one list length before looping. The hand-set
  // distances drift from the real rendered width once the web font loads, which showed
  // as a small jump at every reset. Measure one repetition after fonts are ready and
  // drive the loop from that, keeping each ribbon's speed unchanged.
  function tuneRibbons() {
    document.querySelectorAll('.ecd-ribbons svg').forEach(function (svg) {
      svg.querySelectorAll('textPath').forEach(function (tp) {
        var anim = tp.querySelector('animate');
        var text = tp.parentNode;
        if (!anim || !text.getComputedTextLength) return;
        // Find the shortest prefix of the text that repeats to fill the whole string,
        // then measure that prefix as rendered.
        var str = tp.textContent;
        var period = 0;
        for (var p = 1; p <= str.length / 2; p++) {
          if (str.length % p !== 0) continue;
          var ok = true;
          for (var k = p; k < str.length; k += p) { if (str.substr(k, p) !== str.substr(0, p)) { ok = false; break; } }
          if (ok) {
            // getSubStringLength covers glyph advances only; the dx nudges on the spacer
            // tspans between items also move the text along the path, so add those.
            period = text.getSubStringLength(0, p);
            var seen = 0;
            for (var n = 0; n < tp.childNodes.length && seen < p; n++) {
              var node = tp.childNodes[n];
              if (node.nodeType === 1 && node.getAttribute('dx')) period += parseFloat(node.getAttribute('dx')) || 0;
              seen += node.textContent.length;
            }
            break;
          }
        }
        if (!period) return;
        var from = parseFloat(anim.getAttribute('from')) || 0;
        var to = parseFloat(anim.getAttribute('to')) || 0;
        var oldDist = Math.abs(to - from);
        var dur = parseFloat(anim.getAttribute('dur')) || 100;
        if (!oldDist) return;
        var speed = oldDist / dur;
        var f = period.toFixed(2);
        if (from === 0) { anim.setAttribute('to', '-' + f); } else { anim.setAttribute('from', '-' + f); tp.setAttribute('startOffset', '-' + f); }
        anim.setAttribute('dur', (period / speed).toFixed(2) + 's');
      });
      try { svg.setCurrentTime(0); } catch (e) {}
      svg.querySelectorAll('animate').forEach(function (a) { try { a.beginElement(); } catch (e) {} });
      try { svg.unpauseAnimations(); } catch (e) {}
    });
  }
  var ready = (document.fonts && document.fonts.ready) ? document.fonts.ready : Promise.resolve();
  ready.then(tuneRibbons, tuneRibbons);
})();
