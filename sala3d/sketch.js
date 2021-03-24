let angulo;
let rot = 0;
let fracaoY = 4;
let fracaoX = 6;
let telaX;
let telaY;
let escala;
let margem;

let videos = {
  entrevistas1: "entrevista_1.mp4",
  texto1: "texto_1.mp4",
  arquitetura1: "arquitetura_1.mp4",
  arquitetura2: "arquitetura_2.mp4",
  texto2: "texto_2.mp4",
  entrevistas2: "entrevista_2.mp4",
};

let videoPlanes = [];
let numVideos = 6;
let contadorVideos = 0;

let videosCarregados = false;
let permitiuAudio = false;
// let botaoPermitirAudio;
let mensagemCarregando;

// let mensagemConfig;
// let botaoHora, botaoZoom;
let overlayConfig;

// let bebasNeue;
let tamanhoFonte;
let titulosX, titulosY;

// let scrollPosition = 0;
let posCamera = {
  rX: 0,
  rZ: 1100,
  rX: 0,
  rZ: 0,
};
let tela = 0;
let posTela = [
  {
    cX: 0,
    cZ: 1100,
    rX: 0,
    rZ: 0,
  },
  {
    cX: -500,
    cZ: 300,
    rX: -1300,
    rZ: -1000,
  },
  {
    cX: 500,
    cZ: 300,
    rX: 1300,
    rZ: -1000,
  },
];
// cX: 500,
// cZ: 300,
// rX: 1300,
// rZ: -1000,

function preload() {
  // carregar fonte
  // bebasNeue = loadFont("../fontes/BebasNeueBold.otf");

  // carregar e criar vídeos
  let videoPath = "sala3d/videos";
  for (let video in videos) {
    videos[video] = createVideo(`${videoPath}/${videos[video]}`, () => {
      videoCarregou();
    });
    videos[video].preload = "auto";
    videos[video].muted = true;
    videos[video].hide();
  }

  // criar div para o botão de entrada e o parágrafo
  let overlayConfig = document.createElement("div");
  overlayConfig.id = "overlay-exibicao";
  document.body.appendChild(overlayConfig);

  // // criar mensagem de "carregando..."
  mensagemCarregando = document.createElement("p");
  mensagemCarregando.innerHTML = "carregando...";
  overlayConfig.appendChild(mensagemCarregando);
}

/*
a função videoCarregou() é chamada a cada vez que um vídeo é carregado. quanto todos estiverem carregados, sinalizados pelo contador, os planos 3D são criados, e o volume ajustado para a posição inicial da tela.
*/
function videoCarregou() {
  contadorVideos++;
  if (contadorVideos === numVideos) {
    for (let video in videos) {
      videoPlanes.push(new VideoPlane(videos[video]));
    }
    for (let i in videoPlanes) {
      videoPlanes[i].ajustarVolume(0, i);
    }

    videosCarregados = true;
    mensagemCarregando.remove();
  }
}

function setup() {
  angulo = radians(45);
  telaX = window.innerWidth;
  telaY = window.innerHeight;
  escala = telaX / fracaoX;
  margem = telaX / 20;

  // document.body.style = "overflow-y:hidden;"

  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  noStroke();
  background(0);

  // window.addEventListener("wheel", scrollHorizontal);
  //
  // // ajuste de volume a cada vez que há rolagem de página
  // window.addEventListener("scroll", (e) => {
  //   let scroll = this.scrollX;
  //
  //   for (let i in videoPlanes) {
  //     videoPlanes[i].ajustarVolume(scroll, i);
  //   }
  //
  //   scrollPosition = scroll;
  //   scroll > window.innerWidth / 2
  //     ? (scrollPosition = window.innerWidth - scroll)
  //     : (scrollPosition = scroll);
  // });

  // configuração de fonte
  tamanhoFonte = height / 15;
  // textFont(bebasNeue);
  textSize(tamanhoFonte);
  titulosX = tamanhoFonte * 2;
  titulosY = -height / 2 + tamanhoFonte * 3;
}

function draw() {
  if (videosCarregados && permitiuAudio) {
    mostrarSalas();
  }
}

function pausarExibicao() {
  Array.from(document.getElementsByTagName("video")).map((video) => {
    video.pause();
  });
  permitiuAudio = false;
  document.body.classList.add("sem-exibicao");
  document.body.classList.remove("com-exibicao");
  // document.querySelector("#defaultCanvas0").classList.add("hidden");
  console.log("escondeu canvas");
}

function permitirAudio() {
  // document.querySelector("#tocador").classList.add("hidden");
  Array.from(document.getElementsByTagName("video")).map((video) => {
    video.play();
    video.loop = true;
  });
  document.querySelector("#tocador").classList.add("hidden");
  document.querySelector("#video-tocador").pause();

  permitiuAudio = true;
  if (primeiraExibicao) {
    for (let i in videoPlanes) {
      const d = new Date();
      let hora = d.getHours() + d.getMinutes() / 60;
      videoPlanes[i].configurarInicio(hora);
    }
  }

  document.body.classList.add("com-exibicao");
  document.body.classList.remove("sem-exibicao");
  document.querySelector("#defaultCanvas0").classList.remove("hidden");
  console.log("mostrou canvas");
}

// temporário para testes
// botaoPermitirAudio.remove();
// mensagemConfig.remove();
// botaoHora.remove();
// botaoZoom.remove();
// overlayConfig.remove();
// }

function windowResized() {
  resizeCanvas(
    window.innerWidth * 2,
    window.innerHeight - window.innerHeight * 0.05
  );
  telaX = window.innerWidth;
  telaY = window.innerHeight;
  escala = telaX / fracaoX;
}

function mostrarSalas() {
  background(0);
  ambientLight(255);

  // títulos
  // fill(150);
  // noStroke();
  // push();
  // textAlign(RIGHT);
  // text("sobre", -titulosX, titulosY);
  // text("academia i", -titulosX, titulosY + tamanhoFonte);
  // pop();
  // push();
  // textAlign(LEFT);
  // text("sobre", titulosX, titulosY);
  // text("academia ii", titulosX, titulosY + tamanhoFonte);
  // pop();

  // vídeos do lado esquerdo (AA I)
  push();
  rotateY(angulo);
  translate(-telaX / 2 + margem, 0, -telaX / 3);

  videoPlanes[0].mostrar();

  translate(escala, 0);
  videoPlanes[1].mostrar();

  translate(escala, 0);
  videoPlanes[2].mostrar();
  pop();

  // vídeos do lado direito (AA II)
  push();
  rotateY(-angulo);

  translate(margem * 2, 0, -telaX / 3);
  videoPlanes[3].mostrar();

  translate(escala, 0);
  videoPlanes[4].mostrar();

  translate(escala, 0);
  videoPlanes[5].mostrar();
  pop();

  posCamera.cX = posTela[tela].cX;
  posCamera.cZ = posTela[tela].cZ;
  posCamera.rX = posTela[tela].rX;
  posCamera.rZ = posTela[tela].rZ;

  camera(posCamera.cX, 0, posCamera.cZ, posCamera.rX, 0, posCamera.rZ, 0, 1, 0);
}

//
// function scrollHorizontal(e) {
//   let rolagem = e.deltaY;
//   const body = document.body; // pro Safari
//   body.scrollLeft += rolagem;
//   const html = document.documentElement;
//   html.scrollLeft += rolagem;
// }
