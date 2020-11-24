class VideoPlane {
  constructor (videoToTexturize) {
    this.width = escalaX;
    this.height = escalaY;
    this.texture = videoToTexturize;
  }

  display() {
    texture(this.texture);
    plane(this.width, this.height);
    push();
    rotateX(radians(90));
    translate(0, escalaY / fracaoY, -escalaY);
    rotateX(radians(180))
    tint(120);
    plane(this.width, this.height);
    pop();
  }
}
