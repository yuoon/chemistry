// ── State ────────────────────────────────────────────────────────────────────

const STATE = {
  budget: parseFloat(localStorage.getItem('lx_budget')) || 0,
  expenses: JSON.parse(localStorage.getItem('lx_expenses') || '[]'),
  savedPlaces: JSON.parse(localStorage.getItem('lx_saved') || '[]'),
};

function save() {
  localStorage.setItem('lx_budget', STATE.budget);
  localStorage.setItem('lx_expenses', JSON.stringify(STATE.expenses));
  localStorage.setItem('lx_saved', JSON.stringify(STATE.savedPlaces));
}

// ── Init ─────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  setDefaultDate();
  initNav();
  initFilters();
  renderSuggestions('all');
  updateOverview();
  renderExpenses();
  renderCategorySummary();
  updateCountdown();
  if (STATE.budget > 0) {
    document.getElementById('budget-input').value = STATE.budget;
    showBudgetBar();
    updateChipBudget();
  }
});

// ── Countdown ────────────────────────────────────────────────────────────────

function updateCountdown() {
  const tripStart = new Date('2026-05-30');
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const diff = Math.ceil((tripStart - today) / (1000 * 60 * 60 * 24));
  const el = document.getElementById('countdown-text');
  if (diff > 0) el.textContent = `${diff} days to Lisbon`;
  else if (diff === 0) el.textContent = 'Trip starts today!';
  else el.textContent = 'Trip is underway ✈️';
}

// ── Navigation ───────────────────────────────────────────────────────────────

function initNav() {
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-section').forEach(s => s.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
    });
  });
}

// ── Suggestions ──────────────────────────────────────────────────────────────

function initFilters() {
  document.querySelectorAll('.filter-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderSuggestions(btn.dataset.filter);
    });
  });
}

function renderSuggestions(filter) {
  const grid = document.getElementById('suggestions-grid');
  const items = filter === 'all' ? SUGGESTIONS : SUGGESTIONS.filter(s => s.type === filter);
  grid.innerHTML = items.map(s => suggestionCard(s)).join('');
}

function suggestionCard(s) {
  const saved = STATE.savedPlaces.includes(s.id);
  const stars = '★'.repeat(s.rating) + '☆'.repeat(5 - s.rating);
  return `
    <div class="suggest-card ${s.mustDo ? 'must-do' : ''}">
      <span class="suggest-dot ${s.mustDo ? 'gold' : ''}"></span>
      <span class="suggest-emoji">${s.emoji}</span>
      <div class="suggest-name">${s.name}</div>
      <div class="suggest-area">📍 ${s.area}</div>
      <div class="suggest-stars">${stars}</div>
      <div class="suggest-meta">
        <span class="meta-chip">${s.price}</span>
        <span class="meta-chip">⏱ ${s.duration}</span>
      </div>
      <div class="suggest-cost">💶 ${s.cost}</div>
      <p class="suggest-tip">${s.tip}</p>
      <div class="suggest-tags">${s.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
      <div class="save-row">
        <button class="save-btn ${saved ? 'saved' : ''}" onclick="toggleSave(${s.id})">
          ${saved ? '❤️ Saved' : '🤍 Save'}
        </button>
      </div>
    </div>
  `;
}

function toggleSave(id) {
  const idx = STATE.savedPlaces.indexOf(id);
  if (idx === -1) { STATE.savedPlaces.push(id); showToast('Saved ❤️'); }
  else { STATE.savedPlaces.splice(idx, 1); showToast('Removed'); }
  save();
  updateOverview();
  renderSuggestions(document.querySelector('.filter-pill.active').dataset.filter);
}

// ── Budget ───────────────────────────────────────────────────────────────────

function setBudget() {
  const val = parseFloat(document.getElementById('budget-input').value);
  if (!val || val <= 0) { showToast('Enter a valid amount'); return; }
  STATE.budget = val;
  save();
  showBudgetBar();
  updateOverview();
  updateChipBudget();
  showToast(`Budget set: €${val.toFixed(2)}`);
}

function updateChipBudget() {
  const el = document.getElementById('chip-budget');
  if (!STATE.budget) { el.textContent = 'Set budget'; return; }
  const spent = totalSpent();
  const rem = Math.max(STATE.budget - spent, 0);
  el.textContent = `€${rem.toFixed(0)} remaining`;
}

function showBudgetBar() {
  document.getElementById('budget-bar-wrap').style.display = 'block';
  updateBudgetBar();
}

function updateBudgetBar() {
  if (!STATE.budget) return;
  const spent = totalSpent();
  const pct = Math.min((spent / STATE.budget) * 100, 100);
  const fill = document.getElementById('budget-bar-fill');
  fill.style.width = pct + '%';
  fill.style.background = pct > 90 ? 'var(--red)' : pct > 70 ? '#f59e0b' : 'var(--green)';
  document.getElementById('budget-bar-spent').textContent = `€${spent.toFixed(2)} spent`;
  document.getElementById('budget-bar-total').textContent = `of €${STATE.budget.toFixed(2)}`;
}

// ── Expenses ─────────────────────────────────────────────────────────────────

const CATEGORY_META = {
  food:          { label: 'Food & Drink',  emoji: '🍽️', color: '#f97316' },
  transport:     { label: 'Transport',     emoji: '🚌', color: '#3b82f6' },
  accommodation: { label: 'Accommodation', emoji: '🏨', color: '#8b5cf6' },
  activities:    { label: 'Activities',    emoji: '🎟️', color: '#ec4899' },
  shopping:      { label: 'Shopping',      emoji: '🛍️', color: '#14b8a6' },
  other:         { label: 'Other',         emoji: '📦', color: '#6b7280' },
};

