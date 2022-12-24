const body = document.querySelector('body'),
      blockDuration = document.querySelector('.blockDuration'),
      days = document.querySelector('#days'),
      dateStart = document.querySelector('#dateStart'),
      outputDate = document.querySelector('.outputDate'),
      showButton = document.querySelector('.showButton'),
      main = document.querySelector('.main');





DarkTheme();

function DarkTheme() {
    let date = new Date();
    if (date.getHours() > 16 || date.getHours() < 7) {
        body.style.background = 'rgb(15 23 42)';	
        blockDuration.style.background = 'rgb(30 41 59)';
        days.style.color = '#fff';
        dateStart.style.color = '#fff';
        outputDate.style.color = '#fff';
    }
}


showButton.addEventListener('input', (e) => {

    if (showButton.value == 'ZnFa1998') {
        showButton.remove();

        const arrayRules = ['Запрет фантазий', 'Не смотреть']

        let div = document.createElement('div');
        div.className = "rules";

        arrayRules.forEach(element => {
            div.innerHTML += `<p>${element}</p>`;
            main.append(div)
        });
    }


});