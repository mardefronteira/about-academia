let ptBr = true;

function idioma(textoBr, textoEs) {
  if (ptBr) {
    return textoBr;
  } else {
    return textoEs;
  }
}

function esconderTudo() {
  document.querySelector('#menu').classList.add('hidden');
  document.querySelector('#intro-menu').classList.add('hidden');
  document.querySelector(`#intro`).classList.add('hidden');
  document.querySelector(`#etiqueta-seta`).classList.add('hidden');
  document.querySelector(`#intro-menu`).classList.add('hidden');
  document.querySelector(`#intro-exibicao`).classList.add('hidden');
  document.querySelector(`#mesas`).classList.add('hidden');
  document.querySelector(`#info`).classList.add('hidden');
  document.querySelector(`#publicacoes`).classList.add('hidden');
  document.querySelector('#overlay-previa').classList.add('hidden');
  document.querySelector(`#apresentacao`).classList.add('hidden');
  document.querySelector(`#defaultCanvas0`).classList.add('hidden');
}
