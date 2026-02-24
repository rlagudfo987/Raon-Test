(function(){
  const btn = document.querySelector('[data-hamburger]');
  const menu = document.querySelector('[data-navlinks]');
  if(!btn || !menu) return;

  btn.addEventListener('click', () => {
    menu.classList.toggle('open');
  });
})();
