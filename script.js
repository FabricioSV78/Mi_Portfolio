// Smooth scroll
document.querySelectorAll('a[href^="#"], .cta-btn').forEach(el=>{
  el.addEventListener('click',e=>{
    e.preventDefault();
    const tgt = document.querySelector(el.getAttribute('href'));
    tgt.scrollIntoView({behavior:'smooth'});
  });
});

// Mostrar proyectos en scroll
const cards=document.querySelectorAll('.project-card');
const showOnScroll=()=>{
  const trigger=window.innerHeight*0.85;
  cards.forEach(c=>{
    if(c.getBoundingClientRect().top<trigger)
      c.classList.add('visible');
  });
};
window.addEventListener('scroll',showOnScroll);
showOnScroll();

// Botón scroll to top
const toTop=document.getElementById('toTop');
window.addEventListener('scroll',()=>{
  if(window.scrollY>300){
    toTop.style.display='block';
  } else {
    toTop.style.display='none';
  }
});
toTop.addEventListener('click',()=>{
  window.scrollTo({top:0,behavior:'smooth'});
});

// Frases que se irán mostrando
const textArray = [
  "Fabricio Seminario",
  "Desarrollador Backend",
  "Apasionado por la Tecnología"
];

let textArrayIndex = 0;
let charIndex = 0;

// Velocidades
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 1500; 

const typedText = document.getElementById('typed-text');

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedText.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay);
  }
}

// Iniciar la animación
document.addEventListener("DOMContentLoaded", function() {
  if (textArray.length) setTimeout(type, newTextDelay);
});


