// Créer 3 ronds de tailles différentes (dont un qui remplacera la souris) - Avant de faire cela, il faut créer des span id dans l'index.html. Ensuite créer les ronds en CSS

// Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e") --- au début j'ai ajouter une const mais au finale pas besoin

// S'assurer que les liens sont clickables -- pour se faire j'ai ajouter au li un z-index de +40

// Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode) --- il faut mettre en difference

// pour faire disparaitre la sourie -- sur body il faut indiquer cursor : none

// const mousemove = document.querySelector(".mouse");

// Code fait par moi et fonctionnel
// window.addEventListener("mousemove", (e) => {
//   cursor.style.top = e.pageY + "px";
//   cursor.style.left = e.pageX + "px";
// });

// window.addEventListener("mousemove", (e) => {
//   mouse1.style.top = e.pageY + "px";
//   mouse1.style.left = e.pageX + "px";
// });

// window.addEventListener("mousemove", (e) => {
//   mouse2.style.top = e.pageY + "px";
//   mouse2.style.left = e.pageX + "px";
// });

// Code simplifier et fonctionnel également (nous empeche de répéter plusieurs fois les mêmes ligne de code)
const mousemove = document.querySelectorAll(".mouse");

window.addEventListener("mousemove", (e) => {
  mousemove.forEach((mouse) => {
    mouse.style.top = e.y + "px";
    mouse.style.left = e.x + "px";
  });
});
