function calculo_iva() {
  var montoInput = document.getElementById("numeroInput");
  var tasaIvaInput = document.getElementById("iva");
  var resultadoElement = document.getElementById("calculo_iva_Resultado");
  var imagenIva = document.getElementById("imagenIva");

  var monto = parseFloat(montoInput.value);
  var tasaIva = parseInt(tasaIvaInput.value);

  if (isNaN(monto) || isNaN(tasaIva)) {
    resultadoElement.textContent =
      "Por favor, ingrese un monto válido y seleccione una tasa de IVA.";
    imagenIva.src = "";
    return;
  }

  if (tasaIva === 10) {
    imagenIva.src = "../resources/img/10.jpg";
  } else if (tasaIva === 22) {
    imagenIva.src = "../resources/img/20.jpg";
  }

  // Calculamos el resultado
  var resultado = monto + monto * (tasaIva / 100);
  resultadoElement.textContent = "El monto con IVA es: " + resultado.toFixed(2);
}
