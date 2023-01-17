/*
- Una clase llamada "Estudiante" que tenga:

- Una variable llamada nombre

- Otra variable lista llamada asignaturas con 3 asignaturas: Javascript, HTML, CSS

- Un método "obtenDatos" que devuelva un objeto con las propiedades nombre y asignaturas

- Crea una nueva instancia de "Estudiante"

- Haz la llamada al método obtenDatos
*/

 class Estudiante {
    _nombre;
    _asignaturas = [
        "Javascript",
        "HTML",
        "CSS"
    ]
    constructor(nombre,) {
        this._nombre = nombre;
    }

    obtenDatos() {
        return {
            nombre: this._nombre,
            asignaturas: this._asignaturas
        }
    }
}

const estudiante1 = new Estudiante("Juan");
console.log(estudiante1.obtenDatos())