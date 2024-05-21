var n01 = document.querySelector('#n01')
var n02 = document.querySelector('#n02')
var resultado = document.querySelector('span')

function Soma() {
    resultado.innerHTML = parseFloat (n01.value) + parseFloat (n02.value)
}

function Subtracao() {
    resultado.innerHTML = parseFloat (n01.value) - parseFloat (n02.value)
}

function Multiplicacao() {
    resultado.innerHTML = parseFloat (n01.value) * parseFloat (n02.value)
}

function Divisao() {
    resultado.innerHTML = parseFloat (n01.value) / parseFloat (n02.value)
}

