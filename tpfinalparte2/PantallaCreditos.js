class PantallaCreditos {

  constructor() {
    this.crearBotones();
  }

  dibujar() {
    push();
    background(0);
    image(imgCreditos, 640/2, 480/2-80, 640, 480);
    this.objBotones.dibujar();
    fill(255);
    textSize(22);
    textAlign(CENTER, TOP);
    text("Ara Martino Saravi: 91595/3\n\nFranco Panetta: 94806/7", 640/2, 480/2+80);
    pop();
  }

  crearBotones() {
    this.objBotones = new Boton (45+15, 20, 90, 30, "VOLVER", "volver" );
  }

  botonPresionado() {
    this.objBotones.click();
  }

  cualEsElBotonPresionado() {
    if ( this.objBotones.hiceClick) {
      return (this.objBotones.funcion);
    }
  }
}
