
let arrayDatos = [
    ["1/05/2024", 5000],
    // otros elementos...
    ["20/05/2024", 10000],
];

// Convertir el array a una cadena JSON y guardarlo en el localStorage
localStorage.setItem('arrayDatos', JSON.stringify(arrayDatos));

if (localStorage.getItem('iterador') === null || localStorage.getItem('iterador') !== '0') {
    // Si no existe o tiene un valor distinto a 0, crea o la formatea con el valor cero
    localStorage.setItem('iterador', 0);
};