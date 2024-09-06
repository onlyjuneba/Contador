const buttonDeCrease = document.getElementById('btndecrease')
const buttonReset = document.getElementById('btnreset')
const buttonInCrease = document.getElementById('btnincrease')
const text = document.getElementById('text')

const hr = document.getElementById('hr')
const min = document.getElementById('min')
const seg = document.getElementById('seg')

const relogio = setInterval(function time() {
    let date = new Date()
    let horas = date.getHours()
    let minutos = date.getMinutes()
    let segundos = date.getSeconds()

    if ( horas < 10 ) horas = '0' + horas
    if ( minutos < 10 ) minutos = '0' + minutos
    if ( segundos < 10 ) segundos = '0' + segundos

    hr.textContent = horas
    min.textContent = minutos
    seg.textContent = segundos
})


let totalClick = 0

function clickDeCrease() {
    totalClick--
    if ( totalClick < 0  ) {
        document.getElementById("num").style.color = `#FF0000`
    }
    else if ( totalClick >= 1 ) {
        document.getElementById("num").style.color = `#36bf21`
    }
    else if ( totalClick == 0 ) {
        document.getElementById("num").style.color = `#fff`
    }
    num.textContent = `${totalClick}`
}

function clickReset() {
    totalClick = 0
    document.getElementById("num").style.color = `#fff`
    num.textContent = `${totalClick}`
}

function clickInCrease() {
    totalClick++
    if ( totalClick < 0  ) {
        document.getElementById("num").style.color = `#FF0000`
    }
    else if ( totalClick >= 1 ) {
        document.getElementById("num").style.color = `#36bf21`
    }
    else if ( totalClick == 0 ) {
        document.getElementById("num").style.color = `#fff`
    }
    num.textContent = `${totalClick}`
}

buttonDeCrease.addEventListener("click", clickDeCrease)
buttonReset.addEventListener("click", clickReset)
buttonInCrease.addEventListener("click", clickInCrease)