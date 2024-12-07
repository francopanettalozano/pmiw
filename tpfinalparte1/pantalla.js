function pantalla(posXImg, posYImg, 
                  botonInicio, botonSiguiente, botonCreditos, botonReiniciar, botonOpcion1, botonOpcion2,
                  posXTexto, posYTexto, anchoRectText, altoRectText,
                  posXOpcion1, posYOpcion1, anchoOpcion1, altoOpcion1,
                  posXOpcion2, posYOpcion2, anchoOpcion2, altoOpcion2) {
  background(0);
  if (imagenActual >= 1 && imagenActual <= 25) {
    if (!sonidoFondo.isPlaying()) {
      sonidoFondo.play();
    }
  } else {
    sonidoFondo.stop();
  }
  //imagenes
  image(imag[imagenActual], posXImg, posYImg, anchoPantalla, altoPantalla);
  //textos
  if (imagenActual != 0) {
    push();
    fill(0, 150);
    rect(posXTexto-5, posYTexto-10, anchoRectText+10, altoRectText+10, 20);
    textAlign(CENTER, TOP);
    estiloTexto(20);
    text(textos[textoActual], posXTexto, posYTexto, anchoRectText, altoRectText);
    pop();
  }
  //botonInicio
  if (botonInicio === true) {
    hover1(anchoPantalla/2-anchoBotonI/2, anchoPantalla/2+anchoBotonI/2, 325, 325+altoBotonI, 
           color(33, 206, 173), color(76, 155, 140), color(255), color(255)); //hoverBotonInicio
    estiloBoton(2, stroke1A, color1A); //estiloBotonInicio
    dibujarBoton(anchoPantalla/2-anchoBotonI/2, 325, anchoBotonI, altoBotonI);
    estiloTexto(20);
    text ("INICIO", anchoPantalla/2, 325+altoBotonI/2);
  }
  //botonSiguiente
  if (botonSiguiente === true) {
    hover3(509, 509+anchoBotonCR, 16, 16+altoBotonCR, 
           color(100, 255), color(100, 200), color(255), color(0)); //hoverBotonSiguiente
    estiloBoton(2, stroke3A, color3A);
    dibujarBoton(509, 16, anchoBotonCR, altoBotonCR);
    estiloTexto(20);
    text ("siguiente", 509+anchoBotonCR/2, 16+altoBotonCR/2);
  }
  //botonCreditos
  if (botonCreditos === true) {
    hover2(20, 20+anchoBotonCR, 410, 410+altoBotonCR, 
           color(76, 155, 140), color(16, 98, 88), color(255), color(100)); //hoverBotonCreditos
    estiloBoton(2, stroke2A, color2A);
    dibujarBoton(20, 410, anchoBotonCR, altoBotonCR, 200);
    estiloTexto(18);
    text ("CRÉDITOS", 20+anchoBotonCR/2, 410+altoBotonCR/2);
  }
  //botonReiniciar
  if (botonReiniciar === true) {
    hover4(510, 510+anchoBotonCR, 410, 410+altoBotonCR, 
           color(76, 155, 140), color(16, 98, 88), color(255), color(100)); //hoverBotonReiniciar
    estiloBoton(2, stroke4A, color4A);
    dibujarBoton(510, 410, anchoBotonCR, altoBotonCR);
    estiloTexto(18);
    text ("REINICIAR", 510+anchoBotonCR/2, 410+altoBotonCR/2);
  }
  //botonOpcion1
  if (botonOpcion1 === true) {
    estiloBoton(2, stroke5A, color5A);
    dibujarBoton(posXOpcion1, posYOpcion1, anchoOpcion1, altoOpcion1);
    estiloTexto(18);
    console.log("opcion1");
  }
  //botonOpcion2
  if (botonOpcion2 === true) {
    estiloBoton(2, stroke6A, color6A);
    dibujarBoton(posXOpcion2, posYOpcion2, anchoOpcion2, altoOpcion2);
    estiloTexto(18);
    console.log("opcion2");
  }
  if (imagenActual == 2) {440, 590, 200, 300,50, 200, 200, 300
    opciones(94, 214, 195, 305, 9, 69, 52, 352);
  } else if (imagenActual === 5) {
    opciones(245, 375, 200, 300, 270, 350, 315, 385);
  } else if (imagenActual === 6) {
    opciones(40, 180, 265, 300, 40, 180, 305, 340);
  } else if (imagenActual === 12) {
    opciones(380, 480, 45, 285, 160, 260, 10, 130);
  } else if (imagenActual === 15) {
    opciones(280, 400, 170, 270, 180, 270, 160, 250);
  } else if (imagenActual === 22) {
    opciones(440, 590, 200, 300, 50, 200, 200, 300);
  }
}
