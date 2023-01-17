
const lista1 = [1,2,3,4,5]
const lista2 = [6,7,8,9,10]

//Unir dos listas .concat(lista2)
console.log(lista1.concat(lista2))

//Unir dos listas con el factor de propagacion
const lista3 = [...lista1, ...lista2]
console.log(lista3)

//Como obtener una lista a partir de otra .slice() NO MODIFICA EL VALOR DEL ARRAY ORIGINAL

const listasplice = lista3.splice(2,5)
console.log(listasplice)