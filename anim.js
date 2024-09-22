// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Nos dimos todo lo que se nos dio", time: 21 },
  { text: "Nos dimos todo eso y mucho mas", time: 26 },
  { text: "Para despues reconocernos otra vez", time: 31 },
  { text: "Nos damos todo lo que se nos da", time: 38 },
  { text: "Y nos damos todo eso y mucho mas", time: 45 },
  { text: "Amanecer colgado de tus labios", time: 49 },
  { text: "Oh-oh-oh", time: 55 },
  { text: "Brillas y brillas tan lindo", time: 57 },
  { text: "Y brillamos juntos entre pestañas", time: 62 },
  { text: "Divina, divina sonrisa", time: 67 },
  { text: "Abrazo de luna, de luna llena", time: 73 },
  { text: "Huh-uh-ha", time: 80 },
  { text: "Huh-uh-ha", time: 85 },
  { text: "Huh-ah-ah", time: 90 },
  { text: "Huh-ah-ah", time: 94 },
  { text: "Ah", time: 100 },
  { text: "Nos dimos todo lo que se nos dio", time: 107 },
  { text: "Nos dimos todo eso y mucho más", time: 113 },
  { text: "Para después reconocernos otra vez", time: 118 },
  { text: "Oh-oh-oh", time: 124 },
  { text: "Brillas y brillas tan lindo", time: 126 },
  { text: "Y brillamos juntos entre pestañas", time: 130 },
  { text: "Divina, divina sonrisa", time: 134 },
  { text: "Abrazo de luna, de luna llena", time: 138 },
  { text: "Y así, juntitos los dos", time: 146 },
  { text: "Y así, lo que se nos dio", time: 151 },
  { text: "Y así, juntitos los dos", time: 156 },
  { text: "Y así, lo que se nos da", time: 161 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);