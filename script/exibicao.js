function exibicao() {
  cenaAtual = "exibicao";
  esconderTudo();
  permitirAudio();
  let scroll = window.innerWidth / 2;

  scrollHorizontal({ deltaY: scroll });
  for (let i in videoPlanes) {
    videoPlanes[i].ajustarVolume(scroll, i);
  }
}

// function exibicao(obra) {
//   cenaAtual = 'exibicao';
//   esconderTudo();
//   permitirAudio();
//   let scroll = obra == 1 ? 0 : window.innerWidth;
//
//   scrollHorizontal({deltaY: scroll})
//   for (let i in videoPlanes) {
//     videoPlanes[i].ajustarVolume(scroll,i);
//   };
// }
