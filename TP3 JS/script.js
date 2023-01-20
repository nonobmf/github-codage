// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours

// let PlayOnce - ici on créer une valeur vaire (true), pour permettre à la popup quand on click dessus elle ne revienne jamais avec la condition (false)

// Dans mon TP j'ai créer des variable pour appeler le popup et l'image mais en réaliter pas besoin car JS connait leur nom => voir correction du TP

let playOnce = true;

const image1 = document.querySelector("#imgImprovise");
const popup = document.querySelector("#popup");
const btn = document.querySelector("#closeBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.height = "50px";
  } else {
    navbar.style.height = "90px";
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    image1.style.opacity = 1;
    image1.style.transform = "none";
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 1100 && playOnce) {
    popup.style.opacity = 1;
    popup.style.transform = "none";
    playOnce = false;
  }
});

btn.addEventListener("click", () => {
  popup.style.opacity = 0;
  popup.style.transform = "translateX(500px";
});
