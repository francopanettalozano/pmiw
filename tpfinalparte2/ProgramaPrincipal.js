class ProgramaPrincipal {

  constructor() {
    this.pantallaInicio = new PantallaInicio();
    this.pantallaCreditos = new PantallaCreditos();
    this.pantallaInstrucciones = new PantallaInstrucciones();
    this.juego = new Juego();
    this.pantallaGanar = new PantallaGanar();
    this.pantallaPerder = new PantallaPerder();
    this.pantallaActiva = 1;
  }

  dibujar() {
    if (this.pantallaActiva === 1) {
      this.pantallaInicio.dibujar();
    } else if (this.pantallaActiva === 2) {
      this.pantallaCreditos.dibujar();
    } else if (this.pantallaActiva === 3) {
      this.pantallaInstrucciones.dibujar();
    } else if (this.pantallaActiva === 4 && !this.juego.hasGanado && !this.juego.hasPerdido) {
      this.juego.dibujar();
    } else if (this.juego.hasGanado) {
      this.pantallaGanar.dibujar();
      this.pantallaActiva = 5;
    } else if (this.juego.hasPerdido) {
      this.pantallaPerder.dibujar();
      this.pantallaActiva = 6;
    }
  }

  botonPresionado() {
    if (this.pantallaActiva === 1) {
      this.pantallaInicio.botonPresionado();
      if (this.pantallaInicio.cualEsElBotonPresionado() === "jugar") {
        this.pantallaActiva = 4;
        sonidoFondo.play();
      } else if (this.pantallaInicio.cualEsElBotonPresionado() === "creditos") {
        this.pantallaActiva = 2;
      } else if (this.pantallaInicio.cualEsElBotonPresionado() === "instrucciones") {
        this.pantallaActiva = 3;
      }
    } else if (this.pantallaActiva === 2) {
      this.pantallaCreditos.botonPresionado();
      if (this.pantallaCreditos.cualEsElBotonPresionado() === "volver") {
        this.pantallaActiva = 1;
      }
    } else if (this.pantallaActiva === 3) {
      this.pantallaInstrucciones.botonPresionado();
      if (this.pantallaInstrucciones.cualEsElBotonPresionado() === "jugar") {
        this.pantallaActiva = 4;
        sonidoFondo.play();
      } else if (this.pantallaInstrucciones.cualEsElBotonPresionado() === "volver") {
        this.pantallaActiva = 1;
      }
    } else if (this.pantallaActiva === 5) {
      this.pantallaGanar.botonPresionado();
      if (this.pantallaGanar.cualEsElBotonPresionado() === "inicio") {
        this.juego.reiniciar();
        this.pantallaActiva = 1;
      }
    } else if (this.pantallaActiva === 6) {
      this.pantallaPerder.botonPresionado();
      if (this.pantallaPerder.cualEsElBotonPresionado() === "inicio") {
        this.juego.reiniciar();
        this.pantallaActiva = 1;
      }
    }
  }

  teclaPresionada(keyCode) {
    this.juego.teclaPresionada(keyCode);
  }

  teclaSoltada(keyCode) {
    this.juego.teclaSoltada(keyCode);
  }
}
