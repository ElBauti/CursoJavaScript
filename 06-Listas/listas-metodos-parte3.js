
const arrayPrueba = [1,2,3,4,5,6,7,8,9,10]

//Iterar los valores de una lista

let suma = 0
arrayPrueba.forEach(element => {
    suma += element
    console.log(element)
});
console.log(suma)

/*
    Busqueda de un valor dentro de la lista .find()
    Quiero encontrar el elemento 9
*/

const buscador = arrayPrueba.find(elemento => {
    if (elemento === 9) {
        return true
    }
})

console.log(buscador) 

const listaPersonas = [
    {name:"Bauti", years:19},
    {name:"Marcos", years:26},
    {name:"Isa", years:30},
    {name:"Alberto", years:40},
]

const findPersona = listaPersonas.find(persona =>{
    if (persona.name ===  "Marcos") {
        return true
    }
})
console.log("La persona que buscas es:",findPersona.name, "y tiene:",findPersona.years, "years")


const findPersonaRefactorSSR = listaPersonas.find(persona => persona.name === "Marcos")
console.log("La persona que buscas es:",findPersonaRefactorSSR.name, "y tiene:",findPersonaRefactorSSR.years, "years")

/*findPersonaRefactorSR  = */const {years} = listaPersonas.find(persona => persona.name === "Marcos")
console.log(years)
