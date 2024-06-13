// 페이지 아래로 스크롤 시 헤더에 스타일링 적용
const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;
window.addEventListener('scroll', () => {    
    if (headerHeight < window.scrollY) {
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
