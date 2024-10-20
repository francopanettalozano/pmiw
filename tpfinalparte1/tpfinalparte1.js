let anchoPantalla = 640;
let altoPantalla = 480;

let anchoBotonI = 120;
let altoBotonI = 50;
let anchoBotonCR = 110;
let altoBotonCR = 40;
let corners = 20;

let textos = [];
let textoActual = 0;

let imag = [];  //declaracion array imagenes
let cantImagenes = 27;
let imagenActual = 0;  //indice del array de imagenes

let color1A, color1B, stroke1A, stroke1B;
let color2A, color2B, stroke2A, stroke2B;
let color3A, color3B, stroke3A, stroke3B;

let sonidoFondo;

function preload() {
  //carga de todas las imagenes
  for (let i = 0; i<cantImagenes; i++) {
    imag[i] = loadImage("data/imag"+i+".jpg");
  }
  //carga de la cadena de texto
  textos = loadStrings('data/aventura.txt');
  //carga de sonido
  soundFormats('mp3');
  sonidoFondo = loadSound("data/sonidoFondo.mp3");
  
}

function setup() {
  createCanvas(anchoPantalla, altoPantalla);
  textSize(20);
  textAlign(CENTER, CENTER);
  //estilosBotonInicio
  color1A = color(76, 155, 140);
  color1B = color(33, 206, 173);
  stroke1A = color(255);
  stroke1B = color(255);
  //estilosBotonCreditos
  color2A = color(16, 98, 88);
  color2B = color(76, 155, 140);
  stroke2A = color(100);
  stroke2B = color(255);
  //estilosBotonsiguiente
  color3A = color(100,200);
  color3B = color(100,255);
  stroke3A = color(0);
  stroke3B = color(255);
  //estilosBotonReiniciar
  color4A = color(16, 98, 88);
  color4B = color(76, 155, 140);
  stroke4A = color(100);
  stroke4B = color(255);
  //estilosBotonOpcion1
  color5A = color(0,70);
  color5B = color(76, 155, 140);
  stroke5A = color(255);
  stroke5B = color(0);
  //estilosBotonOpcion2
  color6A = color(0,70);
  color6B = color(76, 155, 140);
  stroke6A = color(255);
  stroke6B = color(0);
  //Booleana para que no empiece el sonido desde el principio
  sonidoFondo.setLoop(true);
  sonidoFondo.setVolume(0.3);
}

