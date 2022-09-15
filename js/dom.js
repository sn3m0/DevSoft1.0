const btnAumentar = document.querySelector('.btn-info')
const span = document.getElementById('span')
let contador = 0

btnAumentar.addEventListener('click', () => {
    console.log('Clickeaste el boton  y guardo la info')
    contador++
    span.textContent = contador
})

const btnDisminuir = document.querySelector('.btn-danger')
btnDisminuir.addEventListener('click', () => {
    console.log('Clickeaste el boton  y guardo la info')
    contador--
    span.textContent = contador
})