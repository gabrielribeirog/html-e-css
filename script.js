// === DARK / LIGHT MODE ===
const html = document.documentElement;
const themeBtn = document.getElementById('theme-toggle');

function applyTheme(theme) {
  html.dataset.theme = theme;
  themeBtn.innerHTML = theme === 'light'
    ? '<i class="bi bi-moon-stars"></i>'
    : '<i class="bi bi-sun"></i>';
}

const savedTheme = localStorage.getItem('theme') || 'dark';
applyTheme(savedTheme);

themeBtn.addEventListener('click', () => {
  const next = html.dataset.theme === 'light' ? 'dark' : 'light';
  localStorage.setItem('theme', next);
  applyTheme(next);
});

// === SCROLL REVEAL ===
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// === FORM FEEDBACK ===
const form = document.querySelector('.cform');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const btn = form.querySelector('.btn-send');
  const original = btn.innerHTML;

  btn.innerHTML = '<i class="bi bi-check2-circle"></i> Mensagem enviada!';
  btn.classList.add('btn-send--success');
  btn.disabled = true;
  form.reset();

  setTimeout(() => {
    btn.innerHTML = original;
    btn.classList.remove('btn-send--success');
    btn.disabled = false;
  }, 3500);
});
