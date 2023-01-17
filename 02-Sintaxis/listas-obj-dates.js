
//Listas

const lista = [1,2,3,4,5]
console.log(lista)

const lista2 = new Array(3)
console.log(lista2)
lista2[0] = "Soy el primer elemento, index 0"

const lista3 = [lista,lista2]
console.log(lista3)

//Objetos

const movil = {
    altura:10,
    anchura:5,
    marca: "Xiomi",
    isWhite: false,
    contactos: ["robert","albert","peter parker"],
    tarjeta: {
        marca:"Sandisk",
        almacenamiento:"32gb"
    }
}
console.log(movil.altura)


//Fechas (Libreria de apoyo Moments.js)

const ahora = new Date()
console.log(ahora)

const fechaMilis = new Date(10)//Utilizando los milisegundos
console.log(fechaMilis)

const fechaCadena = new Date("march 24 2022")
console.log(fechaCadena)

const fechaValores = new Date(2022, 2, 14)
console.log(fechaValores)

const dia = ahora.getDate()
const mes = ahora.getMonth() 
const anyo = ahora.getFullYear()

const diaMesAnyo = {
    Dia:dia,
    Mes:mes,
    Anyo:anyo
}

console.log(diaMesAnyo.Dia)
console.log(diaMesAnyo.Mes)
console.log(diaMesAnyo.Anyo)
