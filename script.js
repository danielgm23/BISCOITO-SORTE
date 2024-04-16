const closedBiscoito = document.querySelector('.closedBiscoito')
const buttonOrange = document.querySelector('.buttonOrange')

const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')

closedBiscoito.addEventListener('click',toggleScreen)

buttonOrange.addEventListener('click',toggleScreen)

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}