function triangulo (cant, barra) {
  colorAbajo=col;
  let numLineas = cant;      // Número de líneas (triángulos) a dibujar
  // Calcular el espaciado entre triángulos
  let spacio = barra;
  
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
} 
