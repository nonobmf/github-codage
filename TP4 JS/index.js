// Créer un événement au click sur le hamburger menu pour sortir la sidebar, ranger la sidebar si on reclick dessus

// Ranger la sidebar si on click sur le contenu principal

// Ici pour ranger la sidebar nous somme obliger de passer par un toogle avec la class créer dans le CSS (.active). 2 façons de faire : 1. left : 0!important; / 2. #side-bar.active

// Pour ranger la sidebar en cliquant sur le body, il faut également appeler avec la classlist mais avec la fonction remove

// BONUS
// Créer en css l'hamburger menu qui se transforme en croix

// les paramètre en CSS pour créer la croix (on a mis en absolute pour que tout soit aligné et on suprime la 2ème ligne)

// // .active span {
//   position: absolute;
//  }
//  .active span:nth-child(1){
//   transform: rotate(45deg);
//  }
//  .active span:nth-child(2){
//   opacity: 0;
//  }
//  .active span:nth-child(3){
//   transform: rotate(-45deg);
//  }

// Aide
// Priorités en CSS : !important > id > classe > baliseHtml

const btn = document.querySelector("#btn");
const sidebar = document.querySelector("#side-bar");
const content = document.querySelector(".content");

content.addEventListener("click", () => {
  sidebar.classList.remove("active");
});

btn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});
