let mouse = {
  x: 0,
  y: 0,
}

let seta;
let cenaIntro = 0;
let timerIntro;

function iniciar () {
  // document.querySelector('#slides').classList.remove('hidden');
  // timerIntro = setTimeout(animarTitulo, 5000);
  window.addEventListener('click', mostrarIntro);
  seta = new Seta();
  seta.iniciar();
  seta.configurar('seta-branca-direita');
  animarTitulo();
}

function mostrarIntro() {
  clearTimeout(timerIntro);
  animarTitulo();
  window.removeEventListener('click', mostrarIntro);
}

function intro() {
  cenaAtual = 'intro';

  // criar setas para navegar entre as páginas da intro
  configurarSetas();

  // apagar timers
  for (let timer of timers) clearTimeout(timer);

  // zerar conteiner da intro
  let pagIntro = document.querySelector('#intro');
  pagIntro.innerHTML = '';

  // esconder slides do mouse
  // document.querySelector('#slides').classList.add('hidden');

  // animar textos de acordo com a cena atual
  switch (cenaIntro) {
    case 0:
      pagIntro.classList.remove('hidden');
      // document.querySelector('#slides').classList.remove('hidden');
      animarTitulo();
      break;

    case 1:
      // animar parágrafo
      animar('introP', idioma('Durante o último período de ensino de Antoni Muntadas no programa em Arte, Cultura e Tecnologia no Instituto de Tecnologia de Massachusetts (ACT MIT), a Universidade de Harvard lhe pediu para apresentar um novo projeto no Carpenter Center for the Visual Arts. Foi a ocasião para Muntadas avaliar os diferentes estados da educação e sua institucionalização. O projeto, iniciado em 2011, desde então esteve em importantes instituições culturais em cidades como Boston, Vancouver, Amsterdam, Sevilha, entre outras. Pela primeira vez ocorre sua exibição na América Latina, com todos os seus materiais traduzidos para o português, numa versão bilíngue, através de uma parceria entre o Fórum Permanente e o Instituto de Estudos Avançados da USP, com o apoio do Governo do Estado de São Paulo através do PROAC.','Durante el último periodo de docencia de Antoni en el programa de Arte, Cultura y Tecnología (ACT) del Instituto Tecnológico de Massachusetts, la Universidad de Harvard le pidió que presentara un nuevo proyecto en el Carpenter Center for the Visual Arts. Fue la ocasión para que Muntadas evaluara los diferentes estados de la educación y su institucionalización. El proyecto, que comenzó en 2011, ha estado desde entonces en importantes instituciones culturales de ciudades como Boston, Vancouver, Ámsterdam o Sevilla, entre otras. Por primera vez se expone en América Latina, con todos sus materiales traducidos al portugués, en versión bilingüe, a través de una asociación entre el Fórum Permanente y el Instituto de Estudos Avançados da USP.'), mudarDeCena);
      break;

    case 2:
      animar('introP', idioma('About Academia propõe uma reflexão através da arte sobre o sistema acadêmico e universitário estadunidense, mais especificamente sobre a dualidade público/privado, assim como as complexas relações que existem entre a produção do conhecimento e os interesses econômicos que influenciam a educação em suas diferentes formas de pedagogia. A instalação provocativa de Muntadas considera o possível conflito entre uma faculdade (e seus valores) e uma administração (e seu poder). Para fazer uma circulação proveitosa do projeto em universidades que não sejam norte-americanas Muntadas propõe mesas de debates que contextualizem os conflitos e dificuldades próprios do sistema universitário que o hospeda. ','About Academia propone una reflexión a través del arte sobre el sistema académico y universitario estadounidense, más concretamente sobre la dualidad público/privado, así como las complejas relaciones que existen entre la producción de conocimiento y los intereses económicos que influyen en la educación en sus diferentes formas de pedagogía. La provocadora instalación de Muntadas considera el posible conflicto entre una facultad (y sus valores) y una administración (y su poder). Para hacer una circulación productiva del proyecto en las universidades no estadounidenses, Muntadas propuso que se celebraran debates para contextualizar los conflictos y dificultades que atraviesa el sistema universitario que lo acoge. '), mudarDeCena);
      break;

    case 3:
      animar('introP', idioma('Seu objetivo é facilitar um diálogo interdisciplinar sobre o ensino superior, - suas muitas limitações bem como novas possibilidades - originalmente através de duas instalações de vídeos que se complementam com duas publicações. Devido ao COVID-19, sua existência no Hemisfério Sul ocorre por esta ala virtual, uma interpretação online dos materiais que o constituem. Enquanto About Academia I (2011) aborda estas questões a partir da perspectiva de professores e acadêmicos afiliados ao corpo docente, About Academia II (2017) aprofunda seus temas exclusivamente do ponto de vista dos estudantes.','Su objetivo es facilitar un diálogo interdisciplinario sobre la educación superior - sus muchas limitaciones así como sus nuevas posibilidades - originalmente a través de dos instalaciones de vídeo que se complementan con dos publicaciones. Debido a COVID-19, su existencia en el Hemisferio sur se produce a través de esta ala virtual, una interpretación online de los materiales que la constituyen. Mientras que About Academy I (2011) aborda estos temas desde la perspectiva del profesorado y los afiliados académicos, About Academy II (2017) profundiza en sus temas exclusivamente desde el punto de vista de los estudiantes.'), mudarDeCena);
      break;
    default:
      console.log(`ih, na real a cenaIntro é ${cenaIntro}`)
  }
}

