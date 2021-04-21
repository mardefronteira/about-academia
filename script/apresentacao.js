function apresentacao() {
  cenaAtual = "apresentacao";

  const tituloApresentacao = document.querySelector("#titulo-apresentacao");
  animar("autor-apresentacao", "", "por Martin<br>Grossman");
  animar("titulo-apresentacao", "", idioma("Apresentação", "Presentación"));
  const corpoApresentacao = document.querySelector("#texto-apresentacao");
  corpoApresentacao.innerHTML = idioma(apresentacaoPt, apresentacaoEs);

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
