
let nombre = "Juan"
function saludar(nombre) {
    console.log("Hola !",nombre)
    despedir(nombre)
}

function despedir(nombre) {
    console.log("Adios !",nombre)
}

saludar(nombre)

////

let persona = {
    name:"Roberto",
    surname:"Galati",
}

function saludarPersona(objeto) {
    console.log("Hola", objeto.name, objeto.surname, "!")
}

saludarPersona(persona)