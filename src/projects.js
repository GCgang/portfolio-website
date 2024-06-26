'use strict'

// 프로젝트 필터링
const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');
const projectsContainer = document.querySelector('.projects');

categories.addEventListener('click', (event) => {
    const filter = event.target.dataset.category;
    if (!filter) {
        return;
    }
    handleActiveSelection(event.target);
    filterProjects(filter);
})

function handleActiveSelection(target) {
    const active = document.querySelector('.category--selected');
    active.classList.remove('category--selected');
    event.target.classList.add('category--selected');
}

function filterProjects(filter) {
    projects.forEach((project) => {
        if (filter === 'all' || filter === project.dataset.type) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
    projectsContainer.classList.add('animation-out');
    setTimeout(() => {
        projectsContainer.classList.remove('animation-out');
    }, 250);
}

