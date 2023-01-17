export function suma(numero_1, numero_2) {
    return numero_1 + numero_2;
}

export function multiplicar(numero_1, numero_2) {
    return numero_1 * numero_2;
}

export function factorial(numero_1) {
    
    let factorial = 1;
    for (let i = 2; i <= numero_1; i++) {
        factorial *= numero_1;
    }
    return factorial;
}

