class Proyectil {

  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.lanzar = false;
    this.haSidoDestruido = false;
    this.antiColisionFantasma = false;
    this.interceptado = false;
    this.haExplotado = false;
  }

  dibujar() {
    push();
    this.activarAnticolisionFantasma();
    if (! this.haSidoDestruido) {
      console.log("lanzarProyectil: " + this.lanzar);
      image(proyectil, this.posX, this.posY, 1*40, 1.87*40);
      this.movimiento();
      noStroke();
      fill(0, 70);
      // ellipse(this.posX, this.posY+16, 33, 33);
    }
    pop();
  }

  movimiento() {
    if (this.lanzar) {
      this.posY+=4;
    }
  }

  haSidoInterceptado() {
    this.antiColisionFantasma = true;
    this.haSidoDestruido = true;
  }
  
  haAlcanzadoSuObjetivo() {
    this.antiColisionFantasma = true;
    this.haExplotado = true;
  }

  activarAnticolisionFantasma() {
    if (this.antiColisionFantasma) {
      this.posY = -100;
    }
  }
  
  reiniciar(posY) {
    this.posY = posY;
    this.lanzar = false;
    this.haSidoDestruido = false;
    this.antiColisionFantasma = false;
    this.interceptado = false;
    this.haExplotado = false;
  }
}
