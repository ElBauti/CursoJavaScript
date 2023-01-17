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

    //Getter  -> metodo que nos permite obtener atributos/metodos privados o protegidos

    getNombre(){
        return this.#nombre
    }
    getEdad(){
        return this.#edad
    }
    getIsDeveloper(){
        return this._isDeveloper
    }

    //Setter -> metodo que nos permite cambiar el valor de algunos atributos privados o protegidos

    setNombre(nuevodato){
        this.#nombre = nuevodato
    }
    setEdad(nuevodato){
        return this.#edad
    }
    setIsDeveloper(nuevodato){
        return this._isDeveloper
    }

}

const persona1 = new Persona('Juan', 25, true)
console.log(persona1.setNombre("Pedro"))
console.log(persona1.getNombre())
console.log(persona1.getEdad())
console.log(persona1.getIsDeveloper())