let mouse = {
  x: 0,
  y: 0,
}

function iniciar () {
  document.querySelector('#slides').classList.remove('hidden');
  setTimeout(animarTitulo, 100);

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

function intro() {
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
    paragrafoBase.addEventListener('click', intro1);
    document.querySelector('#intro').appendChild(paragrafoBase);

    // verificar em qual ponto do texto a animação está, e indicar o alvo correto a partir disso.
    alvo = document.querySelector(`#titulo`);
  } else {
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
    piscar('subtituloEs');
  }
}

function intro1() {
  if (document.querySelector('#slides').classList.contains('hidden')){
    document.querySelector('#slides').classList.remove('hidden');
  } else {
    document.querySelector('#slides').classList.add('hidden');
  }
  document.querySelector('#intro').innerHTML = "";
  for (let timer of timers) clearTimeout(timer);
  animar('pt', "O projeto, iniciado no Carpenter Center for the Visual Arts da Universidade de Harvard em 2011, esteve em importantes instituições culturais nas cidades de Boston, Vancouver, Amsterdam, Sevilha, entre outras. Devido ao COVID-19, sua existência no hemisfério sul ocorre por esta ala virtual, uma interpretação online dos materiais que a constitui.", intro2);
  animar('es', "El Proyecto, que comenzó en el Carpenter Center for the Visual Arts de la Universidad de Harvard en 2011, ha estado en importantes intituiciones culturales de las ciudades de Boston, Vancouver, Amsterdam, Sevilla, entre otras. Debido a COVID-19, su existencia en el hemisferio sur se produce a través de esta ala virtual, una interpretación en línea del material que la constituye.", intro2, ['intro-texto', 'espanhol']);
}

function intro2() {
  document.querySelector('#intro').innerHTML = "";
  for (let timer of timers) clearTimeout(timer);
  animar('pt_2', "Sobre Academia é um projeto que propõe uma reflexão, através da arte, sobre o sistema acadêmico e universitário, mais especificamente sobre a dualidade público/privado, com como as complexas relações que existem entre a produção do conhecimento e os interesses econômicos que influenciam a educação em suas diferentes formas de pedagogia.", () => { document.querySelector('#intro').classList.add('hidden'); });
  animar('es_2', "About Academia es un proyecto que propone una reflexión, a través del arte, sobre el sistema académico y universitario, más concretamente sobre la dualidad pública/privada, así como sobre las complejas relaciones que existen entre la producción de conocimento y los interesses económicos que influyen en la educación en sus diferentes formas de pedagogía.", () => { document.querySelector('#intro').classList.add('hidden'); }, ['intro-texto', 'espanhol']);
}



//
// let contadorTrad = 0;
// function animarTrad (textoPt, textoEs, classes = ['intro-texto']) {
  //   let alvos = [
    //     {id: 'pt', texto: textoPt, tamanho: textoPt.length},
    //     {id: 'es', texto: textoEs, tamanho: textoEs.length}
    //   ];
    //
    //   for (let i in alvos) {
      //     // console.log(alvos[i])
      //     if (!document.querySelector(`#${alvos[i].id}`)) {
        //       alvos[i].elemento = document.createElement('P');
        //       alvos[i].elemento.id = alvos[i].id;
        //       for (let classe of classes) {
          //         alvos[i].elemento.classList.add(classe);
          //       }
          //       document.querySelector('#intro').appendChild(alvos[i].elemento);
          //     } else {
            //       alvos[i].elemento = document.querySelector(`#${alvos[i].id}`);
            //     }
            //
            //     let ultimaLetra = alvos[i].elemento.innerHTML.length - 1;
            //     if (ultimaLetra !== alvos[i].tamanho) {
              //       alvos[i].elemento.innerHTML = alvos[i].texto.slice(0,ultimaLetra+1) + "_";
              //       setTimeout(() => {animarTrad(textoPt, textoEs)}, 10);
              //     } else {
                //       alvos[i].elemento.innerHTML = alvos[i].elemento.innerHTML.replace("_","");
                //       contadorTrad++;
                //     }
                //   }
                //
                //   if (contadorTrad === 2) {
                  //     setTimeout( () => {
                    //       for (let i in alvos) {
                      //         alvos[i].innerHTML = "_";
                      //       }
                      //       animarTrad(textoPt, textoEs);
                      //     }
                      //     , 10000);
                      //     contadorTrad = 0;
                      //   }
                      // }
