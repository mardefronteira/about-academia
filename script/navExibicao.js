function configurarNav() {
  document.querySelector("#nav-exibicao").innerHTML = `
  <div id="nav-esquerda-exibicao"></div>
  <div id="nav-cima-exibicao" class="linha">
    <div id="nav-cima-esquerda" class="meio-parent"></div>
    <div id="nav-cima-direita" class="meio-parent"></div>
  </div>
  <div id="nav-direita-exibicao"></div>
  <div id="nav-baixo-exibicao" class="linha">
    <div id="nav-baixo-esquerda" class="meio-parent"></div>
    <div id="nav-baixo-direita" class="meio-parent"></div>
  </div>
  <div id="nav-centro-exibicao" class="linha centralizar">
    <div id="nav-centro-0"></div>
    <div id="nav-centro-1"></div>
    <div id="nav-centro-2"></div>
    <div id="nav-centro-3"></div>
    <div id="nav-centro-4"></div>
    <div id="nav-centro-5"></div>
    <div id="nav-centro-6"></div>
  </div>
  `;

  const esquerda = document.querySelector("#nav-esquerda-exibicao");
  const direita = document.querySelector("#nav-direita-exibicao");
  const cima = document.querySelector("#nav-cima-exibicao");
  const cimaEsq = document.querySelector("#nav-cima-esquerda");
  const cimaDir = document.querySelector("#nav-cima-direita");
  const baixo = document.querySelector("#nav-baixo-exibicao");
  const baixoEsq = document.querySelector("#nav-baixo-esquerda");
  const baixoDir = document.querySelector("#nav-baixo-direita");
  const centro = document.querySelector("#nav-centro-exibicao");
  const navVid0 = document.querySelector("#nav-centro-0");
  const navVid1 = document.querySelector("#nav-centro-1");
  const navVid2 = document.querySelector("#nav-centro-2");
  const navVid3 = document.querySelector("#nav-centro-3");
  const navVid4 = document.querySelector("#nav-centro-4");
  const navVid5 = document.querySelector("#nav-centro-5");
  const navVid6 = document.querySelector("#nav-centro-6");

  Array.from(document.querySelectorAll(".sem-uso")).map((div) => {
    div.classList.remove("sem-uso");
  });

  let relacoes;

  switch (tela) {
    case 0:
      centro.classList.add("altura50");
      centro.classList.remove("altura100");
      navVid0.classList.add("video0-aa0");
      navVid1.classList.add("video1-aa0");
      navVid2.classList.add("video2-aa0");
      navVid3.classList.add("espaco-aa0");
      navVid4.classList.add("video3-aa0");
      navVid5.classList.add("video4-aa0");
      navVid6.classList.add("video5-aa0");

      // navs inativas
      // cima.classList.add("sem-uso");
      // baixo.classList.add("sem-uso");

      // navs esquerdas indicando AAI
      for (let div of [esquerda, baixoEsq, cimaEsq]) {
        console.log(div);
        div.addEventListener("mouseover", () => {
          seta.configurar("seta-vrm-esquerda");
          seta.configurarEtiqueta(
            "About<br/>Academia I",
            "About<br/>Academia I",
            "vrm"
          );
        });
        div.addEventListener("mouseout", () => {
          seta.configurar("normal-vrm");
          seta.esconderEtiqueta();
        });
        div.addEventListener("click", () => {
          tela = 1;
          seta.configurar("normal-vrm");
          seta.esconderEtiqueta();
        });
      }

      // navs direitas indicando AAII
      for (let div of [direita, baixoDir, cimaDir]) {
        div.addEventListener("mouseover", () => {
          seta.configurar("seta-vrm-direita");
          seta.configurarEtiqueta(
            "About<br/>Academia II",
            "About<br/>Academia II",
            "vrm"
          );
        });
        div.addEventListener("mouseout", () => {
          seta.configurar("normal-vrm");
          seta.esconderEtiqueta();
        });
        div.addEventListener("click", () => {
          tela = 2;
          seta.configurar("normal-vrm");
          seta.esconderEtiqueta();
        });
      }
      relacoes = [
        { div: navVid0, video: "entrevistas1" },
        { div: navVid1, video: "texto1" },
        { div: navVid2, video: "arquitetura1" },
        { div: navVid4, video: "arquitetura2" },
        { div: navVid5, video: "texto2" },
        { div: navVid6, video: "entrevistas2" },
      ];

      for (let elmt of relacoes) {
        elmt.div.addEventListener("click", () => {
          mostrarVideo(elmt.video);
        });
        elmt.div.addEventListener("mouseover", () => {
          videoPlanes[relacoes.indexOf(elmt)].vermelho = true;
        });
        elmt.div.addEventListener("mouseout", () => {
          videoPlanes[relacoes.indexOf(elmt)].vermelho = false;
        });
      }
      break;
    case 1:
      centro.classList.add("altura100");
      centro.classList.remove("altura50");
      // navs centro
      navVid0.classList.add("video0-aa1");
      navVid1.classList.add("video1-aa1");
      navVid2.classList.add("video2-aa1");
      navVid3.classList.add("espaco-aa1");
      navVid4.classList.add("sem-uso");
      navVid5.classList.add("sem-uso");
      navVid6.classList.add("sem-uso");

      // navs inativas
      esquerda.classList.add("sem-uso");

      // nav superior para transcrições
      cima.addEventListener("mouseover", () => {
        seta.configurar("seta-vrm-cima");
        seta.configurarEtiqueta("Transcrições", "Transcripciones", "vrm");
      });
      cima.addEventListener("mouseout", () => {
        seta.configurar("normal-vrm");
        seta.esconderEtiqueta();
      });
      cima.addEventListener("click", () => {
        mostrar("publicacoes");
      });

      // nav inferior para voltar
      baixo.addEventListener("mouseover", () => {
        seta.configurar("seta-vrm-baixo");
        seta.configurarEtiqueta("Voltar", "Volver", "vrm");
      });
      baixo.addEventListener("mouseout", () => {
        seta.configurar("normal-vrm");
        seta.esconderEtiqueta();
      });
      baixo.addEventListener("click", () => {
        tela = 0;
        seta.configurar("normal-vrm");
        seta.esconderEtiqueta();
      });

      // nav direita indicando AAII
      direita.addEventListener("mouseover", () => {
        seta.configurar("seta-vrm-direita");
        seta.configurarEtiqueta(
          "About<br/>Academia II",
          "About<br/>Academia II",
          "vrm"
        );
      });
      direita.addEventListener("mouseout", () => {
        seta.configurar("normal-vrm");
        seta.esconderEtiqueta();
      });
      direita.addEventListener("click", () => {
        tela = 2;
        seta.configurar("normal-vrm");
        seta.esconderEtiqueta();
      });

      relacoes = [
        { div: navVid0, video: "entrevistas1" },
        { div: navVid1, video: "texto1" },
        { div: navVid2, video: "arquitetura1" },
      ];

      for (let elmt of relacoes) {
        elmt.div.addEventListener("click", () => {
          mostrarVideo(elmt.video);
        });
        elmt.div.addEventListener("mouseover", () => {
          videoPlanes[relacoes.indexOf(elmt)].vermelho = true;
        });
        elmt.div.addEventListener("mouseout", () => {
          videoPlanes[relacoes.indexOf(elmt)].vermelho = false;
        });
      }
      break;
    case 2:
      centro.classList.add("altura100");
      centro.classList.remove("altura50");

      // navs centro
      navVid0.classList.add("espaco-aa2");
      navVid1.classList.add("video0-aa2");
      navVid2.classList.add("video1-aa2");
      navVid3.classList.add("video2-aa2");
      navVid4.classList.add("sem-uso");
      navVid5.classList.add("sem-uso");
      navVid6.classList.add("sem-uso");

      // navs inativas
      direita.classList.add("sem-uso");

      // nav superior para transcrições
      cima.addEventListener("mouseover", () => {
        seta.configurar("seta-vrm-cima");
        seta.configurarEtiqueta("Transcrições", "Transcripciones", "vrm");
      });
      cima.addEventListener("mouseout", () => {
        seta.configurar("normal-vrm");
        seta.esconderEtiqueta();
      });
      cima.addEventListener("click", () => {
        mostrar("publicacoes");
      });

      // nav inferior para voltar
      baixo.addEventListener("mouseover", () => {
        seta.configurar("seta-vrm-baixo");
        seta.configurarEtiqueta("Voltar", "Volver", "vrm");
      });
      baixo.addEventListener("mouseout", () => {
        seta.configurar("normal-vrm");
        seta.esconderEtiqueta();
      });
      baixo.addEventListener("click", () => {
        tela = 0;
        seta.configurar("normal-vrm");
        seta.esconderEtiqueta();
      });

      // nav esquerda indicando AAI
      esquerda.addEventListener("mouseover", () => {
        seta.configurar("seta-vrm-esquerda");
        seta.configurarEtiqueta(
          "About<br/>Academia I",
          "About<br/>Academia I",
          "vrm"
        );
      });
      esquerda.addEventListener("mouseout", () => {
        seta.configurar("normal-vrm");
        seta.esconderEtiqueta();
      });
      esquerda.addEventListener("click", () => {
        tela = 1;
        seta.configurar("normal-vrm");
        seta.esconderEtiqueta();
      });

      relacoes = [
        { div: navVid1, video: "arquitetura2" },
        { div: navVid2, video: "texto2" },
        { div: navVid3, video: "entrevistas2" },
      ];

      for (let elmt of relacoes) {
        elmt.div.addEventListener("click", () => {
          mostrarVideo(elmt.video);
        });
        elmt.div.addEventListener("mouseover", () => {
          videoPlanes[relacoes.indexOf(elmt) + 3].vermelho = true;
        });
        elmt.div.addEventListener("mouseout", () => {
          videoPlanes[relacoes.indexOf(elmt) + 3].vermelho = false;
        });
      }
      break;
    default:
  }
}

