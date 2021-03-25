let primeiraExibicao = true;

function exibicao() {
  cenaAtual = "exibicao";
  esconderTudo();
  permitirAudio();

  if (primeiraExibicao) {
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
  video.src = "sala3d/videos/entrevista_2.m4v";
  video.load();
  video.play();

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
