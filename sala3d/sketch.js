let angulo;
let rot = 0;
let fracaoY = 4;
let fracaoX = 6;
let escala;
let margem;

let videosImg = {
  entrevistas1: "entrevistas_1.m4v",
  arquitetura1: "arquitetura_1.mp4",
  arquitetura2: "arquitetura_2.mp4",
  entrevistas2: "entrevistas_2.m4v",
};

let videosTexto = {
  texto1: ["texto_1_pt.m4v", "texto_1_es.m4v"],
  texto2: ["texto_2_pt.m4v", "texto_2_es.m4v"],
};

let videos = {};

let videoPlanes = [];
let numVideos = 6;
let contadorVideos = 0;

let videosCarregados = false;
let permitiuAudio = false;
let mensagemCarregando;

let cortina = true;
let horizontal;
let estavaHorizontal;

let ultimoRX = 0;
let posCamera = {
  cX: 0,
  cZ: 0,
  rX: 0,
  rZ: 0,
};
let ultimaTela = 0;
let tela = 0;
let posTela = [];
let imgRot;
// cX: 500,
// cZ: 300,
// rX: 1300,
// rZ: -1000,

function preload() {
  if (entrou) {
    // carregar e criar vídeos
    let videoPath = "sala3d/videos";
    for (let video in videosImg) {
      videosImg[video] = createVideo(`${videoPath}/${videosImg[video]}`, () => {
        videoCarregou();
      });
      videosImg[video].addClass("hidden");
      videosImg[video].addClass("video-tocador");
      videosImg[video].addClass("video-fundo");
      videosImg[video].id(`video-${video}`);
      videosImg[video].muted = true;
      videosImg[video].autoplay = true;
      videosImg[video].elt.loop = true;
      if (video.includes("entrevista")) {
        videosImg[video].elt.addEventListener("timeupdate", (e) => {
          atualizarTempo(e.target.id);
          // atualizarLegenda(e.target.id);
        });
      } else {
        videosImg[video].elt.addEventListener("timeupdate", (e) => {
          atualizarTempo(e.target.id);
        });
      }

      document
        .querySelector("#conteiner-video-tocador")
        .appendChild(document.querySelector(`#video-${video}`));
    }
  }
  if (!imgRot) {
    imgRot = createImg(
      "img/icones/rotacao.gif",
      "Por favor, mantenha seu dispositivo na posição horizontal."
    );
    imgRot.elt.id = "rotacao-mobile";
    imgRot.hide();
  }
}

function carregarTypes() {
  // carregar e criar vídeos
  let videoPath = "sala3d/videos";
  for (let video in videosTexto) {
    videosTexto[video] = createVideo(
      `${videoPath}/${videosTexto[video][ptBr ? 0 : 1]}`,
      () => {
        videoCarregou();
      }
    );
    videosTexto[video].addClass("hidden");
    videosTexto[video].addClass("video-tocador");
    videosTexto[video].addClass("video-fundo");
    videosTexto[video].id(`video-${video}`);
    videosTexto[video].muted = true;
    videosTexto[video].autoplay = true;
    videosTexto[video].elt.loop = true;
    if (video.includes("entrevista")) {
      videosTexto[video].elt.addEventListener("timeupdate", (e) => {
        atualizarTempo(e.target.id);
        // atualizarLegenda(e.target.id);
      });
    } else {
      videosTexto[video].elt.addEventListener("timeupdate", (e) => {
        atualizarTempo(e.target.id);
      });
    }

    document
      .querySelector("#conteiner-video-tocador")
      .appendChild(document.querySelector(`#video-${video}`));
  }
}

/*
a função videoCarregou() é chamada a cada vez que um vídeo é carregado. quanto todos estiverem carregados, sinalizados pelo contador, os planos 3D são criados, e o volume ajustado para a posição inicial da tela.
*/
function videoCarregou() {
  contadorVideos++;
  console.log(contadorVideos + " videos carregados");
  if (contadorVideos === numVideos) {
    videos = {
      entrevistas1: videosImg["entrevistas1"],
      texto1: videosTexto["texto1"],
      arquitetura1: videosImg["arquitetura1"],
      arquitetura2: videosImg["arquitetura2"],
      texto2: videosTexto["texto2"],
      entrevistas2: videosImg["entrevistas2"],
    };

    for (let i in videos) {
      if (videos[i].elt.id.slice(-2) !== "es") {
        videoPlanes.push(new VideoPlane(videos[i]));
      }
    }
    for (let i in videoPlanes) {
      videoPlanes[i].ajustarVolume(i, true);
      const d = new Date();
      let hora = d.getHours() + d.getMinutes() / 60;
      videoPlanes[i].configurarInicio(hora);
    }

    configurarNav();

    videosCarregados = true;

    processarLegendas();
  }
}

