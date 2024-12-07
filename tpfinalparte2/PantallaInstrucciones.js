class PantallaInstrucciones {

  constructor() {
    this.crearBotones();
  }

  dibujar() {
    push();
    image(fondoInstrucciones, 640/2, 480/2, 640, 480);
    fill(0, 120);
    rect(width/2, height/2, 640, 480);
    for (let i = 0; i< this.objBotones.length; i++) {
      this.objBotones[i].dibujar();
    }
    fill(255);
    image(enter, 296, 324, 65, 65);
    image(wasd, 164, 264, 90, 90);
    textSize(26);
    textAlign(CENTER, CENTER);
    textLeading(40);
    text("Bienvenide a Far Cry", width/2, 56);
    textSize(22);
    rectMode(CORNER);
    textAlign(LEFT, TOP);
    textLeading(60);
    text("Usá                       para mover la mira, cuando estés en posición apretá                  para disparar el misil.", 60, 256, 532, 450);
    textLeading(40);
    text("Tu misión es proteger las cuatro ciudades del bombardeo enemigo. Si dos bombas caen en la misma ciudad perdiste.", 60, 110, 532, 450);
    pop();
  }

  crearBotones() {
    this.objBotones = [];
    this.objBotones[0] = new Boton (width/2, 400, 120, 45, "JUGAR", "jugar");
    this.objBotones[1] = new Boton (45+15, 20, 90, 30, "VOLVER", "volver" );
  }

  botonPresionado() {
    for (let i = 0; i<this.objBotones.length; i++) {
      this.objBotones[i].click();
    }
  }

  cualEsElBotonPresionado() {
    if ( this.objBotones[0].hiceClick) {
      return (this.objBotones[0].funcion);
    } else if (this.objBotones[1].hiceClick) {
      return (this.objBotones[1].funcion);
    }
  }
}
