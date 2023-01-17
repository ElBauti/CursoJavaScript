/*
    Crea un nuevo fichero JS que contenga las siguientes líneas

    - Una función que admita un parámetro "num", y 
    devuelva una lista con esa cantidad de números de la secuencia de Fibonacci
    (Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8])

    - Ejecuta la depuración de VSCode para visualizar la ejecución de la función
*/


function fibonacciHastaNum(num) {
    n1 = 0
    n2 = 1
    turnoSiguiente = n1 + n2
    while (turnoSiguiente <= num) {
        console.log(turnoSiguiente);
        n1 = n2;
        n2 = turnoSiguiente;
        turnoSiguiente = n1 + n2;
    }
}
// console.log(fibonacciHastaNum(8))

function fibonacci(num) {
    n1 = 0
    n2 = 1
    turnoSiguiente = 0
    for(let i = 1; i <= num; i++) {
        console.log(n1);
        console.log(turnoSiguiente)
        turnoSiguientes = n1 + n2;
        console.log(turnoSiguiente)
        n1 = n2;
        n2 = turnoSiguientes;
    }
}

// console.log(fibonacci(4))
