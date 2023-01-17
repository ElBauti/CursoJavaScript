
const objeto = {
    id: 4,
    nombre:"Juan",
    apellido:"Martinez",
    isDeveloper:true,
    librosFavoritos: ["Clean Code","El metodo"]
}

//Acceder a un valor del objeto
console.log(objeto.apellido)

const propiedad = "isDeveloper"
console.log(objeto[propiedad])


//Se copia absolutamente todo, hasta la referencia en memoria
const obj2 = objeto

obj2.nombre = "Julian"
console.log(objeto.nombre)

//Manera de copiar sin copiar ref en memoria
const obj3 = {...objeto}
obj3.nombre = "Leandro"

console.log(obj3)
console.log(objeto)

//Como ordenar listas de objetos en funcion de una propiedad

const listaPeliculas = [
    {titulo: "cars1", anyo: 1920},
    {titulo: "cars2", anyo: 1910},
    {titulo: "cars3", anyo: 1940},
    {titulo: "cars4", anyo: 1930},
]

const listaPeliculasOrdenadasAnyos = listaPeliculas.sort((a,b) => a.anyo - b.anyo)
console.log(listaPeliculasOrdenadasAnyos)