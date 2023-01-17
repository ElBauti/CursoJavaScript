// localStorage.setItem("nombre","gorka")
// localStorage.setItem("nombre", "miguel")

console.log(localStorage.getItem("nombre"))

// stringify -> convierte un objeto a string 
// json.parse -> convertir un objeto JSON convertido con stringify en un objeto javascript
 
localStorage.setItem("persona",JSON.stringify({nombre:"miguel", edad:100}))
console.log(localStorage.getItem("persona"))
localStorage.removeItem("persona")
console.log(localStorage.getItem("persona"))