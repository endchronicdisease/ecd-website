(function () {
  var ONCE = [1000, 500, 250, 100, 75, 50, 25];
  var MONTHLY = [100, 50, 40, 25, 20, 15, 10];
  var ANEDOT = 'https://secure.anedot.com/end-chronic-disease-c3';

  var state = { monthly: false, amount: 100, custom: false, customValue: '' };

  var tiersEl = document.getElementById('ecdTiers');
  var onceBtn = document.getElementById('ecdOnceBtn');
  var monthlyBtn = document.getElementById('ecdMonthlyBtn');
  var customWrap = document.getElementById('ecdCustomWrap');
  var customInput = document.getElementById('ecdCustomInput');
  var cta = document.getElementById('ecdDonateCta');
  if (!tiersEl || !cta) return;

  function fmt(n) { return '$' + n.toLocaleString('en-US'); }

  function activeAmount() {
    if (state.custom) {
      var parsed = parseInt(String(state.customValue).replace(/[^0-9]/g, ''), 10);
      return isNaN(parsed) ? null : parsed;
    }
    return state.amount;
  }

  function tierButton(label, on, onClick) {
    var b = document.createElement('button');
    b.type = 'button';
    b.style.cssText = "cursor:pointer;text-align:center;padding:17px 4px;border-radius:8px;font:600 20px/1 'Graphik','Hanken Grotesk',sans-serif;letter-spacing:-.01em;background:" + (on ? '#ffffff' : 'transparent') + ';color:' + (on ? '#3a5f8f' : '#ffffff') + ';border:1.5px solid ' + (on ? '#ffffff' : 'rgba(255,255,255,.7)');
    b.textContent = label;
    b.addEventListener('click', onClick);
    return b;
  }

  function render() {
    var list = state.monthly ? MONTHLY : ONCE;
    tiersEl.textContent = '';
    list.forEach(function (n) {
      tiersEl.appendChild(tierButton(fmt(n), !state.custom && n === state.amount, function () {
        state.amount = n; state.custom = false; render();
      }));
    });
    tiersEl.appendChild(tierButton('Other', state.custom, function () {
      state.custom = true; render();
      if (customInput) customInput.focus();
    }));

    if (customWrap) customWrap.hidden = !state.custom;

    if (onceBtn) { onceBtn.style.background = state.monthly ? 'transparent' : '#ffffff'; onceBtn.style.color = state.monthly ? '#ffffff' : '#3a5f8f'; }
    if (monthlyBtn) { monthlyBtn.style.background = state.monthly ? '#ffffff' : 'transparent'; monthlyBtn.style.color = state.monthly ? '#3a5f8f' : '#ffffff'; }

    var amt = activeAmount();
    var label = amt === null ? '' : ' ' + fmt(amt);
    cta.textContent = state.monthly ? ('Give' + label + ' monthly') : ('Donate' + label);
    var params = [];
    if (amt !== null) params.push('amount=' + amt);
    if (state.monthly) params.push('recurring=true');
    cta.href = ANEDOT + (params.length ? '?' + params.join('&') : '');
  }

  if (onceBtn) onceBtn.addEventListener('click', function () { state.monthly = false; state.amount = 100; state.custom = false; render(); });
  if (monthlyBtn) monthlyBtn.addEventListener('click', function () { state.monthly = true; state.amount = 25; state.custom = false; render(); });
  if (customInput) customInput.addEventListener('input', function (e) { state.customValue = e.target.value; render(); });

  render();
})();
