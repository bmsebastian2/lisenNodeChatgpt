const btnGrabar = document.getElementById("grabar");
const btnStop = document.getElementById("stop");
const displayLoading = document.getElementById("displayLoading");
// const spinner = document.getElementById("spinner");
// let cuadroTexto = document.getElementById("texto");
// cuadroTexto.contains = "result[0].transcript";
let cuadroTexto = document.getElementById("texto");

let tiempoLimite = 0.5; // Tiempo límite en segundos
let intervalo;

btnStop.onclick = Stop;
btnGrabar.onclick = Grabar;

const recognition = new webkitSpeechRecognition();
recognition.lang = "es-ES";
recognition.continuous = true;

function Grabar() {
  cuadroTexto.classList.remove("hiden");
  hiden();
  recognition.start();
  recognition.onresult = (event) => {
    iniciarContador();

    for (const result of event.results) {
      cuadroTexto.textContent = result[0].transcript;
    }
  };

  recognition.onend = function () {
    console.log("Reconocimiento de voz finalizado");
  };
  recognition.onnomatch = function (event) {
    console.log("No se detectó ninguna coincidencia de voz");
  };
}

function Stop() {
  hiden();
  console.log("stop");

  recognition.stop();
  detenerContador();
}

function hiden() {
  //   spinner.classList.toggle("hiden");

  displayLoading.classList.toggle("hiden");
  btnStop.classList.toggle("hiden");
  btnGrabar.classList.toggle("hiden");
}

function detenerContador() {
  recognition.stop();
  clearInterval(intervalo);
  console.log("Contador detenido");
  // Llamar a tu función cuando se alcance el límite
  // por ejemplo: ejecutarAlAlcanzarLimite();
}
function iniciarContador() {
  let segundosRestantes = tiempoLimite;

  intervalo = setInterval(function () {
    segundosRestantes--;

    if (segundosRestantes >= 0) {
      actualizarContador(segundosRestantes);
    } else {
      hiden();
      detenerContador();
    }
  }, 1000);
}

function actualizarContador(segundosRestantes) {
  //   document.getElementById("tiempoRestante").innerText = segundosRestantes;
}
