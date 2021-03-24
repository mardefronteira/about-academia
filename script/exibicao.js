let primeiraExibicao = true;

function exibicao() {
  cenaAtual = "exibicao";
  esconderTudo();
  permitirAudio();
  // let scroll = window.innerWidth / 2;

  // scrollHorizontal({ deltaY: scroll });
  // for (let i in videoPlanes) {
  //   videoPlanes[i].ajustarVolume(scroll, i);
  // }

  if (primeiraExibicao) {
    document
      .querySelector("#overlay-exibicao")
      .addEventListener("click", mostrarVideo);

    document.querySelector("#voltar-exibicao").addEventListener("click", () => {
      permitirAudio();
      document.querySelector("#tocador").classList.add("hidden");
    });

    document.querySelector("#br-tocador").addEventListener("click", () => {
      document.querySelector("#br-tocador").classList.add("cinquenta");
      document.querySelector("#es-tocador").classList.remove("cinquenta");
      ptBr = true;
    });

    document.querySelector("#es-tocador").addEventListener("click", () => {
      document.querySelector("#es-tocador").classList.add("cinquenta");
      document.querySelector("#br-tocador").classList.remove("cinquenta");
      ptBr = false;
    });

    primeiraExibicao = false;
  }
}

function mostrarVideo() {
  pausarExibicao();

  const video = document.querySelector("#video-tocador");
  video.src = "sala3d/videos/entrevista_2.mp4";
  video.load();
  // video.play();

  document.querySelector("#tocador").classList.remove("hidden");
  if (ptBr) {
    document.querySelector("#br-tocador").classList.add("cinquenta");
    document.querySelector("#es-tocador").classList.remove("cinquenta");
  } else {
    document.querySelector("#es-tocador").classList.add("cinquenta");
    document.querySelector("#br-tocador").classList.remove("cinquenta");
  }
}

// function selecionarIdioma(idioma) {
//   ptBr = idioma === 'pt' ? true : false;
// }
