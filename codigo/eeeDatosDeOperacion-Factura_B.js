let productosServicio = document.getElementById("detalle_descripcion1")
const detalleDescripcion = document.querySelector('#detalle_medida1')
const precioUnitario = document.querySelector("#detalle_precio1")
const alicuotaIva = document.querySelector("#detalle_tipo_iva1")

let fechaMonto=[

["1/05/2024", 60750],

["31/05/2024", 73900],

  ]

/*lee desde un prompt*/
let valor1 =parseInt( localStorage.getItem('iterador'));
console.log("METODO=> SERVICIO   ESTORAGE=> "+valor1);


/*esta linea toma el valor int ingresado en el input de produto 
que corresponde a al numero de factura a realizar */
//let i = productosServicio.value;

console.log(typeof(valor1))
let i = (valor1);
console.log("=> "+i);



productosServicio.value =`Factura del día `+ fechaMonto[i][0]
detalleDescripcion.lastChild.selected = true
precioUnitario.value = fechaMonto[i][1]
alicuotaIva.value = 5
precioUnitario.onkeyup(precioUnitario.value)
precioUnitario.onchange(precioUnitario.value)
//btnContinuar[32].click()
validarCampos();


