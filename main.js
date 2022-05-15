
moment.locale('ru');     

const 
    text = document.querySelector('#text'),
    dataInput = document.querySelector('input'),
    knopa = document.querySelector('#knopa');



let day = moment("2022-04-30 22:30",       "YYYY-MM-DD HH:mm");
console.log(day);


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

knopa.addEventListener('click', () => {
    // console.log(dataInput.value);

    // day = moment(`${dataInput.value}`,       "YYYY-MM-DD HH:mm")
    // console.log(day);

    // text.innerHTML = `${day.fromNow()}`;
});

