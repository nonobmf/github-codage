const counterDisplay = document.querySelector("h3");
//let counter pour créer un compteur sur le h3
let counter = 0;

//ici on englobe l'animation dans une fonction (que l'on nomme bubbleMaker)
const bubbleMaker = () => {
  //CreateElement permet d'ajouter un élément dans l'html tout comme innertHTML(ici on ajoute un span)
  const bubble = document.createElement("span");
  bubble.classList.add("bubble");
  //appendchild veux dire (le body tu as un enfant qui est bubble)
  document.body.appendChild(bubble);
  //ici on produit pour la taille de la bulle un chiffre random entre 100 et 300 en px (avec la fonction Math.random)
  const size = Math.random() * 200 + 100 + "px";
  //ici on injecte le chiffre random créer au dessus avec une hauteur et une largeur
  bubble.style.height = size;
  bubble.style.width = size;
  //ici on injecte un top avec la fonction Math.random en % compris entre 0 et 100 et +50 pour que la bulle parte du bas de l'écran et remonte vers le haut
  bubble.style.top = Math.random() * 100 + 50 + "%";
  //ici on injecte la même chose mais par rapport à ça gauche
  bubble.style.left = Math.random() * 100 + "%";
  // on créer un condition pour que les bulles parte à gauche (si math.random est superieur a 0.5 si oui 1 si non -1)
  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");
  // ici on créer un click sur la bulle et on lui demande de ce supprimer quand on clic dessus
  //counter++ permet d'incrémenter de 1 en 1
  //.textContent=counter permet d'incrémenter les chiffre quand on clic sur une bulle (on appel la variable créer sur le h3 avant counterdisplay)
  //.textcontent permet également d'afficher des choses dans les balises
  bubble.addEventListener("click", () => {
    counter++;
    counterDisplay.textContent = counter;
    bubble.remove();
  });

  //setTimeout permet de créer une supression de la bulle avec (bubble.remove) au bout de 8000msec
  setTimeout(() => {
    bubble.remove();
  }, 8000);
};
// création de plusieurs bulle avec la fonction setinterval
setInterval(bubbleMaker, 300);
