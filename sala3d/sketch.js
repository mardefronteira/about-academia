let angulo;
let rot = 0;
let fracaoY = 4;
let fracaoX = 6;
let escala;
let margem;

let videos = {
  entrevistas1: "entrevista_1.mp4",
  texto1: "texto_1.mp4",
  arquitetura1: "arquitetura_1.mp4",
  arquitetura2: "arquitetura_2.m4v",
  texto2: "texto_2.m4v",
  entrevistas2: "entrevista_2.m4v",
};

let videoPlanes = [];
let numVideos = 6;
let contadorVideos = 0;

let videosCarregados = false;
let permitiuAudio = false;
let mensagemCarregando;

let ultimoRX = 0;
let posCamera = {
  cX: 0,
  cZ: 1100,
  rX: 0,
  rZ: 0,
};
let ultimaTela = 0;
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
  // carregar e criar vídeos
  let videoPath = "sala3d/videos";
  for (let video in videos) {
    videos[video] = createVideo(`${videoPath}/${videos[video]}`, () => {
      videoCarregou();
    });
    videos[video].addClass("hidden");
    videos[video].addClass("video-tocador");
    videos[video].addClass("video-fundo");
    videos[video].id(`video-${video}`);
    videos[video].preload = "auto";
    videos[video].muted = true;

    document
      .querySelector("#conteiner-video-tocador")
      .appendChild(document.querySelector(`#video-${video}`));
  }

  // criar div para o botão de entrada e o parágrafo
  let overlayConfig = document.querySelector("#overlay-exibicao");

  // criar mensagem de "carregando..."
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
    for (let i in videos) {
      videoPlanes.push(new VideoPlane(videos[i]));
    }
    for (let i in videoPlanes) {
      videoPlanes[i].ajustarVolume(0, i);
      const d = new Date();
      let hora = d.getHours() + d.getMinutes() / 60;
      videoPlanes[i].configurarInicio(hora);
    }

    configurarNav();

    videosCarregados = true;
    mensagemCarregando.remove();
  }
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);

  angleMode(DEGREES);

  angulo = 45;

  atualizarPos();

  noStroke();
  background(0);
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
}

function permitirAudio() {
  Array.from(document.querySelectorAll(".video-tocador")).map((video) => {
    video.play();
    video.loop = true;
  });
  document.querySelector("#tocador").classList.add("hidden");

  permitiuAudio = true;

  document.querySelector("#defaultCanvas0").classList.remove("hidden");
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
  atualizarPos();
  camera(posCamera.cX, 0, posCamera.cZ, posCamera.rX, 0, posCamera.rZ, 0, 1, 0);
}

function atualizarPos() {
  escala = width / fracaoX;
  margem = width / 2.5;

  posTela = [
    {
      cX: 0,
      cZ: width * 1.13,
      rX: 0,
      rZ: 0,
    },
    {
      cX: -width * 0.33,
      cZ: width * 0.65,
      rX: -width * 0.59,
      rZ: width * 0.2,
    },
    {
      cX: width * 0.33,
      cZ: width * 0.65,
      rX: width * 0.59,
      rZ: width * 0.2,
    },
  ];
}

function mostrarSalas() {
  if (ultimaTela !== tela) {
    configurarNav();
    ultimaTela = tela;
  }

  background(0);
  ambientLight(255);

  //plano de referência do centro
  // push();
  // rotateY(90);
  // noFill();
  // stroke(255);
  // plane(1000, 1000);
  // pop();

  // vídeos do lado esquerdo (AA I)
  push();
  rotateY(angulo);

  translate(-margem, 0, 0);
  videoPlanes[2].mostrar();

  translate(-escala, 0, 0);
  videoPlanes[1].mostrar();

  translate(-escala, 0, 0);
  videoPlanes[0].mostrar();

  pop();

  // vídeos do lado direito (AA II)
  push();
  rotateY(-angulo);

  translate(margem, 0, 0);
  videoPlanes[3].mostrar();

  translate(escala, 0, 0);
  videoPlanes[4].mostrar();

  translate(escala, 0, 0);
  videoPlanes[5].mostrar();

  pop();

  if (posCamera.cX > posTela[tela].cX) {
    posCamera.cX - posTela[tela].cX < 33 / 2
      ? (posCamera.cX = posTela[tela].cX)
      : (posCamera.cX -= 33 / 2);
  } else if (posCamera.cX < posTela[tela].cX) {
    posTela[tela].cX - posCamera.cX < 33 / 2
      ? (posCamera.cX = posTela[tela].cX)
      : (posCamera.cX += 33 / 2);
  }

  if (posCamera.cZ > posTela[tela].cZ) {
    posCamera.cZ - posTela[tela].cZ < 65 / 2
      ? (posCamera.cZ = posTela[tela].cZ)
      : (posCamera.cZ -= 65 / 2);
  } else if (posCamera.cZ < posTela[tela].cZ) {
    posTela[tela].cZ - posCamera.cZ < 65 / 2
      ? (posCamera.cZ = posTela[tela].cZ)
      : (posCamera.cZ += 65 / 2);
  }

  if (posCamera.rX > posTela[tela].rX) {
    posCamera.rX - posTela[tela].rX < 59 / 1.5
      ? (posCamera.rX = posTela[tela].rX)
      : (posCamera.rX -= 59 / 1.5);
  } else if (posCamera.rX < posTela[tela].rX) {
    posTela[tela].rX - posCamera.rX < 59 / 1.5
      ? (posCamera.rX = posTela[tela].rX)
      : (posCamera.rX += 59 / 1.5);
  }

  if (posCamera.rZ > posTela[tela].rZ) {
    posCamera.rZ - posTela[tela].rZ < 20 / 2
      ? (posCamera.rZ = posTela[tela].rZ)
      : (posCamera.rZ -= 20 / 2);
  } else if (posCamera.rZ < posTela[tela].rZ) {
    posTela[tela].rZ - posCamera.rZ < 20 / 2
      ? (posCamera.rZ = posTela[tela].rZ)
      : (posCamera.rZ += 20 / 2);
  }

  if (ultimoRX !== posCamera.rX) {
    for (let i in videoPlanes) {
      videoPlanes[i].ajustarVolume(i);
    }
    ultimoRX = posCamera.rX;
  }

  camera(posCamera.cX, 0, posCamera.cZ, posCamera.rX, 0, posCamera.rZ, 0, 1, 0);
}
