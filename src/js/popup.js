const cross = document.querySelector('.call__cross');
const call = document.querySelector('.call');
const callBG = document.querySelector('.call__bg');

const POPClose = () => {
    call.classList.remove('call--open');
};

function POPOpen() {
    call.classList.add('call--open');
}

cross.addEventListener('click', POPClose);
callBG.addEventListener('click', POPClose);
