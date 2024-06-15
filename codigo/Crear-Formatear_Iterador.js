if (localStorage.getItem('iterador') === null || localStorage.getItem('iterador') !== '0' ) {
    // Si no existe o tiene un valor distinto a 0, crea o la formatea con el valor cero
    localStorage.setItem('iterador', 0);
};