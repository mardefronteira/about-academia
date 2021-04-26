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
      cima.classList.add("altura-expandida");
      baixo.classList.add("altura-expandida");
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
        div.addEventListener("mouseover", () => {
          seta.configurar("seta-vrm-esquerda");
          seta.configurarEtiqueta(
            "About<br/>Academia I",
            "About<br/>Academia I"
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
            "About<br/>Academia II"
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
        { div: navVid1, video: `texto1` },
        { div: navVid2, video: "arquitetura1" },
        { div: navVid4, video: "arquitetura2" },
        { div: navVid5, video: `texto2` },
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
      // configurar altura nav central
      centro.classList.add("altura100");
      // configurar altura navs superior e inferior
      cima.classList.add("altura-normal");
      baixo.classList.add("altura-normal");
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
        seta.configurarEtiqueta("Transcrições", "Transcripciones");
      });
      cima.addEventListener("mouseout", () => {
        seta.configurar("normal-vrm");
        seta.esconderEtiqueta();
      });
      cima.addEventListener("click", () => {
        cenaPubli = 1;
        mostrar("publicacoes");
      });

      // nav inferior para voltar
      baixo.addEventListener("mouseover", () => {
        seta.configurar("seta-vrm-baixo");
        seta.configurarEtiqueta("Voltar", "Volver");
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
          "About<br/>Academia II"
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
        { div: navVid1, video: `texto1` },
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
      // configurar altura nav central
      centro.classList.add("altura100");
      // configurar altura navs superior e inferior
      cima.classList.add("altura-normal");
      baixo.classList.add("altura-normal");
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
        seta.configurarEtiqueta("Transcrições", "Transcripciones");
      });
      cima.addEventListener("mouseout", () => {
        seta.configurar("normal-vrm");
        seta.esconderEtiqueta();
      });
      cima.addEventListener("click", () => {
        cenaPubli = 2;
        mostrar("publicacoes");
      });

      // nav inferior para voltar
      baixo.addEventListener("mouseover", () => {
        seta.configurar("seta-vrm-baixo");
        seta.configurarEtiqueta("Voltar", "Volver");
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
        seta.configurarEtiqueta("About<br/>Academia I", "About<br/>Academia I");
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
        { div: navVid2, video: `texto2` },
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
