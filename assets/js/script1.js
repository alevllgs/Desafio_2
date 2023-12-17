// Elementos del DOM

  //si llamo el elemento desde un id ocupo # #torres en document.querySelector("#torres")
  //si llamo el elemento desde una clase ocupo . .foto document.querySelector(".foto")
  // lo puedo llamar directamente de la caja section, footer, header document.querySelector("#section")

let paine = document.querySelector("#torres")


// Variables
let original = false

// Funciones


// Eventos
paine.addEventListener("click", ( ) => {
    console.log("has hecho click en la imagen")
    if(original == false) {
        paine.style.border = "2px solid red"
        original = true
    }
    else{
        paine.style.border = "none"
        original = false
    }
  
});