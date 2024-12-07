class Boton {

  constructor(posX, posY, ancho, alto, text, funcion) {
    this.posX = posX;
    this.posY = posY;
    this.ancho = ancho;
    this.alto = alto;
    this.texto = text;
    this.funcion = funcion;
    this.hover = false;
    this.hiceClick = false;
  }

  dibujar() {
    push();
    this.botonHover();
    if (this.hover === false) {
      strokeWeight(2);
      fill(76, 155, 140);
    } else if (this.hover) {
      strokeWeight(0);
      fill(33, 206, 173);
    }
    stroke(200);
    rectMode(CORNER);
    rect(this.posX - this.ancho/2, this.posY, this.ancho, this.alto, 20);
    textAlign(CENTER, CENTER);
    if (this.funcion === "jugar") {
      textSize(20);
    }else {
      textSize(14);
    }
    strokeWeight(0);
    fill(255);
    text(this.texto, this.posX, this.posY + this.alto/2);
    pop();
  }

  botonHover() {
    if (mouseX > this.posX - this.ancho/2 && mouseX < this.posX - this.ancho/2 + this.ancho &&
      mouseY > this.posY && mouseY < this.posY + this.alto) {
      this.hover = true;
    }else {
      this.hover = false; 
    }
  }
  
  click() {
    if (mouseX > this.posX - this.ancho/2 && mouseX < this.posX - this.ancho/2 + this.ancho &&
      mouseY > this.posY && mouseY < this.posY + this.alto) {
      this.hiceClick = true;
    }else {
      this.hiceClick = false; 
    }
  }
    /*
    if (this.funcion === "instrucciones") {
      if (mouseX > this.posX - this.ancho/2 && mouseX < this.posX - this.ancho/2 + this.ancho &&
        mouseY > this.posY && mouseY < this.posY + this.alto) {
        this.programaPrincipal.pantallaActiva = 3;
      }
    }
    if (this.funcion === "creditos") {
      if (mouseX > this.posX - this.ancho/2 && mouseX < this.posX - this.ancho/2 + this.ancho &&
        mouseY > this.posY && mouseY < this.posY + this.alto) {
        this.programaPrincipal.pantallaActiva = 2;
      }
    }
    if (this.funcion === "inicio") {
      if (mouseX > this.posX - this.ancho/2 && mouseX < this.posX - this.ancho/2 + this.ancho &&
        mouseY > this.posY && mouseY < this.posY + this.alto) {
        this.programaPrincipal.pantallaActiva = 1;
      }
    }
    if (this.funcion === "jugar") {
      if (mouseX > this.posX - this.ancho/2 && mouseX < this.posX - this.ancho/2 + this.ancho &&
        mouseY > this.posY && mouseY < this.posY + this.alto) {
        console.log("si");
        this.pantallaActiva = 4;
      }
    }
    if (this.funcion === "volver") {
      if (mouseX > this.posX - this.ancho/2 && mouseX < this.posX - this.ancho/2 + this.ancho &&
        mouseY > this.posY && mouseY < this.posY + this.alto) {
        this.programaPrincipal.pantallaActiva = 1;
      }
    }
  }
  */
}
