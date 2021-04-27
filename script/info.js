function info() {
  cenaAtual = "info";

  const info = document.querySelector(`#info`);
  info.scrollTop = 0;

  document.querySelector("#voltar-info").innerHTML = "";
  info.classList.remove("hidden");
  animar("voltar-info", "", idioma("Voltar", "Volver"));

  sugerirScroll();
}
