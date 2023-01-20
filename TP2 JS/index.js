// Créer un événément au scroll

// Cacher la navbar si l'utilisateur comment à descendre et la sortir quand il remonte

// Stocker la valeur du précédent niveau de scroll pour savoir si l'on est monté ou descendu

// Connaitre niveau de scroll (window.scrollY)

// Ici nous somme obliger de créer un boite pour ne pas perdre la dernière position du scroll sinon elle se réinitialise à chaque scroll
// Pour ce faire, nous créons la boite let lastScroll qui est de base à zéro.
// Et, si nous somme inférieur au dernier scroll, alors on affiche la navbar sinon on la cache
// ne pas oublier de mettre la boite en amont et de rappeler à quoi correspond lesScroll en bas de l'évènement (ici lastScroll corespond au scroll du l'axe des Y)

let lastScroll = 0;

window.addEventListener("scroll", () => {
  if (window.scrollY < lastScroll) {
    navbar.style.top = 0;
  } else {
    navbar.style.top = "-60px";
  }

  lastScroll = window.scrollY;
});
