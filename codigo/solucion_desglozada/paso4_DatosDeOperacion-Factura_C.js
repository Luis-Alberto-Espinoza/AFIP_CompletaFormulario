if (window.location.href.includes('genComDatosOperacion')) {

    const productosServicio = document.querySelector("#detalle_descripcion1")
    const detalleDescripcion = document.querySelector('#detalle_medida1')
    const precioUnitario = document.querySelector("#detalle_precio1")

    /*leer los valores del localStorage*/
    const arrayDatos = JSON.parse(localStorage.getItem('arrayDatos'));
    let iterador = parseInt(localStorage.getItem("iterador"));

    productosServicio.value = 'Factura del dia ' + arrayDatos[iterador][0]
    detalleDescripcion.lastChild.selected = true
    precioUnitario.value = arrayDatos[iterador][1]
    precioUnitario.onkeyup(precioUnitario.value)
    precioUnitario.onchange(precioUnitario.value)
    validarCampos();
}
