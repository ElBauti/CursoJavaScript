const botonEjercicio = document.getElementById("btn")


botonEjercicio.addEventListener("click", () => {
    alert("Boton Ejercicio fue apretado con exito! Muchisimas gracias crack!")
    console.table(listaTareas)
})
listaTareas = [
    "- Instala la dependencia HTTP Server en entorno global (https://www.npmjs.com/package/http-server)",
    "- Crea un fichero index.html (utiliza el comando !)",
    "- Crea un fichero index.js",
    "- Integra el fichero index.js en el html",
    "- Crea un botón en html (<button>Botón</button>)",
    "- Vincula un evento de tipo click al botón anterior, que muestre una alerta en el navegador",
    "- Crea un script para lanzar un servidor de desarrollo con http-server",
    "- Lanza el servidor de desarrollo a través del script anterior y prueba que el botón funciona correctamente",
]