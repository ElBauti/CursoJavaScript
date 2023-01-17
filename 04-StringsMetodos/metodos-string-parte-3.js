let txt_largo = "Al venir al mundo fueron delicadamente mecidas por las manos de la lustral Doniazada, su buena tía.que grabó sus nombres sobre hojas de oro coloreadas de húmedas pedrerías y las cuidó bajo el terciopelo de sus pupilas hasta la adolescencia dura, para esparcirlas después, voluptuosas y libres, sobre el mundo oriental, eternizado por su sonrisa"
console.log(txt_largo.match(/al/g))

//Tiene la palabra dentro del string?
console.log(txt_largo.includes("venir"))
console.log(txt_largo.includes("venias"))

//Saber si un texto empieza con una palabra
console.log(txt_largo.startsWith("venir"))

//Saber si un texto termina con una palabra
console.log(txt_largo.endsWith("sonrisa"))
