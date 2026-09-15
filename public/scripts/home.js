(function () {
  // Press ticker. The CSS version animated a ~9000px strip behind a gradient mask,
  // which real iPhones redraw every frame and periodically stall on. Instead: keep one
  // set of logos, slide the strip by hand, and recycle each logo to the end as it
  // leaves the left edge, so the moving element stays small and the loop is seamless.
  var tape = document.querySelector('[style*="animation:ecdTicker"]');
  if (tape && tape.children.length >= 2) {
    var logos = Array.prototype.slice.call(tape.children);
    logos.slice(logos.length / 2).forEach(function (el) { el.remove(); });
    // Pick up from wherever the CSS animation has already carried the strip, so taking
    // over does not snap it back to the start.
    var x = 0, last = null, pxPerSec = 42;
    var m = /matrix\(([^)]+)\)/.exec(getComputedStyle(tape).transform || '');
    if (m) { var tx = parseFloat(m[1].split(',')[4]); if (isFinite(tx) && tx < 0) x = tx; }
    tape.classList.add('ecd-tape-js');
    tape.parentElement.classList.add('ecd-tape-wrap');
    tape.style.transform = 'translate3d(' + x.toFixed(2) + 'px,0,0)';
    function itemWidth(el) {
      var cs = getComputedStyle(el);
      return el.getBoundingClientRect().width + parseFloat(cs.marginLeft) + parseFloat(cs.marginRight);
    }
    function frame(now) {
      if (last !== null) {
        x -= pxPerSec * Math.min(0.05, (now - last) / 1000);
        var first = tape.firstElementChild, w = itemWidth(first);
        while (w > 0 && -x >= w) { x += w; tape.appendChild(first); first = tape.firstElementChild; w = itemWidth(first); }
        tape.style.transform = 'translate3d(' + x.toFixed(2) + 'px,0,0)';
      }
      last = now;
      requestAnimationFrame(frame);
    }
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) requestAnimationFrame(frame);
  }

  // Hero montage: every slide and dot shares one 67.2s CSS keyframe cycle.
  // Seeking the whole animation group by currentTime keeps them in lockstep.
  var el = document.getElementById('ecdMontage');
  if (!el || !el.getAnimations) return;
  (function () {
    var dots = Array.prototype.filter.call(el.querySelectorAll('span'), function (s) {
      return /ecdDot/.test(s.style.animationName || '');
    });
    if (!dots.length) return;
    var count = dots.length;
    var anims = el.getAnimations({ subtree: true }).filter(function (a) {
      return /ecdSlide|ecdDot/.test(a.animationName || '');
    });
    function seek(index) {
      // Land 400ms inside the slide's window: seeking to the exact keyframe boundary
      // leaves the dot highlight on either side of it depending on the browser.
      var t = index * (67200 / count) + 400;
      anims.forEach(function (a) { try { a.currentTime = t; } catch (err) {} });
    }
    dots.forEach(function (dot, i) {
      var go = function (e) { e.preventDefault(); seek(i); };
      dot.addEventListener('click', go);
      dot.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') go(e);
      });
    });
    // Touch: swipe left for the next photograph, right for the previous one. Only a
    // clearly horizontal gesture counts, so vertical scrolling over the hero is unaffected.
    var slot = 67200 / count, sx = 0, sy = 0, st = 0;
    function current() { return Math.floor(((anims[0] && anims[0].currentTime) || 0) / slot) % count; }
    el.addEventListener('touchstart', function (e) {
      if (e.touches.length !== 1) return;
      sx = e.touches[0].clientX; sy = e.touches[0].clientY; st = Date.now();
    }, { passive: true });
    el.addEventListener('touchend', function (e) {
      if (!st || e.changedTouches.length !== 1) return;
      var dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy, dt = Date.now() - st;
      st = 0;
      if (dt > 800 || Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy) * 1.5) return;
      seek((current() + (dx < 0 ? 1 : count - 1)) % count);
    }, { passive: true });

    // The opening slide is chosen by an inline script right after the montage markup,
    // so it is set before the first paint and no other slide flashes first.
  })();
})();
