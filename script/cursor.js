class Seta {
  constructor() {
    this.seta = document.querySelector(`#seta-branca-direita`);
    this.etiqueta = document.querySelector("#etiqueta-seta");
    this.x = 0;
    this.y = 0;
    this.etiquetaX = 0;
    this.etiquetaY = 0;
    this.classeEtiqueta = "texto-centro";
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
      case "seta-branca-esquerda":
        this.x = 0;
        this.y = -15;
        this.etiquetaX = 0;
        this.etiquetaY = -altura * 0.1;
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
      case "normal-branco":
        this.x = 0;
        this.y = 0;
        break;
      default:
        console.log("O cursor que você tentou configurar ainda não existe.");
    }
  }

  posicionar() {
    this.seta.style.top = mouse.x + this.x;
    this.seta.style.left = mouse.y + this.y;
  }

  iniciar() {
    window.addEventListener("mousemove", (e) => {
      e = e || window.event;

      mouse.x = e.pageX;
      mouse.y = e.pageY;

      if (mouse.x === undefined) {
        mouse.x =
          e.clientX +
          document.body.scrollLeft +
          document.documentElement.scrollLeft;
        mouse.y =
          e.clientY +
          document.body.scrollTop +
          document.documentElement.scrollTop;
      }

      this.etiqueta.style.top = `${mouse.y + this.etiquetaY}px`;
      this.etiqueta.style.left = `${mouse.x + this.etiquetaX}px`;

      this.seta.style.left = `${mouse.x + this.x}px`;
      this.seta.style.top = `${mouse.y + this.y}px`;
    });
  }

  configurarEtiqueta(etiquetaBr, etiquetaEs, cor = "") {
    const etiqueta = document.querySelector("#etiqueta-seta");
    etiqueta.innerHTML = ptBr ? etiquetaBr : etiquetaEs;
    if (cor === "vrm") etiqueta.classList.add("vermelho");
    for (let classe of ["texto-esquerda", "texto-direita", "texto-centro"]) {
      classe === this.classeEtiqueta
        ? etiqueta.classList.add(classe)
        : etiqueta.classList.remove(classe);
    }
    etiqueta.classList.remove("hidden");
  }

  esconderEtiqueta() {
    const etiqueta = document.querySelector("#etiqueta-seta");
    etiqueta.classList.add("hidden");
  }
}
