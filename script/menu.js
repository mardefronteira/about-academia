const linksMenu = ["apresentacao", "exibicao", "publicacoes", "mesas", "info"];
const textosMenuPt = [
  "Apresentação",
  "Instalação online",
  "Transcrições",
  "Mesas redondas",
  "Info",
];
const textosMenuEs = [
  "Presentación",
  "Instalación online",
  "Transcripciones",
  "Mesas redondas",
  "Info",
];

function menu() {
  const menuElt = document.querySelector("#menu");
  if (menuElt.classList.contains("hidden")) {
    // caso tenha iniciado, pausar exibição
    permitiuAudio ? pausarExibicao() : "";

    // remover todos os event listeners do botão do menu
    let botaoMenu = document.querySelector("#botao-menu");
    let novoBotao = botaoMenu.cloneNode(true);
    botaoMenu.parentNode.replaceChild(novoBotao, botaoMenu);

    // configurar cursor
    seta.configurar("normal-vrm");
    seta.esconderEtiqueta();

    // resetar menu
    menuElt.innerHTML = `
    <div id="conteiner-menu">
      <nav id="nav-menu">
      <p id="titulo-menu" class=""><span class="underline-menu">_ </span></p>
      <p id="subtitulo-menu" class=""><span class="underline-menu">_ </span></p>
      <ul id="paginas-menu">
        <li id="exibicao-menu" class="item-menu"><span class="underline-menu">_ </span></li>
        <li id="apresentacao-menu" class="item-menu"><span class="underline-menu">_ </span></li>
        <li id="publicacoes-menu" class="item-menu"><span class="underline-menu">_ </span></li>
        <li id="mesas-menu" class="item-menu"><span class="underline-menu">_ </span></li>
        <li id="info-menu" class="item-menu"><span class="underline-menu">_ </span></li>
      </ul>
      </nav>
      <ul id="idiomas-menu">
      <li id="br-menu" class="idioma-menu ${
        ptBr ? "cinquenta" : ""
      }"><span class="underline-menu">_ </span></li>
      <li id="es-menu" class="idioma-menu ${
        ptBr ? "" : "cinquenta"
      }"><span class="underline-menu">_ </span></li>
      </ul>
    </div>`;

    // mostrar menu
    menuElt.classList.remove("hidden");

    // configurar animação underline
    let itensMenu = [
      document.querySelector("#paginas-menu"),
      document.querySelector("#idiomas-menu"),
    ];

    for (let item of itensMenu) {
      item.addEventListener("mouseover", () => {
        document.querySelector("#botao-menu").classList.add("hidden");
      });
      item.addEventListener("mouseout", () => {
        document.querySelector("#botao-menu").classList.remove("hidden");
      });
    }

    // escrever títulos do menu
    animarMenu(
      `titulo-menu`,
      `titulo-menu-txt`,
      "About Academia",
      "About Academia",
      () => {
        mostrar("intro");
      },
      []
    );
    animarMenu(
      `subtitulo-menu`,
      `subtitulo-menu-p`,
      "um projeto por Muntadas",
      "un proyecto de Muntadas",
      () => {
        mostrar("intro");
      },
      ["texto-menu", "subtitulo-menu"]
    );

    // escrever links do menu
    for (let i in linksMenu) {
      animarMenu(
        `${linksMenu[i]}-menu`,
        `${linksMenu[i]}-texto`,
        textosMenuPt[i],
        textosMenuEs[i],
        () => {
          mostrar(linksMenu[i]);
        },
        ["texto-menu"]
      );
    }

    animarMenu(
      "br-menu",
      "br-item",
      "pt.",
      "pt.",
      () => {
        ptBr = true;
        trocarIdioma();
      },
      ["idioma"]
    );

    animarMenu(
      "es-menu",
      "es-item",
      "es.",
      "es.",
      () => {
        ptBr = false;
        trocarIdioma();
      },
      ["idioma"]
    );
  } else {
    menuElt.classList.add("hidden");
    menuElt.innerHTML = "";

    configurarCursor();
  }
}

function trocarIdioma() {
  const menuElmt = document.querySelector("#menu");
  if (!menuElmt.classList.contains("hidden")) {
    menuElmt.classList.add("hidden");
    menuElmt.innerHTML = "";
    menu();
  }

  if (videoPlanes[4] !== undefined) {
    videoPlanes[1].configurarSrc(videos[`texto1${ptBr ? "pt" : "es"}`]);
    videoPlanes[4].configurarSrc(videos[`texto2${ptBr ? "pt" : "es"}`]);
  }

  const info = document.querySelector("#info-svg");
  info.src = `img/info/info_${idioma("pt", "es")}.png`;

  cenaAtual === "apresentacao" ? apresentacao() : "";
  cenaAtual === "exibicao" ? configurarNav() : "";
  cenaAtual === "publicacoes" ? publicacoes() : "";
  cenaAtual === "mesas" ? mesas() : "";
}

function mostrar(pagina) {
  esconderTudo();
  seta.configurar("normal-vrm");
  switch (pagina) {
    case "intro":
      cenaIntro = 0;
      intro();
      break;
    case "mesas":
      mesas();
      break;
    case "apresentacao":
      apresentacao();
      break;
    case "info":
      cenaAtual = "info";
      const info = document.querySelector(`#info`);
      info.classList.remove("hidden");
      info.scrollTop = 0;
      break;
    case "publicacoes":
      publicacoes();
      break;
    case "exibicao":
      tela = 0;
      exibicao();
      break;
    default:
      "";
  }
}

/* ANIMAR TEXTOS DO MENU */
function animarMenu(
  idMae,
  idAlvo,
  textoBr,
  textoEs = textoBr,
  callback = false,
  classes = []
) {
  const texto = ptBr ? textoBr : textoEs;

  let alvo;
  if (!document.querySelector(`#${idAlvo}`)) {
    alvo = document.createElement("SPAN");
    alvo.id = idAlvo;
    for (let classe of classes) {
      alvo.classList.add(classe);
    }

    // adicionar ação ao clicar
    callback
      ? document.querySelector(`#${idMae}`).addEventListener("click", callback)
      : "";

    document.querySelector(`#${idMae}`).appendChild(alvo);
  } else {
    alvo = document.querySelector(`#${idAlvo}`);
  }

  let ultimaLetra = alvo.innerHTML.length - 1;
  if (ultimaLetra !== texto.length) {
    alvo.innerHTML = texto.slice(0, ultimaLetra + 1) + "_";
    timers.push(
      setTimeout(() => {
        animarMenu(idMae, idAlvo, texto);
      }, 1)
    );
  } else {
    alvo.innerHTML = alvo.innerHTML.replace("_", "");
  }
}

let cenaAtual = "intro";
function configurarCursor() {
  switch (cenaAtual) {
    case "intro":
      seta.configurar("seta-branca-direita");
      seta.esconderEtiqueta();
      break;
    case "introExibicao":
      seta.configurar("seta-vrm-direita");
      seta.configurarEtiqueta("introdução", "introducción");
      document
        .querySelector("#botao-menu")
        .addEventListener("mouseover", () => {
          seta.configurar("seta-vrm-esquerda");
          seta.configurarEtiqueta("menu", "menú");
        });
      break;
    case "exibicao":
      seta.configurar("normal-vrm");
      seta.esconderEtiqueta();
      permitirAudio();
      break;
    // case "previa-1":
    //   configurarPdf(1);
    //   break;
    // case "previa-2":
    //   configurarPdf(2);
    //   break;
    default:
      seta.configurar("normal-vrm");
      seta.esconderEtiqueta();
  }
}
