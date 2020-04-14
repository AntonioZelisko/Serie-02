const nu = document.getElementById("nu");
const am = document.getElementById("am");
const ddn = document.getElementById("ddn");
const mdp = document.getElementById("mdp");
const bouton = document.getElementById("bouton");
const ls = document.querySelector("p");
bouton.onclick = function() {
    let nuL = nu.value;
    let amL = am.value;
    let ddnL = ddn.value;
    let mdpL = mdp.value;
    localStorage.setItem("UserName", nuL);
    localStorage.setItem("AdEmail", amL);
    localStorage.setItem("DateNaissance", ddnL);
    localStorage.setItem("MotDePasse", mdpL);
}