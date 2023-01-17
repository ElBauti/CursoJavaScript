
const miFuncion = val => {
    if (typeof val === "number") {
        return val * 2
        }
    throw new Error("Valor inválido")
}


const numero =  "a"
try {
    //Codigo que puede fallar
    console.log("Esta funcionando todo de manera correcta")
    const doble = miFuncion(numero)
    console.log(doble)
} catch (error) {
    //En caso de fallar, quiero que ejecutes este codigo
    console.error("El error es:",error)
}finally {
    console.log("Esto se va a ejecutar tanto si se produce algun fallo como si no se produce ningun fallo")
}

//InternalError, SyntaxError, RangeError, ReferenceError, SyntaxError, TypeError
