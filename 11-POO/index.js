const persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 20,
    isDeveloper: true,
    saludo: function saludo(){
        console.log("Hola!")
    }
}

persona.saludo()


const CreaPersona = (nombre, apellido, edad, isDeveloper) => {
    return {
        nombre,
        apellido,
        edad,
        isDeveloper,
        saludo: function saludo(){
        console.log("Hola!")
        }
    }
}

const nuevaPersona = CreaPersona("Pedro","Gabriel",20,true)
nuevaPersona.saludo()
