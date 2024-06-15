let inputFechas = document.querySelector("#fc")
inputFechas.value = "31/05/2024"
let conceptoAincluir = document.querySelector("#idconcepto")
conceptoAincluir.children[1].selected = true

let selectorActividades = document.querySelector("#actiAsociadaId")

let btnContinuar = document.querySelector("#contenido > form > input[type=button]:nth-child(4)")
btnContinuar.click()

