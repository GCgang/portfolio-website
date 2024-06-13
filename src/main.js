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