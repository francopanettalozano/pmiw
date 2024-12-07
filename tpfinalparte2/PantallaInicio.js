class PantallaInicio {

  constructor() {
    this.crearBotones();
  }

  dibujar() {
    image(imgInicio, 640/2, 480/2, 640, 480);
    for (let i = 0; i< 3; i++) {
      this.objBotones[i].dibujar();
    }
  }

  crearBotones() {
    this.objBotones = [];
    this.objBotones[0] = new Boton (width/2, 300, 120, 45, "JUGAR", "jugar");
    this.objBotones[1] = new Boton (50+15, 420, 100, 30, "CRÉDITOS", "creditos" );
    this.objBotones[2] = new Boton (640-70-15, 420, 140, 30, "INSTRUCCIONES", "instrucciones");
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
    } else if (this.objBotones[2].hiceClick) {
      return (this.objBotones[2].funcion);
    }
  }
}
