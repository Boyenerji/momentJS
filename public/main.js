const body = document.querySelector('body'),
      blockDuration = document.querySelector('.blockDuration'),
      days = document.querySelector('#days'),
      dateStart = document.querySelector('#dateStart'),
      outputDate = document.querySelector('.outputDate');





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


