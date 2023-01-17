

const nombre = "Marquitos"
const apellido = "Jazhino"

const persona = {
    nombre: nombre,
    apellido: apellido,
    edad : 100
}



localStorage.setItem("personaLocalStorage", JSON.stringify(persona))

sessionStorage.setItem('personaSessionStorage', JSON.stringify(persona))




document.cookie = `persona=${JSON.stringify(persona)}; max-age=120; path=/`;
