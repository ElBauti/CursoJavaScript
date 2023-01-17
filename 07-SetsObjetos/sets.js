
const miArray = [1,2,3,4,5,1,3,4,6,1,10,10,"hola","hola"]
console.log(miArray)
const miSet = new Set(miArray)
console.log(miSet)

//Agregar al set
miSet.add(9)
console.log(miSet)

//Eliminar al set
miSet.delete(9)
console.log(miSet)

// .clear()
// miSet.clear()
console.log(miSet)

// .has()
console.log(miSet.has(4))

//.size
console.log(miSet.size)

miSet.forEach(element => {
    console.log(element)
});