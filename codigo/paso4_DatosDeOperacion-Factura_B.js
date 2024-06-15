let productosServicio = document.getElementById("detalle_descripcion1")
const detalleDescripcion = document.querySelector('#detalle_medida1')
const precioUnitario = document.querySelector("#detalle_precio1")
const alicuotaIva = document.querySelector("#detalle_tipo_iva1")

let fechaMonto = [

  ["1/05/2024", 60750],

  ["31/05/2024", 73900],

]

let valor1 = parseInt(localStorage.getItem('iterador'));
let i = (valor1);

productosServicio.value = `Factura del día ` + fechaMonto[i][0]
detalleDescripcion.lastChild.selected = true
precioUnitario.value = fechaMonto[i][1]
alicuotaIva.value = 5
precioUnitario.onkeyup(precioUnitario.value)
precioUnitario.onchange(precioUnitario.value)
validarCampos();


