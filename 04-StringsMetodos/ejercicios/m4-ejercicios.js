


/*
    - Una cadena de texto con tu Nombre
*/

let strName = "Pedro"
console.log(strName)

/*
    - Otra cadena de texto con tu Apellido
*/

let strSurname = "Rodriguez"
console.log(strSurname)

/* 
    -Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido
    con un espacio entre medias
*/

let strStudent = strName+ " " + strSurname
console.log(strStudent)

/* 
    - Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante
    pero todo en mayúsculas
*/

let strStudentMayus = strStudent.toUpperCase()
console.log(strStudentMayus)

/* 
    - Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante
    pero todo en minúsculas
*/

let strStudentMin = strStudent.toLowerCase()
console.log(strStudentMin)

/*
    - Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
*/

let strLengthStudent = strStudent.length
console.log(strLengthStudent)

/*
    - Una variable que contenga la primera letra del Nombre
*/

let CharStrName = strName[0]
console.log(CharStrName)

/*
    - Otra variable que contenga la última letra del Apellido
*/

let CharStrSurname = strSurname[strSurname.length - 1]
console.log(CharStrSurname)

/*
    - Una cadena de texto que elimine los espacios de la variable "estudiante"
*/

let deleteSpacesOfStrStundent = strStudent.replace(" ", "")
console.log(deleteSpacesOfStrStundent)

/*
    - Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
*/

let strNameIsStudent = strStudent.includes(strName)
console.log(strNameIsStudent)