
let numeroFactorial = 10
function factorialFor(numeroFactorial = 0) {
    let ResultadoFactorial = 1;
    for (let i = 1; i < numeroFactorial+1; i++) {
        ResultadoFactorial = ResultadoFactorial * i
    }
    mensajeFinal = "El factorial de " + numeroFactorial + " es: " + ResultadoFactorial
    return mensajeFinal
}

console.log(factorialFor(numeroFactorial))