function iniciar () {
  let titulo = "About Academia";
  let subtitulo = " um projeto por Antoni Muntadas"
  let spanTitulo = "<p id='titulo' class='vermelho'>_</p><p id='subtitulo' class='clicavel'>_</p>"

  let alvo;
  if (!document.querySelector(`#titulos`)) {
    // criar parágrafo para o título e o subtítulo
    paragrafoBase = document.createElement('SECTION');
    paragrafoBase.id = "titulos";
    paragrafoBase.classList.add('intro-titulo', 'clicavel');
    paragrafoBase.innerHTML = spanTitulo;
    paragrafoBase.addEventListener('click', intro1);
    document.querySelector('#intro').appendChild(paragrafoBase);

    alvo = document.querySelector(`#titulo`);
  } else {
    alvo = document.querySelector(`#titulo`);
    if (alvo.innerHTML.length > titulo.length) {
      alvo.innerHTML = alvo.innerHTML.replace("_","");
      alvo = document.querySelector(`#subtitulo`);
    }
  }
  let texto = eval(alvo.id);
  let ultimaLetra = alvo.innerHTML.length - 1;

  if (ultimaLetra !== texto.length) {
    alvo.innerHTML = texto.slice(0,ultimaLetra+1) + "_";
    setTimeout(() => {iniciar()}, 10);
  } else {
      alvo = document.querySelector('#titulos')
      // alvo.innerHTML = alvo.innerHTML.replace("_","");
    setTimeout(() => {
      if (document.querySelector('#titulos')) {
        alvo.innerHTML= spanTitulo;
        iniciar();
      }
    }
    , 10000)
  }
}

function intro1() {
  document.querySelector('#intro').innerHTML = "";
  animar('pt', "O projeto, iniciado no Carpenter Center for the Visual Arts da Universidade de Harvard em 2011...", intro2);
  animar('es', "El Proyecto, que comenzó en el Carpenter Center for the Visual Arts de la Universidad de Harvard en 2011...", intro2);

  // animarTrad("O projeto, iniciado no Carpenter Center for the Visual Arts da Universidade de Harvard em 2011...", "El Proyecto, que comenzó en el Carpenter Center for the Visual Arts de la Universidad de Harvard en 2011...");
}

function intro2() {
  document.querySelector('#intro').innerHTML = "";
  animar('oi', "alo testani");
  animar('ei', "El Proyecto, que comenzó en el Carpenter Center for the Visual Arts de la Universidad de Harvard en 2011...");

  // animarTrad("O projeto, iniciado no Carpenter Center for the Visual Arts da Universidade de Harvard em 2011...", "El Proyecto, que comenzó en el Carpenter Center for the Visual Arts de la Universidad de Harvard en 2011...");
}

let timers=[];
function animar (idAlvo, texto, callback = false, classes = ['intro-texto', 'clicavel']) {
  let alvo;
  if (!document.querySelector(`#${idAlvo}`)) {
    for (let timer of timers) clearTimeout(timer);

    alvo = document.createElement('P');
    alvo.id = idAlvo;
    for (let classe of classes) {
      alvo.classList.add(classe);
    }
    callback ? alvo.addEventListener('click', callback) : '';
    document.querySelector('#intro').appendChild(alvo);
  } else {
    alvo = document.querySelector(`#${idAlvo}`);
  }

  let ultimaLetra = alvo.innerHTML.length - 1;
  if (ultimaLetra !== texto.length) {
    alvo.innerHTML = texto.slice(0,ultimaLetra+1) + "_";
    setTimeout(() => {animar(idAlvo, texto, classes)}, 10);
  } else {
    alvo.innerHTML = alvo.innerHTML.replace("_","");
    timers.push(setTimeout( () => {
      alvo.innerHTML = "_";
      animar(idAlvo, texto, classes);
    }
    , 10000));
  }
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
