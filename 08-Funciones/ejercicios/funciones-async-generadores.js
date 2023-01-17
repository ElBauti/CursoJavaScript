
//    - Una función sin parámetros que devuelva siempre "true"

function devuelveSiempreTrue(){
    return true
}

console.log(devuelveSiempreTrue())

/*   
    - Una función asíncrona que utilice un setTimeout y pase por consola un 
    "Hola soy una promesa" 5 segundos después de haberse ejecutado
*/

function devuelveAsíncrona(){
    setTimeout(function(){
        console.log("Hola soy una promesa")
    }, 15)
}

console.log(devuelveAsíncrona())

//  - Una función generadora de índices pares automáticos

function* generaId(){
    let indice = 0
    while (true) {
        indice++
        if (indice % 2 == 0){
            yield indice}
    }
}

const gen = generaId()
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)



