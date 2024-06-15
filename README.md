# AFIP_CompletaFormulario

Este proyecto, desarrollado en JavaScript, está diseñado para automatizar el llenado de diversos formularios de la AFIP, permitiendo la generación de facturas electrónicas tanto de tipo "B" como "C". Se optó por esta implementación debido a un comunicado emitido por la misma entidad advirtiendo el uso de frameworks como Selenium para la automatización del llenado de formularios, castigando con posibles sanciones.

---

### Descripción de la solución

La solución consiste en pequeños bloques de código que se deben ejecutar a medida que se va pasando por cada formulario. Dichos bloques de código pueden ejecutarse de las siguientes maneras:
- En la consola del navegador.
- Como snippets en Google Chrome.
- A través de plugins del navegador como Tampermonkey® u otros.

### Requisitos

Es necesario tener un arreglo con el formato `["fecha", monto]` como se muestra a continuación. Este arreglo se deberá pegar en los bloques de código que se requieran, como se mostrará más adelante.

```js
let fechaMonto = [
    ["1/05/2024", 60750],
    // resto de días necesarios...
    ["31/05/2024", 73900],  
];
```

Tenga en cuenta que el monto de la factura no debe exceder el límite establecido por la AFIP para facturas sin registrar los datos del comprador, ya que generará un detenimiento en la ejecución y aparecerá una ventana emergente en la que se le indicará que por el monto facturado deberá registrar los datos del receptor para continuar. Para evitar esto, una de las opciones es descomponer en varias facturas.

Otro punto importante para el desarrollo del código será almacenar en el `localStorage` una variable llamada "iterador", que será leída durante la ejecución de los distintos bloques de código para utilizarla como iterador en la lectura del `arrayDatos`. Es fundamental que a dicha variable se le asigne el valor "0" (cero), ya que el programa de JavaScript comienza a leer desde este valor.

Si se desea, entre los scripts hay uno llamado `Crear-Formatear_Iterador.js`. La función de este script es crear o formatear dicha variable en el `localStorage`. Es importante, cuando se trabaje con un nuevo `arrayDatos`, restablecer la variable "iterador" para que el programa comience desde el primer valor. De lo contrario, puede ocurrir un error debido a que el programa comenzará a ejecutarse desde un punto no deseado, o el navegador mostrará un error indicando que el índice está fuera de rango.

### Ejemplo de script `Crear-Formatear_Iterador.js`

```javascript
if (localStorage.getItem('iterador') === null || localStorage.getItem('iterador') !== '0') {
    // Si no existe o tiene un valor distinto a 0, crea o formatea la variable con el valor cero
    localStorage.setItem('iterador', 0);
}
```

---

### Cómo ejecutarlo

1. **Acceder al portal de AFIP:** Ingrese con sus credenciales al portal de AFIP y seleccione "Comprobantes en Línea".
2. **Iniciar en el sistema RCEL:** Una vez dentro del sistema "RCEL", se mostrará el siguiente menú:
    ![menu inicio](./imagenes/inicio.png)
3. **Ejecutar el primer script:** Ejecute el script llamado `paso0_GeneraComprobantes.js` para que se seleccione la opción de "Generar Comprobante".
4. **Formulario "Puntos de Ventas":** Será dirigido al formulario "Puntos de Ventas", donde debe ejecutar el script `paso1_PuntosDeVentas.js`.
5. **Formulario "Datos de Emisión":** Dependiendo del caso, si es "Producto" o "Servicio", deberá elegir entre los scripts `paso2_DatosDeEmision-Productos.js` o `paso2_DatosDeEmision-Servicio.js`:
    - **Producto:** Actualice el valor de la variable a la fecha que se desee:
    ```js
    inputFechas.value = "31/05/2024";
    ```
    - **Servicio:** Actualice el valor del `arrayDatos` con los valores necesarios:
    ```js
    const arrayDatos = [
        ["1/05/2024", 5000],
        // otros datos...
        ["31/05/2024", 25000],
    ];
    ```
6. **Formulario "Datos Del Receptor":** Ejecute el script `paso3_DatosDelReceptor.js`.
7. **Formulario "Datos De Operación":** Según sea necesario, ejecute el script correspondiente:
    - **Factura B:** Use el script `paso4_DatosDeOperacion-Factura_B.js`.
    - **Factura C:** Use el script `paso4_DatosDeOperacion-Factura_C.js`.
    Para estos casos, actualice el `arrayDatos` con los valores necesarios:
    ```js
    const arrayDatos = [
        ["1/05/2024", 5000],
        // otros datos...
        ["31/05/2024", 25000],
    ];
    ```
8. **Formulario de "Confirmación":** Ejecute el script `paso5_ConfirmarFactura.js`.

Después de la ejecución de este último script, será dirigido al menú principal. Si existen más facturas por realizar en el `arrayDatos`, deberá repetir la secuencia descrita anteriormente.

### Sugerencias adicionales:

- **Pruebas:** Antes de ejecutar los scripts en un entorno de producción, pruebe en un entorno de prueba o en datos de prueba para asegurarse de que todo funcione correctamente.
- **Mantenimiento del código:** Actualice regularmente los scripts para adaptarse a posibles cambios en la interfaz de la AFIP.