function setup() {
  console.log("começou setup");
  // criar div para o botão de entrada e o parágrafo
  let overlayConfig = document.querySelector("#overlay-exibicao");

  // criar mensagem de "carregando..."
  mensagemCarregando = document.createElement("p");
  mensagemCarregando.id = "mensagem-carregando";
  overlayConfig.appendChild(mensagemCarregando);

  createCanvas(window.innerWidth, window.innerHeight, WEBGL);

  horizontal = width > height ? true : false;
  estavaHorizontal = horizontal;

  imgRot.position(width / 2 - height / 6, height / 2 - height / 6);
  imgRot.elt.width = height / 3;
  imgRot.elt.height = height / 3;

  angleMode(DEGREES);

  angulo = 45;

  posCamera = {
    cX: 0,
    cZ: width * 1.13,
    rX: 0,
    rZ: 0,
  };
  atualizarPos();

  noStroke();
  background(0);
}

function draw() {
  // se os vídeos estiverem carregados, e a pessoa entrar na sala, renderizar 3D

  /*
   * em um dispositivo móvel, checar a orientação da tela.
   * caso esteja vertical, mostrar animação de rotação e pausar exibição
   */
  if (dispMovel && !horizontal) {
    if (cenaAtual === "exibicao") {
      const msg = document.querySelector("#mensagem-carregando");
      msg.classList.add("hidden");
      imgRot.show();
      permitiuAudio ? pausarExibicao() : "";
      estavaHorizontal = false;
    } else if (cenaAtual === "info") {
      document.querySelector("#rotacao-info").classList.remove("hidden");
      estavaHorizontal = false;
    }
    if (menuAberto) {
      imgRot.hide();
    }
  } else {
    if (cenaAtual === "exibicao" && estavaHorizontal !== horizontal) {
      imgRot.hide();
      estavaHorizontal = true;
      permitirAudio();
      const msg = document.querySelector("#mensagem-carregando");
      videosCarregados ? "" : msg.classList.remove("hidden");
    } else if (cenaAtual === "info") {
      document.querySelector("#rotacao-info").classList.add("hidden");
      estavaHorizontal = true;
    }
  }

  if (videosCarregados && permitiuAudio) {
    mostrarSalas();
    // tirar mensagem de carregamento
    if (videosCarregados && cortina) {
      for (let i in videoPlanes) {
        videoPlanes[i].ajustarVolume(i);
      }
      document.querySelector("#mensagem-carregando").classList.add("hidden");
      cortina = false;
    }
  }

  // if (dispMovel && !horizontal) {
  //   imgRot.show();
  //   permitiuAudio ? pausarExibicao() : "";
  //   estavaHorizontal = false;
  // } else {
  //   if (estavaHorizontal !== horizontal) {
  //     imgRot.hide();
  //     estavaHorizontal = true;
  //     permitirAudio();
  //   }
  //
  //   if (videosCarregados && permitiuAudio) {
  //     mostrarSalas();
  //     // tirar mensagem de carregamento
  //     if (videosCarregados && cortina) {
  //       for (let i in videoPlanes) {
  //         videoPlanes[i].ajustarVolume(i);
  //       }
  //       mensagemCarregando.remove();
  //       cortina = false;
  //     }
  //   }
  // }
  // caso uma das entrevistas estiver visível e as legendas ligadas, atualizar legendas.
  for (let i in videos) {
    if (
      !videos[i].elt.classList.contains("hidden") &&
      !document.querySelector("#tocador").classList.contains("hidden") &&
      legendaLigada
    ) {
      atualizarLegenda(videos[i].elt);
    }
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
  horizontal = width > height ? true : false;

  atualizarPos();
  camera(posCamera.cX, 0, posCamera.cZ, posCamera.rX, 0, posCamera.rZ, 0, 1, 0);

  imgRot.position(width / 2 - height / 6, height / 2 - height / 6);
  imgRot.elt.width = height / 3;
  imgRot.elt.height = height / 3;
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
  // fill
  // stroke(150);
  // plane(1, 1000);
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

  // cálculo de movimentação da câmera entre os diferentes enquadramentos
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
