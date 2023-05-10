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



const carousel = document.querySelector('.carousel')
let firstImg = carousel.querySelectorAll("img")[0]
const btn = document.querySelectorAll('.btn__slider button');

let isDragstart = false, prevPageX, prevscrollLeft;
let firstImgWidth = firstImg.clientWidth + 10;

btn.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstImgWidth : firstImgWidth;
    })

});


const dragStart = (e) => {
    isDragstart = true;
    prevPageX = e.pageX;
    prevscrollLeft = carousel.scrollLeft;
}
const dragging = (e) => {
    if (!isDragstart) return;
    e.preventDefault();
    carousel.classList.add("dragging");
    let positionDiff = e.pageX - prevPageX;
    carousel.scrollLeft = prevscrollLeft - positionDiff;
}

const dragStop = () => {
    isDragstart = false;
    carousel.classList.remove("dragging");
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);