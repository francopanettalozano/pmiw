    //Franco Panetta Lozano
    //Legajo: 94806/7
    // Comision 5
    //https://youtu.be/eteupVvMncY

let triangulos;          // Imagen
let colorOriginalArriba, colorOriginalAbajo;  // Colores originales de los triángulos
let colorArriba, colorAbajo;  // Colores modificados de los triángulos
let col = 0;
function preload() {
  triangulos = loadImage('data/triangulos.png'); // Cargar la imagen
}

function setup() {
  createCanvas(800, 400);  // Tamaño del lienzo
  colorOriginalArriba = color(255);  // Color original para triángulos superiores (blanco)
  colorOriginalAbajo = color(0);  // Color original para triángulos inferiores (negro)
  colorArriba = colorOriginalArriba;
  colorAbajo = colorOriginalAbajo;
}

function draw() {
  background(colorAbajo);  
  triangulo(50, width/50);  //funcion triangulo con parametros para cambiar la cantidad de triangulos y el espacio entre ellos
  
  image(triangulos, 0, 0, 400, 400);
}

// Interactividad con el mouse: Cambiar colores de los triángulos según posición vertical del mouse
function mouseMoved() {
  let mouseYPresente = mouseY / height;
  colorArriba = lerpColor(colorOriginalArriba, color(255, 0, 0), mouseYPresente);  // Interpolación lineal entre blanco y rojo
}

function keyPressed() {
  if (key === 'r') {   // "r" para restaurar los colores
    resetearColores();
  } else if (key === 'i') {  // "i" para cambiar el color de abajo 
    colorAleatorio();  
  }
}
// Función para restablecer los colores originales de los triángulos
function resetearColores() {
  colorArriba = colorOriginalArriba;
  col = 0;
}

function colorAleatorio() {
  return(col = random(0,255)); // devuelve un valor entre "0" y "255"
}
