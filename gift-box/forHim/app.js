const burgerMenu = document.querySelector('.header-burger-menu');
const navLinks = document.querySelector('.nav-links');

burgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});


let offset  = 0;
const sliderline = document.querySelector('.slider-line');
let btnnext = document.querySelector('.btn__slider-next');
let btnprev = document.querySelector('.btn__slider-prev');

btnnext.addEventListener('click', () =>{
  offset = offset + 277;
  if(offset > 1200) {
    offset = 0;
  }
  sliderline.style.left = -offset + 'px'
});

btnprev.addEventListener('click', () =>{
  offset = offset - 277;
  if(offset < 0) {
    offset = 1200;
  }
  sliderline.style.left = -offset + 'px'
})