let anio = "2024"
let mesEnCurso = "05";
let arrayIngresado = [
    
    5000,
3500,
6000,
9600,
6530,
5360,
7560,
4520,
9853,
5420,
14050,
6390,
5890,
7420,
3690,
10600,
9630,
9850,
9520,
7500,
4100,
6580,
7980,
9990,
4620,
7130,
6340,
12500,
5600,
9630,
8420

    

    

]

datosOriginales(arrayIngresado)
p01_subDividirFacturas(arrayIngresado)

function p01_subDividirFacturas(arrayIngresado) {
    let arrayFinal = "";

    for (let i = 0; i < arrayIngresado.length; i++) {
        let provisorio = arrayIngresado[i];
        let cantfacturas = Math.ceil(provisorio / 78600);
        if (cantfacturas > 15)
            console.log(`\n!!!!!! hay registros que cuentan con \n mas de 15 facturas!!!!!!\n`)
        console.log("   Para el Dato = " + (i + 1) + ", La Cantidad de facturas es = " + cantfacturas);
        let multiplicadores = getMultiplicadores(cantfacturas);
        let valoresFinales = multiplicadores.map(multiplicador => Math.ceil(provisorio * multiplicador));
        arrayFinal += valoresFinales.join(", ") + "\n";
    }

    p02_StringToInt(arrayFinal);
}

function getMultiplicadores(cantfacturas) {
    const multiplicadoresPorCantidad = {
        1: [1],
        2: [0.45, 0.55],
        3: [0.38, 0.27, 0.35],
        4: [0.20, 0.22, 0.28, 0.30],
        5: [0.19, 0.22, 0.20, 0.18, 0.21],
        6: [0.19, 0.14, 0.18, 0.16, 0.20, 0.13],
        7: [0.135, 0.115, 0.17, 0.165, 0.15, 0.145, 0.120],
        8: [0.125, 0.105, 0.117, 0.148, 0.15, 0.145, 0.120, 0.09],
        9: [0.111, 0.105, 0.1013, 0.1209, 0.1191, 0.1071, 0.1069, 0.1099, 0.1188],
        10: [0.111, 0.105, 0.107, 0.1045, 0.1035, 0.1033, 0.120, 0.0157, 0.114, 0.116],
        11: [0.121, 0.105, 0.110, 0.0965, 0.0669, 0.1, 0.085, 0.0792, 0.0834, 0.046, 0.107],
        12: [0.101, 0.0689, 0.1199, 0.0965, 0.0709, 0.111, 0.085, 0.0792, 0.01734, 0.07896, 0.0833, 0.088],
        13: [0.0905, 0.0814, 0.0918, 0.0743, 0.0539, 0.0719, 0.0927, 0.0862, 0.0476, 0.0765, 0.0555, 0.0936, 0.0841],
        14: [0.07, 0.0514, 0.0618, 0.0743, 0.0579, 0.0719, 0.0827, 0.0850, 0.0676, 0.0765, 0.0655, 0.0736, 0.0841, 0.0777],
        15: [0.0737, 0.0387, 0.0501, 0.0668, 0.0626, 0.0650, 0.0703, 0.0601, 0.0471, 0.0541, 0.0457, 0.0592, 0.0806, 0.0749, 0.0786, 0.0725]
    };
    // Corroborar que cada fila sume en total 1 
    // verificarSumaPorFila(multiplicadoresPorCantidad);
    return multiplicadoresPorCantidad[cantfacturas] || [];
}

function p02_StringToInt(frase) {
    frase = frase.trim()
    let contadorI = frase.split("\n").length
    let montoInt = new Array(contadorI)

    for (let i = 0; i < frase.split("\n").length; i++) {
        let fila = frase.split("\n")[i]
        let cantElementosXFila = fila.split(",").length
        montoInt[i] = new Array(cantElementosXFila)
        if (cantElementosXFila > 0) {
            for (let j = 0; j < cantElementosXFila; j++) {
                let elemento = parseInt(fila.split(",")[j].trim());
                montoInt[i][j] = elemento
            }
        } else {
            montoInt[i] = parseInt(fila)
        }
    }
    p03_agregarFechas(montoInt, mesEnCurso)
}

function p03_agregarFechas(arrayMonto, mesEnCurso) {
    let contador = 0

    let arrayResultado = [];
    arrayResultado[0] = [];

    console.log("\n##################### \n")
    for (let i = 0; i < arrayMonto.length; i++) {
        for (let j = 0; j < arrayMonto[i].length; j++) {
            if (!arrayResultado[contador]) {
                arrayResultado[contador] = [];
            }
            arrayResultado[contador][0] = '"'+(i + 1) + "/" + mesEnCurso + "/" + anio+'"';
            arrayResultado[contador][1] = Math.round(arrayMonto[i][j] / 50) * 50
            console.log(`[${arrayResultado[contador][0]}, ${arrayResultado[contador][1]}],`);
            contador++;
        }
    }
    console.log("\n##################### \n")
    probar(arrayResultado);
}


function probar(arrayResultado) {
    let contadorIncorrectas = 0;
    let contadorCorrectas = 0;
    let sumador = 0;
    console.log("inicio test");
    for (let i = 0; i < arrayResultado.length; i++) {
        sumador = sumador + arrayResultado[i][1]
        if (arrayResultado[i][1] > 95812) {
            console.log(`\n   ¡¡¡Atención!!! Limite Superado!!
            facrtura ${i + 1} monto => ${arrayResultado[i][1]} Corresponde a la fecha => ${arrayResultado[i][0]}\n`)
            contadorIncorrectas++
        } else {
            contadorCorrectas++
        }
    }
    console.log("Suma total =" + sumador);
    console.log("facturas correctas =" + contadorCorrectas);
    console.log("facturas incorrectas =" + contadorIncorrectas);
    console.log("Fin test");
}

function datosOriginales(arrayIngresado) {
    console.log("la cantidad de datos Originales ingresados es " + arrayIngresado.length)
    let suma = arrayIngresado.reduce((total, valor) => total + valor, 0);
    console.log("La suma original es:", suma);
}

function verificarSumaPorFila(multiplicadoresPorCantidad) {
    for (let cantidad in multiplicadoresPorCantidad) {
        const fila = multiplicadoresPorCantidad[cantidad];
        const sumaFila = fila.reduce((total, valor) => total + valor, 0);
        if (Math.abs(sumaFila - 1) > 0.0001) {
            console.log(`Error en la fila ${cantidad}. La suma es ${sumaFila}, debería ser 1.`);
            return false;
        }
    }
    console.log("Todas las filas suman 1 correctamente.");
    return true;
}
