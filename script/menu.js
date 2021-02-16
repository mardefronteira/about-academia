const linksMenu = ['apresentacao', 'exibicao', 'publicacoes', 'mesas', 'info'];
const textosMenuPt = ['Apresentação', 'Interpretação online', 'Publicações', 'Mesas Redondas', 'Info'];
const textosMenuEs = ['Presentación', 'Interpretación online', 'Publicaciones', 'Conferencias', 'Info'];
const imagensHover = ['videos/.mp4','videos/.mp4', 'videos/', 'videos/']

function menu() {
  const menu = document.querySelector('#menu');
  if (menu.classList.contains('hidden')) {
    // caso tenha iniciado, pausar exibição
    permitiuAudio ? pausarExibicao() : '';

    // remover todos os event listeners do botão do textosMenuEs
    let botaoMenu = document.querySelector('#botao-menu');
    let novoBotao = botaoMenu.cloneNode(true);
    botaoMenu.parentNode.replaceChild(novoBotao, botaoMenu);

    // configurar cursor
    seta.configurar('normal-vrm');
    seta.esconderEtiqueta();

    // resetar menu
    menu.innerHTML = `
    <video id="exibicao-fundo" class="fundo-menu video-fundo video-escondido" src="videos/AAII_entrevista_02.mp4" autoplay loop muted></video>
    <video id="publicacoes-fundo" class="fundo-menu video-fundo video-escondido" src="videos/AAII_entrevista_03.mp4" autoplay loop muted></video>
    <video id="apresentacao-fundo" class="fundo-menu video-fundo video-escondido" src="videos/AAII_entrevista_01.mp4" autoplay loop muted></video>
    <video id="mesas-fundo" class="fundo-menu video-fundo video-escondido" src="videos/AAII_entrevista_04.mp4" autoplay loop muted></video>
    <video id="info-fundo" class="fundo-menu video-fundo video-escondido" src="videos/AAI_entrevista_02.mp4" autoplay loop muted></video>
    <video id="titulo-fundo" class="fundo-menu video-fundo" src="videos/AAI_entrevista_01.mp4" autoplay loop muted></video>
    <div id="conteiner-menu">
      <nav id="nav-menu">
        <ul>
          <li id="titulo-menu" class=""></li>
          <li id="subtitulo-menu" class=""></li>
          <li id="apresentacao-menu" class="item-menu"></li>
          <li id="exibicao-menu" class="item-menu"></li>
          <li id="publicacoes-menu" class="item-menu"></li>
          <li id="mesas-menu" class="item-menu"></li>
          <li id="info-menu" class="item-menu"></li>
        </ul>
      </nav>
      <ul id='idiomas-menu'>
      <li id='br-menu'></li>
      <li id='es-menu'></li>
      </ul>
    </div>`;

    // mostrar menu
    menu.classList.remove('hidden');

    // escrever títulos do menu
    animarMenu(`titulo-menu`, `titulo-menu-txt`, 'About Academia', 'About Academia', ()=>{mostrar('intro')}, []);
    animarMenu(`subtitulo-menu`, `subtitulo-menu-p`, 'um projeto por Muntadas', 'un proyecto por Muntadas', ()=>{mostrar('intro')}, ['texto-menu', 'subtitulo-menu']);

    // escrever links do menu
    for (let i in linksMenu) {
      animarMenu(`${linksMenu[i]}-menu`, `${linksMenu[i]}-texto`, textosMenuPt[i],  textosMenuEs[i], ()=>{mostrar(linksMenu[i])}, ['texto-menu']);
    }

    animarMenu('br-menu','br-item','pt.','pt.', () => {
      ptBr = true;
      menu.classList.add('hidden');
      menu.innerHTML = '';
      entendiNada();
    }, ['item-menu', 'idioma']);

    animarMenu('es-menu','es-item','es.','es.',() => {
      ptBr = false;
      menu.classList.add('hidden');
      menu.innerHTML = '';
      entendiNada();
    }, ['item-menu', 'idioma']);

  } else {
    menu.classList.add('hidden');
    menu.innerHTML = '';

    configurarCursor();
  }
}

function entendiNada() {
  menu();
}

function mostrar(pagina) {
  esconderTudo();
  switch (pagina) {
    case 'intro':
      cenaIntro = 0;
      intro();
      break;
    case 'mesas':
      document.querySelector(`#mesas`).classList.remove('hidden');
      break;
    case 'apresentacao':
      document.querySelector(`#apresentacao`).classList.remove('hidden');
      break;
    case 'info':
      document.querySelector(`#info`).classList.remove('hidden');
      break;
    case 'publicacoes':
      publicacoes();
      break;
    case 'exibicao':
      introExibicao();
      break;
    default:
      '';
  }
}

/* ANIMAR TEXTOS DO MENU */
function animarMenu(idMae, idAlvo, textoBr, textoEs = textoBr, callback = false, classes = []) {
  const texto = ptBr ? textoBr : textoEs;

  let alvo;
  if (!document.querySelector(`#${idAlvo}`)) {
    alvo = document.createElement('P');
    alvo.id = idAlvo;
    for (let classe of classes) {
      alvo.classList.add(classe);
    }

    // adicionar ação ao clicar
    callback ? alvo.addEventListener('click', callback) : '';

    // checar se o item é um idioma, se não, mostrar vídeo
    if (!classes.includes('idioma')) {

      // mostrar vídeo correspondente ao fazer hover
      alvo.addEventListener("mouseover", () => {

        // listar todos os vídeos de fundo
        let videosFundo = Array.from(document.querySelectorAll('.fundo-menu'));

        // selecionar video a ser mostrado
        let estaId = `${idMae.split('-')[0]}-fundo`;
        if (estaId === 'subtitulo-fundo') estaId = 'titulo-fundo';

        document.querySelector(`#${estaId}`).classList.remove('video-escondido');

        // esconder todos os vídeos de fundo
        for (let video of videosFundo) {
          if (video.id !== estaId) video.classList.add('video-escondido');
        }
      });
    }
    document.querySelector(`#${idMae}`).appendChild(alvo);
  } else {
    alvo = document.querySelector(`#${idAlvo}`);
  }

  let ultimaLetra = alvo.innerHTML.length - 1;
  if (ultimaLetra !== texto.length) {
    // console.log(texto);
    alvo.innerHTML = texto.slice(0,ultimaLetra+1) + "_";
    timers.push(setTimeout(() => {animarMenu(idMae, idAlvo, texto)}, 1));
  } else {
    alvo.innerHTML = alvo.innerHTML.replace("_","");
  }
}

let cenaAtual = 'intro';
function configurarCursor() {
  switch (cenaAtual) {
    case 'intro':
      seta.configurar('seta-branca-direita');
      seta.esconderEtiqueta();
      break;
    case 'introExibicao':
      seta.configurar('seta-vrm-direita');
      seta.configurarEtiqueta('introdução', 'introducción', 'vrm');
      document.querySelector('#botao-menu').addEventListener('mouseover', () => {
        seta.configurar('seta-vrm-esquerda');
        seta.configurarEtiqueta('menu', 'menú', 'vrm');
      });
      break;
    default:
      seta.configurar('normal-vrm');
      seta.esconderEtiqueta();
  }
}
