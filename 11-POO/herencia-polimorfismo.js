
class Persona{
    //Privated -> # Solo se puede acceder desde dentro de la clase
    #nombre
    #edad
    //Protected -> _ solo se puede acceder desde dentro de la clase y clases descendientes 
    _



    constructor(nombre, edad, ){
        this.#nombre = nombre
        this.#edad = edad
    }

    saludo() { 
        console.log(`Hola, me llamo ${this.#nombre}, tengo ${this.#edad} anyos`)
    }

    #saludoPrivated() {
        console.log(`Hola este es un saludo protegido, me llamo ${this.#nombre}, tengo ${this.#edad} anyos`)
    
    }

    //Getter  -> metodo que nos permite obtener atributos/metodos privados o protegidos

    getNombre(){
        return this.#nombre
    }
    getEdad(){
        return this.#edad
    }


    //Setter -> metodo que nos permite cambiar el valor de algunos atributos privados o protegidos

    setNombre(nuevodato){
        this.#nombre = nuevodato
    }
    setEdad(nuevodato){
        return this.#edad
    }
}

class Desarrollador extends Persona{
    #lenguaje
    constructor(nombre, edad, lenguaje){
        super(nombre, edad)
        this.lenguaje = lenguaje
    }
    saludo(){
        super.saludo()
        console.log(`Y soy desarrollador de ${this.lenguaje}`)
    }
}

const nuevodev = new Desarrollador("Bauti",19,"Javascript")
nuevodev.saludo()
