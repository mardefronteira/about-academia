let angulo;
let rot = 0;
let fracaoY = 4;
let fracaoX = 6;
let telaX;
let telaY;
let escalaX;
let escalaY;
let margem;

let videos = {
  entrevistas1: "entrevista_1.mp4",
  texto1: "texto_1.mp4",
  arquitetura1: "arquitetura_1.mp4",
  entrevistas2 : "entrevista_2.mp4",
  texto2: "texto_2.mp4",
  arquitetura2: "arquitetura_2.mp4",
}

let videoPlanes = [];
let numVideos = 6;
let contadorVideos = 0;

let videosCarregados = false;
let permitiuAudio = false;
let botaoPermitirAudio;
let mensagemCarregando;

function preload() {
  let videoPath = "./sala3d/videos"
  for (let video in videos) {
    videos[video] = createVideo(`${videoPath}/${videos[video]}`, () => {videoCarregou()});
    videos[video].autoLoad = true;
    videos[video].muted = true;
    videos[video].hide();
  }

  botaoPermitirAudio = createButton("clique aqui para entrar");
  botaoPermitirAudio.mousePressed(permitirAudio);
  botaoPermitirAudio.hide();

  mensagemCarregando = createP("carregando...")
}

function videoCarregou() {
  contadorVideos++;
  console.log(contadorVideos);
  if ( contadorVideos === numVideos ){
    console.log('tá entrando aqui sim')
    for (let video in videos) {
      videoPlanes.push(new VideoPlane(videos[video]));
    }
    console.log(videoPlanes);

    videosCarregados = true;
    mensagemCarregando.remove();
  }
}

function setup() {
  angulo = radians(25);
  telaX = window.innerWidth;
  telaY = window.innerHeight;
  escalaX = telaX / fracaoX;
  escalaY = telaY / fracaoY;
  margem = telaX/20;

  createCanvas(window.innerWidth * 2, window.innerHeight, WEBGL);

  noStroke();
}

function draw() {
  console.log(mouseX, mouseY)

  if (videosCarregados) {
    botaoPermitirAudio.show();
  }
  if (permitiuAudio) {
      mostrarSalas();
  }
}

function permitirAudio() {
  Array.from(document.getElementsByTagName('video')).map( video => video.play());
  permitiuAudio = true;
  botaoPermitirAudio.remove();
}

function mostrarSalas() {
  resizeCanvas(window.innerWidth * 2, window.innerHeight);
  telaX = window.innerWidth;
  telaY = window.innerHeight;
  escalaX = telaX / fracaoX;
  escalaY = telaY / fracaoY;

  background(0);
  ambientLight(255, 255, 255);
  // ambientLight(100,100,100);
  // pointLight(255, 255, 255, mouseX- width / 2, mouseY- height / 2, -50);

  push();
    rotateY(angulo);
    translate(-telaX/2+margem, -50, 0);
    videoPlanes[0].display();

    translate(escalaX, 0);
    videoPlanes[1].display();

    translate(escalaX, 0);
    videoPlanes[2].display();
  pop();

  push();
    rotateY(-angulo);
    translate(margem*2, -50, 0);
    videoPlanes[3].display();

    translate(escalaX, 0);
    videoPlanes[4].display();

    translate(escalaX, 0);
    videoPlanes[5].display();
  pop();

}
