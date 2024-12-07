//arrayList

class Juego {

  constructor() {
    this.listaDeBombardeosAlternativos = [];
    this.listaDeBombardeosAlternativos[0] = [0, 4, 3, 1, 6, 2, 5, 7];
    this.listaDeBombardeosAlternativos[1] = [2, 6, 0, 7, 1, 4, 3, 5];
    this.listaDeBombardeosAlternativos[2] = [6, 0, 5, 3, 7, 1, 2, 4];
    this.listaDeBombardeosAlternativos[3] = [2, 6, 4, 7, 0, 3, 1, 5];
    this.listaDeBombardeosAlternativos[4] = [4, 0, 5, 2, 6, 3, 7, 1];
    this.listaDeBombardeosAlternativos[5] = [0, 2, 6, 3, 4, 1, 7, 5];
    this.listaAleatoria = int(random(0, 6));

    this.crearCiudades();
    this.crearMira();
    this.municion = 8;
    this.municionRestante = 8;
    this.misilesLanzados = 0;
    this.time = 0;
    this.crearMisiles();
    this.cantidadDeMisilesLanzados();
    this.crearHud();
    this.crearProyectiles();
    this.queProyectilLanza = 0;
    this.hasGanado = false;
    this.hasPerdido = false;
  }

  dibujar() {
    console.log(this.ciudades[0].vida);
    //console.log(this.misilesLanzados);
    //console.log(this.time);
    //console.log("misilesLanzados"+this.misilesLanzados);
    background(255);
    image(fondoJuego, width/2, height/2, 640, 480);
    this.mira.dibujar();
    for (let i = 0; i < this.municion; i++) {
      this.misiles[i].dibujar();
    }
    this.dibujarSuelo();
    for (let i = 0; i < 4; i++) {
      this.ciudades[i].dibujar();
    }
    this.temporizador();
    this.cantidadDeMisilesLanzados();
    //this.hud();
    //this.infoHud();
    for (let i=0; i<8; i++) {
      this.proyectiles[i].dibujar();
    }
    if (this.queProyectilLanza<8 && this.time>2) {
      if (this.time % 1 === 0) {
        this.proyectiles[this.listaDeBombardeosAlternativos[this.listaAleatoria][this.queProyectilLanza]].lanzar = true;
      }
      if (frameCount % 27 === 0) {
        this.queProyectilLanza++;
      }
    }
    this.colisionMisilProyectil();
    this.colisionProyectilCiudad();
    this.hud.dibujar();
    this.ganar();
    this.perder();

    console.log("interceptado0 "+this.proyectiles[0].interceptado);
    console.log("interceptado1 "+this.proyectiles[1].interceptado);
    console.log("interceptado2 "+this.proyectiles[2].interceptado);
    console.log("interceptado3 "+this.proyectiles[3].interceptado);
    console.log("interceptado4 "+this.proyectiles[4].interceptado);
  }

  teclaPresionada(keyCode) {
    this.mira.teclaPresionada(keyCode);
    for (let i = 0; i < this.municion; i++) {
      this.misiles[i].teclaPresionada(keyCode);
    }
    if (keyCode === 82 && !this.hasGanado && !this.hasPerdido) {
      this.reiniciar();
    }
  }

  teclaSoltada(keyCode) {
    if (this.misilesLanzados < this.municion) {
      this.misiles[this.misilesLanzados].teclaSoltada(keyCode);
    }
    this.hud.actualizarHud(keyCode);
  }

  dibujarSuelo() {
    fill(100);
    strokeWeight(2);
    rect(width/2, height-5, width+20, 10);
  }

  crearCiudades() {
    this.ciudades = [];
    for (let i = 0; i < 4; i++) {
      this.ciudades[i] = new Ciudad(i*160+80, height-61);
    }
  }

  crearMira() {
    this.mira = new Mira(width/2, height/2);
  }

  crearMisiles() {
    this.misiles = [];
    for (let i = 0; i < this.municion; i++) {
      this.misiles[i] = new Misil(width/2, height+100);
    }
  }

  crearProyectiles() {
    this.proyectiles = [];
    this.posicionDeSalida = [80, 240, 400, 560];
    this.acomodar = 0;
    for (let i = 0; i < this.municion; i++) {
      //this.calculo = i-this.acomodar;
      if (i>0 && i<2) {
        //console.log("siiiii");
        this.acomodar++;
        //console.log(this.municion);
      }
      //console.log("i="+i);
      //console.log("acomodar="+this.acomodar);
      //console.log("posicionDeSalida="+(i-this.acomodar));
      this.proyectiles[i] = new Proyectil(this.posicionDeSalida[i-this.acomodar], -75);
      if (i>0 && i % 2 === 0) {
        console.log(this.municion);
        this.acomodar++;
      }
    }
  }
  /*
    //iterable con un arreglo de dos dimensiones?
   this.proyectiles[0] = new Proyectil(this.posicionDeSalida[0], 240);
   this.proyectiles[1] = new Proyectil(this.posicionDeSalida[0], 240);
   this.proyectiles[2] = new Proyectil(this.posicionDeSalida[1], 240);
   this.proyectiles[3] = new Proyectil(this.posicionDeSalida[1], 240);
   this.proyectiles[4] = new Proyectil(this.posicionDeSalida[2], 240);
   this.proyectiles[5] = new Proyectil(this.posicionDeSalida[2], 240);
   this.proyectiles[6] = new Proyectil(this.posicionDeSalida[3], 240);
   this.proyectiles[7] = new Proyectil(this.posicionDeSalida[3], 240);*/

