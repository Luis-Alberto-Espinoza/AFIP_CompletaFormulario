
const productosServicio = document.querySelector("#detalle_descripcion1")
const detalleDescripcion = document.querySelector('#detalle_medida1')
const precioUnitario = document.querySelector("#detalle_precio1")

const arrayDatos = [

    ["1/05/2024", 5000],

    ["31/05/2024", 8400],

];


/*lee el valor del localStorage*/
let i = parseInt(localStorage.getItem("iterador"));

productosServicio.value = 'Factura del dia ' + arrayDatos[i][0]
detalleDescripcion.lastChild.selected = true
precioUnitario.value = arrayDatos[i][1]
precioUnitario.onkeyup(precioUnitario.value)
precioUnitario.onchange(precioUnitario.value)
validarCampos();

