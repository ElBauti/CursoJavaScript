

//Como podemos comparar listas .every()

const array = [4, 6, 7, 8, 3, 6, 2, 1, -4, -7, 12, 5, -40]

// const resultado = array.every(valor => {
//     if(typeof valor === "number"){
//         return true
//     }else{
//         return false
//     }
// })

console.log(array.every(valor => typeof valor === "number"))

//Comparacion de listas

const ar1 = [1, 2, 3, 4]
const ar2 = [1, 2, 3, 4]

console.log(ar1 === ar2)

const compararArrays = (ar_1, ar_2) =>{
    if (ar_1.length !== ar_2.length) return false
    const res = ar_1.every((valor, i) => valor === ar_2[i])
    return res
}