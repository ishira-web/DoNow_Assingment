const menu = document.querySelector('.navbar__menu');
const toggle = document.querySelector('.navbar__toggle');

toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});