// Rappel des types de données
let string = "chaine";
let number = 25;
let boolean = true;
let maVariable; // Produit type Undefined

// typeof permet de connaitre le type de données
// console.log(typeof string);

// Tableaux
let array = ["Bordeaux", "Toulouse", "Nantes"];
// Pour appeler bordeaux, il faut indiquer 0. mais on peut aussi appeler une lettre avec le deuxième crochet => ici 3 pour la lettre d
// console.log(array[0][3]);

let array2 = ["Bordeaux", 24, true, [1, 2], { nom: "Denis" }];
// console.log(array2[4].nom);

let objet = {
  pseudo: "Denis",
  age: 33,
  technos: ["Javascript", "React", "NodesJs"],
  admin: false,
};

// Ici on ajoute un élément dans l'objet (22 rue du code)
// objet.adresse = "22 rue du code";
// console.log(objet);

let data = [
  {
    pseudo: "Denis",
    age: 33,
    technos: ["Javascript", "React", "NodesJs"],
    admin: false,
  },
  {
    pseudo: "Samia",
    age: 24,
    technos: ["CSS", "React", "NodesJs"],
    admin: false,
  },
  {
    pseudo: "Nikola",
    age: 42,
    technos: ["Php", "React", "NodesJs"],
    admin: true,
  },
];

// console.log(data[2].pseudo[0]);

// ----------------------------------
// Les structures de controle
// ----------------------------------

if (data[0].age > data[1].age) {
  // console.log(data[0].pseudo + " est plus agé que " + data[1].pseudo);
} else {
  // Valeur si faux
}

// While - (while veux dire "tant que")
let w = 0;

while (w < 10) {
  w++;
  // console.log("La valeur de w est de : " + w);
}

// Do while
let d = 0;

do {
  d++;
  // console.log(d);
} while (d < 5);

// Les boucles for
for (const user of data) {
  // document.body.innerHTML += `<li>${user.pseudo} - ${user.age} ans</li>`;
}

// on déclare la valeur de i / jusqu'où on boucle / on incrémente i si la condition 2 n'est pas remplie
// length - veux dire la longueur du tableau. ici nous sommes à 3
for (i = 0; i < data.length; i++) {
  // console.log(i);
  // console.log(data[i].technos[0]);
  // document.body.innerHTML += "<h2>" + data[i].technos + "</h2>";
}

// Les SWITCHS - nous permet d'éviter d'avoir plein de if ou else
// e pour récuperer les évenements - target pour récupérer les clicks sur la page - et id pour récupérer les id de html
// ne jamais oublier de finir un switch par "défaut: null"
document.body.addEventListener("click", (e) => {
  switch (e.target.id) {
    case "javascript":
      document.body.style.background = "yellow";
      break;
    case "php":
      document.body.style.background = "violet";
      break;
    case "python":
      document.body.style.background = "blue";
      break;
    default:
      null;
  }
});
// -------------------------------------------------
// Méthodes String
// ------------------------------------------------

let string2 = "Javascript est un langage orienté objet";

// console.log(typeof "42");
// console.log(eval(parseInt("1") + 2));
// console.log(isNaN(string2));

// console.log(string2.length);
// console.log(string2[string2.length - 1]);

// console.log(string2.indexOf("langage"));
// console.log(string2.indexOf("x")); // Retourne -1 s'il ne le connait pas

// let newString = string2.slice(20); // pour couper des phrases ou autres
// let newString = string2.slice(5, 17);
// console.log(newString);

// console.log(string2.split(" ")); // supprime les lettres ou espace

// console.log(string2.toLocaleLowerCase()); // Transcrit tout en minuscule
// console.log(string2.toUpperCase()); // transcrit tout en majuscule

// console.log(string2.replace("Javascript", "PHP")); // sert à remplacer le mot nommé par un autre

// ----------------------------------------
// Méthodes Numbers
// ----------------------------------------

let number2 = 42.1234;
let numberString = "42.12 est un chiffre";
// console.log(number2.toFixed(1)); // Permet d'arondir après la virgule à 1 ou plusieurs chiffre
// console.log(parseInt("43")); // Permet de changer une chaine de caractère en nulber
// console.log(parseInt(numberString)); // Permet de récuperer les chiffres avant la virgule
// console.log(parseFloat(numberString)); // Permet de récuperer le chiffre entier avec la virgule

// Méthode Math

// console.log(Math.PI);
// console.log(Math.round(4.5)); // Pour arrondir
// console.log(Math.floor(4.9)); // Pour arrondir au plus bas
// console.log(Math.ceil(4.1)); // Pour arrondir au plus haut
// console.log(Math.pow(2, 7)); // Pour faire des puissances (ici 2 puissance 7)
// console.log(Math.sqrt(16)); // Pour faire des raçine caré

// console.log(Math.floor(Math.random() * 50)); // Pour avoir un chiffre random entre 0 et 50. avec la fonction floor devant, ça nous permet d'avoir un chiffre rond sans les virgules

// -----------------------------------------
// Méthodes Arrays
// -----------------------------------------

let array3 = ["Javascript", "Php", "Python"];
let array4 = ["Ruby", "Solidity"];

// Pour concatener les deux tableaux
// 1er méthode

