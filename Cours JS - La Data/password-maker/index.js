const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = '%£$,?;.:/!§ù%*µ^¨&#@"';
const rangeValue = document.getElementById("password-length");
const passwordOutput = document.getElementById("password-output");

function generatePassword() {
  let data = [];
  let password = "";

  if (lowercase.checked) data.push(...dataLowercase);
  if (uppercase.checked) data.push(...dataUppercase);
  if (numbers.checked) data.push(...dataNumbers);
  if (symbols.checked) data.push(...dataSymbols);

  if (data.length === 0) {
    alert("Veuillez selectionner des critères");
    return;
  }

  for (i = 0; i < rangeValue.value; i++) {
    password += data[Math.floor(Math.random() * data.length)];
  }
  passwordOutput.value = password;

  passwordOutput.select(); // pour selectionner le mot de passe générer
  document.execCommand("copy"); // pour copier le mot de passe générer

  generateButton.textContent = "Copié !"; // ici on vient remplacer le mot "générer mot de passe" par "copié" quand il a cliqué sur le button

  setTimeout(() => {
    generateButton.textContent = "Générer mot de passe";
  }, 2000);
} // ici on vient remettre le bouton en "générer mot de passe" au bout de 2sec car sinon il reste avec le bouton copié

generateButton.addEventListener("click", generatePassword);
