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

    document.querySelector("#botao-legenda").addEventListener("click", () => {
      const legenda = document.querySelector("#legenda-tocador");
      const botaoLegenda = document.querySelector("#botao-legenda");

      legendaLigada = !legendaLigada;

      if (legendaLigada) {
        legenda.classList.remove("invisivel-tocador");
        botaoLegenda.classList.add("cinquenta");
      } else {
        legenda.classList.add("invisivel-tocador");
        botaoLegenda.classList.remove("cinquenta");
      }
    });

    trocarIdioma();

    primeiraExibicao = false;
  }
}