// let newArray = array3.concat(array4);
// console.log(newArray);

// 2ème métohes

// let newArray = [...array3, ...array4];
// console.log(newArray);

// console.log(array3.join(" ")); // pour mettre entre les mots du tableau des chiffres ou lettre ou caractère

// console.log(array3.slice(1));
// console.log(array3.slice(2, 3)); // Pour permettre d'enlever les élément en fonction de la formule (ici on enlève le premier/deuxième et on garde le troisième)

// console.log(array3.indexOf("Python")); // indexOf pour rechercher dans un tableau

// array3.forEach((languages) => console.log(languages)); // A chaque fois que tu vois languages => dit le moi => ici Java + php + python

// console.log(array3.every((language) => language === "php")); // every permet de chercher la chaine de caractère exacte
// console.log(array3.some((language) => language === "Php")); // some permet de chercher dans l'évenement, quelque part le mot php

// let shift = array3.shift(); // shift permet d'enlever le premier élement du tableau
// console.log(shift);

// console.log(array3.pop()); // pop permet de retirer le dernier élement

// const restArray = array3.splice(0, 2, ...array4); // splice permet de rajouter/supprimer des choses dans le tableau
// console.log(array3);

// IMPORTANT //

let arrayNumber = [4, 74, 28, 12, 1];

// console.log(arrayNumber.reduce((x, y) => x + y)); // permet d'aditionner le tableau

arrayNumber.push(17); // push permet d'ajouter un élement au tableau
// console.log(arrayNumber);

// FILTER, SORT, MAP // (FILTER : FILTRER) (SORT : TRIER) (MAP : LISTEZ LES CHOSES

// console.log(arrayNumber.filter((number) => number > 10)); // ici on demande d'afficher uniquement les numéros suppérieur à 10 (number est un nom qu'on lui a donné mais on peut le nommé comme on veut)

// console.log(arrayNumber.sort());
// console.log(arrayNumber.sort((a, b) => a - b)); // ici on demande de triez du plus grand au plus petit(toujours indiquer a et b)

// document.body.innerHTML = arrayNumber
//   .map((number) => `<li> ${number}</li>`)
//   .join(""); // ici on vient ajouter du html pour qu'avec la fonction map on ajoute les nombres à la ligne

// -----------------------------------------------
// Méthodes objects
// -----------------------------------------------

// LOGIQUE A RETENIR TRES IMPORTANT

// document.body.innerHTML = data // ici on classe le tableau par age avec le fonction .sort
//   // avec filter, on vient demander d'afficher uniquement les utilisateur qui ne sont pas admin
//   // l'autre filter demande d'afficher les noms ou on trouve un i
//   // en dessous dans map, on ajoute une class pour créer un tableau avec pseudo age et status. dans le status avec la fonction "?" on demande si tu es true alors modérateur sinon membre
//   .filter((user) => user.admin === false)
//   .filter((user) => user.pseudo.includes("i"))
//   .sort((a, b) => b.age - a.age)
//   .map(
//     (user) =>
//       `
//   <div class="user-card">
//     <h2>${user.pseudo}</h2>
//     <p>Age : ${user.age} ans</p>
//     <p>Status : ${user.admin ? "Modérateur" : "Membre"}</p>
//   </div>
//   `
//   )
//   .join("");

// -----------------------------------------------
// Les dates
// -----------------------------------------------

// Dates classqiue
let date = new Date();

// Timestamp
let timestamp = Date.parse(date);
// console.log(timestamp);

// IsoString
// console.log(date.toISOString());

function dateParser(chaine) {
  let newDate = new Date(chaine).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    // hour: "numeric",
    // minute: "numeric",
  });
  return newDate;
}

// console.log(dateParser(date));
// console.log(dateParser(timestamp));

// -----------------------------------------------
// Destructuring
// -----------------------------------------------

let moreData = {
  destVar: ["Element 1", "Element 2"],
};

const { destVar } = moreData;

// console.log(moreData.destVar);
// console.log(destVar);

let array5 = [70, 80, 90];
let [x, y, z] = array5;
// console.log(x);
// console.log(y);
// console.log(z);

const dateDestructuring = (chaine) => {
  let newDate = chaine.split("T")[0];
  [y, m, d] = newDate.split("-");
  return [d, m, y].join("/");
};
// console.log(dateDestructuring(iso));

// -----------------------------------------------
// Les Datasets
// -----------------------------------------------

const h3js = document.getElementById("javascript");
// console.log(h3js.dataset.lang);

const h3 = document.querySelectorAll("h3");
// h3.forEach((language) => console.log(language.dataset.lang));

// -----------------------------------------------
// Les Regex
// -----------------------------------------------
let mail = "from_scratch33@gmail.com";
// console.log(mail.search(/from/));

// console.log(mail.replace(/from/, "de"));
// console.log(mail.match(/SCratch/i));
// console.log(mail.match(/[zug]/));
// console.log(mail.match(/[123]/));

// Tous les chiffres
// console.log(mail.match(/\d/));

// Matcher toutes les lettres
// console.log(mail.match(/[a-z]/));

// console.log(mail.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i));

let separator = 265264849;
// console.log(separator.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "));

//*********reprendre la vidéo à 3h31 */
