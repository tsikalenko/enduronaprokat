const burger = document.querySelector('.burger');
const header = document.querySelector('.header');

burger.addEventListener('click', () => {
    burger.classList.toggle('burger--cross');
    header.classList.toggle('header--open');
});

header.addEventListener('click', (e) => {
    console.log(e.target.closest('.burger'));
    if (!e.target.closest('.burger')) {
        burger.classList.remove('burger--cross');
        header.classList.remove('header--open');
    }
});
