// Elementos del DOM

//si llamo el elemento desde un id ocupo # #torres en document.querySelector("#torres")
//si llamo el elemento desde una clase ocupo . .foto document.querySelector(".foto")
// lo puedo llamar directamente de la caja section, footer, header document.querySelector("#section")

const input_uno = document.querySelector("#input1")
const input_dos = document.querySelector("#input2")
const input_tres = document.querySelector("#input3")
const verificar = document.querySelector("#boton")


// Variables


// Funciones


// Eventos
verificar.addEventListener("click", () => {
    const valor1 = input_uno.value
    const valor2 = input_dos.value
    const valor3 = input_tres.value
    let total = Number(valor1) + Number(valor2) + Number(valor3)
    if (total <= 10) {
        console.log(`"llevas ${total} discos"`)
        document.getElementById("resultado").innerText = `Llevas ${total} discos`;

    } else {
        console.log("llevas muchos discos")
        document.getElementById("resultado").innerText = "Llevas muchos discos";

    }
})