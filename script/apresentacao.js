function apresentacao() {
  cenaAtual = "apresentacao";

  const titulo = document.querySelector("#titulo-apresentacao");
  const autor = document.querySelector("#autor-apresentacao");
  const voltar = document.querySelector("#voltar-apresentacao");

  for (let campoTexto in [titulo, autor, voltar]) {
    campoTexto.innerHTML = "";
  }

  animar("titulo-apresentacao", "", idioma("Apresentação", "Presentación"));
  animar("autor-apresentacao", "", "por Martin<br>Grossmann");
  animar("voltar-apresentacao", "", idioma("Voltar", "Volver"));

  const corpo = document.querySelector("#texto-apresentacao");
  corpo.innerHTML = idioma(apresentacaoPt, apresentacaoEs);

  document.querySelector(`#apresentacao`).classList.remove("hidden");
}

const apresentacaoPt = `        <h2 class="titulo-apresentacao">Título apresentação em brasileiro</h2>
        <p class="corpo-apresentacao">
          Texto texto texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto texto texto texto
        </p>
        <p class="corpo-apresentacao">
          Texto texto texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto texto texto texto
        </p>
        <p class="corpo-apresentacao">
          Texto texto texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto texto texto texto
        </p>
        <p class="corpo-apresentacao">
          Texto texto texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto texto texto texto
        </p>
        <p class="corpo-apresentacao">
          Texto texto texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto texto texto texto
        </p>
        <p class="corpo-apresentacao">
          Texto texto texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto texto texto texto
        </p>
        <p class="corpo-apresentacao">
          Texto texto texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto texto texto texto
        </p>
        <p class="corpo-apresentacao">
          Texto texto texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto texto texto texto
        </p>`;
const apresentacaoEs = `        <h2 class="titulo-apresentacao">Título apresentação em espanhol</h2>
        <p class="corpo-apresentacao">
          Texto texto texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto texto texto texto
        </p>
        <p class="corpo-apresentacao">
          Texto texto texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto texto texto texto
        </p>
        <p class="corpo-apresentacao">
          Texto texto texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto texto texto texto
        </p>
        <p class="corpo-apresentacao">
          Texto texto texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto texto texto texto
        </p>
        <p class="corpo-apresentacao">
          Texto texto texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto texto texto texto
        </p>
        <p class="corpo-apresentacao">
          Texto texto texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto texto texto texto
        </p>
        <p class="corpo-apresentacao">
          Texto texto texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto texto texto texto
        </p>
        <p class="corpo-apresentacao">
          Texto texto texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto texto texto texto
        </p>`;
