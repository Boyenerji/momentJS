moment.locale('ru');  
console.log(moment().format('LL'));


const 
    body = document.querySelector('body'),
    daysHtml = document.querySelector('#days'),
    blockDuration = document.querySelector('.blockDuration'),
    rulesHtml = document.querySelector('.rules'),
    tests = document.querySelector('.tests'),
    outputDate = document.querySelector('.outputDate'),
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
        'Не скачивать любое СЗ.',
        'Не отключать скрытие картинок на пк.',
        'Не заходить в сафари дома(только moment и books)',
        'Запрет всего АСМР (кроме TanyaASMR, Ryoko).',
        'Запрет поиска шурыгиной на ютубе.',
        'Не открыть э сцены на ютубе.',
        'Клятва перед душем, запрет ванны.',
        'Запрет ТОВАРОВ ДЛЯ ВЗРОСЛЫХ озон.',
        'Использовать Telegram только на улице.',
        'Не пить.',
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
const dayA = moment("2022-10-27 22:25",       "YYYY-MM-DD HH:mm"),
      dayB = moment("2022-11-01 22:25",       "YYYY-MM-DD HH:mm");


      
DateOne.innerHTML = `${Math.round(moment.duration(dayBB.diff(dayA)).asHours()) + ' ч'}`;
DateTwo.innerHTML = `${Math.round(moment.duration(dayB.diff(dayA)).asHours())  + ' ч'}`;

dateStart.innerHTML = dayA.format('LLL');
dateEnd.innerHTML = moment().format('LL');

// dataOt.innerHTML = `${dayA.format('LLL')}` + ' → ' + `${moment().format('LL')}`;
// text.innerHTML = `${dayA.fromNow()}`;



function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}


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
        daysHtml.style.backgroundColor = '#495057';
        daysHtml.style.color = '#FFFAFA';
        tests.style.color = '#FFFAFA';
        pRules.style.color = '#FFFAFA';
        outputDate.style.color = '#FFFAFA';
        blockDuration.style.backgroundColor = '#495057';
        rulesHtml.style.backgroundColor = '#495057';
    }
}
