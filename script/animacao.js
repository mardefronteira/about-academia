let timers = [];

/* FUNÇÃO DE ANIMAÇÃO DOS TEXTOS (DIGITAÇÃO) */
function animar(
  idAlvo,
  idMae,
  texto,
  classes = ["intro-texto"]
) {
  let alvo;
  if (!document.querySelector(`#${idAlvo}`)) {
    alvo = document.createElement("P");
    alvo.id = idAlvo;
    for (let classe of classes) {
      alvo.classList.add(classe);
    }
    document.querySelector(`#${idMae}`).appendChild(alvo);
  } else {
    alvo = document.querySelector(`#${idAlvo}`);
  }

  let ultimaLetra = alvo.innerHTML.length - 1;
  if (ultimaLetra !== texto.length) {
    const proximaLetra = texto[ultimaLetra + 1];
    if (proximaLetra === "<") {
      alvo.innerHTML = texto.slice(0, ultimaLetra + 5) + "_";
    } else {
      alvo.innerHTML = texto.slice(0, ultimaLetra + 1) + "_";
    }
    timers.push(
      setTimeout(() => {
        animar(idAlvo, idMae, texto, classes);
      }, 1)
    );
  } else {
    alvo.innerHTML = alvo.innerHTML.replace("_", "");
    if (
      alvo.classList.contains("intro-texto") ||
      alvo.classList.contains("intro-aviso")
    ) {
      piscar(alvo.id);
    }
  }
}

function piscar(idAlvo) {
  alvo = document.querySelector(`#${idAlvo}`);
  alvo.innerHTML =
    alvo.innerHTML.slice(-1) === "_"
      ? alvo.innerHTML.slice(0, -1)
      : alvo.innerHTML + "_";
  timers.push(
    setTimeout(() => {
      piscar(idAlvo);
    }, 1000)
  );
}