function draw() {
  chequeoAreas();
  console.log (mouseX, mouseY, imagenActual, textoActual);
  if (imagenActual === 0){
    pantalla(0, 0, true, false, true, false, 40, 250, 530, 100);
  } else if (imagenActual === 1) {
    pantalla(0, 0,false, true, false, false, false, false, 20, 355, 600, 105);
  } else if (imagenActual === 2) {
    pantalla(0, 0,false, false, false, false, true, true, 20, 355, 600, 105, 9, 52, 60, 300, 94, 195, 120, 110); //condicion
  } else if (imagenActual === 3) {
    pantalla(0, 0,false, true, false, false, false, false, 20, 340, 600, 130);
  } else if (imagenActual === 4) {
    pantalla(0, 0,false, true, false, false, false, false, 20, 360, 600, 100);
  } else if (imagenActual === 5) {
    pantalla(0, 0,false, false, false, false, true, true, 20, 10, 600, 100, 245, 210, 130, 90, 270, 315, 80, 70); //condicion
  } else if (imagenActual === 6) {
    pantalla(0, 0,false, false, false, false, true, true, 20, 30, 600, 100, 40, 265, 140, 35, 40, 305, 140, 35); //condicion
  } else if (imagenActual === 7) {
    pantalla(0, 0,false, true, false, false, false, false, 20, 330, 600, 105);
  } else if (imagenActual === 8) {
    pantalla(0, 0,false, true, false, false, false, false, 20, 345, 600, 100);
  } else if (imagenActual === 9) {
    pantalla(0, 0,false, true, false, false, false, false, 20, 345, 600, 130);
  } else if (imagenActual === 10) {
    pantalla(0, 0,false, true, false, false, false, false, 20, 335, 600, 125);
  } else if (imagenActual === 11) {
    pantalla(0, 0,false, true, false, false, false, false, 20, 330, 600, 125);
  } else if (imagenActual === 12) {
    pantalla(0, 0,false, false, false, false, true, true, 20, 315, 600, 150, 380, 45, 100, 240, 160, 10, 100, 120); //condicion
  } else if (imagenActual === 13) {
    pantalla(0, 0,false, true, false, false, false, false, 20, 315, 600, 150);
  } else if (imagenActual === 14) {
    pantalla(0, 0,false, true, false, false, false, false, 20, 315, 600, 150);
  } else if (imagenActual === 15) {
    pantalla(0, 0,false, false, false, false, true, true, 20, 315, 600, 150, 280, 170, 120, 100, 180, 160, 90, 90); //condicion
  } else if (imagenActual === 16) {
    pantalla(0, 0,false, true, false, false, false, false, 20, 315, 600, 150);
  } else if (imagenActual === 17) {
    pantalla(0, 0,false, true, false, false, false, false, 20, 315, 600, 150);
  } else if (imagenActual === 18) {
    pantalla(0, 0,false, true, false, false, false, false, 20, 315, 600, 150);
  } else if (imagenActual === 19) {
    pantalla(0, 0,false, true, false, false, false, false, 20, 315, 600, 150);
  } else if (imagenActual === 20) {
    pantalla(0, 0,false, true, false, false, false, false, 20, 315, 600, 150);
  } else if (imagenActual === 21) {
    pantalla(0, 0,false, true, false, false, false, false, 20, 315, 600, 130);
  } else if (imagenActual === 22) {
    pantalla(0, 0,false, false, false, false, true, true, 20, 350, 600, 105, 440, 200, 150, 100, 50, 200, 150, 100); //condicion
  } else if (imagenActual === 23) {
    pantalla(0, 0,false, true, false, false, false, false, 20, 315, 600, 150);
  } else if (imagenActual === 24) {
    pantalla(0, 0,false, false, true, true, false, false, 20, 250, 600, 130); //boton creditos
  } else if (imagenActual === 25) {
    pantalla(0, 0,false, false, true, true, false, false, 20, 30, 600, 150); //boton creditos
  } else if (imagenActual === 26) {
    pantalla(0, -80,false, false, false, true, false, false, 20, 315, 600, 150); //boton reiniciar
    push();
    textAlign(CENTER, TOP);
    text("Autor: Uwe Boll\n\nFranco Panetta 94806/7\nAra Martino 91595/3", anchoPantalla/2, 355);
    pop();
  }
  
}

