function introExibicao() {
  // configurar etiqueta do cursor
  const etiqueta = document.querySelector('#etiqueta-seta');
  etiqueta.innerHTML = 'introdução<br/>introducción'
  etiqueta.classList.add('vermelho');
  etiqueta.classList.remove('hidden');

  const aa1 = {
    imagem: document.querySelector('#aa1-intro-imagem'),
    texto: document.querySelector('#aa1-intro-texto'),
  }
  const aa2 = {
    imagem: document.querySelector('#aa2-intro-imagem'),
    texto: document.querySelector('#aa2-intro-texto'),
  }

  // esconder textos da intro
  aa1.texto.classList.add('hidden');
  aa2.texto.classList.add('hidden');

  // mostrar imagem da intro
  aa1.imagem.classList.remove('hidden');
  aa2.imagem.classList.remove('hidden');

  // configurar clique nas imagens: esconder imagem oposta, mostrar texto correspondente
  aa1.imagem.addEventListener('click', () => {
    aa2.imagem.classList.add('hidden');
    aa1.texto.classList.remove('hidden');
  });
  aa2.imagem.addEventListener('click', () => {
    aa1.imagem.classList.add('hidden');
    aa2.texto.classList.remove('hidden');
  });

  // mostrar conteiner principal
  document.querySelector(`#intro-exibicao`).classList.remove('hidden');
}
