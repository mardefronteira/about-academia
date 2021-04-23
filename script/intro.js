// let mouse = {
//   x: 0,
//   y: 0,
// };

let seta;
let cenaIntro = 0;
let timerIntro;

let dispMovel = false;

function iniciar() {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    dispMovel = true;
  }

  seta = new Seta();
  seta.iniciar();
  seta.configurar("seta-branca-direita");
  animarTitulo();

  document.querySelector("#intro").addEventListener("click", mudarDeCena);
  // criar setas para navegar entre as páginas da intro
  document
    .querySelector("#intro")
    .addEventListener("mousemove", configurarSetas);
}

function mostrarIntro() {
  mostrarLogos();
  animarTitulo();
}

function intro() {
  cenaAtual = "intro";

  // apagar timers
  for (let timer of timers) clearTimeout(timer);

  // zerar conteiner da intro
  let pagIntro = document.querySelector("#intro-texto");
  pagIntro.innerHTML = "";

  if (cenaAtual !== 6)
    document.querySelector("#diagrama-intro").classList.add("hidden");
  if (![4, 5].includes(cenaAtual)) {
    document.querySelector("#foto-intro").classList.add("hidden");
    document.querySelector("#foto-intro").classList.remove("trinta");
  }

  configurarSetas();

  // animar textos de acordo com a cena atual
  switch (cenaIntro) {
    case 0:
      document.querySelector("#intro").classList.remove("hidden");
      mostrarLogos();
      animarTitulo();
      break;

    case 1:
      // animar parágrafo
      animar(
        "introP",
        "intro-texto",
        idioma(
          `Durante o último período de ensino de Antoni Muntadas no programa de Arte, Cultura e Tecnologia do Instituto de Tecnologia de Massachusetts (ACT MIT), a Universidade de Harvard lhe pediu para apresentar um novo projeto no Carpenter Center for the Visual Arts.<br><br>
          Foi a ocasião para Muntadas avaliar os diferentes estados da educação superior, suas tradições e institucionalidade.<br><br>
          O projeto, iniciado em 2011, desde então esteve em importantes instituições culturais em cidades como Boston, Vancouver, Amsterdam, Sevilha, entre outras.<br><br>
          Pela primeira vez ocorre sua exibição na América Latina, com todos os seus materiais traduzidos numa versão bilíngue, para o português e espanhol, mediante de uma parceria entre o Fórum Permanente, o Instituto de Estudos Avançados da USP e a Biblioteca Brasiliana José e Guita Mindlin, com o apoio do Governo do Estado de São Paulo através do PROAC.`,
          `Durante la última etapa docente de Antoni Muntadas en el programa de Art, Culture and Technology del Massachusetts Institute of Technology (ACT MIT), la Universidad de Harvard le pidió que presentara un nuevo proyecto en el Carpenter Center for the Visual Arts. Fue la ocasión para que Muntadas evaluara los diferentes estados de la educación superior, sus tradiciones y su institucionalidad.<br><br>
          El proyecto, iniciado en 2011, ha estado desde entonces en importantes instituciones culturales de ciudades como Boston, Vancouver, Ámsterdam o Sevilla, entre otras.<br><br>
          Por primera vez se presenta en América Latina, con todos sus materiales traducidos al portugués y español, en versión bilingüe, mediante una asociación entre el Fórum Permanente, el Instituto de Estudos Avançados de la Universidad de São Paulo y la Biblioteca Brasiliana Guita y José Mindlin, con el apoyo del Gobierno del Estado de São Paulo a través del programa PROAC.`
        )
      );

      animar("introNum", "intro-texto", "01/03", false, ["intro-num"]);
      break;

    case 2:
      animar(
        "introP",
        "intro-texto",
        idioma(
          `About Academia propõe uma reflexão através da arte sobre o sistema acadêmico e universitário estadunidense, mais especificamente sobre a dualidade público/privado, assim como as complexas relações que existem entre a produção do conhecimento e os interesses econômicos que influenciam a educação em suas diferentes formas de pedagogia.<br><br>
          A video-instalação de Muntadas considera o possível conflito entre uma faculdade (e seus valores) e uma administração (e seu poder).<br><br>
          Para fazer uma circulação proveitosa do projeto em universidades que não sejam norte-americanas, Muntadas propõe mesas de debates que contextualizam os conflitos e dificuldades próprias do sistema universitário que o hospeda.`,
          `About Academia propone una reflexión a través del arte sobre el sistema académico y universitario estadounidense, más concretamente sobre la dualidad público/privado, así como las complejas relaciones que existen entre la producción de conocimiento y los intereses económicos que influyen en la educación en sus diferentes formas de pedagogía.<br><br>
          La videoinstalación de Muntadas plantea el posible conflicto entre una facultad (y sus valores) y una administración (y su poder).<br><br>
          Para hacer circular el proyecto entre las universidades no estadounidenses, Muntadas propone mesas redondas que contextualicen los conflictos y dificultades del sistema universitario que lo acoge.`
        )
      );
      animar("introNum", "intro-texto", "02/03", false, ["intro-num"]);
      break;

    case 3:
      animar(
        "introP",
        "intro-texto",
        idioma(
          `Seu objetivo é facilitar um diálogo interdisciplinar sobre o ensino superior - suas muitas limitações bem como novas possibilidades, outras configurações - originalmente através de uma vídeo-instalação composta por dois conjuntos de projeções:<br><br>
          Enquanto About Academia I (2011) aborda estas questões a partir da perspectiva de professores e acadêmicos filiados ao corpo docente, About Academia II (2017) aprofunda seus temas exclusivamente do ponto de vista dos estudantes.<br><br>
          Devido à pandemia da COVID-19, a primeira exposição deste projeto no Hemisfério Sul se realiza através de uma sala virtual. Esta apresentação online dos materiais destaca a interpretação digital da instalação de vídeo original.<br><br>
          Além das mesas redondas, estão também disponibilizadas duas publicações bilíngues com as transcrições das falas dos entrevistados, dentre eles Noam Chomsky, David Harvey, Carol Becker, Ute Meta Bauer além dos estudantes.`,
          `Su objetivo principal es facilitar un diálogo interdisciplinario sobre la educación superior -sus muchas limitaciones así como nuevas posibilidades u otras configuraciones- a través de una videoinstalación compuesta por dos conjuntos de proyecciones:<br><br>
          Mientras que About Academia I (2011) aborda estos temas desde la perspectiva de los profesores y académicos afiliados a la facultad, About Academia II (2017) profundiza en sus temas exclusivamente desde el punto de vista de los estudiantes.<br><br>
          Debido a la pandemia de la COVID-19, la primera exposición de este proyecto en el Hemisferio Sur tiene lugar a través de una sala virtual. En esta presentación en línea de los materiales destaca la interpretación digital de la video-instalación original.<br><br>
          Además de las mesas redondas, también están disponibles dos publicaciones bilingües con las transcripciones de las intervenciones de los entrevistados, entre los que se encuentran Noam Chomsky, David Harvey, Carol Becker y Ute Meta Bauer, además de los estudiantes.`
        )
      );
      animar("introNum", "intro-texto", "03/03", false, ["intro-num"]);
      break;
    case 4:
      document.querySelector("#diagrama-intro").classList.remove("hidden");
      document.querySelector("#diagrama-intro").classList.remove("trinta");
      break;
    case 5:
      document.querySelector("#diagrama-intro").classList.remove("hidden");
      document.querySelector("#diagrama-intro").classList.add("trinta");
      animar(
        "introP",
        "intro-texto",
        idioma(
          `OBSERVAÇÃO (N.B.)<br><br>
          A criação da vídeo-instalação imersiva, online e interativa dá protagonismo aos dois conjuntos: About Academia I (2011) e About Academia II (2017). Para tanto, respeita a duração dos tempos dos vídeos originalmente desenvolvidos pelo artista para a sua existência em um espaço físico real.<br><br>
          Deste modo, apesar da interatividade de navegação, não é possível ao visitante o controle dos vídeos projetados. A experiência estética na virtualidade se corresponde assim ao tempo-real do espaço expositivo analógico.<br><br>
          As mesas redondas serão transmitidas pelo Instituto de Estudos Avançados da USP e, em seguida, estarão disponíveis diretamente por este site e nos sites dos realizadores. As publicações estão acessíveis parcialmente, para que se tenha acesso integral, é necessário comprá-las por um preço simbólico.`,
          `NOTA BENE (OBSERVACIÓN)<br><br>
          La creación de esta videoinstalación inmersiva, online e interactiva, da protagonismo a los dos conjuntos: About Academia I (2011) y About Academia II (2017). Por lo tanto, respeta la duración de los tiempos de los vídeos originalmente desarrollados por el artista para su existencia en un espacio físico real.<br><br>
          A pesar de la interactividad que permite navegar por cada pantalla individualmente, no es posible que el visitante controle la reproducción de los vídeos proyectados. La experiencia estética en la virtualidad se corresponde así con el tiempo real del espacio expositivo analógico.<br><br>
          Las mesas redondas serán retransmitidas por el Instituto de Estudios Avanzados de la USP, y luego estarán disponibles directamente a través de este sitio web y de los sitios de los realizadores. Las publicaciones son parcialmente accesibles, para tener acceso completo es necesario comprarlas por un precio simbólico.`
        ),
        false,
        ["intro-aviso"]
      );
      break;
    case 6:
      document.querySelector("#foto-intro").classList.remove("hidden");
      animar(
        "introLegenda",
        "intro-texto",
        idioma(
          `Imagem de instalação da exposição Activating Artifacts: About Academia, 2017. Baltimore Center for Art, Design and Visual Culture, Universidade de Maryland. Foto: Dan Meyers <br><br>
          Imagem anterior: Diagrama preparatório About Academia I-II`,
          `Imagen de la instalación en la exposición Activating Artifacts: About Academia, 2017. Baltimore Center for Art, Design and Visual Culture, University of Maryland. Fotografía: Dan Meyers<br><br>
          Imagen previa: Diagrama preparatorio About Academia I-II`
        ),
        false,
        ["intro-texto", "intro-legenda"]
      );
      break;
    default:
      console.log(`A cena que você tentou acessar (${cenaIntro}) não existe.`);
  }
}

