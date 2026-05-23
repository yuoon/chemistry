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
  }
});

// ── Countdown ────────────────────────────────────────────────────────────────

function updateCountdown() {
  const tripStart = new Date('2026-05-30');
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const diff = Math.ceil((tripStart - today) / (1000 * 60 * 60 * 24));
  const el = document.getElementById('countdown-days');
  if (diff > 0) el.textContent = diff;
  else if (diff === 0) el.textContent = 'Today!';
  else el.textContent = 'Underway';
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
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
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
    <div class="suggestion-card ${s.mustDo ? 'must-do' : ''}">
      ${s.mustDo ? '<div class="must-do-badge">Sofia\'s Must-Do</div>' : ''}
      <div class="suggestion-top">
        <span class="suggestion-emoji">${s.emoji}</span>
        <div class="suggestion-save">
          <button class="save-btn ${saved ? 'saved' : ''}" onclick="toggleSave(${s.id})" title="${saved ? 'Saved' : 'Save this place'}">
            ${saved ? '❤️' : '🤍'}
          </button>
        </div>
      </div>
      <h3 class="suggestion-name">${s.name}</h3>
      <div class="suggestion-area">📍 ${s.area}</div>
      <div class="suggestion-stars">${stars}</div>
      <div class="suggestion-meta">
        <span class="meta-badge">${s.price}</span>
        <span class="meta-badge">⏱ ${s.duration}</span>
      </div>
      <div class="suggestion-cost">💶 ${s.cost}</div>
      <p class="suggestion-tip">${s.tip}</p>
      <div class="suggestion-tags">
        ${s.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
    </div>
  `;
}

function toggleSave(id) {
  const idx = STATE.savedPlaces.indexOf(id);
  if (idx === -1) {
    STATE.savedPlaces.push(id);
    showToast('Place saved! ❤️');
  } else {
    STATE.savedPlaces.splice(idx, 1);
    showToast('Place removed');
  }
  save();
  updateOverview();
  const filter = document.querySelector('.filter-btn.active').dataset.filter;
  renderSuggestions(filter);
}

// ── Budget ───────────────────────────────────────────────────────────────────

function setBudget() {
  const val = parseFloat(document.getElementById('budget-input').value);
  if (!val || val <= 0) { showToast('Enter a valid budget amount'); return; }
  STATE.budget = val;
  save();
  showBudgetBar();
  updateOverview();
  showToast(`Budget set to €${val.toFixed(2)}`);
}

function showBudgetBar() {
  const wrap = document.getElementById('budget-bar-wrap');
  wrap.style.display = 'block';
  updateBudgetBar();
}

function updateBudgetBar() {
  if (!STATE.budget) return;
  const spent = totalSpent();
  const pct = Math.min((spent / STATE.budget) * 100, 100);
  const fill = document.getElementById('budget-bar-fill');
  fill.style.width = pct + '%';
  fill.style.background = pct > 90 ? '#ef4444' : pct > 70 ? '#f59e0b' : '#22c55e';
  document.getElementById('budget-bar-spent').textContent = `€${spent.toFixed(2)} spent`;
  document.getElementById('budget-bar-total').textContent = `of €${STATE.budget.toFixed(2)}`;
}

// ── Expenses ─────────────────────────────────────────────────────────────────

const CATEGORY_META = {
  food:          { label: 'Food & Drink',    emoji: '🍽️', color: '#f97316' },
  transport:     { label: 'Transport',       emoji: '🚌', color: '#3b82f6' },
  accommodation: { label: 'Accommodation',   emoji: '🏨', color: '#8b5cf6' },
  activities:    { label: 'Activities',      emoji: '🎟️', color: '#ec4899' },
  shopping:      { label: 'Shopping',        emoji: '🛍️', color: '#14b8a6' },
  other:         { label: 'Other',           emoji: '📦', color: '#6b7280' },
};

function setDefaultDate() {
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('exp-date').value = today;
}

function totalSpent() {
  return STATE.expenses.reduce((s, e) => s + e.amount, 0);
}

function addExpense() {
  const desc = document.getElementById('exp-desc').value.trim();
  const amount = parseFloat(document.getElementById('exp-amount').value);
  const category = document.getElementById('exp-category').value;
  const date = document.getElementById('exp-date').value;

  if (!desc) { showToast('Please enter a description'); return; }
  if (!amount || amount <= 0) { showToast('Please enter a valid amount'); return; }
  if (!date) { showToast('Please select a date'); return; }

  STATE.expenses.unshift({ id: Date.now(), desc, amount, category, date });
  save();
  renderExpenses();
  renderCategorySummary();
  updateOverview();
  updateBudgetBar();

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
  showToast('Expense removed');
}

function renderExpenses() {
  const list = document.getElementById('expense-list');
  const badge = document.getElementById('expense-total-badge');
  const total = totalSpent();
  badge.textContent = `€${total.toFixed(2)} total`;

  if (STATE.expenses.length === 0) {
    list.innerHTML = '<p class="empty-state">No expenses recorded yet.</p>';
    return;
  }

  list.innerHTML = STATE.expenses.map(e => {
    const meta = CATEGORY_META[e.category];
    const d = new Date(e.date + 'T12:00:00');
    const dateStr = d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
    return `
      <div class="expense-item">
        <div class="expense-left">
          <span class="expense-cat-dot" style="background:${meta.color}">${meta.emoji}</span>
          <div>
            <div class="expense-desc">${e.desc}</div>
            <div class="expense-meta-text">${meta.label} · ${dateStr}</div>
          </div>
        </div>
        <div class="expense-right">
          <span class="expense-amount">€${e.amount.toFixed(2)}</span>
          <button class="expense-delete" onclick="deleteExpense(${e.id})">✕</button>
        </div>
      </div>
    `;
  }).join('');
}

function renderCategorySummary() {
  const container = document.getElementById('category-summary');
  if (STATE.expenses.length === 0) {
    container.innerHTML = '<p class="empty-state">No expenses yet. Start adding your Lisbon spending!</p>';
    return;
  }

  const totals = {};
  STATE.expenses.forEach(e => {
    totals[e.category] = (totals[e.category] || 0) + e.amount;
  });
  const grand = totalSpent();

  container.innerHTML = Object.entries(totals)
    .sort(([,a],[,b]) => b - a)
    .map(([cat, total]) => {
      const meta = CATEGORY_META[cat];
      const pct = Math.round((total / grand) * 100);
      return `
        <div class="cat-row">
          <div class="cat-row-top">
            <span class="cat-label">${meta.emoji} ${meta.label}</span>
            <span class="cat-amount">€${total.toFixed(2)} <small>(${pct}%)</small></span>
          </div>
          <div class="cat-bar">
            <div class="cat-bar-fill" style="width:${pct}%; background:${meta.color}"></div>
          </div>
        </div>
      `;
    }).join('');
}

// ── Overview ─────────────────────────────────────────────────────────────────

function updateOverview() {
  const spent = totalSpent();
  const remaining = STATE.budget ? Math.max(STATE.budget - spent, 0) : 0;

  document.getElementById('ov-spent').textContent = `€${spent.toFixed(2)}`;
  document.getElementById('ov-remaining').textContent = STATE.budget
    ? `€${remaining.toFixed(2)}`
    : '—';
  document.getElementById('ov-places').textContent = STATE.savedPlaces.length;
  document.getElementById('ov-transactions').textContent = STATE.expenses.length;
}

// ── Travel Agent ─────────────────────────────────────────────────────────────

function showAdvice(key) {
  const data = ADVICE[key];
  if (!data) return;

  const card = document.getElementById('advice-card');
  document.getElementById('advice-icon').textContent = data.icon;
  document.getElementById('advice-title').textContent = data.title;
  document.getElementById('advice-body').innerHTML = data.body;
  card.style.display = 'block';
  card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

  if (data.showPacking) {
    renderPackingList();
    document.getElementById('packing-section').style.display = 'block';
  }
}

function renderPackingList() {
  const savedKey = 'lx_packed';
  const packed = JSON.parse(localStorage.getItem(savedKey) || '[]');

  const container = document.getElementById('packing-list');
  container.innerHTML = PACKING_ITEMS.map(cat => `
    <div class="packing-category">
      <h4 class="packing-cat-title">${cat.category}</h4>
      ${cat.items.map(item => {
        const id = btoa(item).replace(/=/g,'');
        const checked = packed.includes(id);
        return `
          <label class="packing-item ${checked ? 'packed' : ''}">
            <input type="checkbox" ${checked ? 'checked' : ''} onchange="togglePacked('${id}', this)" />
            <span>${item}</span>
          </label>
        `;
      }).join('')}
    </div>
  `).join('');
}

function togglePacked(id, checkbox) {
  const key = 'lx_packed';
  const packed = JSON.parse(localStorage.getItem(key) || '[]');
  if (checkbox.checked) {
    packed.push(id);
  } else {
    const i = packed.indexOf(id);
    if (i > -1) packed.splice(i, 1);
  }
  localStorage.setItem(key, JSON.stringify(packed));
  checkbox.closest('label').classList.toggle('packed', checkbox.checked);
}

// ── Toast ─────────────────────────────────────────────────────────────────────

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}