function setDefaultDate() {
  document.getElementById('exp-date').value = new Date().toISOString().split('T')[0];
}

function totalSpent() {
  return STATE.expenses.reduce((s, e) => s + e.amount, 0);
}

function addExpense() {
  const desc = document.getElementById('exp-desc').value.trim();
  const amount = parseFloat(document.getElementById('exp-amount').value);
  const category = document.getElementById('exp-category').value;
  const date = document.getElementById('exp-date').value;

  if (!desc) { showToast('Add a description'); return; }
  if (!amount || amount <= 0) { showToast('Enter a valid amount'); return; }
  if (!date) { showToast('Select a date'); return; }

  STATE.expenses.unshift({ id: Date.now(), desc, amount, category, date });
  save();
  renderExpenses();
  renderCategorySummary();
  updateOverview();
  updateBudgetBar();
  updateChipBudget();

  document.getElementById('exp-desc').value = '';
  document.getElementById('exp-amount').value = '';
  setDefaultDate();
  showToast(`€${amount.toFixed(2)} added`);
}

function deleteExpense(id) {
  STATE.expenses = STATE.expenses.filter(e => e.id !== id);
  save();
  renderExpenses();
  renderCategorySummary();
  updateOverview();
  updateBudgetBar();
  updateChipBudget();
  showToast('Removed');
}

function renderExpenses() {
  const list = document.getElementById('expense-list');
  document.getElementById('expense-total-badge').textContent = `€${totalSpent().toFixed(2)}`;

  if (STATE.expenses.length === 0) {
    list.innerHTML = '<p class="empty-state">Start tracking your Lisbon spending!</p>';
    return;
  }

  list.innerHTML = STATE.expenses.map(e => {
    const m = CATEGORY_META[e.category];
    const d = new Date(e.date + 'T12:00:00');
    const dateStr = d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
    return `
      <div class="expense-item">
        <div class="expense-left">
          <div class="exp-cat-icon" style="background:${m.color}22">${m.emoji}</div>
          <div>
            <div class="exp-desc">${e.desc}</div>
            <div class="exp-meta">${m.label} · ${dateStr}</div>
          </div>
        </div>
        <div class="expense-right">
          <span class="exp-amount">€${e.amount.toFixed(2)}</span>
          <button class="exp-del" onclick="deleteExpense(${e.id})">✕</button>
        </div>
      </div>
    `;
  }).join('');
}

function renderCategorySummary() {
  const el = document.getElementById('category-summary');
  if (STATE.expenses.length === 0) {
    el.innerHTML = '<p class="empty-state">No expenses yet.</p>';
    return;
  }
  const totals = {};
  STATE.expenses.forEach(e => { totals[e.category] = (totals[e.category] || 0) + e.amount; });
  const grand = totalSpent();

  el.innerHTML = Object.entries(totals).sort(([,a],[,b]) => b - a).map(([cat, total]) => {
    const m = CATEGORY_META[cat];
    const pct = Math.round((total / grand) * 100);
    return `
      <div class="cat-row">
        <div class="cat-row-top">
          <span class="cat-name">${m.emoji} ${m.label}</span>
          <span class="cat-amt">€${total.toFixed(2)} <small>(${pct}%)</small></span>
        </div>
        <div class="cat-bar"><div class="cat-bar-fill" style="width:${pct}%;background:${m.color}"></div></div>
      </div>
    `;
  }).join('');
}

// ── Overview ─────────────────────────────────────────────────────────────────

function updateOverview() {
  const spent = totalSpent();
  const rem = STATE.budget ? Math.max(STATE.budget - spent, 0) : 0;
  document.getElementById('ov-spent').textContent = `€${spent.toFixed(0)}`;
  document.getElementById('ov-remaining').textContent = STATE.budget ? `€${rem.toFixed(0)}` : '—';
  document.getElementById('ov-places').textContent = STATE.savedPlaces.length;
  document.getElementById('ov-transactions').textContent = STATE.expenses.length;
}

// ── Travel Agent ─────────────────────────────────────────────────────────────

function showAdvice(key) {
  const data = ADVICE[key];
  if (!data) return;

  document.getElementById('advice-icon').textContent = data.icon;
  document.getElementById('advice-title').textContent = data.title;
  document.getElementById('advice-body').innerHTML = data.body;

  const card = document.getElementById('advice-card');
  card.style.display = 'block';
  card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

  if (data.showPacking) {
    renderPackingList();
    document.getElementById('packing-section').style.display = 'block';
  }
}

function renderPackingList() {
  const key = 'lx_packed';
  const packed = JSON.parse(localStorage.getItem(key) || '[]');
  const el = document.getElementById('packing-list');
  el.innerHTML = PACKING_ITEMS.map(cat => `
    <div class="packing-category">
      <div class="packing-cat-title">${cat.category}</div>
      ${cat.items.map(item => {
        const id = btoa(unescape(encodeURIComponent(item))).replace(/=/g,'');
        const checked = packed.includes(id);
        return `
          <label class="packing-item ${checked ? 'packed' : ''}">
            <input type="checkbox" ${checked ? 'checked' : ''} onchange="togglePacked('${id}',this)" />
            <span>${item}</span>
          </label>`;
      }).join('')}
    </div>
  `).join('');
}

function togglePacked(id, cb) {
  const key = 'lx_packed';
  const packed = JSON.parse(localStorage.getItem(key) || '[]');
  if (cb.checked) packed.push(id);
  else { const i = packed.indexOf(id); if (i > -1) packed.splice(i, 1); }
  localStorage.setItem(key, JSON.stringify(packed));
  cb.closest('label').classList.toggle('packed', cb.checked);
}

// ── Toast ─────────────────────────────────────────────────────────────────────

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2400);
}
