const linksMenu = ['exibicao', 'publicacoes', 'mesas', 'info'];
const textosMenuPt = ['Exibição Digital', 'Publicações', 'Mesas Redondas', 'Info'];
const textosMenuEs = ['Interpretación Online', 'Publicaciones', 'Conferencias', ''];
const imagensHover = ['videos/AAII_entrevista_00.mp4','videos/AAII_entrevista_02.mp4', 'videos/AAII_entrevista_01.mp4', 'videos/AAI_entrevista_00.mp4']

function menu() {
  const menu = document.querySelector('#menu');
  if (menu.classList.contains('hidden')) {
    // caso tenha iniciado, pausar exibição
    permitiuAudio ? pausarExibicao() : '';

    // esconder etiqueta da seta
    document.querySelector('#etiqueta-seta').classList.add('hidden');

    // resetar menu
    menu.innerHTML = `
    <video id="gif-fundo-menu" class="video-fundo" src="videos/AAI_entrevista_01.mp4" autoplay loop muted></video>
    <div id="conteiner-menu">
      <nav id="nav-menu">
        <ul>
          <li id="titulo-menu" class="">
          </li>
          <li id="subtitulo-menu" class="">
          </li>
          <li id="exibicao-menu" class="item-menu">
          </li>
          <li id="publicacoes-menu" class="item-menu">
          </li>
          <li id="mesas-menu" class="item-menu">
          </li>
          <li id="info-menu" class="item-menu">
          </li>
        </ul>
      </nav>
    </div>`;

    // mostrar menu
    menu.classList.remove('hidden');

    // escrever títulos do menu
    animarMenu(`titulo-menu`, `titulo-menu-txt`, 'About Academia', ()=>{mostrar('intro')}, [], 'videos/AAI_entrevista_01.mp4');
    animarMenu(`subtitulo-menu`, `subtitulo-menu-p`, 'um projeto por Muntadas', 'un proyecto por Muntadas', ()=>{mostrar('intro')}, ['texto-menu', 'subtitulo-menu'], 'videos/AAI_entrevista_01.mp4');

    // escrever links do menu
    for (let i in linksMenu) {
      animarMenu(`${linksMenu[i]}-menu`, `${linksMenu[i]}-pt`, textosMenuPt[i],  textosMenuEs[i], ()=>{mostrar(linksMenu[i])}, ['texto-menu'], imagensHover[i]);
    }

  } else {
    menu.classList.add('hidden');

    document.querySelector('#intro-exibicao').classList.contains('hidden') ? '' : document.querySelector('#etiqueta-seta').classList.remove('hidden');
  }
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
    case 'info':
      document.querySelector(`#info`).classList.remove('hidden');
      break;
    case 'publicacoes':
      document.querySelector(`#publicacoes`).classList.remove('hidden');
      break;
    case 'exibicao':
      introExibicao();
      break;
    default:
      '';
  }
}

/* ANIMAR TEXTOS DO MENU */
function animarMenu(idMae, idAlvo, textoBr, textoEs, callback = false, classes = [], hoverImg = false) {
  const texto = ptBr ? textoBr : textoEs;

  let alvo;
  if (!document.querySelector(`#${idAlvo}`)) {
    alvo = document.createElement('P');
    alvo.id = idAlvo;
    for (let classe of classes) {
      alvo.classList.add(classe);
    }
    callback ? alvo.addEventListener('click', callback) : '';
    hoverImg ? alvo.addEventListener("mouseover", () => {
      document.querySelector('#gif-fundo-menu').src = hoverImg;

    }) : '';
    document.querySelector(`#${idMae}`).appendChild(alvo);
  } else {
    alvo = document.querySelector(`#${idAlvo}`);
  }

  let ultimaLetra = alvo.innerHTML.length - 1;
  if (ultimaLetra !== texto.length) {
    alvo.innerHTML = texto.slice(0,ultimaLetra+1) + "_";
    timers.push(setTimeout(() => {animarMenu(idMae, idAlvo, texto)}, 1));
  } else {
    alvo.innerHTML = alvo.innerHTML.replace("_","");
  }
}
