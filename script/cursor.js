class Seta {
  constructor() {
    this.seta = document.querySelector(`#seta-branca-direita`);
    this.etiqueta = document.querySelector("#etiqueta-seta");
    this.x = 0;
    this.y = 0;
    this.etiquetaX = 0;
    this.etiquetaY = 0;
    this.classeEtiqueta = "texto-centro";
    this.timers = [];
  }

  configurar(tipo) {
    const largura = window.innerWidth;
    const altura = window.innerHeight;
    this.seta = document.querySelector(`#${tipo}`);

    Array.from(document.getElementsByClassName("cursor")).map((cursor) => {
      cursor.id === tipo
        ? cursor.classList.remove("hidden")
        : cursor.classList.add("hidden");
    });

    switch (tipo) {
      case "seta-vrm-esquerda":
        this.x = 0;
        this.y = -15;
        this.etiquetaX = 0;
        this.etiquetaY = -altura * 0.15;
        this.classeEtiqueta = "texto-esquerda";
        break;
      case "seta-vrm-direita":
        this.x = -128;
        this.y = -15;
        this.etiquetaX = -largura * 0.15;
        this.etiquetaY = -altura * 0.15;
        this.classeEtiqueta = "texto-direita";
        break;
      case "seta-branca-direita":
        this.x = -128;
        this.y = -15;
        this.etiquetaX = -128;
        this.etiquetaY = -altura * 0.1;
        this.classeEtiqueta = "texto-direita";
        break;
      case "seta-vrm-cima":
        this.x = -15;
        this.y = 0;
        this.etiquetaX = -largura * 0.08;
        this.etiquetaY = altura * 0.18;
        this.classeEtiqueta = "texto-centro";
        break;
      case "seta-vrm-baixo":
        this.x = -15;
        this.y = -128;
        this.etiquetaX = -largura * 0.04;
        this.etiquetaY = -altura * 0.25;
        this.classeEtiqueta = "texto-centro";
        break;
      case "normal-vrm":
        this.x = 0;
        this.y = 0;
        break;
      default:
        console.log("O cursor que você tentou configurar ainda não existe.");
    }
  }

  posicionar() {
    this.seta.style.top = mouseX + this.x;
    this.seta.style.left = mouseY + this.y;
  }

  iniciar() {
    window.addEventListener("mousemove", (e) => {
      // positionar etiqueta
      this.etiqueta.style.top = `${mouseY + this.etiquetaY}px`;
      this.etiqueta.style.left = `${mouseX + this.etiquetaX}px`;

      // posicionar cursor
      this.seta.style.top = `${mouseY + this.y}px`;
      this.seta.style.left = `${mouseX + this.x}px`;

      // se estiver na sala 3D ou no tocador, mostrar o cursor quando o mouse mexe
      if (cenaAtual === "exibicao") {
        // apagar timers
        for (let timer of this.timers) clearTimeout(timer);

        if (document.querySelector("#cursores").classList.contains("hidden")) {
          document.querySelector("#cursores").classList.remove("hidden");
        } else {
          this.timers.push(
            setTimeout(() => {
              document.querySelector("#cursores").classList.add("hidden");
            }, 5000)
          );
        }
      }

      let controles = Array.from(
        document.querySelectorAll(".controles-tocador")
      );
      // se o vídeo estiver aberto, abrir os controles
      if (
        !document.querySelector("#tocador").classList.contains("hidden") &&
        controles[0].classList.contains("invisivel-tocador")
      ) {
        controles.map((controle) => {
          controle.classList.remove("invisivel-tocador");
        });
      }

      this.timers.push(
        setTimeout(() => {
          if (cenaAtual === "exibicao") {
            controles.map((controle) => {
              controle.classList.add("invisivel-tocador");
            });
          }
        }, 5000)
      );
    });
  }

  configurarEtiqueta(etiquetaBr, etiquetaEs, posEtiqueta = "") {
    const etiqueta = document.querySelector("#etiqueta-seta");

    // caso explicito, configurar posição da etiqueta
    if (posEtiqueta !== "") {
      this.etiquetaX = posEtiqueta.x;
      this.etiquetaY = posEtiqueta.y;
      // positionar etiqueta
      this.etiqueta.style.top = `${mouseY + this.etiquetaY}px`;
      this.etiqueta.style.left = `${mouseX + this.etiquetaX}px`;
    }

    // posicionar texto
    for (let classe of ["texto-esquerda", "texto-direita", "texto-centro"]) {
      classe === this.classeEtiqueta
        ? etiqueta.classList.add(classe)
        : etiqueta.classList.remove(classe);
    }

    // configurar texto a partir do idioma ativo
    etiqueta.innerHTML = idioma(etiquetaBr, etiquetaEs);

    // mostrar etiqueta
    etiqueta.classList.remove("hidden");
  }

  esconderEtiqueta() {
    const etiqueta = document.querySelector("#etiqueta-seta");
    etiqueta.classList.add("hidden");
  }

  // esconderSeta() {
  //   Array.from(document.getElementsByClassName("cursor")).map((cursor) => {
  //     cursor.id === tipo
  //       ? cursor.classList.remove("hidden")
  //       : cursor.classList.add("hidden");
  //   });
  // }
}
