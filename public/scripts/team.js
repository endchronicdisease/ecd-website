(function () {
  var opener = null;

  function closeAll() {
    var wasOpen = document.querySelector('[data-ecd-modal]:not([hidden])');
    document.querySelectorAll('[data-ecd-modal]').forEach(function (m) { m.hidden = true; });
    document.body.style.overflow = '';
    if (wasOpen && opener) opener.focus();
    opener = null;
  }

  document.querySelectorAll('[data-ecd-open]').forEach(function (btn) {
    btn.setAttribute('aria-haspopup', 'dialog');
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      closeAll();
      var id = btn.getAttribute('data-ecd-open');
      var modal = document.querySelector('[data-ecd-modal="' + id + '"]');
      if (!modal) return;
      opener = btn;
      modal.hidden = false;
      document.body.style.overflow = 'hidden';
      modal.tabIndex = -1;
      modal.style.outline = 'none';
      modal.focus({ preventScroll: true });
    });
  });
  document.querySelectorAll('[data-ecd-close]').forEach(function (el) {
    el.addEventListener('click', function () { closeAll(); });
  });
  document.querySelectorAll('[data-ecd-stop]').forEach(function (el) {
    el.addEventListener('click', function (e) { e.stopPropagation(); });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { closeAll(); return; }
    if (e.key !== 'Tab') return;
    // Keep keyboard focus inside the open bio instead of letting it reach the page behind.
    var modal = document.querySelector('[data-ecd-modal]:not([hidden])');
    if (!modal) return;
    var items = Array.prototype.filter.call(modal.querySelectorAll('a[href],button:not([disabled]),[tabindex]:not([tabindex="-1"])'), function (n) { return n.offsetParent !== null; });
    if (!items.length) { e.preventDefault(); return; }
    var first = items[0], lastItem = items[items.length - 1], active = document.activeElement;
    if (!modal.contains(active) || active === modal) { e.preventDefault(); (e.shiftKey ? lastItem : first).focus(); }
    else if (e.shiftKey && active === first) { e.preventDefault(); lastItem.focus(); }
    else if (!e.shiftKey && active === lastItem) { e.preventDefault(); first.focus(); }
  });
})();