function configurarSetas() {
  document.querySelector('#intro').addEventListener('mousemove', () => {
    if (cenaIntro === 0) {
      seta.configurar('seta-branca-direita');
    } else {
      const ladoMouse = mouse.x < window.innerWidth/2;
      if (ladoMouse) {
        seta.configurar('seta-vrm-esquerda');
      } else {
        seta.configurar('seta-vrm-direita')
      }
    }
  });
}

// muda de cena baseado na posição do mouse e em que cena está
function mudarDeCena() {
  // verificar se o mouse está antes ou depois do meio da tela
  const ladoMouse = mouse.x < window.innerWidth/2;

  // aumentar ou diminuir o índice da cena atual de acordo com a posição
  if (cenaIntro !== 0) {
    cenaIntro += ladoMouse ? -1 : 1;
  } else {
    cenaIntro = 1;
  }

  // mostrar a próxima cena ou, se não houver, a intro do menu
  cenaIntro !== 4 ? intro() : introMenu();
}

function introMenu() {
  cenaAtual = 'introMenu';
  document.querySelector('#intro').classList.add('hidden');
  document.querySelector('#intro-menu').classList.remove('hidden');
  seta.configurar('normal-vrm');
}

/* PÁGINA INICIAL */
function animarTitulo() {
  let titulo = "About Academia";
  let subtituloBr = "um projeto por Muntadas";
  let subtituloEs = "un proyecto de Muntadas";
  let idiomaBr = 'pt.';
  let idiomaEs = 'es.';
  let underline = '<span class="undeline-idioma">_</span>'
  let spanTitulo = `
  <p id='titulo' class='vermelho'>_</p>
  <p id='subtituloBr' class='subtitulo'></p>
  <p id='subtituloEs' class='subtitulo'></p>
  <div id="idiomas">
    <p id='iBr'><span id='idiomaBr'></span></p>
    <p id='iEs'><span id='idiomaEs' class=''></span></p>
  </div>
  `;

  let alvo;
  if (!document.querySelector(`#titulos`)) {
    // criar parágrafo para o título e o subtítulo
    paragrafoBase = document.createElement('DIV');
    paragrafoBase.id = "titulos";
    paragrafoBase.classList.add('intro-titulo');
    paragrafoBase.innerHTML = spanTitulo;
    document.querySelector('#intro').appendChild(paragrafoBase);

    paragrafoBase.addEventListener('click', mudarDeCena);
    paragrafoBase.addEventListener('mousemove', () => {
        ptBr = mouse.y < window.innerHeight/2 ? true : false;

        const iBr = document.querySelector(`#idiomaBr`);
        const iEs = document.querySelector(`#idiomaEs`);
        const pBr = document.querySelector(`#iBr`);
        const pEs = document.querySelector(`#iEs`);
        const sBr = document.querySelector(`#subtituloBr`);
        const sEs = document.querySelector(`#subtituloEs`);

        if (ptBr) {
          pBr.innerHTML = underline + iBr.outerHTML;
          pEs.innerHTML = iEs.outerHTML;
          sBr.classList.add('cinquenta');
          sEs.classList.remove('cinquenta');
          document.querySelector(`#idiomaBr`).classList.add('cinquenta');
          document.querySelector(`#idiomaEs`).classList.remove('cinquenta');
        } else {
          pBr.innerHTML = iBr.outerHTML;
          pEs.innerHTML = underline + iEs.outerHTML;
          sBr.classList.remove('cinquenta');
          sEs.classList.add('cinquenta');
          document.querySelector(`#idiomaBr`).classList.remove('cinquenta');
          document.querySelector(`#idiomaEs`).classList.add('cinquenta');
        }
    });

    // indicar o titulo como primeiro alvo
    alvo = document.querySelector(`#titulo`);
  } else {
    // verificar em qual ponto do texto a animação está, e indicar o alvo correto a partir disso.
    alvo = document.querySelector(`#titulo`);
    if (alvo.innerHTML === titulo) {
      alvo = document.querySelector(`#subtituloBr`);
    }
    if (alvo.innerHTML === subtituloBr) {
      alvo = document.querySelector(`#subtituloEs`);
    }
    if (alvo.innerHTML === subtituloEs) {
      alvo = document.querySelector(`#idiomaBr`);
    }
    if (alvo.innerHTML === idiomaBr) {
      alvo = document.querySelector(`#idiomaEs`);
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
    // piscar('subtituloEs');
  }
}
