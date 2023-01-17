/*
Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:

- Tu nombre (string)

- Tu edad (number)

- ¿Eres desarrollador? (boolean)

- Tu fecha de nacimiento (Date)

- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)
*/

const misDatos = {
    Nombre:"Bauti",
    Edad:19,
    EresDesarrollador: true,
    Nacimiento: new Date(2003, 6, 01),
    LibroFav:{
        Titulo:"Clean Code",
        Autor:"Robert C. Martin",
        Fecha:"1 de agosto de 2008",
        Url:"https://www.pdfdrive.com/c%C3%B3digo-limpio-e196871466.html",
    }
}

const misDatosEnLista = [misDatos]
console.log(misDatosEnLista)