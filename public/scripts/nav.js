(function(){
  var nav = document.querySelector('.ecd-nav');
  if (!nav) return;
  var btn = nav.querySelector('.ecd-menu-btn');
  var links = nav.querySelector('.ecd-nav-links');
  if (!btn || !links) return;

  function setOpen(open){
    nav.classList.toggle('ecd-nav-open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  btn.addEventListener('click', function(){ setOpen(!nav.classList.contains('ecd-nav-open')); });
  document.addEventListener('keydown', function(e){ if (e.key === 'Escape') setOpen(false); });
  document.addEventListener('click', function(e){
    if (!nav.contains(e.target) || e.target.closest('#ecdSearchBtn')) setOpen(false);
  });
  var desktop = window.matchMedia('(min-width:901px)');
  desktop.addEventListener('change', function(m){ if (m.matches) setOpen(false); });
})();

// Analytics: record every click through to the Anedot donation page as a conversion.
(function () {
  document.addEventListener('click', function (e) {
    var a = e.target && e.target.closest ? e.target.closest('a[href*="secure.anedot.com"]') : null;
    if (!a || typeof window.gtag !== 'function') return;
    var m = /[?&]amount=(\d+)/.exec(a.href);
    var params = { link_url: a.href, link_text: (a.textContent || '').trim().slice(0, 60), page_location: location.href };
    if (m) { params.value = parseInt(m[1], 10); params.currency = 'USD'; }
    if (/frequency=monthly/.test(a.href)) params.frequency = 'monthly';
    window.gtag('event', 'donate_click', params);
  }, true);
})();
