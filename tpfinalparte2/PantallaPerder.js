class PantallaPerder {

  constructor() {
    this.crearBotones();
  }

  dibujar() {
    image(fondoPerdiste, 640/2, 480/2, 640, 480);
    fill(0, 120);
    noStroke();
    rect(width/2, height/2, 640, 480);
    this.objBotones.dibujar();
    push();
    textAlign(CENTER, CENTER);
    textSize(50);
    fill(255);
    text("PERDISTE", width/2, height/2);
    pop();
  }

  crearBotones() {
    this.objBotones = new Boton (width/2, 400, 90, 40, "INICIO", "inicio" );
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