  temporizador() {
    if (frameCount % 14 === 0) {
      this.time++;
    }
  }

  cantidadDeMisilesLanzados() {
    for (let i=0; i<this.municion; i++) {
      if (this.misiles[i].misilLanzado === true) {
        this.misilesLanzados = i+1;
      }
    }
  }
  /*if (this.misiles[0].misilLanzado === true) {
   this.misilesLanzados = 1;
   console.log(this.misilesLanzados);
   }
   if (this.misiles[1].misilLanzado === true) {
   this.misilesLanzados = 2;
   }
   if (this.misiles[2].misilLanzado === true) {
   this.misilesLanzados = 3;
   }
   if (this.misiles[3].misilLanzado === true) {
   this.misilesLanzados = 4;
   }
   if (this.misiles[4].misilLanzado === true) {
   this.misilesLanzados = 5;
   }
   if (this.misiles[5].misilLanzado === true) {
   this.misilesLanzados = 6;
   }
   if (this.misiles[6].misilLanzado === true) {
   this.misilesLanzados = 7;
   }
   if (this.misiles[7].misilLanzado === true) {
   this.misilesLanzados = 8;
   }*/

  crearHud() {
    this.hud = new Hud(55, 29, this.municion);
  }

  colisionMisilProyectil() {
    for (let i=0; i<this.municion; i++) {
      for (let j=0; j<this.municion; j++) {
        if (dist(this.misiles[i].posX, this.misiles[i].posY-64, this.proyectiles[j].posX, this.proyectiles[j].posY+7) < 33) {
          this.misiles[i].haColisionado();
          this.proyectiles[j].haSidoInterceptado();
        }
      }
    }
  }

  colisionProyectilCiudad() {
    for (let i=0; i<4; i++) {
      for (let j=0; j<this.municion; j++) {
        if (dist(this.ciudades[i].posX, this.ciudades[i].posY, this.proyectiles[j].posX, this.proyectiles[j].posY) < 33) {
          this.ciudades[i].haSidoBombardeada();
          this.proyectiles[j].haAlcanzadoSuObjetivo();
        }
      }
    }
  }

  ganar() {
    if (this.proyectiles[0].haSidoDestruido && this.proyectiles[1].haSidoDestruido &&
      this.proyectiles[2].haSidoDestruido && this.proyectiles[3].haSidoDestruido &&
      this.proyectiles[4].haSidoDestruido && this.proyectiles[5].haSidoDestruido &&
      this.proyectiles[6].haSidoDestruido && this.proyectiles[7].haSidoDestruido) {
      this.hasGanado = true;
      sonidoFondo.stop();
    } else if (this.time > 24) {
      this.hasGanado = true;
      sonidoFondo.stop();
    }
  }

  perder() {
    if (this.ciudades[0].destruida || this.ciudades[1].destruida ||
      this.ciudades[2].destruida || this.ciudades[3].destruida) {
      this.hasPerdido = true;
      sonidoFondo.stop();
    }
  }

  reiniciar() {
    console.log("riniciar");
    for (let i=0; i<4; i++) {
      this.ciudades[i].reiniciar();
    }
    for (let i = 0; i < this.municion; i++) {
      this.proyectiles[i].reiniciar(-71);
    }
    for (let i = 0; i < this.municion; i++) {
      this.misiles[i].reiniciar(width/2, height+100);
    }
    this.mira.reiniciar(width/2, height/2);
    this.hud.reiniciar(this.municion);
    this.listaAleatoria = int(random(0, 6));
    this.municionRestante = 8;
    this.misilesLanzados = 0;
    this.time = 0;
    this.queProyectilLanza = 0;
    this.hasGanado = false;
    this.hasPerdido = false;
  }


  /*
  infoHud() {
   return(this.municionRestante = this.municion - this.misilesLanzados);
   }
   hud() {
   this.municionRestante = this.municion - this.misilesLanzados;
   stroke(200);
   fill(76, 155, 140);
   rectMode(CENTER,CENTER);
   rect(width/2, height/2, 130, 28);
   textSize(18);
   fill(255);
   strokeWeight(0);
   textAlign(CENTER,CENTER);
   text("MUNICIÓN: " + this.municionRestante, width/2, height/2);
   }*/
}

/*
if (time===10) {
 for (let i = 0; i < 4; i++) {
 this.ciudades[i].vida=1;
 }
 }else if (time===20) {
 for (let i = 0; i < 4; i++) {
 this.ciudades[i].vida=0;
 }
 }
 */
