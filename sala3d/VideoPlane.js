class VideoPlane {
  constructor(videoToTexturize) {
    this.textura = videoToTexturize;
    this.video = videoToTexturize.elt;
    this.obra = videoToTexturize.elt.id.includes("1") ? 1 : 2;
    this.pontoRef = window.innerWidth / 2;
    this.vermelho = false;
    this.tempoInicial = 0;
    this.altura = 1;
    // this.altura = (this.obra === 1 ? 0.666666 : 0.5625) * 1.3;
  }

  mostrar() {
    if (this.vermelho) {
      tint(255, 0, 0);
    } else {
      tint(255);
    }

    // stroke(255);
    texture(this.textura);
    plane(escala, escala * this.altura);

    push();
    rotateX(180);
    translate(0, -escala * this.altura, 0);

    if (this.vermelho) {
      tint(255, 0, 0, 65);
    } else {
      tint(65);
    }

    plane(escala, escala * this.altura);
    pop();
  }

  // configurarSrc(videoToTexturize) {
  //   this.textura = videoToTexturize;
  //   this.video = videoToTexturize.elt;
  // }

  configurarInicio(hora) {
    const duracao = this.video.duration;
    this.video.currentTime = map(hora, 0, 23.98, 0, duracao);
  }

  ajustarVolume(i, mute = false) {
    let volume;
    if (mute) {
      volume = 0;
    } else {
      const baseRef = width * 0.59;
      if (i < 3) {
        volume = constrain(map(posCamera.rX, -baseRef, baseRef, 1, 0), 0, 1);
      } else {
        volume = constrain(map(posCamera.rX, -baseRef, baseRef, 0, 0.9), 0, 1);
      }
    }
    this.video.volume = volume;
  }
}
