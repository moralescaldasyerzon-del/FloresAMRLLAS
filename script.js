const boton = document.getElementById("boton");
const sorpresa = document.getElementById("sorpresa");
const estrellas = document.getElementById("estrellas");
const petalos = document.getElementById("petalos");


// ==============================
// ESTRELLAS
// ==============================

function crearEstrella() {

    const estrella = document.createElement("div");

    estrella.className = "estrella";

    const formas = ["✦", "✧", "★", "⋆"];

    estrella.innerHTML =
        formas[Math.floor(Math.random() * formas.length)];

    estrella.style.left =
        Math.random() * 100 + "vw";

    estrella.style.top =
        Math.random() * 100 + "vh";

    estrella.style.fontSize =
        (Math.random() * 18 + 8) + "px";

    estrella.style.animationDuration =
        (Math.random() * 2 + 2) + "s";

    estrellas.appendChild(estrella);

    setTimeout(() => {
        estrella.remove();
    }, 4000);
}


// Muchas estrellas desde el inicio

for (let i = 0; i < 30; i++) {
    setTimeout(() => {
        crearEstrella();
    }, i * 100);
}


// Crear estrellas continuamente

setInterval(() => {
    crearEstrella();
}, 450);


// ==============================
// PÉTALOS AMARILLOS
// ==============================

function crearPetalo() {

    const petalo = document.createElement("div");

    petalo.className = "petalo";

    petalo.innerHTML =
        Math.random() > 0.5 ? "🌼" : "🌻";

    petalo.style.left =
        Math.random() * 100 + "vw";

    petalo.style.fontSize =
        (Math.random() * 15 + 12) + "px";

    petalo.style.animationDuration =
        (Math.random() * 5 + 5) + "s";

    petalos.appendChild(petalo);

    setTimeout(() => {
        petalo.remove();
    }, 10000);
}


// Pétalos cada cierto tiempo

setInterval(() => {
    crearPetalo();
}, 1200);


// ==============================
// BOTÓN
// ==============================

boton.addEventListener("click", () => {

    sorpresa.style.display = "block";

    boton.style.display = "none";


    // Explosión de flores y estrellas

    for (let i = 0; i < 50; i++) {

        setTimeout(() => {

            crearEstrella();
            crearPetalo();

        }, i * 50);
    }


    // Después de 8 segundos vuelve a mostrar el botón

    setTimeout(() => {

        sorpresa.style.display = "none";

        boton.style.display = "block";

    }, 8000);

});