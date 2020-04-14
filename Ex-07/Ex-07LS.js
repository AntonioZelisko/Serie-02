const bouton = document.querySelector("input[value='Récuperer']");
const ls = document.querySelector("p");
bouton.onclick = function() {
    let userName = localStorage.getItem("UserName");
    let adEmail = localStorage.getItem("AdEmail");
    let dateNaissance = localStorage.getItem("DateDeNaissance");
    let motPasse = localStorage.getItem("MotDePasse");
    ls.innerHTML += `${userName}+${adEmail}+${dateNaissance}+${motPasse}+`;
};