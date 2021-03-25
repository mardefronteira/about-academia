class Seta {
  constructor() {
    this.seta = document.querySelector("#seta");
    this.etiqueta = document.querySelector("#etiqueta-seta");
    // this.slides = document.querySelector('#slides');
    this.x = 0;
    this.y = 0;
    this.etiquetaX = 0;
    this.etiquetaY = 0;
    this.classeEtiqueta = "texto-centro";
  }

  configurar(tipo) {
    const largura = window.innerWidth;
    const altura = window.innerHeight;

    switch (tipo) {
      case "seta-vrm-esquerda":
        this.x = 0;
        this.y = -15;
        this.seta.src = "img/cursor/setaVermelhaEsquerda.png";
        this.etiquetaX = 0;
        this.etiquetaY = -altura * 0.2;
        this.classeEtiqueta = "texto-esquerda";
        break;
      case "seta-branca-esquerda":
        this.x = 0;
        this.y = -15;
        this.etiquetaX = 0;
        this.etiquetaY = -altura * 0.1;
        this.seta.src = "img/cursor/setaBrancaEsquerda.png";
        this.classeEtiqueta = "texto-esquerda";
        break;
      case "seta-vrm-direita":
        this.x = -128;
        this.y = -15;
        this.etiquetaX = -240;
        this.etiquetaY = -altura * 0.2;
        this.seta.src = "img/cursor/setaVermelhaDireita.png";
        this.classeEtiqueta = "texto-direita";
        break;
      case "seta-branca-direita":
        this.x = -128;
        this.y = -15;
        this.etiquetaX = -128;
        this.etiquetaY = -altura * 0.1;
        this.seta.src = "img/cursor/setaBrancaDireita.png";
        this.classeEtiqueta = "texto-direita";
        break;
      case "seta-vrm-cima":
        this.x = 15;
        this.y = 0;
        this.etiquetaX = -80;
        this.etiquetaY = altura * 0.2;
        this.seta.src = "img/cursor/setaVermelhaCima.png";
        this.classeEtiqueta = "texto-centro";
        break;
      case "seta-vrm-baixo":
        this.x = 15;
        this.y = -128;
        this.etiquetaX = -100;
        this.etiquetaY = -altura * 0.3;
        this.seta.src = "img/cursor/setaVermelhaBaixo.png";
        this.classeEtiqueta = "texto-centro";
        break;
      case "normal-vrm":
        this.x = 0;
        this.y = 0;
        this.seta.src = "img/cursor/normalVermelho.png";
        break;
      case "normal-branco":
        this.x = 0;
        this.y = 0;
        this.seta.src = "img/cursor/normalBranco.png";
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
