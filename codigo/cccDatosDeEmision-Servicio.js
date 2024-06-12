const arrayPrecios = [

["1/05/2024", 5000],

    ];


let mes= '05';
let referencia = document.querySelector("#refComEmisor")
/*#########################*/


/*lee desde el localStorage*/
    let i =parseInt(localStorage.getItem("iterador"));

/*#########################*/ 
let inputFechas = document.querySelector("#fc")


let fechaEmision = arrayPrecios[(arrayPrecios.length)-1][0]


inputFechas.value = fechaEmision
 //   let conceptoAincluir = document.querySelector("#idconcepto")
// conceptoAincluir.children[2].selected = true
/*
itemElegido = 0 default
itemElegido = 1 producto
itemElegido = 2 servicio
itemElegido = 3 productos y servicios
*/
let itemElegido =  3
let conceptoAincluir = document.querySelector("#idconcepto")
    conceptoAincluir.value = itemElegido
    mostrarOcultar(itemElegido)

    let btnContinuar = document.querySelector("#contenido > form > input[type=button]:nth-child(4)")
    
const desde = document.querySelector("#fsd")
const hasta = document.querySelector("#fsh")
 const vto = document.querySelector("#vencimientopago")
 desde.value = arrayPrecios[i][0];
hasta.value = arrayPrecios[i][0];
vto.value = fechaEmision
//let selectorActividades = document.querySelector("#actiAsociadaId")
//selectorActividades.options[1].selected = true
referencia.value= "";


btnContinuar.click()
