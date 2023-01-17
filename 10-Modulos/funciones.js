function suma(numero_1, numero_2) {
    return numero_1 + numero_2;
}

function multiplicar(numero_1, numero_2) {
    return numero_1 * numero_2;
}

function factorial(numero_1) {
    
    let factorial = 1;
    for (let i = 2; i <= numero_1; i++) {
        factorial *= numero_1;
    }
    return factorial;
}

module.exports = {
    suma,
    multiplicar,
    factorial
}