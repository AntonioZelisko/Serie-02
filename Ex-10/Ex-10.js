const section = document.querySelector("section");
let p = document.createElement("p");

boutonAdd.addEventListener("click", function() {

    if (ajouter.value != 0) {
        p = document.createElement("p");
        section.appendChild(p);

        p.innerHTML = ajouter.value;
    } else {
        return 0;
    }
})
clear.addEventListener("click", function() {
    const pi = document.querySelectorAll("p");
    for (i = 0; i < pi.length; i++) {
        pi[i].remove();
    }
})