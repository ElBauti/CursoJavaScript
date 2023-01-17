
// .some()

const array = [3,8,2,4,9,7,10,5, -2]

const arraysome = array.some(valor => valor < -9)
console.log(arraysome)

const listaPersonas = [
    {name:"Bauti", years:19},
    {name:"Marcos", years:26},
    {name:"Isa", years:30},
    {name:"Alberto", years:40},
]

const existeBauti = listaPersonas.some(persona => persona.name === "Bauti")
console.log(existeBauti)


//Como obtener una lista a partir de un objeto iterable

const str = "Hola soy Gorka"

const ar_str = Array.from(str)
console.log(ar_str)

const set = new Set([2,3,"Hola", 4])
const ar_set = Array.from(set)
console.log(ar_set)

const keys = array.keys()
console.log(keys)

const ar_keys = Array.from(keys)
console.log(ar_keys)