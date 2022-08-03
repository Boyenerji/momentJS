moment.locale('ru');  

// const express = require('express');
// const path = require('path');

// const app = express();

// app.listen(3000);

// const createPath = (page) => path.resolve(__dirname, 'views', `${page}.html`);

// app.get('/', function (req, res) {
//     res.send('Hello World')
// })




const 
    text = document.querySelector('#text'),
    dataInput = document.querySelector('input'),
    dataOt = document.querySelector('#dataOt'),
    rulesHtml = document.querySelector('.rules'),
    knopa = document.querySelector('#knopa');


const rules = [
        'Не трогать.',
        'Если пьяный, не пользоваться телефоном и айпадом.',
        'Не фантазировать с утра.',
        'Не скачивать любое СЗ и Telegram.',
        'Не отключать скрытие картинок на пк.',
        'Не заходить в сафари дома(импровизация и moment)',
        'Запрет всего АСМР (кроме beautiful).',
        'Запрет поиска шурыгиной на ютубе.',
        'Не открыть э сцены на ютубе.',
        'Клятва перед душем, запрет ванны.',
        'Запрет ТОВАРОВ ДЛЯ ВЗРОСЛЫХ озон.'
];

rules.forEach((item) => {
    rulesHtml.innerHTML += `<p>${item}</p>`;
});



let dayA = moment("2022-07-30 18:23",       "YYYY-MM-DD HH:mm");
// let dayB = moment();

// let duration = moment.duration(dayB.diff(dayA));
// console.log(duration);


dataOt.innerHTML = `${dayA.format('LLL')}`;
// text.innerHTML = `${dayA.fromNow()}`;


function testAnim() {
    text.animate(
    { 
        color: ['rgba(106, 90, 205)', 'rgba(60, 179, 113)', 'rgba(255, 99, 71)', 'rgba(106, 90, 205)'] 
    },
    {
        duration: 4000,
        iterations: Infinity
    }); 
}

testAnim();

let timerId = setInterval(() => dataPlain(), 1000);
function dataPlain() {
    let dayA = moment("2022-07-30 18:23",       "YYYY-MM-DD HH:mm");
    let dayB = moment();

    let duration = moment.duration(dayB.diff(dayA));
    let 
    days = duration._data.days,
    hours = duration._data.hours;
    mins = duration._data.minutes;
    sec = duration._data.seconds;
    text.innerHTML = `${days + 'дн ' + hours + 'ч ' + mins + 'м ' + sec + 'с'}`;
}

// knopa.addEventListener('click', () => {
//     let 
//     days = duration._data.days,
//     hours = duration._data.hours;
//     mins = duration._data.minutes;
//     sec = duration._data.seconds;
//     text.innerHTML = `${days + ' days ' + hours + ' hours' + mins + 'mins' + sec + 'sec'}`;
// });

