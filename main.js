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
    body = document.querySelector('body'),
    daysHtml = document.querySelector('#days'),
    blockDuration = document.querySelector('.blockDuration'),
    rulesHtml = document.querySelector('.rules'),
    tests = document.querySelector('.tests'),
    text = document.querySelector('#text'),
    DateOne = document.querySelector('#DateOne'),
    DateTwo = document.querySelector('#DateTwo'),
    dataInput = document.querySelector('input'),
    dataOt = document.querySelector('#dataOt'),
    pRules = document.querySelector('#pRules'),
    knopa = document.querySelector('#knopa'),
    dateStart = document.querySelector('#dateStart'),
    progress = document.querySelector('progress'),
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

// let timerTwoTwo = setTimeout(() => dataPlainTwoTwo(), 0);
// function dataPlainTwoTwo() {
//     pRules.innerHTML = `${rules[randomInteger(0,10)]}`;
// }

// pRules.innerHTML = `${rules[randomInteger(0,10)]}`;
let timerTwo = setInterval(() => dataPlainTwo(), 2000);
function dataPlainTwo() {
    pRules.innerHTML = `${rules[randomInteger(0,10)]}`;
}


let dayBB = moment();
const dayA = moment("2022-09-21 22:08",       "YYYY-MM-DD HH:mm"),
      dayB = moment("2023-01-01 00:00",       "YYYY-MM-DD HH:mm");


      
DateOne.innerHTML = `${Math.round(moment.duration(dayBB.diff(dayA)).asHours())}`;
DateTwo.innerHTML = `${Math.round(moment.duration(dayB.diff(dayA)).asHours())}`;

// let test = moment.duration(dayB.diff(dayA));
// DateTwo.innerHTML = 'test';

// console.log(moment.duration(dayB.diff(dayA)));
// let dayAtest = moment("2022-08-20");

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


    //Сколько часов от одной даты к другой

    // let dayA = moment("2022-09-21 22:08",       "YYYY-MM-DD HH:mm");
    // let dayB = moment("2023-01-01 00:00",       "YYYY-MM-DD HH:mm");
    let duration = moment.duration(dayB.diff(dayA));

    progress.max = `${duration.asHours()}`;
    console.dir(duration.asHours());

    //Часов осталось от одной даты к другой
    // let dayAA = moment("2022-09-21 22:08",       "YYYY-MM-DD HH:mm");
    // let dayBB = moment();
    let durationAB = moment.duration(dayBB.diff(dayA));
    progress.value = durationAB.asHours();

    console.log(durationAB.asHours());

    let 
    days = durationAB._data.days,
    hours = durationAB._data.hours;
    mins = durationAB._data.minutes;
    sec = durationAB._data.seconds;
    text.innerHTML = `${days + 'дн ' + hours + 'ч ' + mins + 'м '}`;
}


DarkTheme();
function DarkTheme() {
    let date = new Date();
    if (date.getHours() > 19 || date.getHours() < 6) {
        body.style.backgroundColor = '#343a40';
        // hello_h1.style.color = '#fff';
        daysHtml.style.backgroundColor = '#495057';
        daysHtml.style.color = '#FFFAFA';
        tests.style.color = '#FFFAFA';
        pRules.style.color = '#FFFAFA';
        blockDuration.style.backgroundColor = '#495057';
        rulesHtml.style.backgroundColor = '#495057';
        // mainWord.style.color = '#fff';
        // descWord.style.color = '#adb5bd';
        // alert_info.style.backgroundColor = '#343a40';
        // alert_info.style.color = '#fff';
        // select.style.backgroundColor = '#6c757d';
        // select.style.color = '#fff';
    }
}
