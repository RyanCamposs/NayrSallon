const titulo = document.getElementById("animation");
const texto = titulo.textContent;
titulo.textContent = "";

// cria um span pra cada letra
texto.split("").forEach((letra, i) => {
  const span = document.createElement("span");
  span.textContent = letra;

  // adiciona delay pra cada letra começar em tempos diferentes
  span.style.animationDelay = `${i * 0.2}s`;

  titulo.appendChild(span);
});
