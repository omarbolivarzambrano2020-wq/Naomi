// =======================
// ELEMENTOS
// =======================

const intro = document.getElementById("intro");
const pagina = document.querySelector(".container");

const entrar = document.getElementById("entrar");

const botonCarta = document.getElementById("btnCarta");
const carta = document.getElementById("carta");
const tituloCarta = document.getElementById("tituloCarta");

const play = document.getElementById("playMusic");
const musica = document.getElementById("musica");

// =======================
// BOTÓN ENTRAR
// =======================

entrar.addEventListener("click", () => {

    intro.style.display = "none";
    pagina.style.display = "block";

});

// =======================
// CONTADOR
// =======================

const inicio = new Date("2025-05-25");

function actualizar(){

    const contador=document.getElementById("contador");

    const hoy=new Date();

    const dias=Math.floor((hoy-inicio)/(1000*60*60*24));

    contador.innerHTML="❤️ Han pasado "+dias+" días juntos ❤️";

}

actualizar();

setInterval(actualizar,1000);

// =======================
// CARTA
// =======================

botonCarta.addEventListener("click",()=>{

    carta.classList.add("cartaVisible");

    tituloCarta.innerHTML="";

    const texto="Para mi niña bonita ❤️";

    let i=0;

    function escribir(){

        if(i<texto.length){

            tituloCarta.innerHTML+=texto.charAt(i);

            i++;

            setTimeout(escribir,70);

        }

    }

    escribir();

    carta.scrollIntoView({
        behavior:"smooth"
    });

});

// =======================
// MÚSICA
// =======================

play.addEventListener("click",()=>{

    musica.play();

});

// =======================
// ESTRELLAS
// =======================

for(let i=0;i<200;i++){

    const star=document.createElement("div");

    star.className="star";

    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";

    star.style.animationDelay=Math.random()*3+"s";

    document.body.appendChild(star);

}

// =======================
// PÉTALOS
// =======================

setInterval(()=>{

    const p=document.createElement("div");

    p.className="petalo";

    p.innerHTML="🌸";

    p.style.left=Math.random()*100+"vw";

    p.style.animationDuration=(4+Math.random()*4)+"s";

    document.body.appendChild(p);

    setTimeout(()=>{

        p.remove();

    },8000);

},350);

// =======================
// CORAZONES
// =======================

document.addEventListener("mousemove",(e)=>{

    const h=document.createElement("div");

    h.innerHTML="❤️";

    h.style.position="fixed";

    h.style.left=e.clientX+"px";

    h.style.top=e.clientY+"px";

    h.style.pointerEvents="none";

    h.style.transition="1s";

    document.body.appendChild(h);

    setTimeout(()=>{

        h.style.transform="translateY(-60px)";

        h.style.opacity="0";

    },20);

    setTimeout(()=>{

        h.remove();

    },1000);

});

// =======================
// ESTRELLAS FUGACES
// =======================

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

setInterval(estrellaFugaz,2500);
setInterval(()=>{

    const luz=document.createElement("div");

    luz.className="firefly";

    luz.style.left=Math.random()*100+"vw";
    luz.style.top=Math.random()*100+"vh";

    document.body.appendChild(luz);

    setTimeout(()=>{

        luz.remove();

    },5000);

},700);
const sorpresa = document.getElementById("ultimaSorpresa");

const pantalla = document.getElementById("pantallaFinal");

sorpresa.onclick = ()=>{

    pantalla.classList.add("pantallaVisible");
    
for(let i=0;i<250;i++){

    setTimeout(()=>{

        const p=document.createElement("div");

        p.className="petalo";

        p.innerHTML="🌸";

        p.style.left=Math.random()*100+"vw";

        p.style.animationDuration=(3+Math.random()*3)+"s";

        document.body.appendChild(p);

        setTimeout(()=>{
            p.remove();
        },7000);

    },i*40);

}
     // Bajar volumen poco a poco
    let volumen = musica.volume;

    const bajar = setInterval(()=>{

        volumen -= 0.05;

        musica.volume = Math.max(volumen,0.3);

        if(volumen <= 0.3){
            clearInterval(bajar);
        }

    },100);

};

