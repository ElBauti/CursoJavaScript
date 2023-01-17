
// .sort()

const numeros = [1,2,5,3,4,7,6,9,8,10]

const numerosSort = numeros.sort((a, b) =>{
    if (a < b) {
        return -1
    }else if (a > b){
        return +1
    }else{
        return 0
    }
})

console.log(numeros)
console.log(numerosSort)

//Ordenar unicamente arrays numericos

console.log(numeros.sort((a,b) => b - a))

//Interesante en arrays de objetos

const listaPersonas = [
    {name:"Bauti", years:19},
    {name:"Marcos", years:26},
    {name:"Isa", years:30},
    {name:"Alberto", years:40},
]

console.log(listaPersonas.sort((a,b) => b.years - a.years))


