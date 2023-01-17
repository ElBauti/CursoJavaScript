

//- La fecha de hoy
const fechaHoy = new Date()
console.log(fechaHoy)

//- La fecha de tu nacimiento
const nacimiento = new Date("2003, 6, 1")
console.log(nacimiento)

//- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const esTarde = fechaHoy > nacimiento
console.log(esTarde)

//- Una variable que contenga el día de tu nacimiento
const nacimientoDia = nacimiento.getDate()
console.log(nacimientoDia)

//- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const nacimientoMes = nacimiento.getMonth()
console.log(nacimientoMes)

//- Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const nacimientoAnyo = nacimiento.getFullYear()
console.log(nacimientoAnyo)
