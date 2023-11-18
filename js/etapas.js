function cambiarImagen() {
  var seleccion = document.getElementById("edad").value;
  var imagen = document.getElementById("imagenEdad");

  switch (seleccion) {
    case "niñez":
      imagen.src = "../resources/img/niñez.png";
      break;
    case "adolescencia":
      imagen.src = "../resources/img/adolescencia.png";
      break;
    case "juventud":
      imagen.src = "../resources/img/juventud.png";
      break;
    case "senectud":
      imagen.src = "../resources/img/vejez.png";
      break;
    default:
      imagen.src = "";
  }
}
