

//Como trabajar con Listas|Arreglos|Vectores
let var1 = 41
let array = [1, "HOLA", false, {id:var1}, null, undefined]

console.log(array)

//Acceder a los valores de un array a traves de su posicion 
//array[indice] -> 0,1,2,3,4,5...

console.log(array[3])

/*
    Metodos para introducir nuevos valores en nuestros array
    .push() .unshift() -> Mutan el valor de nuestros arrays
    push() -> Valores al final
    unshift() -> Valores al principio
*/

array.push("final")
array.unshift("principio")
console.log(array)


/*
    Metodos para eliminar valores en nuestros arrays
    .pop() .shift() -> Mutan el valor de nuestros arrays
    pop() -> Valores al final
    shift() -> Valores al principio
*/

array.pop("final")
array.shift("principio")
console.log(array)

//Metodos para eliminar, modificar o anyadir valores a nuestro array
//.splice(X,Y,Z)

//Eliminar valores .splice(indice, numValoresAEliminar)
console.log(array)
array.splice(1,2)
console.log(array)

//Anyadir valores .splice(indice,0, valores)
console.log(array)
array.splice(1,0,"HOLA",false)
console.log(array)

//Modificar valores .splice(indice,1, valores)
console.log(array)
array.splice(0,1,"uno")
console.log(array)