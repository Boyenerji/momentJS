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
        'Не трогать 1',
        'Не трогать 2',
        'Не трогать 3'
];

rules.forEach((item) => {
    rulesHtml.innerHTML += `<p>${item}</p>`;
});

// let dayA = moment([2022, 05, 28]);
// let dayB = moment([2022, 05, 28]);

// console.log(dayA);
// console.log(dayB);

let day = moment("2022-05-31 17:57",       "YYYY-MM-DD HH:mm");
console.log(day.format('LLL'));

dataOt.innerHTML = `${day.format('LLL')}`;
text.innerHTML = `${day.fromNow()}`;


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

// knopa.addEventListener('click', () => {
//     // console.log(dataInput.value);

//     // day = moment(`${dataInput.value}`,       "YYYY-MM-DD HH:mm")
//     // console.log(day);

//     // text.innerHTML = `${day.fromNow()}`;
// });

