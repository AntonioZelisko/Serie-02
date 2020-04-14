const impot = document.querySelectorAll("span");
valider.addEventListener("click", function() {
    if (region.checked) {
        impot[2].innerHTML = revenus.value + "(0%)";
    } else {
        impot[2].innerHTML = revenus.value / 2 + "(50%)";
    }
});