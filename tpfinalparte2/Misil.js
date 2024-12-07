class Misil {

  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.misilLanzado = false;
    this.lanzar = false;
    this.seHaDestruido = false;
    this.antiColisionFantasma = false;
  }

  dibujar() {
    this.activarAnticolisionFantasma();
    if (! this.seHaDestruido) {
      image(mis, this.posX, this.posY, 1*35, 4.2*35);
      if (this.lanzar) {
        this.movimiento();
      }
      push();
      fill(0);
      //point(this.posX, this.posY-64);
      pop();
    }
  }

  movimiento() {
    if (this.posY>-100) {
      this.posY-=12;
      console.log("movimiento");
    }
  }

  lanzarMisil() {
    this.lanzar = true;
    this.misilLanzado = true;
  }

  teclaSoltada(keyCode) {
    if (keyCode === 13) {
      console.log("lanzar");
      this.lanzarMisil();
    }
  }

  teclaPresionada(keyCode) {
    /*
    // codigos de keys enter = 13
     console.log("yes");
     if (keyCode === 13) {
     console.log("lanzar");
     this.lanzarMisil();
     this.misilesLanzados=+1;
     }*/
    if (this.misilLanzado === false) {
      if (keyCode === 65) {
        this.posX-=15;
        console.log("a");
      }
      if (keyCode === 68) {
        this.posX+=15;
      }
    }
  }

  haColisionado() {
    this.antiColisionFantasma = true;
    this.seHaDestruido = true;
  }

  activarAnticolisionFantasma() {
    if (this.antiColisionFantasma) {
      this.posX = -100;
      this.posY = -100;
    }
  }
  
  reiniciar(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.misilLanzado = false;
    this.lanzar = false;
    this.seHaDestruido = false;
    this.antiColisionFantasma = false;
  }
}
