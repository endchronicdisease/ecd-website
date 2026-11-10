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
  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape') { if (nav.classList.contains('ecd-nav-open')) { setOpen(false); btn.focus(); } return; }
    // The links sit before the menu button in the markup, so an open menu needs its own Tab order:
    // button, then the links top to bottom, then back to the button with the menu closed.
    if (e.key !== 'Tab' || !nav.classList.contains('ecd-nav-open')) return;
    var items = Array.prototype.filter.call(links.querySelectorAll('a[href],button'), function (n) { return n.offsetParent !== null; });
    if (!items.length) return;
    var active = document.activeElement;
    if (!e.shiftKey && active === btn) { e.preventDefault(); items[0].focus(); }
    else if (e.shiftKey && active === items[0]) { e.preventDefault(); btn.focus(); }
    else if (e.shiftKey && active === btn) { e.preventDefault(); items[items.length - 1].focus(); }
    else if (!e.shiftKey && active === items[items.length - 1]) { e.preventDefault(); setOpen(false); btn.focus(); }
  });
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
