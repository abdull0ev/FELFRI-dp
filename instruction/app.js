const burgerMenu = document.querySelector('.header-burger-menu');
const navLinks = document.querySelector('.nav-links');

const navLink1 = document.querySelector('.nav-link1');
const navLink2 = document.querySelector('.nav-link2');
const navLink3 = document.querySelector('.nav-link3');
const navLink4 = document.querySelector('.nav-link4');
const navLink5 = document.querySelector('.nav-link5');

burgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  burgerMenu.classList.toggle('active')
  setTimeout(() => {
    setTimeout(() => {
      navLink1.style.transform = ' translateX(0)';
    }, 100);
    setTimeout(() => {
      navLink2.style.transform = ' translateX(0)';
    }, 200);
    setTimeout(() => {
      navLink3.style.transform = ' translateX(0)';
    }, 300);
    setTimeout(() => {
      navLink4.style.transform = ' translateX(0)';
    }, 400);
    setTimeout(() => {
      navLink5.style.transform = ' translateX(0)';
    }, 500);
  }, 300)
});