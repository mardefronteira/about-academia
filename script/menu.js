const linksMenu = ['sala3d', 'publicacoes', 'mesas', 'info'];
const textosMenuPt = ['Exibição Digital', 'Publicações', 'Mesas Redondas', 'Info'];
const textosMenuEs = ['Interpretación Online', 'Publicaciones', 'Conferencias', ''];
const imagensHover = ['img/800x600/T3-V1.gif','img/1920x1200/T1-V1.gif', 'img/1280x1024/T2-V2.gif', 'img/800x600/T3-V3.gif']
const imagensHover2 = ['img/1280x1024/T2-V1.gif', 'img/800x600/T3-V2.gif', 'img/1920x1200/T1-V2.gif']

function menu() {
  const menu = document.querySelector('#menu');
  if (menu.classList.contains('hidden')) {

    // resetar menu
    menu.innerHTML = `
    <img id="gif-fundo-menu" src="img/cursor/slides.gif" alt="">
    <div id="conteiner-menu">
      <nav id="nav-menu">
        <ul>
          <li id="titulo-menu" class="">
          </li>
          <li id="subtitulo-menu" class="">
          </li>
          <li id="sala3d-menu" class="item-menu">
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
    animarMenu(`titulo-menu`, `titulo-menu-txt`, 'About Academia', ()=>{mostrar('intro')}, [], 'img/800x600/T3-V5.gif');
    animarMenu(`subtitulo-menu`, `subtitulo-menu-pt`, 'um projeto por Muntadas', ()=>{mostrar('intro')}, ['texto-menu', 'subtitulo-menu'], 'img/1280x1024/T2-V5.gif');
    animarMenu(`subtitulo-menu`, `subtitulo-menu-es`, 'un proyecto por Muntadas', ()=>{mostrar('intro')}, ['texto-menu','menu-espanhol', 'subtitulo-menu'], 'img/1920x1200/T1-V5.gif');

    // escrever links do menu
    for (let i in linksMenu) {
      animarMenu(`${linksMenu[i]}-menu`, `${linksMenu[i]}-pt`, textosMenuPt[i], ()=>{mostrar(linksMenu[i])}, ['texto-menu'], imagensHover[i]);
      animarMenu(`${linksMenu[i]}-menu`, `${linksMenu[i]}-es`, textosMenuEs[i], ()=>{mostrar(linksMenu[i])}, ['texto-menu','menu-espanhol'], imagensHover2[i]);
    }

  } else {
    menu.classList.add('hidden');
  }
}

function mostrar(pagina) {
  esconderTudo();
  switch (pagina) {
    case 'intro':
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
    default:
      '';
  }
}

function esconderTudo() {
  document.querySelector('#menu').classList.add('hidden');
  document.querySelector(`#intro`).classList.add('hidden');
  document.querySelector(`#mesas`).classList.add('hidden');
  document.querySelector(`#info`).classList.add('hidden');
  document.querySelector(`#publicacoes`).classList.add('hidden');
}

/* ANIMAR TEXTOS DO MENU */
function animarMenu(idMae, idAlvo, texto, callback = false, classes = [], hoverImg = false) {
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
