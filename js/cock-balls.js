const textoAnimado = document.getElementById("textoAnimado");
const textos = [
  "B=✊🏻===D",
  "B==✊🏻==D",
  "B===✊🏻=D",
  "B====✊🏻D",
  "B===✊🏻=D",
  "B==✊🏻==D",
  "B=✊🏻===D",
  "B✊🏻====D"
];

let indice = 0;

function cambiarTexto() {
  textoAnimado.textContent = textos[indice];
  indice = (indice + 1) % textos.length;
}

// Cambia el texto cada 2 segundos (2000 milisegundos)
setInterval(cambiarTexto, 100);
