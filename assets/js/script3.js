// Elementos del DOM

//si llamo el elemento desde un id ocupo # #torres en document.querySelector("#torres")
//si llamo el elemento desde una clase ocupo . .foto document.querySelector(".foto")
// lo puedo llamar directamente de la caja section, footer, header document.querySelector("#section")

const seleccion_uno = document.querySelector("#seleccion1")
const seleccion_dos = document.querySelector("#seleccion2")
const seleccion_tres = document.querySelector("#seleccion3")
const verificar = document.querySelector("#boton")


// Variables


// Funciones


// Eventos
verificar.addEventListener("click", () => {
    const valor1 = seleccion_uno.value
    const valor2 = seleccion_dos.value
    const valor3 = seleccion_tres.value
    let total = valor1 + valor2 + valor3
    if (total == "911") {

        document.getElementById("mensaje").innerText = "Contraseña 1 correcta";

    } else if (total == "714") {

        document.getElementById("mensaje").innerText = "Contraseña 2 correcta";
    }

    else {

        document.getElementById("mensaje").innerText = "Contraseña incorrecta";

    }
})