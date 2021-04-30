let primeiraPubli = true;
let cenaPubli;

function publicacoes() {
  cenaAtual = "publicacoes";

  document.querySelector("#overlay-previa").classList.add("hidden");
  document.querySelector(`#publicacoes`).classList.remove("hidden");

  seta.configurar("normal-vrm");
  seta.esconderEtiqueta();

  const capa1 = document.querySelector("#aa1-capa-imagem");
  const capa2 = document.querySelector("#aa2-capa-imagem");
  const capa1vrm = document.querySelector("#aa1-capa-imagem-vrm");
  const capa2vrm = document.querySelector("#aa2-capa-imagem-vrm");

  if (ptBr) {
    capa1.src = "img/publi/capa_aa1_pt.jpg";
    capa2.src = "img/publi/capa_aa2_pt.jpg";
    capa1vrm.src = "img/publi/hover_aa1_pt.jpg";
    capa2vrm.src = "img/publi/hover_aa2_pt.jpg";
  } else {
    capa1.src = "img/publi/capa_aa1_es.jpg";
    capa2.src = "img/publi/capa_aa2_es.jpg";
    capa1vrm.src = "img/publi/hover_aa1_es.jpg";
    capa2vrm.src = "img/publi/hover_aa2_es.jpg";
  }

  // rolar scroll de volta ao topo, ou até o fim
  const pag = document.querySelector("#fundo-publicacoes");
  cenaPubli === 2 ? (pag.scrollTop = window.innerHeight) : (pag.scrollTop = 0);
  cenaPubli = 0;

  //animar(idAlvo, idMae, texto, callback = false, classes = ['intro-texto'])
  animar("titulo1-publicacoes", "aa1-titulos", "About<br>Academia I", false, [
    "vermelho",
    "texto-publicacoes",
    "titulo-publicacoes",
  ]);
  animar(
    "subtitulo1-publicacoes",
    "aa1-titulos",
    dispMovel
      ? idioma(
          "As transcrições:<br>um documento interno",
          "Las transcripciones:<br>un documento interno"
        )
      : idioma(
          "As transcrições:<br>um documento<br>interno",
          "Las transcripciones:<br>un documento<br>interno"
        ),
    false,
    ["texto-publicacoes"]
  );
  animar("previa1-publicacoes", "aa1-nav", idioma("Prévia", "Previa"), false, [
    "texto-publicacoes",
    "clicavel",
  ]);
  animar("link1-publicacoes", "aa1-nav", "Comprar", false, [
    "texto-publicacoes",
    "clicavel",
  ]);

  animar("voltar-publicacoes", "", idioma("Voltar", "Volver"));

  animar("titulo2-publicacoes", "aa2-titulos", "About<br>Academia II", false, [
    "vermelho",
    "texto-publicacoes",
    "titulo-publicacoes",
  ]);
  animar(
    "subtitulo2-publicacoes",
    "aa2-titulos",
    idioma(
      "As transcrições:<br>um documento<br>interno",
      "Las transcripciones:<br>un documento<br>interno"
    ),
    false,
    ["texto-publicacoes"]
  );
  animar("previa2-publicacoes", "aa2-nav", idioma("Prévia", "Previa"), false, [
    "texto-publicacoes",
    "clicavel",
  ]);
  animar("link2-publicacoes", "aa2-nav", "Comprar", false, [
    "texto-publicacoes",
    "clicavel",
  ]);

  if (primeiraPubli) {
    if (!dispMovel) {
      document
        .querySelector("#previa1-publicacoes")
        .addEventListener("mouseover", () => {
          hoverPublicacoes("in", 1);
        });
      document
        .querySelector("#previa2-publicacoes")
        .addEventListener("mouseover", () => {
          hoverPublicacoes("in", 2);
        });
      document
        .querySelector("#previa1-publicacoes")
        .addEventListener("mouseout", () => {
          hoverPublicacoes("out", 1);
        });
      document
        .querySelector("#previa2-publicacoes")
        .addEventListener("mouseout", () => {
          hoverPublicacoes("out", 2);
        });
      document
        .querySelector("#aa1-capa-imagem")
        .addEventListener("mouseover", () => {
          hoverPublicacoes("in", 1);
        });
      document
        .querySelector("#aa2-capa-imagem")
        .addEventListener("mouseover", () => {
          hoverPublicacoes("in", 2);
        });
      document
        .querySelector("#aa1-capa-imagem")
        .addEventListener("mouseout", () => {
          hoverPublicacoes("out", 1);
        });
      document
        .querySelector("#aa2-capa-imagem")
        .addEventListener("mouseout", () => {
          hoverPublicacoes("out", 2);
        });
    }
    document.querySelector("#aa1-capa-imagem").addEventListener("click", () => {
      if (dispMovel) {
        window.open(`textos/movel_aa1_${idioma("pt", "es")}.pdf`);
      } else {
        configurarPdf(1);
      }
    });
    document.querySelector("#aa2-capa-imagem").addEventListener("click", () => {
      if (dispMovel) {
        window.open(`textos/movel_aa2_${idioma("pt", "es")}.pdf`);
      } else {
        configurarPdf(2);
      }
    });
    document
      .querySelector("#previa1-publicacoes")
      .addEventListener("click", () => {
        if (dispMovel) {
          window.open(`textos/movel_aa1_${idioma("pt", "es")}.pdf`);
        } else {
          configurarPdf(1);
        }
      });
    document
      .querySelector("#previa2-publicacoes")
      .addEventListener("click", () => {
        if (dispMovel) {
          window.open(`textos/movel_aa2_${idioma("pt", "es")}.pdf`);
        } else {
          configurarPdf(2);
        }
      });
    primeiraPubli = false;
  }

  sugerirScroll();
}

function hoverPublicacoes(mouse, obra) {
  if (mouse === "in") {
    document.querySelector(`#aa${obra}-capa-imagem`).classList.add("invisivel");
    document
      .querySelector(`#previa${obra}-publicacoes`)
      .classList.add("vermelho");
  } else {
    document
      .querySelector(`#aa${obra}-capa-imagem`)
      .classList.remove("invisivel");
    document
      .querySelector(`#previa${obra}-publicacoes`)
      .classList.remove("vermelho");
  }
}

let primeiraPrevia = true;

function configurarPdf(obra) {
  cenaAtual = `previa-${obra}`;

  const previa = document.querySelector("#iframe-previa");
  const conteinerPrevia = document.querySelector("#conteiner-previa");
  previa.src = `textos/previa_aa${obra}_${ptBr ? "pt" : "es"}.pdf`;
  conteinerPrevia.replaceChild(previa.cloneNode(), previa);

  document.querySelector("#voltar-previa").innerHTML = idioma(
    "Voltar",
    "Volver"
  );

  if (primeiraPrevia) {
    document.querySelector("#voltar-previa").addEventListener("click", (e) => {
      document.querySelector("#overlay-previa").classList.add("hidden");
    });

    conteinerPrevia.addEventListener("mouseover", (e) => {
      document.querySelector("#cursores").classList.add("hidden");
    });
    conteinerPrevia.addEventListener("mouseout", () => {
      document.querySelector("#cursores").classList.remove("hidden");
    });
    primeiraPrevia = false;
  }

  document.querySelector("#overlay-previa").classList.remove("hidden");
}
