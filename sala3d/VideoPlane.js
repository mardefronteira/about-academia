class VideoPlane {
  constructor(videoToTexturize) {
    this.textura = videoToTexturize;
    this.video = videoToTexturize.elt;
    this.pontoRef = window.innerWidth / 2;
    this.vermelho = false;
    this.tempoInicial = 0;
  }

  mostrar() {
    if (this.vermelho) {
      tint(255, 0, 0);
    } else {
      tint(255);
      // noTint();
    }

    // stroke(255);
    texture(this.textura);
    plane(escala, escala);

    push();
    rotateX(180);
    translate(0, -escala, 0);
    tint(30);
    plane(escala, escala);
    pop();
  }

  configurarInicio(hora) {
    const duracao = this.video.duration;
    this.video.currentTime = map(hora, 0, 23.98, 0, duracao);
  }

  ajustarVolume(i) {
    const baseRef = width * 0.59;
    let volume;
    if (i < 3) {
      volume = constrain(map(posCamera.rX, -baseRef, baseRef, 1, 0), 0, 1);
    } else {
      volume = constrain(map(posCamera.rX, -baseRef, baseRef, 0, 1), 0, 1);
    }

    this.video.volume = volume;
  }
}
