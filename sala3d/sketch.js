let angulo;
let rot = 0;
let fracaoY = 4;
let fracaoX = 6;
let telaX;
let telaY;
let escala;
let margem;

let comScroll = true;
let comHora = true;

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

let mensagemConfig;
let botaoHora, botaoZoom;

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

  // criar botão para testar tempo
  mensagemConfig = document.createElement('p');
  mensagemConfig.id = "mensagemConfig";
  mensagemConfig.innerHTML = "Configurações:";
  mensagemConfig.classList.add('hidden');
  divBotao.appendChild(mensagemConfig);

  // criar botão para testar tempo
  botaoHora = document.createElement('button');
  botaoHora.id = "botaoHora";
  botaoHora.innerHTML = "começar vídeos a partir da hora local";
  botaoHora.addEventListener('click', lidarHora);
  botaoHora.classList.add('hidden');
  botaoHora.classList.add('config');
  divBotao.appendChild(botaoHora);

  // criar botão para testar zoom
  botaoZoom = document.createElement('button');
  botaoZoom.id = "botaoZoom";
  botaoZoom.innerHTML = "zoom out ao rolar a página";
  botaoZoom.addEventListener('click', lidarZoom);
  botaoZoom.classList.add('hidden');
  botaoZoom.classList.add('config');
  divBotao.appendChild(botaoZoom);

  // criar botão para iniciar os áudios
  botaoPermitirAudio = document.createElement('button');
  botaoPermitirAudio.id = "botaoPermitirAudio";
  botaoPermitirAudio.innerHTML = "entrar na sala";
  botaoPermitirAudio.addEventListener('click', permitirAudio);
  botaoPermitirAudio.classList.add('hidden');
  divBotao.appendChild(botaoPermitirAudio);

  // criar mensagem de "carregando..."
  mensagemCarregando = document.createElement('p');
  mensagemCarregando.innerHTML = "carregando...";
  divBotao.appendChild(mensagemCarregando);
}

function lidarZoom () {
  comScroll = !comScroll;
  let mensagem = comScroll ? 'zoom out ao rolar a página' : '<s>zoom out ao rolar a página</s>';
  botaoZoom.innerHTML = mensagem;
}

function lidarHora () {
  comHora = !comHora;
  let mensagem = comHora ? 'começar vídeos a partir da hora local' : '<s>começar vídeos a partir da hora local</s>';
  botaoHora.innerHTML = mensagem;
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
  escala = telaX / fracaoX;
  margem = telaX/20;

  document.body.style = "overflow-y:hidden;"

  createCanvas(window.innerWidth * 2, window.innerHeight, WEBGL);
  noStroke();
  background(0);


  window.addEventListener('wheel', scrollHorizontal);

  // ajuste de volume a cada vez que há rolagem de página
  window.addEventListener("scroll", (event) => {
      let scroll = this.scrollX;

      for (let i in videoPlanes) {
        videoPlanes[i].ajustarVolume(scroll,i);
      };

      scrollPosition = scroll;
      scroll > window.innerWidth/2 ? scrollPosition = window.innerWidth - scroll : scrollPosition = scroll;
  });

  // scroll horizontal
  document.addEventListener('wheel', (e) => {
    document.body.scrollLeft += e.deltaY;
  });

  // configuração de fonte
  tamanhoFonte = height/15;
  textFont(bebasNeue);
  textSize(tamanhoFonte);
  titulosX = tamanhoFonte*2;
  titulosY = -height/2 + tamanhoFonte*3;
}

function draw() {
  if (videosCarregados) {
    botaoPermitirAudio.classList.remove('hidden');

    // temporário para testes
    mensagemConfig.classList.remove('hidden');
    botaoHora.classList.remove('hidden');
    botaoZoom.classList.remove('hidden');
  }
  if (permitiuAudio) {
      mostrarSalas();
  }
}

function permitirAudio() {
  Array.from(document.getElementsByTagName('video')).map( video => {
    video.play();
    video.loop = true;
  });
  permitiuAudio = true;
  botaoPermitirAudio.remove();

  for (let i in videoPlanes) {
    if (comHora) {
      const d = new Date();
      let hora = d.getHours() + d.getMinutes() / 60;
      videoPlanes[i].configurarInicio(hora);
    }
  }

  // temporário para testes
  mensagemConfig.remove();
  botaoHora.remove();
  botaoZoom.remove();
}

function windowResized(){
  resizeCanvas(window.innerWidth * 2, window.innerHeight - window.innerHeight*0.05);
  telaX = window.innerWidth;
  telaY = window.innerHeight;
  escala = telaX / fracaoX;
}

function mostrarSalas() {

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
    if (comScroll) {
      translate(-telaX/2+margem+scrollPosition/2, 0, -telaX/3-scrollPosition/2); // com scroll
    } else {
      translate(-telaX/2+margem, 0, -telaX/3); // sem scroll
    }

    videoPlanes[0].mostrar();

    translate(escala, 0);
    videoPlanes[1].mostrar();

    translate(escala, 0);
    videoPlanes[2].mostrar();
  pop();

  // vídeos do lado direito (AA II)
  push();
    rotateY(-angulo);
    if (comScroll) {
      translate(margem*2-scrollPosition/2, 0, -telaX/3-scrollPosition/2); // com scroll
    } else {
      translate(margem*2, 0, -telaX/3); // sem scroll
    }
    videoPlanes[3].mostrar();

    translate(escala, 0);
    videoPlanes[4].mostrar();

    translate(escala, 0);
    videoPlanes[5].mostrar();
  pop();

}

function scrollHorizontal (e) {
  let rolagem = e.deltaY * 3;
  const body = document.body; // pro Safari
  body.scrollLeft += rolagem;
  const html = document.documentElement;
  html.scrollLeft += rolagem;
}
