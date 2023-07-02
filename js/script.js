"use strict"

// Бургер меню
const headBurger = document.querySelector('.header_burger');
const headerNav = document.querySelector('.header_nav');
const headerList = document.querySelector('.header_list');

headBurger.onclick = function(){
    headBurger.classList.toggle('active');
    headerNav.classList.toggle('active');
    document.body.classList.toggle('lock');
}
headerList.onclick = function () {
    headBurger.classList.toggle('active');
    headerNav.classList.toggle('active');
    document.body.classList.toggle('lock');
}



//Карточки
const container = document.querySelector('.container');
const backBtn = document.querySelectorAll('.back_btn');

container.addEventListener('click', (e) =>{
    e.preventDefault();
    let target = e.target;
  
    if(target.classList.contains('btn')) {
        const path = target.parentNode.parentNode.parentNode.getAttribute('id');
        let contentBox = document.querySelector('#' + path);
        contentBox.classList.add('active');
    } else {
    const pathBack = target.parentNode.parentNode.parentNode.getAttribute('id');
    let contentBox = document.querySelector('#' + pathBack);
    contentBox.classList.remove('active');
    };
});



// Навигация
const navLinks = document.querySelectorAll('.header_list [data-come]');

if (navLinks.length > 0) {
    navLinks.forEach(navLink => {navLink.addEventListener('click', linkClick);
});
};
function linkClick (e) {
const navLink = e.target;
if (navLink.dataset.come && document.querySelector(navLink.dataset.come)){
    const goBlock = document.querySelector(navLink.dataset.come);
    const getGoBlock = goBlock.getBoundingClientRect().top;
    window.scrollTo({top: getGoBlock, behavior: "smooth"}
    );
    e.preventDefault();
}
};



// кнопка "В НАЧАЛО"
window.addEventListener('scroll', function(){
    const scroll = this.document.querySelector('.in_start');
    scroll.classList.toggle('active', window.scrollY > 500)
});

document.querySelector('.ref_start').addEventListener('click', goUp);

function goUp(e) {
    const upLink = e.target;
    window.scrollTo({top: 0, 
        behavior: "smooth"}
    );
     e.preventDefault();
    };



// SlideShow About
let position = 0;
const slideShow = 1;
const slideScroll = 1;
const contain = document.querySelector('.slide_container');
const track = document.querySelector('.slide_track');
const btnNext = document.querySelector('.btn_next');
const btnPrev = document.querySelector('.btn_prev');
const items = document.querySelectorAll('.slide_item');
const itemCount = items.length;
const itemWidth = contain.clientWidth / slideShow;
const movePosition = slideScroll * itemWidth;

items.forEach ((item) => {item.style.minWidth = `${itemWidth}px`;
});
btnNext.addEventListener('click', () => {
    const listLeft = itemCount - (Math.abs(position)+slideShow * itemWidth) / itemWidth;
    position -= listLeft >= slideScroll ? movePosition : listLeft * itemWidth;

    setPosition();
    checkBtns();
});
btnPrev.addEventListener('click', () => {
    const listLeft = Math.abs(position) / itemWidth;
    position += listLeft >= slideScroll ? movePosition : listLeft * itemWidth;

    setPosition();
    checkBtns();
});

const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
};
const checkBtns = () => {
btnPrev.disabled = position === 0;
btnNext.disabled = position <= -(itemCount - slideShow) * itemWidth;
};

checkBtns();



// SlideShow Reviews

new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    });