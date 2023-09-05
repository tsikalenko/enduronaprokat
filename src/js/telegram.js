// import axios from 'axios';

const form = document.querySelector('.call__form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(form.name.value);
    const error = document.querySelector('.call__notification--error');
    const reject = document.querySelector('.call__notification--reject');
    const success = document.querySelector('.call__notification--success');
    const email = form.email.value;
    const phone = form.phone.value;
    const name = form.name.value;
    const send = form.send;

    if (email.length === 0 || phone.length === 0 || name.length === 0) {
        error.classList.add('call__notification--open');
    } else {
        error.classList.remove('call__notification--open');
        send.disabled = true;
        sendToTelegram(`New lead:
        email: ${email},
        phone: ${phone},
        name: ${name}
        `).then((response) => {
            if (response.ok) {
                success.classList.add('call__notification--open');
            } else {
                send.disabled = false;
                reject.classList.add('call__notification--open');
            }
        });
    }
});

const sendToTelegram = async (message) => {
    return await fetch(
        `https://api.telegram.org/bot6333303400:AAEltbkReHvygH8W1gj8KQXJZxiK2h1AY-g/sendMessage`,
        {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify({
                chat_id: -912948490,
                text: message,
                parse_mode: 'html',
            }),
        },
    );
};
