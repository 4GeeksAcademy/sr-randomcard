import "bootstrap";
import "./style.css";

window.onload = function() {
  const randomNumber = document.querySelector("#number");
  const figuraSup = document.querySelector("#figura1");
  const figuraInf = document.querySelector("#figura2");
  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button-container");

  let randomCard = () => {
    let results = Math.floor(Math.random() * 10 + 4);
    if (results == 11) results = "J";
    if (results == 12) results = "Q";
    if (results == 13) results = "K";
    if (results == 14) results = "A";

    return results;
  };

  let randomSimb = () => {
    let result = Math.floor(Math.random() * 4 + 1);
    if (result == 1) result = "♦";
    if (result == 2) result = "♥";
    if (result == 3) result = "♠";
    if (result == 4) result = "♣";

    return result;
  };

  const simboloFinal = randomSimb();
  randomNumber.innerHTML = `<h1>${randomCard()}</h1>`;
  figuraSup.innerHTML = `<h1>${simboloFinal}</h1>`;
  figuraInf.innerHTML = `<h1>${simboloFinal}</h1>`;

  if (simboloFinal === "♦" || simboloFinal === "♥") {
    figuraSup.style.color = "red";
    figuraInf.style.color = "red";
  }

  const boton = document.createElement("button");
  boton.innerText = "Actualizar carta";
  boton.classList.add("my-button-class");

  buttonContainer.appendChild(boton);
  document.body.appendChild(buttonContainer);

  boton.addEventListener("click", () => {
    const newSimboloFinal = randomSimb();
    const newNumber = randomCard();
    randomNumber.innerHTML = `<h1>${newNumber}</h1>`;
    figuraSup.innerHTML = `<h1>${newSimboloFinal}</h1>`;
    figuraInf.innerHTML = `<h1>${newSimboloFinal}</h1>`;

    if (newSimboloFinal === "♦" || newSimboloFinal === "♥") {
      figuraSup.style.color = "red";
      figuraInf.style.color = "red";
    } else {
      figuraSup.style.color = "black";
      figuraInf.style.color = "black";
    }
  });

  function redimensionar() {
    console.log("redimensione");
    let ancho = document.getElementById("ancho").value;
    console.log("ancho", ancho);
    let alto = document.getElementById("alto").value;
    console.log("alto", alto);

    document.getElementById("carta").style.width = `${ancho}px`;
    document.getElementById("carta").style.height = `${alto}px`;
  }

  document.getElementById("redimensionarCarta").addEventListener("click", e => {
    redimensionar();
  });
};
