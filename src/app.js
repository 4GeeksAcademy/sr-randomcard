import "bootstrap";
import "./style.css";

window.onload = function() {
  const simbolos = ["♦", "♥", "♠", "♣"];
  const numeros = [
    "A",
    ...Array.from({ length: 9 }, (_, i) => i + 2),
    "J",
    "Q",
    "K"
  ];

  const btnGenerar = document.getElementById("btnGenrar");
  const simbolTop = document.querySelectorAll("#simbol")[0];
  const simbolBottom = document.querySelectorAll("#simbol")[1];
  const numberElement = document.getElementById("number");

  function generarCarta() {
    const simboloAleatorio =
      simbolos[Math.floor(Math.random() * simbolos.length)];
    const numeroAleatorio = numeros[Math.floor(Math.random() * numeros.length)];

    simbolTop.textContent = simboloAleatorio;
    simbolBottom.textContent = simboloAleatorio;
    numberElement.textContent = numeroAleatorio;

    const color =
      simboloAleatorio === "♦" || simboloAleatorio === "♥" ? "red" : "black";
    simbolTop.style.color = color;
    simbolBottom.style.color = color;
    numberElement.style.color = color;
  }

  btnGenerar.addEventListener("click", generarCarta);

  generarCarta();
};
