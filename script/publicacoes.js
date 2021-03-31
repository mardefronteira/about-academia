function publicacoes() {
  document.querySelector("#overlay-previa").classList.add("hidden");
  document.querySelector(`#publicacoes`).classList.remove("hidden");

  seta.configurar("normal-vrm");
  seta.esconderEtiqueta();

  const capa1 = document.querySelector("#aa1-capa-imagem");
  const capa2 = document.querySelector("#aa2-capa-imagem");
  const capa1vrm = document.querySelector("#aa1-capa-imagem-vrm");
  const capa2vrm = document.querySelector("#aa2-capa-imagem-vrm");

  if (ptBr) {
    capa1.src = "img/publi/capa_aa1_pt.png";
    capa2.src = "img/publi/capa_aa2_pt.png";
    capa1vrm.src = "img/publi/hover_aa1_pt.png";
    capa2vrm.src = "img/publi/hover_aa2_pt.png";
  } else {
    capa1.src = "img/publi/capa_aa1_es.png";
    capa2.src = "img/publi/capa_aa2_es.png";
    capa1vrm.src = "img/publi/hover_aa1_es.png";
    capa2vrm.src = "img/publi/hover_aa2_es.png";
  }

  //animar(idAlvo, idMae, texto, callback = false, classes = ['intro-texto'])
  animar("titulo1-publicacoes", "aa1-titulos", "About Academia I", false, [
    "vermelho",
    "texto-publicacoes",
  ]);
  animar(
    "subtitulo1-publicacoes",
    "aa1-titulos",
    idioma(
      "As transcrições: um documento interno",
      "Las transcripciones: un documento interno"
    ),
    false,
    ["texto-publicacoes"]
  );
  animar(
    "previa1-publicacoes",
    "aa1-nav",
    idioma("Prévia", "Previa"),
    () => {
      configurarPdf(1);
    },
    ["texto-publicacoes", "clicavel"]
  );
  animar(
    "link1-publicacoes",
    "aa1-nav",
    "Comprar",
    () => {
      console.log("abriu link do aa1");
    },
    ["texto-publicacoes", "clicavel"]
  );

  animar("titulo2-publicacoes", "aa2-titulos", "About Academia II", false, [
    "vermelho",
    "texto-publicacoes",
  ]);
  animar(
    "subtitulo2-publicacoes",
    "aa2-titulos",
    idioma(
      "As transcrições: um documento interno",
      "Las transcripciones: un documento interno"
    ),
    false,
    ["texto-publicacoes"]
  );
  animar(
    "previa2-publicacoes",
    "aa2-nav",
    idioma("Prévia", "Previa"),
    () => {
      configurarPdf(2);
    },
    ["texto-publicacoes", "clicavel"]
  );
  animar(
    "link2-publicacoes",
    "aa2-nav",
    "Comprar",
    () => {
      console.log("abriu link do aa2");
    },
    ["texto-publicacoes", "clicavel"]
  );

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
  document.querySelector("#aa1-capa-imagem").addEventListener("click", () => {
    configurarPdf(1);
  });
  document.querySelector("#aa2-capa-imagem").addEventListener("click", () => {
    configurarPdf(2);
  });
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

// variável para conter a situação atual da página
var estado = {
  pdf: null,
  numPagina: 1,
  zoom: 1.2,
};

let primeiraPrevia = true;

function configurarPdf(numAA) {
  cenaAtual = `previa-${numAA}`;

  const arquivo = `textos/previa_aa${numAA}_${ptBr ? "pt" : "es"}.pdf`;

  pdfjsLib.getDocument(arquivo).then((pdf) => {
    estado.pdf = pdf;
    mostrarPdf();
  });

  let totalPaginas;
  if (numAA === 2) {
    totalPaginas = ptBr ? 7 : 8;
  } else {
    totalPaginas = 13;
  }
  document.querySelector("#num-total-paginas").innerHTML = `/${totalPaginas}`;

  document.querySelector("#voltar-publicacoes").innerHTML = idioma(
    "voltar",
    "volver"
  );

  document.querySelector("#overlay-previa").classList.remove("hidden");

  if (primeiraPrevia) {
    const botaoVoltar = document.querySelector("#voltar-previa");
    botaoVoltar.addEventListener("mouseover", () => {
      seta.configurar("seta-vrm-esquerda");
    });
    botaoVoltar.addEventListener("click", (e) => {
      if (estado.pdf === null || estado.numPagina == 1) return;
      estado.numPagina -= 1;
      document.querySelector("#num-pagina").value = estado.numPagina;
      mostrarPdf();
    });

    document
      .querySelector("#voltar-publicacoes")
      .addEventListener("click", (e) => {
        document.querySelector("#overlay-previa").classList.add("hidden");
        // seta.configurar("normal-vrm");
        publicacoes();
      });

    const botaoAvancar = document.querySelector("#avancar-previa");
    botaoAvancar.addEventListener("mouseover", () => {
      seta.configurar("seta-vrm-direita");
    });
    botaoAvancar.addEventListener("click", (e) => {
      if (estado.pdf == null || estado.numPagina > estado.pdf._pdfInfo.numPages)
        return;
      estado.numPagina += 1;
      document.querySelector("#num-pagina").value = estado.numPagina;
      mostrarPdf();
    });

    document.querySelector("#num-pagina").addEventListener("keypress", (e) => {
      console.log("entrou");
      if (estado.pdf == null) return;
      console.log("não retornou");
      // Get key code
      var code = e.keyCode ? e.keyCode : e.which;
      console.log("pegou keyCode " + code);
      // If key code matches that of the Enter key
      if (code == 13) {
        console.log(`entrou na condicional`);
        var desiredPage = document.querySelector("#num-pagina").valueAsNumber;
        console.log(`desiredPage: ${desiredPage}`);
        if (desiredPage >= 1 && desiredPage <= estado.pdf._pdfInfo.numPages) {
          estado.numPagina = desiredPage;
          console.log(`estado.numPagina: ${estado.numPagina}`);
          document.querySelector("#num-pagina").value = desiredPage;
          mostrarPdf();
        }
      }
    });

    document.querySelector("#zoom-in").addEventListener("click", (e) => {
      if (estado.pdf == null) return;
      estado.zoom += 0.5;
      mostrarPdf();
    });

    document.querySelector("#zoom-out").addEventListener("click", (e) => {
      if (estado.pdf == null) return;
      estado.zoom -= 0.5;
      mostrarPdf();
    });

    document
      .querySelector("#previa-conteiner")
      .addEventListener("mouseout", () => {
        seta.configurar("normal-vrm");
      });
    primeiraPrevia = false;
  }
}

function mostrarPdf() {
  estado.pdf.getPage(estado.numPagina).then((pagina) => {
    const canvas = document.querySelector("#visualizador");
    var ctx = canvas.getContext("2d");

    var viewport = pagina.getViewport(estado.zoom);

    canvas.width = viewport.width;
    canvas.height = viewport.height;

    pagina.render({
      canvasContext: ctx,
      viewport: viewport,
    });
  });
}
