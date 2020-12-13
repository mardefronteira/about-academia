class VideoPlane {
  constructor (videoToTexturize) {
    this.textura = videoToTexturize;
    this.video = videoToTexturize.elt;
    this.pontoRef = window.innerWidth/2;
  }

  mostrar() {
    texture(this.textura);
    // stroke(255);
    plane(escala, escala);
    push();
      rotateX(radians(180));
      translate(0, -escala-escala/10, 0);
      tint(80);
      plane(escala, escala);
    pop();
  }

  configurarInicio(hora){
    const duracao = this.video.duration;
    // console.log(hora, duracao, map(hora, 0, 23.98, 0, duracao))
    this.video.currentTime = map(hora, 0, 23.98, 0, duracao);
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
    let thisVolume = constrain(map(distanciaX, 0, window.innerWidth, 1, 0), 0,1);
        this.video.volume = thisVolume;
  }
}
