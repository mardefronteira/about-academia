function exibicao(obra) {
  cenaAtual = 'exibicao';
  esconderTudo();
  permitirAudio();
  let scroll = obra == 1 ? 0 : window.innerWidth;

  scrollHorizontal({deltaY: scroll})
  for (let i in videoPlanes) {
    videoPlanes[i].ajustarVolume(scroll,i);
  };
}
