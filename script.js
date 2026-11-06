// Seleccionamos los botones y el mensaje.

const botonNaranja = document.getElementById("botonNaranja");
const botonMorado = document.getElementById("botonMorado");
const botonDulce = document.getElementById("botonDulce");
const mensaje = document.getElementById("mensaje");

// CAMBIAR EL FONDO A NARANJA

botonNaranja.addEventListener("click", function () {

    document.body.style.background =
        "linear-gradient(135deg, #ff8c00, #d63b16)";

    mensaje.textContent = "¡El espíritu de la Catrina está aquí! 🎃";

});

// CAMBIAR EL FONDO A MORADO

botonMorado.addEventListener("click", function () {

    document.body.style.background =
        "linear-gradient(135deg, #7600a8, #35004f)";

    mensaje.textContent = "¡Bienvenido al mundo de las calaveritas! 💜";

});

// CREAR DULCES QUE CAEN

function crearDulce() {

    const dulce = document.createElement("div");

    const dulces = ["🍬", "🍭", "🍫", "🌼", "💀"];

    dulce.classList.add("dulce-caida");

    dulce.textContent =
        dulces[Math.floor(Math.random() * dulces.length)];

    dulce.style.left = Math.random() * 95 + "vw";

    dulce.style.fontSize =
        (20 + Math.random() * 20) + "px";

    document.body.appendChild(dulce);

    setTimeout(function () {
        dulce.remove();
    }, 4000);

}

// BOTÓN PARA RECIBIR UN DULCE

botonDulce.addEventListener("click", function () {

    crearDulce();

    mensaje.textContent = "¡La Catrina te ha regalado un dulce! 🍬";

});

// DULCES DECORATIVOS AUTOMÁTICOS

setInterval(function () {

    crearDulce();

}, 1200);