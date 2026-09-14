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
