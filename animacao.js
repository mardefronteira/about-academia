function animar (idAlvo, texto) {
  let alvo = document.querySelector(`#${idAlvo}`);
  let ultimaLetra = alvo.innerHTML.length - 1;
  if (ultimaLetra !== texto.length) {
    alvo.innerHTML = texto.slice(0,ultimaLetra+1) + "_";
    setTimeout(() => {animar(idAlvo, texto)}, 50);
  } else {
    setTimeout( () => {
      alvo.innerHTML = "_";
      animar(idAlvo, texto);
    }
    , 5000)
  }
}

function iniciar () {
  animar("intro", "esse é um texto teste bem daora pra gente ver esse negócio funcionando. não é mesmo muito legal? tô animada, acho que vai ser bem divertido")
}
