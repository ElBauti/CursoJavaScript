
const ciudades = ["San Sebastian","Madrid","Bcn","Alicante","Valencia"]
const listaPersonas = [
    {name:"Bauti", years:19},
    {name:"Marcos", years:26},
    {name:"Isa", years:30},
    {name:"Alberto", years:40},
]

//.map()

const ciudadesConMap = ciudades.map((ciudad, indice) =>  `${indice + 1} - ${ciudad}`)
console.log(ciudadesConMap)


//.filter()

// const personasFiltradas = listaPersonas.filter(persona => {
//     if (persona.years > 20) {
//         return true
//     } else {
//         return false
//     }
// })

const personasFiltradas = listaPersonas.filter(persona => persona.years > 20)
console.log(personasFiltradas)

const Hombres = listaPersonas.filter(persona => persona.name != "Isa")
console.log(Hombres)

//.reduce()
const array1 = [1, 2, 3, 4];

const initialValue = 0
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial)