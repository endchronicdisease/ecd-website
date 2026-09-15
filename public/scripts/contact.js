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

  // HubSpot newsletter form, shared with the newsletter sign-up blocks.
  var HUBSPOT = 'https://api.hsforms.com/submissions/v3/integration/submit/50818861/13d38552-7b0e-4e33-95d6-02387cb1674d';

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
    var name = form.elements.name, email = form.elements.email;
    var problems = [];
    [name, email, message].forEach(function (el) { flag(el, false); });
    if (!name.value.trim()) { flag(name, true); problems.push(name); }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value.trim())) { flag(email, true); problems.push(email); }
    if (!message.value.trim()) { flag(message, true); problems.push(message); }
    if (message.value.length > LIMIT) { flag(message, true); problems.push(message); }
    if (problems.length) {
      say('Please add your name, a valid email address, and a message.', false);
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
      if (wantsNewsletter) {
        fetch(HUBSPOT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ fields: [{ objectTypeId: '0-1', name: 'email', value: email.value.trim() }], context: { pageUri: location.href, pageName: document.title } })
        }).catch(function () {});
      }
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
