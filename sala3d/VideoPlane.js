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
      // noTint();
    }

    // stroke(255, 10);
    texture(this.textura);
    plane(escala, escala);
    push();
    rotateX(radians(180));
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
    let volume;
    if (i < 3) {
      volume = constrain(map(posCamera.rX, -1300, 1300, 1, 0), 0, 1);
    } else {
      volume = constrain(map(posCamera.rX, -1300, 1300, 0, 1), 0, 1);
    }

    this.video.volume = volume;
  }
}
