let primeiraExibicao = true;

function exibicao() {
  cenaAtual = "exibicao";
  esconderTudo();
  permitirAudio();

  if (primeiraExibicao) {
    document.querySelector("#voltar-exibicao").addEventListener("click", () => {
      permitirAudio();
      document.querySelector("#tocador").classList.add("hidden");
      document.querySelector("#botao-menu").classList.remove("hidden");
    });

    primeiraExibicao = false;
  }
}

// function selecionarIdioma(idioma) {
//   ptBr = idioma === 'pt' ? true : false;
// }
