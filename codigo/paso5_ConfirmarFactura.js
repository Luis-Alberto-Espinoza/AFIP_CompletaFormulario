
window.scrollTo(0, document.body.scrollHeight);
ajaxFunction()
let btnMenuPrinvipalVolver = document.querySelectorAll('input')
let valor1 = parseInt(localStorage.getItem('iterador'));

if (window.location.href.includes('genComResumenDatos')) {
    localStorage.setItem("iterador", valor1 + 1);
}

setTimeout(function () {
    btnMenuPrinvipalVolver[3].click()
}, 500);


