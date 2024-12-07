class Ciudad {

  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.vida = 2;  //cada ciudad tiene dos vidas - 8 en total
    this.destruida = false;
  }

  dibujar() {
    if (this.vida === 2) {
      image (city1, this.posX, this.posY, 1.51*100, 1*100);
    } else if (this.vida === 1) {
      image (city2, this.posX, this.posY, 1.51*100, 1*100);
    } else if (this.vida === 0) {
      image (city3, this.posX, this.posY, 1.51*100, 1*100);
    }
  }

  haSidoBombardeada() {
    if (this.vida === 2) {
      this.vida = 1
    } else {
      this.haSidoDestruida()
    }
  }

  haSidoDestruida() {
    this.vida = 0;
    this.destruida = true;
  }

  reiniciar() {
    this.vida = 2;
    this.destruida = false;
  }
}