function configurarSetas() {
  if (cenaIntro === 0) {
    seta.configurar("seta-branca-direita");
  } else {
    const ladoMouse = mouseX < window.innerWidth / 2;
    if (ladoMouse) {
      seta.configurar("seta-vrm-esquerda");
      cenaIntro === 6
        ? seta.configurarEtiqueta("Voltar", "Volver", {
            x: window.innerWidth * 0.01,
            y: -window.innerHeight * 0.1,
          })
        : seta.esconderEtiqueta();
    } else {
      seta.configurar("seta-vrm-direita");
      cenaIntro === 6
        ? seta.configurarEtiqueta("Entrar", "Entrar", {
            x: -window.innerWidth * 0.085,
            y: -window.innerHeight * 0.1,
          })
        : seta.esconderEtiqueta();
    }
  }
}

let primeiraIntro = true;
// muda de cena baseado na posição do mouse e em que cena está
function mudarDeCena() {
  // verificar se o mouse está antes ou depois do meio da tela
  const ladoMouse = mouseX < window.innerWidth / 2;

  // aumentar ou diminuir o índice da cena atual de acordo com a posição
  if (cenaIntro !== 0) {
    cenaIntro += ladoMouse ? -1 : 1;
  } else {
    cenaIntro = 1;
  }

  // mostrar a próxima cena ou, se não houver, a intro do menu
  cenaIntro !== 7 ? intro() : introMenu();
}