// function introExibicao() {
//   cenaAtual = 'introExibicao';
//
//   // remover todos os event listeners da página
//   let introExibicao = document.querySelector('#intro-exibicao');
//   let novaIntro = introExibicao.cloneNode(true);
//   introExibicao.parentNode.replaceChild(novaIntro, introExibicao);
//
//   // configurar cursor
//   seta.configurar('seta-vrm-direita');
//
//   // configurar etiqueta
//   seta.configurarEtiqueta('introdução', 'introducción', 'vrm');
//
//   // configurar seta do botão do menu
//   document.querySelector('#botao-menu').addEventListener('mouseover', () => {
//     seta.configurar('seta-vrm-esquerda');
//     seta.configurarEtiqueta('menu', 'menú', 'vrm');
//   });
//
//   const aa1 = {
//     imagem: document.querySelector('#aa1-intro-imagem'),
//     divTexto: document.querySelector('#aa1-intro-texto'),
//     texto: document.querySelector('#aa1-texto'),
//   }
//   const aa2 = {
//     imagem: document.querySelector('#aa2-intro-imagem'),
//     divTexto: document.querySelector('#aa2-intro-texto'),
//     texto: document.querySelector('#aa2-texto'),
//   }
//
//   // esconder textos da intro
//   aa1.divTexto.classList.add('hidden');
//   aa2.divTexto.classList.add('hidden');
//
//   // mostrar imagem da intro
//   aa1.imagem.classList.remove('hidden');
//   aa2.imagem.classList.remove('hidden');
//
//   // configurar clique nas imagens: esconder imagem oposta, mostrar texto correspondente
//   aa1.imagem.addEventListener('click', () => {introAA(1)});
//   aa2.imagem.addEventListener('click', () => {introAA(2)});
//
//   aa1.texto.innerHTML = idioma(
//     `About<br/>Academia I reúne em três telas a pesquisa realizada sobre a perspectiva representativa docente do ensino em universidades norte-americanas junto com textos, citações e tipos de arquitetura das mesmas universidades. Embora este trabalho de Muntadas aborde o que é conhecido como o modelo acadêmico do norte global, como um todo, ele abre um espaço que permite um exame crítico da educação universitária.<br/><br/>As entrevistas e imagens deste capítulo do projeto foram realizadas entre março de 2009 e outubro de 2010, principalmente em Cambridge, Massachusetts - tanto em Harvard como no campus do MIT. A natureza fragmentada das imagens encontra seu complemento no livro AA1, assim como estas projeções de vídeo formam uma única unidade no espaço online.`,
//     `About<br/>Academia I reúne en tres pantallas la investigación realizada sobre la perspectiva docente de las universidades estadounidenses junto a textos, citas y a tipos de arquitectura de las mismas universidades. Aunque este trabajo de Muntadas aborda lo que se conoce como el modelo académico del norte global, en su conjunto abre un espacio para un examen crítico de la educación universitaria.<br/><br/>About<br/>Academia I fue producida entre marzo de 2009 y octubre de 2010, fundamentalmente en la Harvard University y en el Massachusetts Institute of Technology (MIT) en Cambridge (MA). Se presentó por primera vez en 2011 en el Carpenter Center for the Visual Arts de la Universidad de Harvard. El carácter fragmentario de las imágenes encuentra su complemento en el libro AA1, así como estas proyecciones de vídeo forman una sola unidad en el espacio online.`
//   );
//   aa2.texto.innerHTML = idioma(
//     `About<br/>Academia II, com um dispositivo semelhante, reúne as vozes dos alunos, que também se justapõem em três telas consecutivas com textos e espaços utilizados pelos próprios alunos: bibliotecas, salas de aula, refeitórios, parques...<br/><br/>About<br/>Academia II foi criado entre maio de 2015 e outubro de 2016 nas cidades norte-americanas de Baltimore, Cambridge e Nova Iorque. Foi apresentado pela primeira vez no Centro de Arte, Design e Cultura Visual da Universidade de Maryland, Condado de Baltimore (UMBC) e no De Appel, em Amsterdã, em 2017.`,
//     `About<br/>Academia II, con un dispositivo como la primera parte, reúne las voces de los estudiantes que también en tres pantallas consecutivas se yuxtaponen con textos y espacios de uso de los mismos estudiantes: bibliotecas, clases, cafeterías, parques…<br/><br/>About<br/>Academia II, fue realizada entre mayo 2015 y octubre de 2016 en las ciudades estadounidenses de Baltimore, Cambridge y New York. Se presentó por primera vez en el Center for the Art, Design and visual Culture de la University of Maryland, Baltimore County (UMBC) y en el De Appel de Amsterdam en 2017.`
//   );
//
//   // mostrar conteiner principal
//   document.querySelector(`#intro-exibicao`).classList.remove('hidden');
// }
//
// function introAA(obra) {
//   const aa1 = {
//     imagem: document.querySelector('#aa1-intro-imagem'),
//     divTexto: document.querySelector('#aa1-intro-texto'),
//     texto: document.querySelector('#aa1-texto'),
//   }
//   const aa2 = {
//     imagem: document.querySelector('#aa2-intro-imagem'),
//     divTexto: document.querySelector('#aa2-intro-texto'),
//     texto: document.querySelector('#aa2-texto'),
//   }
//
//   const estaObra = eval(`aa${obra}`);
//   const outraObra = eval(`aa${obra === 1 ? 2 : 1}`);
//
//   // mostrar texto, esconder imagem oposta
//   estaObra.divTexto.classList.remove('hidden');
//   outraObra.imagem.classList.add('hidden');
//
//   // remover event listeners das imagens
//   aa1.imagem.removeEventListener('click', () => {introAA(1)});
//   aa2.imagem.removeEventListener('click', () => {introAA(2)});
//
//   // configurar seta inicial
//   if (mouse.x < window.innerWidth/2) {
//     seta.configurar('seta-vrm-esquerda');
//     seta.configurarEtiqueta('voltar','volver','vrm');
//   } else {
//     seta.configurar('seta-vrm-direita');
//     seta.configurarEtiqueta('entrar','entrar','vrm');
//   }
//
//   // adicionar novos event listeners
//   const divEsquerda = obra === 1 ? estaObra.imagem : estaObra.divTexto;
//   const divDireita = obra === 1 ? estaObra.divTexto : estaObra.imagem;
//
//   divEsquerda.addEventListener('mouseover', () => {
//     seta.configurar('seta-vrm-esquerda');
//     seta.configurarEtiqueta('voltar','volver','vrm');
//   });
//   divEsquerda.addEventListener('click', introExibicao);
//   divDireita.addEventListener('mouseover', () => {
//     seta.configurar('seta-vrm-direita');
//     seta.configurarEtiqueta('entrar','entrar','vrm');
//   });
//   divDireita.addEventListener('click', () => {exibicao(obra)});
// }
