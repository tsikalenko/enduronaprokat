const burger = document.querySelector('.burger');
const header = document.querySelector('.header');

burger.addEventListener('click', () => {
    burger.classList.toggle('burger--cross');
    header.classList.toggle('header--open')
})