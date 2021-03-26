function mostrarVideo(idVideo) {
  pausarExibicao();
  document.querySelector("#botao-menu").classList.add("hidden");

  Array.from(document.querySelectorAll(".video-tocador")).map((video) => {
    video.classList.add("hidden");
  });

  const video = document.querySelector(`#video-${idVideo}`);
  video.classList.remove("hidden");
  video.play();

  document.querySelector("#tocador").classList.remove("hidden");
  if (ptBr) {
    document.querySelector("#br-tocador").classList.add("cinquenta");
    document.querySelector("#es-tocador").classList.remove("cinquenta");
  } else {
    document.querySelector("#es-tocador").classList.add("cinquenta");
    document.querySelector("#br-tocador").classList.remove("cinquenta");
  }

  document.querySelector("#voltar-exibicao").innerHTML = idioma(
    "voltar",
    "volver"
  );
}
