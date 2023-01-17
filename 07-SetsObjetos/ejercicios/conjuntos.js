

//- Un nuevo Set con los nombres de tu familia

const familia = ["roberto","juan","estebanquito","yo"]
const familiaSet = new Set(familia)
console.log(familiaSet)


// - Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)

familiaSet.add("yo")
console.log(familiaSet)

//  - Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)

familiaSet.add("JavaScript")
console.log(familiaSet)