
array = [1, "pedro", "juan", 2, 3, 4]

for (let i = 0; i < array.length; i++) {
    // console.log(array[i])
}

//For..of
for (const i of array) {
    // console.log(array[i])
}

//forEach
array.forEach(elemento => {
    // console.log(elemento)
});


let persona = {
    nombre:"Gorka",
    apellido:"Villar",
    edad:"34",
    isDeveloper:false,
}

//forIn
for (const propiedad in persona) {
    // console.log(propiedad)
}


//Bucle While

let nota = 0
while (nota < 9) {
    console.log("La nota es:",nota)
    nota++
}

//Do...While
let i = 0
do{
    console.log("Estoy en el do while")
    i++
    console.log("La i vale:",i)

}while (i < 10) {
    console.log("Estoy en el while")
    i++
}