let menu = document.querySelector('.menu');
let navMenu = document.querySelector('.nav__menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    navMenu.classList.toggle('ativo');
})