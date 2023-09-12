document.addEventListener("DOMContentLoaded", function () {
  const calcularBtn = document.getElementById("calcularBtn");
  const calculadoraIMC = document.getElementById("calculadoraIMC");
  const cerrarBtn = document.getElementById("cerrarBtn");
  const calcularIMCBtn = document.getElementById("calcularIMC");
  const resultadoDiv = document.getElementById("resultado");
  const limpiarBtn = document.getElementById("limpiar");
  const pesoInput = document.getElementById("peso");
  const alturaInput = document.getElementById("altura");

  // calcularBtn.addEventListener("click", () => {
  //   calculadoraIMC.classList.remove("hidden");
  // });

  // cerrarBtn.addEventListener("click", () => {
  //   console.log("cerrar");
  //   calculadoraIMC.classList.add("hidden");
  //   limpiarCampos();
  //   quitarResaltadoCategorias();
  // });

  calcularIMCBtn.addEventListener("click", () => {
    const peso = parseFloat(pesoInput.value);
    const altura = parseFloat(alturaInput.value);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
      mostrarResultado("");
      quitarResaltadoCategorias();
      return;
    }

    const imc = calcularIMC(peso, altura);

    resaltarCategoriaIMC(imc);
  });

  limpiarBtn.addEventListener("click", () => {
    limpiarCampos();
    mostrarResultado("");
    quitarResaltadoCategorias();
  });

  function calcularIMC(peso, altura) {
    return peso / (altura * altura);
  }

  function mostrarResultado(resultado) {
    resultadoDiv.textContent = resultado;
  }

  function limpiarCampos() {
    pesoInput.value = "";
    alturaInput.value = "";
  }

  function resaltarCategoriaIMC(imc) {
    quitarResaltadoCategorias();

    if (imc < 18.5) {
      document.getElementById("bajoPeso").classList.add("resaltado");
      mostrarResultado(`Tu IMC es ${imc.toFixed(2)} (Bajo peso).`);
    } else if (imc >= 18.5 && imc < 25.0) {
      document.getElementById("pesoSaludable").classList.add("resaltado");
      mostrarResultado(`Tu IMC es ${imc.toFixed(2)} (Peso saludable).`);
    } else if (imc >= 25.0 && imc < 30.0) {
      document.getElementById("sobrepeso").classList.add("resaltado");
      mostrarResultado(`Tu IMC es ${imc.toFixed(2)} (Sobrepeso).`);
    } else {
      document.getElementById("obesidad").classList.add("resaltado");
      mostrarResultado(`Tu IMC es ${imc.toFixed(2)} (Obesidad).`);
    }
  }

  function quitarResaltadoCategorias() {
    const categorias = ["bajoPeso", "pesoSaludable", "sobrepeso", "obesidad"];
    categorias.forEach((categoria) => {
      document.getElementById(categoria).classList.remove("resaltado");
    });
  }
});
