class VideoPlane {
  constructor (videoToTexturize) {
    this.largura = escalaX;
    this.altura = escalaY;
    this.textura = videoToTexturize;
    this.pontoRef = window.innerWidth/2;
  }

  mostrar() {
    texture(this.textura);
    plane(this.largura, this.altura);
    push();
      rotateX(radians(90));
      translate(0, escalaY / fracaoY, -escalaY);
      rotateX(radians(180));
      tint(80);
      plane(this.largura, this.altura);
    pop();
  }

  ajustarVolume(scroll,i) {
    let distanciaX;
    if (i<3) {
      this.pontoRef = 0;
      distanciaX = scroll;
    } else {
      this.pontoRef = width;
      distanciaX = window.innerWidth - scroll;
    }
    let thisVolume = map(distanciaX, 0, window.innerWidth, 1, 0);
    console.log(`[${i}] distância máxima: ${window.innerWidth}, distâcia X: ${distanciaX}, volume: ${thisVolume}`);
    this.textura.elt.volume = thisVolume;
  }
}