function introMenu() {
  cenaAtual = "introMenu";
  document.querySelector("#intro").classList.add("hidden");
  document.querySelector("#intro-menu").classList.remove("hidden");
  seta.configurar("normal-vrm");

  menu();
}

function mostrarLogos() {
  const conteinerLogos = document.createElement("DIV");
  conteinerLogos.id = "conteiner-logos";
  conteinerLogos.classList.add("centralizar");
  const logos = document.createElement("IMG");
  logos.id = "logos-intro";
  logos.src = "img/logos.png";
  conteinerLogos.appendChild(logos);
  document.querySelector("#intro-texto").appendChild(conteinerLogos);
}

/* PÁGINA INICIAL */
function animarTitulo() {
  let titulo = "About Academia";
  let subtituloBr = "um projeto por<br>Muntadas";
  let subtituloEs = "un proyecto de<br>Muntadas";
  let idiomaBr = "pt.";
  let idiomaEs = "es.";
  let underline = '<span class="undeline-idioma">_</span>';
  let spanTitulo = `
  <h1 id='titulo' class='vermelho'>_</h1>
  <h2 id='subtituloBr' class='subtitulo'></h2>
  <h2 id='subtituloEs' class='subtitulo'></h2>
  <div id="idiomas">
    <p id='iBr' class="idioma-intro"><span id='idiomaBr'></span></p>
    <p id='iEs' class="idioma-intro"><span id='idiomaEs' class=''></span></p>
  </div>
  `;

  let alvo;
  if (!document.querySelector(`#titulos`)) {
    // criar parágrafo para o título e o subtítulo
    paragrafoBase = document.createElement("DIV");
    paragrafoBase.id = "titulos";
    paragrafoBase.classList.add("intro-titulo");
    paragrafoBase.innerHTML = spanTitulo;
    document.querySelector("#intro-texto").appendChild(paragrafoBase);

    paragrafoBase.addEventListener("mousemove", () => {
      ptBr = mouseY < window.innerHeight / 2 ? true : false;

      const iBr = document.querySelector(`#idiomaBr`);
      const iEs = document.querySelector(`#idiomaEs`);
      const pBr = document.querySelector(`#iBr`);
      const pEs = document.querySelector(`#iEs`);
      const sBr = document.querySelector(`#subtituloBr`);
      const sEs = document.querySelector(`#subtituloEs`);

      if (ptBr) {
        pBr.innerHTML = underline + iBr.outerHTML;
        pEs.innerHTML = iEs.outerHTML;
        sBr.classList.add("cinquenta");
        sEs.classList.remove("cinquenta");
        document.querySelector(`#idiomaBr`).classList.add("cinquenta");
        document.querySelector(`#idiomaEs`).classList.remove("cinquenta");
      } else {
        pBr.innerHTML = iBr.outerHTML;
        pEs.innerHTML = underline + iEs.outerHTML;
        sBr.classList.remove("cinquenta");
        sEs.classList.add("cinquenta");
        document.querySelector(`#idiomaBr`).classList.remove("cinquenta");
        document.querySelector(`#idiomaEs`).classList.add("cinquenta");
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
    alvo.innerHTML = texto.slice(0, ultimaLetra + 1);

    // caso não seja a última letra do texto, adicionar underline.
    alvo.innerHTML.length === texto.length ? "" : (alvo.innerHTML += "_");

    // chamar próxima animação
    timers.push(
      setTimeout(() => {
        animarTitulo();
      }, 15)
    );
  }
}
