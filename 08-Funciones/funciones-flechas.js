
const numeros = [1,2,4,5,6,7,9,10,22,34,51]

const numero2 = numeros.map(function(valor){
    return valor * 2
})
console.log(numero2)

//como se usan las funciones tipo flecha -->
const numero3 = numeros.map((valor) => valor * 2)
console.log(numero3)

////
const dobleDelValor = valor =>{
    return valor * 2
}