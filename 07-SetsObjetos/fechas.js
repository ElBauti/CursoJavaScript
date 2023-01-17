
const fechaAhora = new Date()
console.log(fechaAhora)

//Mes inicia en 0 -> enero 11 -> diciembre
const fechaRandom = new Date(2022, 11, 18)
console.log(fechaRandom)

const fechaMiliSegundos = new Date(102121201)
console.log(fechaMiliSegundos)


const fechaMiliSegundosNeg = new Date(-102121201)
console.log(fechaMiliSegundosNeg)

const fechaArray = new Date("October 13, 1979, 12:15:15")
console.log(fechaArray)


//Para comparar tenes que usar los milisegundos, con gettime()
console.log(fechaAhora.getTime())

//Obtener dia
console.log(fechaAhora.getDate())

//Obtener mes
console.log(fechaAhora.getMonth())

//Obtener anyo
console.log(fechaAhora.getFullYear())

