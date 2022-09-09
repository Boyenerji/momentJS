// const moment = require('moment');

moment.locale('ru');  

// const express = require('express');
// const path = require('path');

// const app = express();

// app.listen(3000);

// const createPath = (page) => path.resolve(__dirname, 'views', `${page}.html`);

// app.get('/', function (req, res) {
//     res.send('Hello World')
// })

console.log(moment().format('LL'));


const 
    text = document.querySelector('#text'),
    dataInput = document.querySelector('input'),
    dataOt = document.querySelector('#dataOt'),
    pRules = document.querySelector('#pRules'),
    knopa = document.querySelector('#knopa'),
    dateStart = document.querySelector('#dateStart'),
    dateEnd = document.querySelector('#dateEnd');


const rules = [
        'Не трогать.',
        'Не пользоваться телефоном и айпадом пьяным',
        'Не фантазировать с утра.',
        'Не скачивать любое СЗ и Telegram.',
        'Не отключать скрытие картинок на пк.',
        'Не заходить в сафари дома(только moment)',
        'Запрет всего АСМР (кроме TanyaASMR).',
        'Запрет поиска шурыгиной на ютубе.',
        'Не открыть э сцены на ютубе.',
        'Клятва перед душем, запрет ванны.',
        'Запрет ТОВАРОВ ДЛЯ ВЗРОСЛЫХ озон.'
];

// rules.forEach((item, number) => {
//     console.log(number);
//     rulesHtml.innerHTML += `<p>${item}</p>`;
// });

let timerTwoTwo = setTimeout(() => dataPlainTwoTwo(), 0);
function dataPlainTwoTwo() {
    pRules.innerHTML = `${rules[randomInteger(0,10)]}`;
}

let timerTwo = setInterval(() => dataPlainTwo(), 2000);
function dataPlainTwo() {
    pRules.innerHTML = `${rules[randomInteger(0,10)]}`;
}





let dayA = moment("2022-08-20 23:35",       "YYYY-MM-DD HH:mm");
let dayAtest = moment("2022-08-20");

console.log(dayAtest);
// let dayB = moment();

// let duration = moment.duration(dayB.diff(dayA));
// console.log(duration);

dateStart.innerHTML = dayA.format('LLL');
dateEnd.innerHTML = moment().format('LL');

// dataOt.innerHTML = `${dayA.format('LLL')}` + ' → ' + `${moment().format('LL')}`;
// text.innerHTML = `${dayA.fromNow()}`;



function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}


// function testAnim() {
//     text.animate(
//     { 
//         color: ['rgba(106, 90, 205)', 'rgba(60, 179, 113)', 'rgba(255, 99, 71)', 'rgba(106, 90, 205)'] 
//     },
//     {
//         duration: 4000,
//         iterations: Infinity
//     }); 
// }

// testAnim();

let timerId = setInterval(() => dataPlain(), 1000);
function dataPlain() {
    let dayA = moment("2022-08-20 23:35",       "YYYY-MM-DD HH:mm");
    let dayB = moment();

    let duration = moment.duration(dayB.diff(dayA));
    let 
    days = duration._data.days,
    hours = duration._data.hours;
    mins = duration._data.minutes;
    sec = duration._data.seconds;
    text.innerHTML = `${days + 'дн ' + hours + 'ч ' + mins + 'м '}`;
}

// knopa.addEventListener('click', () => {
//     let 
//     days = duration._data.days,
//     hours = duration._data.hours;
//     mins = duration._data.minutes;
//     sec = duration._data.seconds;
//     text.innerHTML = `${days + ' days ' + hours + ' hours' + mins + 'mins' + sec + 'sec'}`;
// });

