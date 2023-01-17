
//Operador .valueOf() - Obtener valores numericos a partir de literales
let a = 2
let b = new Number(3)

console.log(a)
console.log(b)
console.log(a + b)
console.log(b.valueOf())




//NaN - Infinity
let n = Number('adios')
console.log(n)
console.log(isNaN(n))

let numerador = 10
let divisor = 0
console.log(numerador/divisor)

//Numeros hexadecimales (base 16)
let numHexa = '0x3a5b7'
console.log(parseInt(numHexa))


//Como convertir los strings a valores numericos con Number, parseInt, parseFloat
let numero = '5.89'
let numero2 = 17.2

console.log(typeof numero)
console.log(Number(numero) + numero2)

console.log(parseFloat(numero))
console.log(parseInt(numero))


//Obtener los valores max y min en JavaScript
let minPrecision = Number.EPSILON
let minValorJS = Number.MIN_VALUE
let maxValorJS = Number.MAX_VALUE

console.log(minPrecision)
console.log(minValorJS)
console.log(maxValorJS)

