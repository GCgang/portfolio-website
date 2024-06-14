'use strict';

// 페이지 아래로 스크롤 시 헤더에 스타일링 적용
const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;
window.addEventListener('scroll', () => {    
    if (window.scrollY > headerHeight) {
        header.classList.add('header--dark');
    } else {
        header.classList.remove('header--dark');
    }
});

// 페이지 아래로 스크롤 시 홈에 스타일링 적용
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
window.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
})

// 페이지 아래로 스크롤 시 arrow up botton 스타일링 적용
const arrowUp = document.querySelector('.arrow-up');
window.addEventListener('scroll', () => {
    if (window.scrollY > homeHeight / 2) {
        arrowUp.style.opacity = 1;
    } else {
        arrowUp.style.opacity = 0;
    }
})

// Navbar 토글 버튼 클릭 처리
const navbarToggle = document.querySelector('.header__toggle');
navbarToggle.addEventListener('click', () => {
    console.log(navbarMenu.classList.toggle('open'));
}) 

// Navbar 메뉴 클릭시 메뉴 자동으로 닫기
const navbarMenu = document.querySelector('.header__menu');
navbarMenu.addEventListener('click', () => {
    navbarMenu.classList.remove('open');
})