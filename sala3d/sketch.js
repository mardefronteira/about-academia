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

let thisCanvas;
let bebasNeue;
let tamanhoFonte;
let titulosX, titulosY;

let scrollPosition = 0;

function preload() {
  // carregar fonte
  bebasNeue = loadFont('../fontes/BebasNeueBold.otf');

  // carregar e criar vídeos
  let videoPath = "./sala3d/videos"
  for (let video in videos) {
    videos[video] = createVideo(`${videoPath}/${videos[video]}`, () => {videoCarregou()});
    // videos[video].autoLoad = true;
    videos[video].muted = true;
    videos[video].hide();
  }

  // criar div para o botão de entrada e o parágrafo
  let divBotao = document.createElement('div');
  divBotao.id = "overlay";
  document.body.appendChild(divBotao);

  // criar botão para iniciar os áudios
  botaoPermitirAudio = document.createElement('button');
  botaoPermitirAudio.id = "botaoPermitirAudio";
  botaoPermitirAudio.innerHTML = "clique aqui para entrar";
  botaoPermitirAudio.addEventListener('click', permitirAudio);
  botaoPermitirAudio.classList.add('hidden');
  divBotao.appendChild(botaoPermitirAudio);

  // criar mensagem de "carregando..."
  mensagemCarregando = document.createElement('p');
  mensagemCarregando.innerHTML = "carregando...";
  divBotao.appendChild(mensagemCarregando);
}

/*
a função videoCarregou() é chamada a cada vez que um vídeo é carregado. quanto todos estiverem carregados, sinalizados pelo contador, os planos 3D são criados, e o volume ajustado para a posição inicial da tela.
*/
function videoCarregou() {
  contadorVideos++;
  if ( contadorVideos === numVideos ){
    for (let video in videos) {
      videoPlanes.push(new VideoPlane(videos[video]));
    }
    for (let i in videoPlanes) {
      videoPlanes[i].ajustarVolume(0,i);
    };

    videosCarregados = true;
    mensagemCarregando.remove();
  }
}

function setup() {
  angulo = radians(45);
  telaX = window.innerWidth;
  telaY = window.innerHeight;
  escalaX = telaX / fracaoX;
  escalaY = telaY / fracaoY;
  margem = telaX/20;

  document.body.style = "overflow-y:hidden;"

  createCanvas(window.innerWidth * 2, window.innerHeight, WEBGL);

  noStroke();
  background(0);

  // ajuste de volume a cada vez que há rolagem de página
  window.addEventListener("scroll", (event) => {
      let scroll = this.scrollX;

      for (let i in videoPlanes) {
        videoPlanes[i].ajustarVolume(scroll,i);
      };

      // scrollPosition = abs(window.innerWidth/2 - scroll);
      scrollPosition = scroll;
      scroll > window.innerWidth/2 ? scrollPosition = window.innerWidth - scroll : scrollPosition = scroll;
      // console.log(scrollPosition);
  });

  // configuração de fonte
  tamanhoFonte = height/15;
  textFont(bebasNeue);
  textSize(tamanhoFonte);
  titulosX = tamanhoFonte*2;
  titulosY = -height/2 + tamanhoFonte*3;
}

function draw() {
  // console.log(mouseX, mouseY)
  if (videosCarregados) {
    botaoPermitirAudio.classList.remove('hidden');
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
  resizeCanvas(window.innerWidth * 2, window.innerHeight - window.innerHeight*0.05);
  telaX = window.innerWidth;
  telaY = window.innerHeight;
  escalaX = telaX / fracaoX;
  escalaY = escalaX * 0.7;

  background(0);
  ambientLight(255);
  // ambientLight(100,100,100);
  // pointLight(255, 255, 255, mouseX- width / 2, mouseY- height / 2, -50);

  // títulos
  fill(150);
  noStroke();
  push();
    textAlign(RIGHT);
    text('sobre', -titulosX, titulosY);
    text('academia i', -titulosX, titulosY+tamanhoFonte);
  pop();
  push();
    textAlign(LEFT);
    text('sobre', titulosX, titulosY);
    text('academia ii', titulosX, titulosY+tamanhoFonte);
  pop();

  // vídeos do lado esquerdo (AA I)
  push();
    rotateY(angulo);
    translate(-telaX/2+margem+scrollPosition/2, 0, -telaX/3-scrollPosition/2); // com scroll
    // translate(-telaX/2+margem, 0, -telaX/3); // sem scroll
    videoPlanes[0].mostrar();

    translate(escalaX, 0);
    videoPlanes[1].mostrar();

    translate(escalaX, 0);
    videoPlanes[2].mostrar();
  pop();

  // vídeos do lado direito (AA II)
  push();
    rotateY(-angulo);
    translate(margem*2-scrollPosition/2, 0, -telaX/3-scrollPosition/2); // com scroll
    // translate(margem*2, 0, -telaX/3); // sem scroll
    videoPlanes[3].mostrar();

    translate(escalaX, 0);
    videoPlanes[4].mostrar();

    translate(escalaX, 0);
    videoPlanes[5].mostrar();
  pop();

}
