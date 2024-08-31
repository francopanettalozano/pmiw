    //Franco Panetta Lozano
    //Legajo: 94806/7
    // Comision 5
    //https://youtu.be/aeLvSwY-Dfk

let triangulos;          // Imagen
let numLineas = 50;      // Número de líneas (triángulos) a dibujar
let colorOriginalArriba, colorOriginalAbajo;  // Colores originales de los triángulos
let colorArriba, colorAbajo;  // Colores modificados de los triángulos

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
  background(0);  // Limpiar el fondo con negro

  // Guardar el estado actual de la matriz de transformación
  push();
  translate(width / 2, height / 2); // Trasladar la obra la parte derecha del lienzo
  translate(-width / 2, -height / 2); // Trasladar la imagen de la obra a la parte izquierda del lienzo
  
  // Calcular el espaciado entre triángulos
  let spacio = width / numLineas;
  
  // Repetir a través de cada línea (triángulo)
  for (let i = 0; i < numLineas; i++) {
    let x1 = i * spacio;  // Coordenada x izquierda del triángulo
    let x2 = (i + 1) * spacio;  // Coordenada x derecha del triángulo
    
    // Rellenar el triángulo superior con el color modificado
    fill(colorArriba);
    beginShape();
    vertex(x1, 0);  // Vértice superior izquierdo
    vertex(x2, 0);  // Vértice superior derecho
    vertex(map(i, 0, numLineas - 1, 0, width), height);  // Vértice inferior (centrado horizontalmente)
    endShape(CLOSE);
    
    // Rellenar el triángulo inferior con el color modificado
    fill(colorAbajo);
    beginShape();
    vertex(map(i, 0, numLineas - 1, 0, width), height);  // Vértice inferior (centrado horizontalmente)
    vertex(x1, height);  // Vértice inferior izquierdo
    vertex(x2, height);  // Vértice inferior derecho
    endShape(CLOSE);
  }
  
  // Restaurar el estado anterior de la matriz de transformación
  pop();
  
  // Dibujar la imagen encima de los triángulos
  image(triangulos, 0, 0, 400, 400);
}

// Interactividad con el mouse: Cambiar colores de los triángulos según posición vertical del mouse
function mouseMoved() {
  let mouseYPresente = mouseY / height;
  colorArriba = lerpColor(colorOriginalArriba, color(255, 0, 0), mouseYPresente);  // Interpolación lineal entre blanco y rojo
}

// Función para reiniciar el programa al presionar la tecla 'r'
function keyPressed() {
  if (key === 'r') {
    resetearColores();
  }
}

// Función para restablecer los colores originales de los triángulos
function resetearColores() {
  colorArriba = colorOriginalArriba;
}
