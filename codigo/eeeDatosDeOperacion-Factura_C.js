
const productosServicio = document.querySelector("#detalle_descripcion1")
const detalleDescripcion = document.querySelector('#detalle_medida1')
const precioUnitario = document.querySelector("#detalle_precio1")
const arrayPrecios = [

["1/05/2024", 5000],

["31/05/2024", 8400],

];

//prueba()    
const btnContinuar = document.querySelectorAll('input')


/*lee desde el localStorage*/
let i = parseInt(localStorage.getItem("iterador"));
console.log("METODO=> SERVICIO   ESTORAGE=> " + i);


/*let i = productosServicio.value;*/
console.log(i)
let fecha = (Number(i) + 1)

//  for (let i = 0; i < 31; i++) {

productosServicio.value = 'Factura del dia ' + arrayPrecios[i][0]
//productosServicio.value = 'Factura del dia ' + "20/11/2023"
detalleDescripcion.lastChild.selected = true

precioUnitario.value = arrayPrecios[i][1]
precioUnitario.onkeyup(precioUnitario.value)
precioUnitario.onchange(precioUnitario.value)
//btnContinuar[32].click()

/*este es la linea ejecutora*/
validarCampos();

