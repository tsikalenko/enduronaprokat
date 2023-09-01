// import axios from 'axios';

const form = document.querySelector('.call__form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
});

// const sendToTelegram = async (message) => {
//     await axios.post(
//         `https://api.telegram.org/bot1340417720:AAFjeocAIIftfFv1zOPVuNx_XKGab0Mqqp0/sendMessage`,
//         {
//             chat_id: -426714612,
//             text: message,
//             parse_mode: 'html',
//         },
//     );
// };

// export default sendToTelegram;
