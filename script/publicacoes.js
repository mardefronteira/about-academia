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
    "sample1-publicacoes",
    "aa1-nav",
    "Sample book",
    () => {
      configurarPdf(1);
    },
    ["texto-publicacoes", "clicavel"]
  );
  animar(
    "link1-publicacoes",
    "aa1-nav",
    "Download",
    () => {
      console.log("abriu link");
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
    "sample2-publicacoes",
    "aa2-nav",
    "Sample book",
    () => {
      configurarPdf(2);
    },
    ["texto-publicacoes", "clicavel"]
  );
  animar(
    "link2-publicacoes",
    "aa2-nav",
    "Download",
    () => {
      console.log("abriu link");
    },
    ["texto-publicacoes", "clicavel"]
  );
}

// variável para conter a situação atual da página
var estado = {
  pdf: null,
  numPagina: 1,
  zoom: 1.2,
};

function configurarPdf(numAA) {
  let arquivo = `textos/previa_aa${numAA}_${ptBr ? "pt" : "es"}.pdf`;
  console.log(arquivo);

  pdfjsLib.getDocument(arquivo).then((pdf) => {
    estado.pdf = pdf;
    mostrarPdf();
  });

  document.querySelector("#overlay-previa").classList.remove("hidden");

  document.getElementById("botao-voltar").addEventListener("click", (e) => {
    if (estado.pdf == null || estado.numPagina == 1) return;
    estado.numPagina -= 1;
    document.getElementById("num-pagina").value = estado.numPagina;
    mostrarPdf();
  });

  document.getElementById("botao-avancar").addEventListener("click", (e) => {
    if (estado.pdf == null || estado.numPagina > estado.pdf._pdfInfo.numPages)
      return;
    estado.numPagina += 1;
    document.getElementById("num-pagina").value = estado.numPagina;
    mostrarPdf();
  });

  document.getElementById("num-pagina").addEventListener("keypress", (e) => {
    if (estado.pdf == null) return;

    // Get key code
    var code = e.keyCode ? e.keyCode : e.which;

    // If key code matches that of the Enter key
    if (code == 13) {
      var desiredPage = document.getElementById("num-pagina").valueAsNumber;

      if (desiredPage >= 1 && desiredPage <= estado.pdf._pdfInfo.numPages) {
        estado.numPagina = desiredPage;
        document.getElementById("num-pagina").value = desiredPage;
        mostrarPdf();
      }
    }
  });

  document.getElementById("zoom-in").addEventListener("click", (e) => {
    if (estado.pdf == null) return;
    estado.zoom += 0.5;
    mostrarPdf();
  });

  document.getElementById("zoom-out").addEventListener("click", (e) => {
    if (estado.pdf == null) return;
    estado.zoom -= 0.5;
    mostrarPdf();
  });
}

function mostrarPdf() {
  estado.pdf.getPage(estado.numPagina).then((pagina) => {
    const canvas = document.getElementById("visualizador");
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
