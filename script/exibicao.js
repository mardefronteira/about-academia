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

// function selecionarIdioma(idioma) {
//   ptBr = idioma === 'pt' ? true : false;
// }
