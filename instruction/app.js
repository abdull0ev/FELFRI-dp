const burgerMenu = document.querySelector('.header-burger-menu');
const navLinks = document.querySelector('.nav-links');

burgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});