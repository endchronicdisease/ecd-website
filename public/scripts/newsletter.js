(function () {
  // Newsletter signups submit to HubSpot (portal 50818861) via the Forms API,
  // keeping the designed inputs instead of an embedded iframe form.
  var PORTAL = '50818861';
  var FORM_GUID = '13d38552-7b0e-4e33-95d6-02387cb1674d'; // "Website — Newsletter Signup"
  var ENDPOINT = 'https://api.hsforms.com/submissions/v3/integration/submit/' + PORTAL + '/' + FORM_GUID;

  function getCookie(name) {
    var m = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
    return m ? decodeURIComponent(m[1]) : undefined;
  }

  document.querySelectorAll('[data-ecd-newsletter]').forEach(function (btn) {
    var input = document.getElementById(btn.getAttribute('data-ecd-newsletter'));
    if (!input) return;
    var originalLabel = btn.textContent;

    function submit() {
      var email = (input.value || '').trim();
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
        input.focus();
        input.style.outline = '2px solid #c96a5a';
        setTimeout(function () { input.style.outline = 'none'; }, 1800);
        return;
      }
      btn.disabled = true;
      btn.textContent = 'Signing up…';
      var payload = {
        fields: [{ objectTypeId: '0-1', name: 'email', value: email }],
        context: {
          // pageUri deliberately omitted: HubSpot marks submissions from a page domain it has
          // not finished registering as spam
          pageName: document.title,
          hutk: getCookie('hubspotutk')
        }
      };
      fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).then(function (r) {
        if (!r.ok) throw new Error('submit failed');
        btn.textContent = 'You’re in!';
        if (typeof window.gtag === 'function') window.gtag('event', 'newsletter_signup', { method: 'website_form', page_location: location.href });
        input.value = '';
        setTimeout(function () { btn.textContent = originalLabel; btn.disabled = false; }, 4000);
      }).catch(function () {
        btn.textContent = originalLabel;
        btn.disabled = false;
        alert('Sorry, something went wrong. Please try again, or email info@endchronicdisease.org.');
      });
    }

    btn.addEventListener('click', submit);
    input.addEventListener('keydown', function (e) { if (e.key === 'Enter') submit(); });
  });
})();
