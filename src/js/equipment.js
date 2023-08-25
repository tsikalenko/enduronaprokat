const click = document.querySelector('.equipment__click');
const info = document.querySelectorAll('.equipment__info');
const list = document.querySelectorAll('.equipment__list');

click.addEventListener('click', () => {
    info.forEach((item) => {
        item.classList.toggle('equipment__info--close');
    });
    list.forEach((item) => {
        item.classList.toggle('equipment__list--open');
    });
});
