window.addEventListener('scroll', () => {
    const scrollTop = document.querySelector('.scroll');
    if (window.scrollY > window.screenY) {
        scrollTop.classList.remove('scroll--hide');
    } else {
        scrollTop.classList.add('scroll--hide');
    }
});
