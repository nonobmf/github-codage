// SELECTEURS
// document.querySelector("h4").style.background = "yellow"; => ici on viens modifier la couleur du fond du H4.
// const baliseHTML = document.querySelector("h4");

// Click event
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");

//ici on appelle la classe créer au dessus (questionContainer) et on lui ajoute un event pour quand on click dessus, elle prend les paramètres créer dans le fichier css (.question-clicked)
//dans la parenthèse, le 1er élément/paramètre c'est le type d'évenement (ici on click) et le 2ème est une fonction  (ça veux dire quesque tu fais quand on te cliques dessus / ici on applique les paramètre du question-clicked)
//le .toogle permet d'appeler et d'enlever la fonction
questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("question-clicked");
});

//Dans les exemples ci dessous, on ajoute une classe qui est créer dans le .css (classlist) et on l'appelle avec .add
//on ajoute également un style avec un fond vert ou rouge
btn1.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "green";
});

btn2.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "red";
});

/* <div> > #id > class > baliseHTML */

//-------------------------------------------------------------------
// Mouse Events
const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});

window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
  mousemove.style.border = "2px solid teal";
});

questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0,0,0,0.6)";
});

questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "pink";
});

response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(2deg)";
});

//------------------------------------------------------------------
// Keypress event

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

//Ici on ajoute un audio
const ring = (key) => {
  const audio = new Audio();
  audio.src = key + ".mp3";
  audio.play();
};

//textcontent permet d'ajouter du texte à côté de la balise créer (ici span "Vous appuyer...")
document.addEventListener("keypress", (e) => {
  key.textContent = e.key;

  if (e.key === "j") {
    keypressContainer.style.background = "pink";
  } else if (e.key === "h") {
    keypressContainer.style.background = "teal";
  } else {
    keypressContainer.style.background = "red";
  }

  if (e.key === "Enter") ring(e.key);
});

//------------------------------------------------------------------
// Scroll Event

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);

  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
});

//----------------------------------------------------------------
// Form Events
const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
// ici on créer une boite (let) pour stocker les informations
let pseudo = "";
let language = "";

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
});

select.addEventListener("input", (e) => {
  language = e.target.value;
});
//innerHTML permet d'ajouter du contenu HTML (on indique dans quelle balise on veut injecter ici > div)
// toujours mettre e.preventdefault pour nous proteger des navigateurs
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (cgv.checked) {
    document.querySelector("form > div").innerHTML = `
      <h3>Pseudo : ${pseudo}</h3>
      <h4>Langage préféré : ${language}</h4>
    `;
  } else {
    alert("Veuillez accepter les CGV");
  }
});

//------------------------------------------------------------
// Load event "il se déclenche quand toute la page est chargé"
window.addEventListener("load", () => {
  // console.log("Document chargé !");
});

//-----------------------------------------------------------
// ForEach "foreach veux dire pour chacun d'eux " / "getelements permet de selectionner plusieurs class"
// privilegier queryselectorall car getelements rencontre des problèmes
// const boxes = document.getElementsByClassName("box");
const boxes = document.querySelectorAll(".box");
// console.log(boxes);

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    e.target.style.transform = "scale(0.7)";
  });
});

//----------------------------------------------------------
// addEventListner Vs onclick
// document.body.onclick = () => {
//   console.log("Scroll !");
// };

// Bubbling = fin (de base l'eventlistener est paramétré en mode Bulbing)
document.body.addEventListener("click", () => {
  console.log("click 1 !");
});

// Usecapture
document.body.addEventListener(
  "click",
  () => {
    console.log("click 2 !");
  },
  true
);

//---------------------------------------------------------
// Stop propagation
// questionContainer.addEventListener("click", (e) => {
//   alert("test");
//   e.stopPropagation();
// });

// removeEventListener

//----------------------------------------------------------
// BOM

// console.log(window.innerHeight);
// console.log(window.scrollY);
// window.open("http://www.google.fr", "cours JS", "height=600, width=800"); "sert à ouvrir un nouvelle onglet google depuis une popup avec une fenetre de 600px de hauteur et 800px de largeur"
// window.close() "sert à fermer la fenetre"

// Evénements adossés à Window
// alert("hello");

// confirm
btn2.addEventListener("click", () => {
  confirm("Voulez vous vraiment vous trompez ?");
});

// prompt "on créer un popup et on demande d'entrez votre nom"
// "let answer permet de récupérer les données dans la base"
btn1.addEventListener("click", () => {
  let answer = prompt("Entrez votre nom !");
  //ici on viens ajouter += pour ne pas écraser les H3 de base
  questionContainer.innerHTML += "<h3>Bravo " + answer + "</h3";
});

// Timer, compte à rebours
// ici on créer un border radius sur le questioncontainer au bout de 2sec
setTimeout(() => {
  questionContainer.style.borderRadius = "300px";
}, 2000);
//ici on créer une fenetre tous les x seconde avec setInterval
// on ajoute let interval pour permetre d'arrêter les interval
// let interval = setInterval(() => {
//   document.body.innerHTML += "<div class='box'><h2>Nouvelle Boite!</h2></div>";
// }, 4000);
// ici on viens dire au body, quand on te click dessus tu me supprime les éléments clicker
// document.body.addEventListener("click", (e) => {
//   e.target.remove();
//   clearInterval(interval);
// });

// Location "très utile pour rediriger vers des liens / pour analyser ou autres choses host/patname etc.."
// console.log(location.href);
// console.log(location.host);
// console.log(location.pathname);
// console.log(location.search);
// location.replace("http://www.lequipe.fr");

// window.onload = () => {
//   location.href = "http://twitter.fr";
// };

// Navigator
// console.log(navigator.userAgent);

// History
// console.log(history);
// window.history.back();
// history.go(-2);

//-----------------------------------------------------------
// SetProperty
//ici on viens demander à la souris de suivre l'effet blanc dans la nav que nous avons créer en after dans le CSS et on l'apelle avec VAR(--x et --y)
window.addEventListener("mousemove", (e) => {
  nav.style.setProperty("--x", e.layerX + "px");
  nav.style.setProperty("--y", e.layerY + "px");
});
