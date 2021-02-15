function introExibicao() {
  cenaAtual = 'introExibicao';

  // remover todos os event listeners da página
  let introExibicao = document.querySelector('#intro-exibicao');
  let novaIntro = introExibicao.cloneNode(true);
  introExibicao.parentNode.replaceChild(novaIntro, introExibicao);

  // configurar cursor
  seta.configurar('seta-vrm-direita');

  // configurar etiqueta
  seta.configurarEtiqueta('introdução', 'introducción', 'vrm');

  // configurar seta do botão do menu
  document.querySelector('#botao-menu').addEventListener('mouseover', () => {
    seta.configurar('seta-vrm-esquerda');
    seta.configurarEtiqueta('menu', 'menú', 'vrm');
  });

  const aa1 = {
    imagem: document.querySelector('#aa1-intro-imagem'),
    divTexto: document.querySelector('#aa1-intro-texto'),
    texto: document.querySelector('#aa1-texto'),
  }
  const aa2 = {
    imagem: document.querySelector('#aa2-intro-imagem'),
    divTexto: document.querySelector('#aa2-intro-texto'),
    texto: document.querySelector('#aa2-texto'),
  }

  // esconder textos da intro
  aa1.divTexto.classList.add('hidden');
  aa2.divTexto.classList.add('hidden');

  // mostrar imagem da intro
  aa1.imagem.classList.remove('hidden');
  aa2.imagem.classList.remove('hidden');

  // configurar clique nas imagens: esconder imagem oposta, mostrar texto correspondente
  aa1.imagem.addEventListener('click', () => {introAA(1)});
  aa2.imagem.addEventListener('click', () => {introAA(2)});

  aa1.texto.innerHTML = idioma(
    `About Academia I reúne em três telas a pesquisa realizada sobre a perspectiva representativa docente do ensino em universidades norte-americanas junto com textos, citações e tipos de arquitetura das mesmas universidades. Embora este trabalho de Muntadas aborde o que é conhecido como o modelo acadêmico do norte global, como um todo, ele abre um espaço que permite um exame crítico da educação universitária.<br/><br/>As entrevistas e imagens deste capítulo do projeto foram realizadas entre março de 2009 e outubro de 2010, principalmente em Cambridge, Massachusetts - tanto em Harvard como no campus do MIT. A natureza fragmentada das imagens encontra seu complemento no livro AA1, assim como estas projeções de vídeo formam uma única unidade no espaço online.`,
    `About Academia I reúne en tres pantallas la investigación realizada sobre la perspectiva docente de las universidades estadounidenses junto a textos, citas y a tipos de arquitectura de las mismas universidades. Aunque este trabajo de Muntadas aborda lo que se conoce como el modelo académico del norte global, en su conjunto abre un espacio para un examen crítico de la educación universitaria.<br/><br/>About Academia I fue producida entre marzo de 2009 y octubre de 2010, fundamentalmente en la Harvard University y en el Massachusetts Institute of Technology (MIT) en Cambridge (MA). Se presentó por primera vez en 2011 en el Carpenter Center for the Visual Arts de la Universidad de Harvard. El carácter fragmentario de las imágenes encuentra su complemento en el libro AA1, así como estas proyecciones de vídeo forman una sola unidad en el espacio online.`
  );
  aa2.texto.innerHTML = idioma(
    `About Academia II, com um dispositivo semelhante, reúne as vozes dos alunos, que também se justapõem em três telas consecutivas com textos e espaços utilizados pelos próprios alunos: bibliotecas, salas de aula, refeitórios, parques...<br/><br/>About Academia II foi criado entre maio de 2015 e outubro de 2016 nas cidades norte-americanas de Baltimore, Cambridge e Nova Iorque. Foi apresentado pela primeira vez no Centro de Arte, Design e Cultura Visual da Universidade de Maryland, Condado de Baltimore (UMBC) e no De Appel, em Amsterdã, em 2017.`,
    `About Academia II, con un dispositivo como la primera parte, reúne las voces de los estudiantes que también en tres pantallas consecutivas se yuxtaponen con textos y espacios de uso de los mismos estudiantes: bibliotecas, clases, cafeterías, parques…<br/><br/>About Academia II, fue realizada entre mayo 2015 y octubre de 2016 en las ciudades estadounidenses de Baltimore, Cambridge y New York. Se presentó por primera vez en el Center for the Art, Design and visual Culture de la University of Maryland, Baltimore County (UMBC) y en el De Appel de Amsterdam en 2017.`
  );

  // mostrar conteiner principal
  document.querySelector(`#intro-exibicao`).classList.remove('hidden');
}

function introAA(obra) {
  const aa1 = {
    imagem: document.querySelector('#aa1-intro-imagem'),
    divTexto: document.querySelector('#aa1-intro-texto'),
    texto: document.querySelector('#aa1-texto'),
  }
  const aa2 = {
    imagem: document.querySelector('#aa2-intro-imagem'),
    divTexto: document.querySelector('#aa2-intro-texto'),
    texto: document.querySelector('#aa2-texto'),
  }

  const estaObra = eval(`aa${obra}`);
  const outraObra = eval(`aa${obra === 1 ? 2 : 1}`);

  // mostrar texto, esconder imagem oposta
  estaObra.divTexto.classList.remove('hidden');
  outraObra.imagem.classList.add('hidden');

  // remover event listeners das imagens
  aa1.imagem.removeEventListener('click', () => {introAA(1)});
  aa2.imagem.removeEventListener('click', () => {introAA(2)});

  // configurar seta inicial
  if (mouse.x < window.innerWidth/2) {
    seta.configurar('seta-vrm-esquerda');
    seta.configurarEtiqueta('voltar','volver','vrm');
  } else {
    seta.configurar('seta-vrm-direita');
    seta.configurarEtiqueta('entrar','entrar','vrm');
  }

  // adicionar novos event listeners
  const divEsquerda = obra === 1 ? estaObra.imagem : estaObra.divTexto;
  const divDireita = obra === 1 ? estaObra.divTexto : estaObra.imagem;

  divEsquerda.addEventListener('mouseover', () => {
    seta.configurar('seta-vrm-esquerda');
    seta.configurarEtiqueta('voltar','volver','vrm');
  });
  divEsquerda.addEventListener('click', introExibicao);
  divDireita.addEventListener('mouseover', () => {
    seta.configurar('seta-vrm-direita');
    seta.configurarEtiqueta('entrar','entrar','vrm');
  });
  divDireita.addEventListener('click', exibicao);
}
