class Persona{
    //Privated -> # Solo se puede acceder desde dentro de la clase
    #nombre
    #edad
    //Protected -> _ solo se puede acceder desde dentro de la clase y clases descendientes 
    _isDeveloper



    constructor(nombre, edad, isDeveloper){
        this.#nombre = nombre
        this.#edad = edad
        this._isDeveloper = isDeveloper
    }

    saludo() {
        console.log(`Hola, me llamo ${this.#nombre}, tengo ${this.#edad} anyos`)
    }

    #saludoPrivated() {
        console.log(`Hola este es un saludo protegido, me llamo ${this.#nombre}, tengo ${this.#edad} anyos`)
    
    }

}

const persona1 = new Persona('Juan', 25, true)
persona1.saludo()

