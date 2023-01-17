

let numeroFactorial = 10
function factorialWhile(factorial) {
    let ResultadoFactorial = 1;
    let contadorFactorial = 1
    while (contadorFactorial < factorial) {
        ResultadoFactorial = ResultadoFactorial * contadorFactorial
        contadorFactorial++
    }
    mensaje = "El factorial de " + factorial + " es: " + ResultadoFactorial
    return mensaje
}
console.log(factorialWhile(numeroFactorial))