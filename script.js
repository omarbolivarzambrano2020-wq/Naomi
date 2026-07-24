// =======================
// ELEMENTOS
// =======================

const boton = document.getElementById("btnCarta");
const carta = document.getElementById("carta");

const intro = document.getElementById("intro");
const pagina = document.querySelector(".container");

const texto = "Para mi niña bonita...";
let i = 0;

// =======================
// TEXTO ESCRIBIÉNDOSE
// =======================

function escribir() {

    const titulo = document.getElementById("tituloCarta");

    if (!titulo) return;

    titulo.innerHTML = "";
    i = 0;

    function escribirLetra() {

        if (i < texto.length) {

            titulo.innerHTML += texto.charAt(i);

            i++;

            setTimeout(escribirLetra, 80);

        }

    }

    escribirLetra();

}

// =======================
// CONTADOR
// =======================

const inicio = new Date("2025-05-25");

function actualizar() {

    const contador = document.getElementById("contador");

    if (!contador) return;

    const hoy = new Date();

    const diferencia = hoy - inicio;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

    contador.innerHTML = "❤️ Han pasado " + dias + " días juntos ❤️";

}

actualizar();

setInterval(actualizar, 1000);

// =======================
// ESTRELLAS
// =======================

for (let s = 0; s < 200; s++) {

    const star = document.createElement("div");

    star.className = "star";

    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";

    star.style.animationDelay = Math.random() * 3 + "s";

    document.body.appendChild(star);

}

// =======================
// SAKURA
// =======================

setInterval(() => {

    const p = document.createElement("div");

    p.className = "petalo";

    p.innerHTML = "🌸";

    p.style.left = Math.random() * 100 + "vw";

    p.style.animationDuration = (4 + Math.random() * 4) + "s";

    document.body.appendChild(p);

    setTimeout(() => {

        p.remove();

    }, 8000);

}, 350);

// =======================
// CORAZONES
// =======================

document.addEventListener("mousemove", (e) => {

    const h = document.createElement("div");

    h.innerHTML = "❤️";

    h.style.position = "fixed";

    h.style.left = e.clientX + "px";

    h.style.top = e.clientY + "px";

    h.style.pointerEvents = "none";

    h.style.transition = "1s";

    h.style.fontSize = "18px";

    document.body.appendChild(h);

    setTimeout(() => {

        h.style.transform = "translateY(-60px)";

        h.style.opacity = "0";

    }, 20);

    setTimeout(() => {

        h.remove();

    }, 1000);

});

// =======================
// BOTÓN ENTRAR
// =======================

const entrar = document.getElementById("entrar");

if (entrar) {

    entrar.onclick = () => {

        intro.style.display = "none";

        pagina.style.display = "block";

    };

}

// =======================
// BOTÓN CARTA
// =======================

if (boton) {

    boton.onclick = () => {

        carta.style.display = "block";

        escribir();

        carta.scrollIntoView({

            behavior: "smooth"

        });

        boton.innerHTML = "❤️ Gracias por estos 14 meses ❤️";

    };

}

// =======================
// MÚSICA
// =======================

const play = document.getElementById("playMusic");

if (play) {

    play.onclick = () => {

        document.getElementById("musica").play();

    };

}
// ======================
// ESTRELLAS FUGACES
// ======================

function estrellaFugaz(){

    const s=document.createElement("div");

    s.className="shooting-star";

    s.style.top=Math.random()*40+"vh";
    s.style.left=(80+Math.random()*20)+"vw";

    document.body.appendChild(s);

    setTimeout(()=>{

        s.remove();

    },2000);

}

setInterval(estrellaFugaz,7000);
