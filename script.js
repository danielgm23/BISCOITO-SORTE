const screen1 = document.querySelector('#screen1')

const screen2 = document.querySelector('#screen2')
const imgCookieClosed = document.querySelector('#screen1 img')

screen2.querySelector('.button').addEventListener('click', btnReset)
imgCookieClosed.addEventListener('click', toggleScreen)

function toggleScreen() {
    screen1.classList.toggle('hide');
    screen2.classList.toggle('hide');
  }
function btnReset(){
    toggleScreen()
    
  }
