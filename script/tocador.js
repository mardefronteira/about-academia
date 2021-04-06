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
  if (["entrevistas1", "entrevistas2"].includes(idVideo)) {
    legenda.classList.remove("hidden");
  } else {
    legenda.classList.add("hidden");
  }

  document.querySelector("#tocador").classList.remove("hidden");

  document.querySelector("#voltar-exibicao").innerHTML = idioma(
    "voltar",
    "volver"
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
