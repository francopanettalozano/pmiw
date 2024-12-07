function dibujarBoton(posXBoton, posYBoton, anchoBoton, altoBoton, transparencia) {
  rect(posXBoton, posYBoton, anchoBoton, altoBoton, corners);
}

function accionBoton(areaX1, areaX2, areaY1, areaY2, escena, parrafo) {
  if (mouseX > areaX1 && mouseX < areaX2 && mouseY > areaY1 && mouseY < areaY2) {
    imagenActual = escena;
    textoActual = parrafo;
  }
}

function opciones(areaX1, areaX2, areaY1, areaY2, area2X1, area2X2, area2Y1, area2Y2) {
  //opciones1
  push();
  textAlign(LEFT);
  if (mouseX > areaX1 && mouseX < areaX2 && mouseY > areaY1 && mouseY < areaY2) {
    if (imagenActual === 2) {
      text("Llamar a Jack", mouseX+5, mouseY-5);
    } else if (imagenActual === 5) {
      text("Haceptar las condiciones", mouseX+5, mouseY-5);
    } else if (imagenActual === 6) {
      text("Buscar el puerto", mouseX+5, mouseY-5);
    } else if (imagenActual === 15) {
      text("Seguir a Jack", mouseX+5, mouseY-5);
    } else if (imagenActual === 12) {
      text("Hablar con Max", mouseX+5, mouseY-5);
    } else if (imagenActual === 22) {
      text("Rescatar a Max", mouseX+5, mouseY-5);
    }
  }
  //opciones2
  if (mouseX > area2X1 && mouseX < area2X2 && mouseY > area2Y1 && mouseY < area2Y2) {
    if (imagenActual === 2) {
      text("Buscar a Jack", mouseX+5, mouseY-5);
    } else if (imagenActual === 5) {
      text("Golpear a Jack", mouseX+5, mouseY-5);
    } else if (imagenActual === 6) {
      text("Ir por la playa", mouseX+5, mouseY-5);
    } else if (imagenActual === 15) {
      text("Ir sola", mouseX+5, mouseY-5);
    } else if (imagenActual === 12) {
      text("Observar a Krieger", mouseX+5, mouseY-5);
    } else if (imagenActual === 22) {
      text("Huir", mouseX+5, mouseY-5);
    }
  }
  pop();
}
