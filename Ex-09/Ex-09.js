const quantite = document.querySelectorAll("span");
const limiteM = 10;
const limiteC = 100;
quantite[0].innerHTML = 0;
quantite[1].innerHTML = 0;
champs.addEventListener("keyup", function() {
    quantite[0].innerHTML = champs.value.split(" ").length
    quantite[1].innerHTML = champs.value.length;
    if (champs.value.length > limiteC) {
        quantite[2].style = "color:red"
        quantite[2].innerHTML = "Dépassement";
    } else {
        quantite[2].innerHTML = "";
    }
    if (champs.value.split(" ").length > limiteM) {
        quantite[2].style = "color:red"
        quantite[2].innerHTML = "Dépassement";
    } else {
        quantite[2].innerHTML = "";
    }
});