class Mira {

  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
  }

  dibujar() {
    push();
    noFill();
    stroke(0, 255, 0);
    strokeWeight(2);
    ellipse(this.posX, this.posY, 50, 50);
    ellipse(this.posX, this.posY, 20, 20);
    line(this.posX, this.posY-30, this.posX, this.posY-3);
    line(this.posX, this.posY+3, this.posX, this.posY+30);
    line(this.posX-30, this.posY, this.posX-3, this.posY);
    line(this.posX+3, this.posY, this.posX+30, this.posY);
    pop();
  }

  teclaPresionada(keyCode) {
    // codigos de keys a=65, d=68, w=87, s=83
    console.log("apuntar");
    if (keyCode === 65) {
      this.posX-=15;
      console.log("a");
    }
    if (keyCode === 68) {
      this.posX+=15;
    }
    if (keyCode === 83) {
      this.posY+=15;
    }
    if (keyCode === 87) {
      this.posY-=15;
    }
  }
  
  reiniciar(posX, posY) {
    this.posX = posX;
    this.posY = posY;
  }
}
