

let timers=[];

/* FUNÇÃO DE ANIMAÇÃO DOS TEXTOS (DIGITAÇÃO) */
function animar(idAlvo, texto, callback = false, classes = ['intro-texto']) {
  let alvo;
  // console.log(callback)
  if (!document.querySelector(`#${idAlvo}`)) {
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
    timers.push(setTimeout(() => {animar(idAlvo, texto, classes)}, 1));
  } else {
    alvo.innerHTML = alvo.innerHTML.replace("_","");
    if (classes.includes('intro-texto')) {
      piscar(alvo.id);
    }
  }
}


function piscar(idAlvo) {
  alvo = document.querySelector(`#${idAlvo}`);
  alvo.innerHTML = alvo.innerHTML.slice(-1) === '_' ? alvo.innerHTML.slice(0,-1) : alvo.innerHTML + '_';
  timers.push(setTimeout(()=>{piscar(idAlvo)},1000));
}
