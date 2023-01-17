
let a = 3.5
let b = 4.8

//Suma(+)
console.log(a + b)


//Resta(-)
console.log(a - b)

//Multiplicacaion(*)
console.log(a * b)

//Division(/)
console.log(a / b)

//Representacion de los numeros en cadena de text

console.log(typeof a)

let aS = a.toString()
console.log(typeof aS)




//Redondeo de numeros decimales
let c = 3.3
let d = c * 3

//.toFixed(x) - Limita el numero de decimales al valor x, pero te convierte el dato en string
console.log(d)
console.log(d.toFixed(2))

//.toPrecision(x) - Limita el numero de cifras significativas, pero te lo convierte el dato en string
console.log(d.toPrecision(3))
