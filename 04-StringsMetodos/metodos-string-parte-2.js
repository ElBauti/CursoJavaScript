

//Mayusculas|Minusculas
let input = "Escorpio"
let db = "escorpio"
console.log(input.toLowerCase())
console.log(input.toUpperCase())

//Formas de concatenar dos cadenas de caracteres
let str_1 = "Soy la primer cadena"
let str_2 = "Soy la primer cadena fake"
console.log(str_1.concat(" ", str_2))
console.log(str_1," ",str_2)

//Eliminar espacios al inicio y al final
let str_3 = "   Hola soy un string con espacios al final.  "
console.log(str_3.length)
console.log(str_3.trim().length)
console.log(str_3.trimStart().length)
console.log(str_3.trimEnd().length)

//Obtener caracteres que hay en cierta posicion
let str_4 = "Hola soy el string numero 4"
console.log(str_4.charAt(5))
console.log(str_4[5])

//obtener la posicion de una palabra dentro de una cadena de caracteres
let str_5 = "Hola soy Gorka y me gusta comer pan pero el pan con salvado porque me da gastronteritis"
console.log(str_5.indexOf("Gorka"))
console.log(str_5.lastIndexOf("gastronteritis"))
