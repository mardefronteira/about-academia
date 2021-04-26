let legendaLigada = true;

function mostrarVideo(idVideo) {
  pausarExibicao();
  document.querySelector("#botao-menu").classList.add("hidden");

  Array.from(document.querySelectorAll(".video-tocador")).map((video) => {
    video.classList.add("hidden");
  });

  const video = document.querySelector(`#video-${idVideo}`);
  video.classList.remove("hidden");
  video.play();

  const legenda = document.querySelector("#legenda-tocador");
  const botaoLegenda = document.querySelector("#botao-legenda");
  if (["entrevistas1", "entrevistas2"].includes(idVideo)) {
    botaoLegenda.classList.remove("hidden");
    legendaLigada ? legenda.classList.remove("invisivel-tocador") : "";
  } else {
    botaoLegenda.classList.add("hidden");
    legenda.classList.add("invisivel-tocador");
  }

  document.querySelector("#tocador").classList.remove("hidden");

  document.querySelector("#voltar-exibicao").innerHTML = idioma(
    "Voltar",
    "Volver"
  );
}

function atualizarTempo(id) {
  const tocador = document.querySelector("#tocador");
  if (!tocador.classList.contains("escondido")) {
    const video = document.querySelector(`#${id}`);
    document.querySelector("#tempo-tocador").innerHTML = `${formatarTempo(
      video.currentTime
    )} / ${formatarTempo(video.duration)}`;
  }
}

function formatarTempo(segundos) {
  const minAtual = segundos / 60;
  let tempo = { h: 0, m: 0, s: 0 };
  tempo.m = Math.floor(minAtual);
  if (tempo.m > 60) {
    tempo.h = Math.floor(tempo.m / 60);
    tempo.m = tempo.m % 60;
  }
  tempo.s = Math.floor((minAtual - Math.floor(minAtual)) * 60);

  // adicionar zero à variável caso o número seja menor que 10
  tempo.h < 10 ? (tempo.h = `0${tempo.h}`) : "";
  tempo.m < 10 ? (tempo.m = `0${tempo.m}`) : "";
  tempo.s < 10 ? (tempo.s = `0${tempo.s}`) : "";

  return `${tempo.h}:${tempo.m}:${tempo.s}`;
}

let frameAnterior = {
  saida: 0,
};

function processarLegendas() {
  legenda1Es = JSON.parse(legenda1Es);
  legenda2Es = JSON.parse(legenda2Es);
  legenda1Pt = JSON.parse(legenda1Pt);
  legenda2Pt = JSON.parse(legenda2Pt);
}

function atualizarLegenda(video) {
  const legenda = eval(
    `legenda${video.id.includes("1") ? "1" : "2"}${ptBr ? "Pt" : "Es"}`
  );
  const tempoAtual = video.currentTime;
  let esteFrame = legenda.find(
    (frame) =>
      parseFloat(frame.entrada) < tempoAtual &&
      parseFloat(frame.saida) > tempoAtual
  );
  // console.log(esteFrame);
  esteFrame === undefined
    ? (esteFrame = { saida: tempoAtual, entrada: tempoAtual, texto: "" })
    : "";

  document.querySelector("#legenda-tocador").innerHTML = esteFrame.texto;
  frameAnterior = esteFrame;
}
