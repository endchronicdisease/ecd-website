(function () {
  // Contact form. Submissions go to Netlify Forms (the form is declared with
  // data-netlify in the markup, so Netlify collects them at deploy time); the page
  // posts by fetch so the designed layout stays put and the result shows inline.
  var form = document.getElementById('ecdContactForm');
  if (!form) return;
  var status = document.getElementById('ecdContactStatus');
  var button = form.querySelector('button[type="submit"]');
  var message = form.querySelector('textarea[name="message"]');
  var counter = document.getElementById('ecdContactCount');
  var LIMIT = 1000;

  // HubSpot: every message becomes a (non-marketing) contact via the Website — Contact Us form;
  // ticking the newsletter box also submits to the newsletter form, which sets marketing status.
  var HS = 'https://api.hsforms.com/submissions/v3/integration/submit/50818861/';
  var HUBSPOT_CONTACT = HS + 'a368d23a-ca67-4092-bb75-baf8d1015a5b';
  var HUBSPOT = HS + '13d38552-7b0e-4e33-95d6-02387cb1674d';
  function hubspot(url, fields) {
    return fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ fields: fields, context: { pageUri: location.href, pageName: document.title } }) });
  }

  function count() {
    if (!counter || !message) return;
    var n = message.value.length;
    counter.textContent = n.toLocaleString('en-US') + ' / ' + LIMIT.toLocaleString('en-US');
    counter.style.color = n >= LIMIT ? '#c96a5a' : '#848484';
  }
  if (message) { message.addEventListener('input', count); count(); }

  function flag(el, on) {
    el.setAttribute('aria-invalid', on ? 'true' : 'false');
    el.style.borderColor = on ? '#c96a5a' : '#DBD6CE';
  }
  function say(text, ok) {
    if (!status) return;
    status.textContent = text;
    status.style.color = ok ? '#67A081' : '#c96a5a';
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var first = form.elements['first-name'], last = form.elements['last-name'], email = form.elements.email;
    var problems = [];
    [first, last, email, message].forEach(function (el) { flag(el, false); });
    if (!first.value.trim()) { flag(first, true); problems.push(first); }
    if (!last.value.trim()) { flag(last, true); problems.push(last); }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value.trim())) { flag(email, true); problems.push(email); }
    if (!message.value.trim()) { flag(message, true); problems.push(message); }
    if (message.value.length > LIMIT) { flag(message, true); problems.push(message); }
    if (problems.length) {
      say('Please add your first and last name, a valid email address, and a message.', false);
      problems[0].focus();
      return;
    }

    button.disabled = true;
    var original = button.textContent;
    button.textContent = 'Sending…';
    var data = new FormData(form);
    var wantsNewsletter = !!form.elements.newsletter && form.elements.newsletter.checked;

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(data).toString()
    }).then(function (r) {
      if (!r.ok) throw new Error('submit failed');
      if (typeof window.gtag === 'function') window.gtag('event', 'contact_submit', { newsletter: wantsNewsletter ? 'yes' : 'no', page_location: location.href });
      var em = email.value.trim();
      var fields = [
        { objectTypeId: '0-1', name: 'firstname', value: first.value.trim() },
        { objectTypeId: '0-1', name: 'lastname', value: last.value.trim() },
        { objectTypeId: '0-1', name: 'email', value: em },
        { objectTypeId: '0-1', name: 'message', value: message.value.trim() }
      ];
      var org = (form.elements.organization.value || '').trim();
      if (org) fields.push({ objectTypeId: '0-1', name: 'company', value: org });
      hubspot(HUBSPOT_CONTACT, fields).catch(function () {});
      if (wantsNewsletter) hubspot(HUBSPOT, [{ objectTypeId: '0-1', name: 'email', value: em }]).catch(function () {});
      form.reset();
      count();
      say('Thank you, your message is on its way. We will be in touch soon.', true);
      button.textContent = 'Message sent';
      setTimeout(function () { button.textContent = original; button.disabled = false; }, 6000);
    }).catch(function () {
      say('Sorry, something went wrong sending your message. Please try again in a moment.', false);
      button.textContent = original;
      button.disabled = false;
    });
  });
})();
