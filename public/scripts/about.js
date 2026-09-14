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
      var factor = /^(\d{4}|\d+%)$/.test(s) ? 1.8 : 1.35;
      t.style.fontSize = (size * factor).toFixed(1) + 'px';
    });
  }

  requestAnimationFrame(function () {
    document.querySelectorAll('.ecd-ribbons svg').forEach(function (svg) {
      try { svg.setCurrentTime(0); } catch (e) {}
      svg.querySelectorAll('animate').forEach(function (a) { try { a.beginElement(); } catch (e) {} });
      try { svg.unpauseAnimations(); } catch (e) {}
    });
  });
})();
