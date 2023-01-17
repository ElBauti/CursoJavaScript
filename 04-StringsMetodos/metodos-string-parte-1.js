

//Obtener longitud de un string
let str = "Hola soy un string"
console.log(str.length)

//Obtener partes de cadenas de caracteres
console.log(str.slice(0,4))
console.log(str.substring(0,9))

//Reemplazar parte del contenido de una cadena de texto, SOLO REMPLAZA LA PRIMER INSTANCIA
let cadena = "Hola soy una cadena de texto"
console.log(cadena.replace("texto","string"))

//Al uilizar la expresion regular /g (global), remplaza todas las instancias
let txt_largo = "Al venir al mundo fueron delicadamente mecidas por las manos de la lustral Doniazada, su buena tía.que grabó sus nombres sobre hojas de oro coloreadas de húmedas pedrerías y las cuidó bajo el terciopelo de sus pupilas hasta la adolescencia dura, para esparcirlas después, voluptuosas y libres, sobre el mundo oriental, eternizado por su sonrisa"
console.log(txt_largo.replace(/los/g, "venir"))
