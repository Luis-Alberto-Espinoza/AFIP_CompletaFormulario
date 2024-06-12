const listaPuntosDeVentas = document.querySelector("#puntodeventa")
const primerPuntoDeVentas = document.querySelector("#puntodeventa > option:nth-child(2)")
listaPuntosDeVentas.selectedIndex = 1
listaPuntosDeVentas.onchange(1)
let btnContinuar = document.querySelector("#contenido > form > input[type=button]:nth-child(4)")

setTimeout(function () {
    btnContinuar.click()
}, 500);
