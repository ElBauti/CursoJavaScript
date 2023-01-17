

/*
    - Una variable que contenga la lista de la compra (mínimo 5 elementos)
*/

const listaCompra = ["Pan","Leche","Huevos","Almendras","Nutella"]
console.log(listaCompra)

/*
    - Modifica la lista de la compra y añádele "Aceite de Girasol"
*/

listaCompra.push("Aceite de Girasol")
console.log(listaCompra)

/*
    - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
*/

listaCompra.pop()
console.log(listaCompra)

/*
    - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
*/

const peliculasFavoritas = [
    {Titulo:"Cars1", director:"John Lasseter", fecha:new Date("2009, 02, 31")},
    {Titulo:"Cars2", director:"John Lasseter", fecha:new Date("2010, 02, 31")},
    {Titulo:"Cars3", director:"John Lasseter", fecha:new Date("2014, 02, 31")},
]

/*
    - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
*/

fechaNueva = new Date("2010,01,01")
const peliculasNuevas = peliculasFavoritas.filter(peliculas => peliculas.fecha > fechaNueva)
console.log(peliculasNuevas)

/*
    - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
*/

const directores = peliculasFavoritas.map( director => director.director)
console.log(directores)

/*
    - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
*/

const peliculas = peliculasFavoritas.map( pelicula => pelicula.Titulo)
console.log(peliculas)

/*
    - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
*/

const directoresPeliculas = directores.concat(peliculas)
console.log(directoresPeliculas)

/*
    - Una nueva lista que concatene la lista de directores y 
    la lista de los títulos (utilizando el factor de propagación)
*/

const directoresPeliculasPropagacion = [...directores, ...peliculas]
console.log(directoresPeliculasPropagacion)