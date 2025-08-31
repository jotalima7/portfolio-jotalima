const btn = document.getElementById('btn-contraste');

btn.addEventListener('click', () => {
  const ativo = btn.getAttribute('aria-pressed') === 'true';
  btn.setAttribute('aria-pressed', String(!ativo));
  document.body.classList.toggle('alto-contraste');
});
