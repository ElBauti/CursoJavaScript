
// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

const datosPersonales = {
        nombre:"Roberto",
        apellido:"Galati",
        edad: 40,
        altura: 1.89,
        eresDesarrollador: true
}

//- Una variable que obtenga tu edad a partir del objeto anterior

let edadObjeto = datosPersonales.edad
console.log(edadObjeto)

/*
    - Una lista que contenga el objeto con tus datos personales y un nuevo objeto 
    con los datos personales de tus dos mejores amig@s
*/

const amigo1 = {datosPersonales}
amigo1.edad = 19
const amigo2 = {datosPersonales}
amigo2.edad = 10

const listaObjetos = [
    datosPersonales, amigo1, amigo2
]
console.log(listaObjetos)

//- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

const edades = listaObjetos.sort((a,b) => a.edad - b.edad)
console.log(edades)