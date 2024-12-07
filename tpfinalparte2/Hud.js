class Hud {

  constructor(posX, posY, text) {
    this.posX = posX;
    this.posY = posY;
    this.text = text;
  }

  dibujar() {
    push();
    stroke(200);
    fill(0,200);
    rectMode(CENTER, CENTER);
    rect(this.posX, this.posY, 80, 36, 30);
    textSize(18);
    fill(255,200);
    strokeWeight(0,200);
    textAlign(CENTER, CENTER);
    text(" =  "+this.text, this.posX+5, this.posY);
    console.log("text"+this.text);
    tint(255, 200);
    image(misilHud, this.posX-20, this.posY, 18, 1.6*18, 200);
    pop();
  }

  actualizarHud(keyCode) {
    if (keyCode === 13 && this.text>0) {
      this.text--;
    }
  }
  
  reiniciar(text) {
    this.text = text;
  }
}
