# AFIP_CompletaFormulario

Este proyecto, desarrollado en JavaScript, está diseñado para automatizar el llenado de diversos formularios de la AFIP, permitiendo la generación de facturas electrónicas tanto de tipo "B" como "C". Se optó por esta implementación debido a un comunicado emitido por la misma entidad advirtiendo el uso de frameworks como Selenium para la automatización del llenado de formularios, castigando con posibles sanciones.

---

### Descripción de la solución

La solución consiste en pequeños bloques de código que se deben ejecutar a medida que se va pasando por cada formulario. Dichos bloques de código pueden ejecutarse de las siguientes maneras:
- En la consola del navegador.
- Como snippets en Google Chrome.
- A través de plugins del navegador como Tampermonkey® u otros.

Tener en cuenta que esta solucion trabaja con los monto de la factura que no exceden el límite establecido por la AFIP para facturas sin registrar los datos del comprador, ya que de hacerlo generará un detenimiento en la ejecución y aparecerá una ventana emergente en la que se le indicará que por el monto facturado deberá registrar los datos del receptor para continuar. Para evitar esto, una de las opciones es descomponer el monto deseado en varias facturas.

### Requisitos

Es necesario tener un arreglo con el formato `["fecha", monto]` ver apartado [Armado de Array de Datos](#armado-de-array-de-datos) . Es muy importante mantener el formato para que los futuros bloques de codigos puedan utilizar los datos para el llenado de los distintos formularios. 
Como se muestra la fecha esta envuelta entre comillas. el monto no debe llevar puntos ni comas, y ambos deben estar entre braquet seguido con una coma. 

```js
let fechaMonto = [
    ["1/05/2024", 60750],
    // resto de días necesarios...
    ["31/05/2024", 73900],  
];
```
En el scripts - archivo llamado `Crear-Formatear_Datos.js`. La función de este script es de enviar los valores necesarios como variables al `localStorage`. 

---

### Cómo ejecutarlo

1. **Acceder al portal de AFIP:** Ingrese con sus credenciales al portal de AFIP y seleccione "Comprobantes en Línea".
2. **Iniciar en el sistema RCEL:** Una vez dentro del sistema "RCEL", se mostrará el siguiente menú:
    ![menu inicio](./imagenes/inicio.png)
3. **Ejecutar el primer script:** Ejecute el script llamado `paso0_GeneraComprobantes.js` para que se seleccione la opción de "Generar Comprobante".
4. **Formulario "Puntos de Ventas":** Será dirigido al formulario "Puntos de Ventas", donde debe ejecutar el script `paso1_PuntosDeVentas.js`.
5. **Formulario "Datos de Emisión":** Dependiendo del caso, si es "Producto" o "Servicio", deberá elegir entre los scripts `paso2_DatosDeEmision-Productos.js` o `paso2_DatosDeEmision-Servicio.js`:
   
6. **Formulario "Datos Del Receptor":** Ejecute el script `paso3_DatosDelReceptor.js`.
7. **Formulario "Datos De Operación":** Según sea necesario, ejecute el script correspondiente:
    - **Factura B:** Use el script `paso4_DatosDeOperacion-Factura_B.js`.
    - **Factura C:** Use el script `paso4_DatosDeOperacion-Factura_C.js`.
8. **Formulario de "Confirmación":** Ejecute el script `paso5_ConfirmarFactura.js`.

Después de la ejecución de este último script, será dirigido al menú principal. Si existen más facturas por realizar en el `arrayDatos`, deberá repetir la secuencia descrita anteriormente.


## Armado de Array de Datos
Este script aborda la necesidad de dividir grandes montos de facturas para evitar la obligación de ingresar datos del receptor. Pegue el script en la consola del navegador, ajuste los datos y obtendrá el array necesario para `Crear-Formatear_Datos.js`.

```javascript
const configuracion = {
    montoMaximo: 95812, //este valor lo estipula la entidad 
    anio: "2024",
    mesEnCurso: "05"
};

let montoFactura = [ // tener en cuenta que la cantidad de datos ingresados no supere a la cantidad de dias del mes en curso 
    958813, 86001, 89600, 86530, 85360, 87560, 84520, 89853,
    85420, 84052, 86391, 99891, 46281, 71381, 68341, 12501,
//otros montos totales diarios de facturas 
    56801, 96381, 84281
];
```

### Sugerencias adicionales:

- **Pruebas:** Antes de ejecutar los scripts en un entorno de producción, pruebe en un entorno de prueba o en datos de prueba para asegurarse de que todo funcione correctamente.
- **Mantenimiento del código:** Actualice regularmente los scripts para adaptarse a posibles cambios en la interfaz de la AFIP.
