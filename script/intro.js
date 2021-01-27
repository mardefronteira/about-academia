let mouse = {
  x: 0,
  y: 0,
}

function iniciar () {
  document.querySelector('#slides').classList.remove('hidden');
  setTimeout(animarTitulo, 3000);

  window.addEventListener('mousemove', (e) => {
    e = e || window.event;

    mouse.x = e.pageX;
    mouse.y = e.pageY;
    if (mouse.x === undefined) {
      mouse.x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
      mouse.y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }

    let slides = document.querySelector('#slides')
    slides.style.top = `${mouse.y+30}px`;
    slides.style.left = `${mouse.x-slides.width}px`;
  })
}

function intro0() {
  for (let timer of timers) clearTimeout(timer);
  document.querySelector('#slides').classList.remove('hidden');
  let alvo = document.querySelector('#intro');
  alvo.innerHTML = '';
  alvo.classList.remove('hidden');
  animarTitulo();
}


/* PÁGINA INICIAL */
function animarTitulo() {
  let titulo = "About Academia";
  let subtituloPt = "um projeto por Muntadas";
  let subtituloEs = "un proyecto por Muntadas";
  let spanTitulo = "<p id='titulo' class='vermelho'>_</p><section id='subtitulos' class='clicavel'><p id='subtituloPt' class='subtitulo'></p><p id='subtituloEs' class='subtitulo espanhol'></p></section>";

  let alvo;
  if (!document.querySelector(`#titulos`)) {
    // criar parágrafo para o título e o subtítulo
    paragrafoBase = document.createElement('SECTION');
    paragrafoBase.id = "titulos";
    paragrafoBase.classList.add('intro-titulo');
    paragrafoBase.innerHTML = spanTitulo;
    document.querySelector('#intro').appendChild(paragrafoBase);

    // adicionar evento de clique nos textos
    document.querySelector('#titulo').addEventListener('click', intro1);
    document.querySelector('#subtituloPt').addEventListener('click', intro1);
    document.querySelector('#subtituloEs').addEventListener('click', intro1);

    // indicar o titulo como primeiro alvo
    alvo = document.querySelector(`#titulo`);
  } else {
    // verificar em qual ponto do texto a animação está, e indicar o alvo correto a partir disso.
    alvo = document.querySelector(`#titulo`);
    if (alvo.innerHTML === titulo) {
      alvo = document.querySelector(`#subtituloPt`);
    }
    if (alvo.innerHTML === subtituloPt) {
      alvo = document.querySelector(`#subtituloEs`);
    }
  }

  let texto = eval(alvo.id);
  let ultimaLetra = alvo.innerHTML.length - 1;

  if (alvo.innerHTML !== texto) {
    // adicionar próxima letra ao parágrafo alvo.
    alvo.innerHTML = texto.slice(0,ultimaLetra+1);

    // caso não seja a última letra do texto, adicionar underline.
    alvo.innerHTML.length === texto.length ? '' : alvo.innerHTML += '_'

    // chamar próxima animação
    timers.push(setTimeout(() => {animarTitulo()}, 15));

  } else {
    // caso o texto esteja completo, adicionar undeline piscante
    piscar('subtituloEs');
  }
}

function intro1() {
  // esconder slides do mouse
  document.querySelector('#slides').classList.add('hidden');
  // zerar conteiner da intro
  document.querySelector('#intro').innerHTML = "";
  // remover todos os timers
  for (let timer of timers) clearTimeout(timer);

  // criar setas para navegar entre as páginas da intro
  criarOverlaySetas(intro0, intro2);

  // animar parágrafos
  animar('pt', "O projeto, iniciado no Carpenter Center for the Visual Arts da Universidade de Harvard em 2011, esteve em importantes instituições culturais nas cidades de Boston, Vancouver, Amsterdam, Sevilha, entre outras. Devido ao COVID-19, sua existência no hemisfério sul ocorre por esta ala virtual, uma interpretação online dos materiais que a constitui.", intro2);
  animar('es', "El Proyecto, que comenzó en el Carpenter Center for the Visual Arts de la Universidad de Harvard en 2011, ha estado en importantes intituiciones culturales de las ciudades de Boston, Vancouver, Amsterdam, Sevilla, entre otras. Debido a COVID-19, su existencia en el hemisferio sur se produce a través de esta ala virtual, una interpretación en línea del material que la constituye.", intro2, ['intro-texto', 'espanhol']);
}

function intro2() {
  // zerar intro
  document.querySelector('#intro').innerHTML = "";
  for (let timer of timers) clearTimeout(timer);

  criarOverlaySetas(intro1, introMenu)

  // animar parágrafos
  animar('pt_2', "Sobre Academia é um projeto que propõe uma reflexão, através da arte, sobre o sistema acadêmico e universitário, mais especificamente sobre a dualidade público/privado, com como as complexas relações que existem entre a produção do conhecimento e os interesses econômicos que influenciam a educação em suas diferentes formas de pedagogia.", introMenu);
  animar('es_2', "About Academia es un proyecto que propone una reflexión, a través del arte, sobre el sistema académico y universitario, más concretamente sobre la dualidad pública/privada, así como sobre las complejas relaciones que existen entre la producción de conocimento y los interesses económicos que influyen en la educación en sus diferentes formas de pedagogía.", introMenu, ['intro-texto', 'espanhol']);
}

function criarOverlaySetas(callbackEsqueda, callbackDireita) {
  let setaEsquerda = document.createElement('DIV');
  setaEsquerda.id = "voltar";
  setaEsquerda.classList.add('seta-esquerda-vrm');
  setaEsquerda.addEventListener('click', callbackEsqueda);

  let setaDireita = document.createElement('DIV');
  setaDireita.id = "avancar";
  setaDireita.classList.add('seta-direita-vrm');
  setaDireita.addEventListener('click', callbackDireita);

  document.querySelector('#intro').appendChild(setaEsquerda);
  document.querySelector('#intro').appendChild(setaDireita);
}


function introMenu() {
  document.querySelector('#intro').classList.add('hidden');
  document.querySelector('#intro-menu').classList.remove('hidden');
}
