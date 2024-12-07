//Ara Martino Saravi 91595/3
//Franco Panetta Lozano 94806/7
//YouTube:https://www.youtube.com/watch?v=QZbGzVyRRVA

/*CONSIGNA
 En este juego de defensa, el jugador debe proteger CIUDADES en la parte inferior
 de la pantalla DISPARANDO MISILES que intercepten los PROYECTILES ENEMIGOS que
 caen desde arriba. El jugador tiene una CANTIDAD LIMITADA DE MUNICIÓN y debe ser
 preciso al CALCULAR LA TRAYECTORIA para interceptar los misiles enemigos antes
 de que lleguen a las ciudades*/

let objProgramaPrincipal;

//imagenes
let enter;
let wasd;
let fondoInstrucciones;
let fondoGanaste;
let fondoPerdiste;
let city1;
let city2;
let city3;
let bomb;
let mis;
let fondoJuego;
let imgInicio;
let imgCreditos;
let proyectil;
let misilHud;

//sonido
let sonidoFondo;

//.resise una funcion que adapta la resolucion 

function preload() {
  city1 = loadImage ('/data/ciudadE1.png');
  city2 = loadImage ('/data/ciudadE2.png');
  city3 = loadImage ('/data/ciudadE3.png');
  bomb = loadImage ('/data/bomba.png');
  mis = loadImage ('/data/misil.png');
  fondoJuego = loadImage ('/data/fondoJuego.png');
  imgInicio = loadImage ('/data/inicio.jpg');
  imgCreditos = loadImage ('/data/creditos.jpg');
  proyectil = loadImage ('/data/proyectil.png');
  misilHud = loadImage ('/data/misilHud.png');
  enter = loadImage ('/data/enter.png');
  wasd = loadImage ('/data/wasd.png');
  fondoInstrucciones = loadImage ('/data/fondoInstrucciones.jpg');
  fondoGanaste = loadImage ('/data/fondoGanaste.jpg');
  fondoPerdiste = loadImage ('/data/fondoPerdiste.jpg');
 
  sonidoFondo = loadSound('data/sonidoFondo.mp3');
}

function setup() {
  createCanvas(640, 480);
  frameRate(14);
  rectMode(CENTER);
  imageMode(CENTER);
  objProgramaPrincipal = new ProgramaPrincipal();
}


function draw() {
  //console.log(this.pantallaActiva);
  console.log(mouseX, mouseY);
  background(0);
  objProgramaPrincipal.dibujar();

  if (keyIsDown(keyCode)) {
    objProgramaPrincipal.teclaPresionada(keyCode);
  }
}

function mouseClicked() {
  objProgramaPrincipal.botonPresionado();
}

function keyReleased() {
  objProgramaPrincipal.teclaSoltada(keyCode);
}
