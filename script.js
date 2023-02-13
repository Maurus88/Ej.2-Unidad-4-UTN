const MAX_CARACTERES = 100;
const textarea = document.getElementById("texto");
const contador = document.getElementById("contador");

textarea.addEventListener("input", function () {
  const caracteresRestantes = MAX_CARACTERES - textarea.value.length;
  contador.innerText = caracteresRestantes;
});