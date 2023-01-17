
class Persona{
    nombre
    edad
    isDeveloper

    constructor(nombre, edad, isDeveloper){
        this.nombre = nombre
        this.edad = edad
        this.isDeveloper = isDeveloper
    }

    saludo() {
        console.log(`Hola, me llamo ${this.nombre}, tengo ${this.edad} anyos`)
    }
}

const persona1 = new Persona('John',10, true)
persona1.saludo()

let numero = 70 // Inicializar
let persona2 = new Persona("Rocio", numero, false) //Instanciar  

//Intanceof -> similar a typeof pero para clases

console.log(persona2 instanceof Persona)
