// alert("Salut JS");

/*Commenter 
plusieurs
lignes*/

// Kamel Case
let maSuperVariable = "Hello";

// ** Les variables **

// var = vieux JS
var unTexte = "Voici un texte";

// const = constante (une donnée qui bouge pas )
const prenom = "justine";

// let = la variable peut évoluer
let unChiffre = 24;
unChiffre = 22;

let chaine = "Je suis l'une des chaines de caractères";

let nouvelleChaine =
  "Chaine précédente : " + chaine + ". Voila c'était le contenu";

// Concaténation avec guillemets altgr+7
let autreConcatenation = `Chaine précédente : ${chaine}. Voila c'était le contenu`;

// ** Types de données **
let string = "Je suis une chaine de caractère";
let number = 24;
let boulean = false;

// Tableau : il y a des crochets []
let array = ["je", "suis", 47, true];

// Objet : accolades {}
let object = {
  prenom: "audrey",
  age: 33,
  ville: "bordeaux",
};

let arbre;

// ** Les opérateurs **
// console.log(4 + 5);
// console.log(4 - 5);
// console.log(4 / 5);
// console.log(4 * 5);
// //Puissance
// console.log(4 ** 5);

// ** Opérateurs d'affectations **
let total = 0;

total = total + 1;
total++;

total += 5;
total -= 4;
total *= 2;

// console.log(total);

// ** Structure de controle **
let x = 2;
let y = 2;

// if (x > y) {
//   alert("YES x plus gros que y");
// } else if (y > x) {
//   alert("Y plus grand !");
// } else {
//   alert("ILS SONT EGAUX");
// }

// on teste si la variable est "true"
if (x) {
  //   console.log("x existe !");
}

// === teste égalité en type et valeur
if (x === y) {
  //   console.log("ils sont égaux");
} else {
  //   console.log("pas égaux !");
}
let a = 2;
let b = "2";
// == teste l'égalité de valeur sans prendre en compte le type
if (a == b) {
  //   console.log("ils sont égaux");
} else {
  console.log("pas égaux !");
}

// || ou
// && et

// soit l'un soit l'autre
if (x < y || x > 1) {
  //   console.log("OUI");
}

// && il faut que toutes les conditions soit réunies
if (x < y && x > 1) {
  console.log("OUI");
}

// ** Les fonctions **

// fonction classique (à l'ancienne)
function faireQuelqueChose() {
  console.log("je fais un truc");
  console.log(5 + 6);
  alert("Calcule terminé");
}

// Il faut impérativement appeler la fonction pour qu'elle se joue
// appel de la fonction : faireQuelqueChose();

// fontion flèchée
const addition = (a, b) => {
  //   console.log(a + b);
};

addition(4, 3);
addition(432, 500);

// ** La portée des variables **

function add2() {
  let num = 4;
  console.log(num + 2);
}

console.log(num);
