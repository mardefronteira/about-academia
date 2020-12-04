class VideoPlane {
  constructor (videoToTexturize) {
    this.largura = escalaX;
    this.altura = escalaY;
    this.textura = videoToTexturize;
    // this.refPoint
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
    let pontoRef = window.innerWidth/6*i;
    let distanciaX = abs(dist(pontoRef,0,scroll,0));
    let thisVolume = map(distanciaX, 0, window.innerWidth/2, 0, 1);
    console.log(pontoRef, scroll, distanciaX, thisVolume);
    this.textura.volume = thisVolume;
  }
}
