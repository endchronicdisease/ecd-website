(function () {
  // Hero montage: every slide and dot shares one 90s CSS keyframe cycle.
  // Seeking the whole animation group by currentTime keeps them in lockstep,
  // so a dot click and the random opening slide use the same mechanism.
  var el = document.getElementById('ecdMontage');
  if (!el || !el.getAnimations) return;
  requestAnimationFrame(function () {
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
      var t = index * (90000 / count) + 400;
      anims.forEach(function (a) { try { a.currentTime = t; } catch (err) {} });
    }
    dots.forEach(function (dot, i) {
      var go = function (e) { e.preventDefault(); seek(i); };
      dot.addEventListener('click', go);
      dot.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') go(e);
      });
    });
    seek(Math.floor(Math.random() * count));
  });
})();
