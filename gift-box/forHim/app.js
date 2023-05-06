const burgerMenu = document.querySelector('.header-burger-menu');
const navLinks = document.querySelector('.nav-links');

burgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});




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