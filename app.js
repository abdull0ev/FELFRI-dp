const burgerMenu = document.querySelector('.header-burger-menu');
const navLinks = document.querySelector('.nav-links');
const navLink1 = document.querySelector('.nav-link1');
const navLink2 = document.querySelector('.nav-link2');
const navLink3 = document.querySelector('.nav-link3');
const navLink4 = document.querySelector('.nav-link4');
const navLink5 = document.querySelector('.nav-link5');


burgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  burgerMenu.classList.toggle('active');
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
  }, 300);
})

const headertitle = document.querySelector('.header-title')
const headreinfo = document.querySelector('.header-info')
const headermainimg = document.querySelector('.header-main__img')

 setTimeout(() => {
  headertitle.style.transform = 'translate(0)'
  headertitle.style.opacity = '1'
  headertitle.style.marginBottom = '0'
  headreinfo.style.transform = 'translate(0)'
  headreinfo.style.opacity = '1'
  headermainimg.style.opacity = '1'
 }, );


const uscard1 = document.querySelector('.us-card1')
const uscard2 = document.querySelector('.us-card2')
const uscard3 = document.querySelector('.us-card3')

let html = document.querySelector('html');

window.addEventListener('scroll', () =>{
  console.log(html.scrollTop)
  if(html.scrollTop >= 2500){
    uscard1.style.transform = 'translateX(0)';
  }
  if(html.scrollTop >= 2500){
    uscard2.style.opacity = '1';
  }
  if(html.scrollTop >= 2500){
    uscard3.style.transform = 'translateX(0)';
  }
});

const btn1 = document.querySelector('#btn-one')
const btn2 = document.querySelector('#btn-two')
const btn3 = document.querySelector('#btn-three')

window.addEventListener('scroll', () => {
    if (html.scrollTop >= 600) {
     setTimeout(() => {
      btn1.style.transform =' translate(0)';
     }, 500);
    }
    if (html.scrollTop >= 600) {
      setTimeout(() => {
        btn2.style.transform =' translate(0)';
      }, 300);
    }
    if (html.scrollTop >= 600) {
        setTimeout(() => {
          btn3.style.transform =' translate(0)';
        }, 100);
    }
})







