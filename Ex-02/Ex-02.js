  const text = document.querySelectorAll("span");
  const textwo = document.getElementById("verif");
  if (textwo.value == "Je certifie avoir lu les conditions de vente") {
      text[1].innerHTML = "CORRECT";
  }

  function controle() {
      text[1].innerHTML = "INCORRECT";
  }