let angulo;
let rot = 0;
let fracaoY = 4;
let fracaoX = 6;
let telaX;
let telaY;
let escalaX;
let escalaY;


function setup() {
  createCanvas(window.innerWidth * 2, window.innerHeight, WEBGL);
  angulo = radians(25);
}

function draw() {
  telaX = window.innerWidth;
  telaY = window.innerHeight;
  resizeCanvas(window.innerWidth * 2, window.innerHeight);

  escalaX = telaX / fracaoX;
  escalaY = telaY / fracaoY;

  background(0);
  strokeWeight(2);
  stroke(0, 0, 0);
  fill(255, 255, 255);

  rotateY(angulo);

  // video 1
  translate(-telaX/2+20, -50, 0);
  plane(escalaX, escalaY);

  translate(escalaX, 0);
  plane(escalaX, escalaY);

  translate(escalaX, 0);
  plane(escalaX, escalaY);


  rotateX(radians(90));
  translate(-escalaX * 2, escalaY / 4, -escalaY - 1);
  plane(escalaX, escalaY);

  translate(escalaX, 0);
  plane(escalaX, escalaY);

  translate(escalaX, 0);
  plane(escalaX, escalaY);


}
