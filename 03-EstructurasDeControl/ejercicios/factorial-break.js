
let numeroFactorial = 10

function factorialWhile(factorial) {
    let ResultadoFactorial = 1;
    let contadorFactorial = 1
    bucleFactorial:while (true) {
        ResultadoFactorial = ResultadoFactorial * contadorFactorial
        contadorFactorial++
        if (contadorFactorial == 10) {
            console.log("Ciclo terminado!")
            break bucleFactorial
        }
    }
    mensaje = "El factorial de " + factorial + " es: " + ResultadoFactorial
    return mensaje
}
console.log(factorialWhile(numeroFactorial))