function mouseClicked() {
  if (imagenActual === 0) {
    accionBoton(anchoPantalla/2-anchoBotonI/2, anchoPantalla/2+anchoBotonI/2, 325, 325+altoBotonI, 1, 0); //botonInicio
    accionBoton(20, 20+anchoBotonCR, 410, 410+altoBotonCR, 26); //botonCreditos
  } else if (imagenActual === 1){
    accionBoton(509, 509+anchoBotonCR, 16, 16+altoBotonCR, 2, 1); //botonSiguiente
  } else if (imagenActual === 2){
    accionBoton(94, 214, 195, 305, 3, 2); //opcion1
    accionBoton(9, 69, 52, 352, 4, 3); //opcion2
  } else if (imagenActual === 3 || imagenActual === 4){
    accionBoton(509, 509+anchoBotonCR, 16, 16+altoBotonCR, 5, 4);
  }else if (imagenActual === 5){
    accionBoton(245, 375, 200, 300, 6, 5); //opcion1
    accionBoton(270, 350, 315, 385, 7, 6); //opcion2
  } else if (imagenActual === 6) {
    accionBoton(40, 180, 265, 300, 10, 9); //opcion1
    accionBoton(40, 180, 305, 340, 13, 12); //opcion2
  } else if (imagenActual === 7) {
    accionBoton(509, 509+anchoBotonCR, 16, 16+altoBotonCR, 8, 7); //botonSiguiente
  } else if (imagenActual === 8) {
    accionBoton(509, 509+anchoBotonCR, 16, 16+altoBotonCR, 9, 8); //botonSiguiente
  } else if (imagenActual === 9) {
    accionBoton(509, 509+anchoBotonCR, 16, 16+altoBotonCR, 10, 9); //botonSiguiente
  } else if (imagenActual === 10) {
    accionBoton(509, 509+anchoBotonCR, 16, 16+altoBotonCR, 11, 10); //botonSiguiente
  } else if (imagenActual === 11) {
    accionBoton(509, 509+anchoBotonCR, 16, 16+altoBotonCR, 12, 11); //botonSiguiente
  } else if (imagenActual === 12) {
    accionBoton(380, 480, 45, 285, 19, 18); //opcion1
    accionBoton(160, 260, 10, 130, 23, 22); //opcion2
  } else if (imagenActual === 13) {
    accionBoton(509, 509+anchoBotonCR, 16, 16+altoBotonCR, 14, 13); //botonSiguiente
  } else if (imagenActual === 14) {
    accionBoton(509, 509+anchoBotonCR, 16, 16+altoBotonCR, 15, 14); //botonSiguiente
  } else if (imagenActual === 15) {
    accionBoton(280, 400, 170, 270, 16, 15); //opcion1
    accionBoton(180, 270, 160, 250, 18, 17); //opcion2
  } else if (imagenActual === 16) {
    accionBoton(509, 509+anchoBotonCR, 16, 16+altoBotonCR, 17, 16); //botonSiguiente
  } else if (imagenActual === 17) {
    accionBoton(509, 509+anchoBotonCR, 16, 16+altoBotonCR, 12, 11); //botonSiguiente
  } else if (imagenActual === 18) {
    accionBoton(509, 509+anchoBotonCR, 16, 16+altoBotonCR, 11, 10); //botonSiguiente
  } else if (imagenActual === 19) {
    accionBoton(509, 509+anchoBotonCR, 16, 16+altoBotonCR, 20, 19); //botonSiguiente
  } else if (imagenActual === 20) {
    accionBoton(509, 509+anchoBotonCR, 16, 16+altoBotonCR, 21, 20); //botonSiguiente
  } else if (imagenActual === 21) {
    accionBoton(509, 509+anchoBotonCR, 16, 16+altoBotonCR, 22, 21); //botonSiguiente
  } else if (imagenActual === 22) {
    accionBoton(440, 590, 200, 300, 24, 23); //opcion1
    accionBoton(50, 200, 200, 300, 25, 24); //opcion2
  } else if (imagenActual === 23) {
    accionBoton(509, 509+anchoBotonCR, 16, 16+altoBotonCR, 22, 21); //botonSiguiente
  } else if (imagenActual === 24) {
    accionBoton(20, 20+anchoBotonCR, 410, 410+altoBotonCR, 26); //botonCreditos
    accionBoton(510, 510+anchoBotonCR, 410, 410+altoBotonCR, 0); //botonReiniciar
  } else if (imagenActual === 25) {
    accionBoton(20, 20+anchoBotonCR, 410, 410+altoBotonCR, 26); //botonCreditos
    accionBoton(510, 510+anchoBotonCR, 410, 410+altoBotonCR, 0); //botonReiniciar
  } else if (imagenActual === 26) {
    accionBoton(510, 510+anchoBotonCR, 410, 410+altoBotonCR, 0); //botonReiniciar
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    if (imagenActual !=0) {
    textoActual++;
    }
    imagenActual++;
  }
  if (keyCode === DOWN_ARROW) {
    imagenActual--;
    textoActual--;
  }
}
