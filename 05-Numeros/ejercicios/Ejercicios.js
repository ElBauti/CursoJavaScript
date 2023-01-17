
/*
    - Una variable que contenga tu altura en centímetros (entero)
*/

let intAlturaCM = 180

/*
    - Una variable que contenga tu altura en metros (número de coma flotante)   
*/

let floatAlturaM = 1.80

/*
    - Una variable que contenga tu peso en kilogramos (número de coma flotante)
*/

let floatPesoKG = 90.23

/*
    - Una variable que contenga tu altura en metros redondeada hacia arriba
*/

let alturaRedondeadaArriba = Math. round(floatAlturaM)
console.log(alturaRedondeadaArriba)

/*
    - Una variable que contenga tu peso en kilogramos redondeado hacia abajo
*/

let alturaRedondeadaAbajo = Math. floor(floatAlturaM)
console.log(alturaRedondeadaAbajo)


/*
    - Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al
    máximo valor que se puede obtener en Javascript
*/

let maxValorJS = Number.MAX_VALUE
let maxValorJSMasUno = maxValorJS + 1
console.log(maxValorJSMasUno)