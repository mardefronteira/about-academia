class Seta {
  constructor() {
    this.seta = document.querySelector('#seta');
    this.etiqueta = document.querySelector('#etiqueta-seta');
    // this.slides = document.querySelector('#slides');
    this.x = 0;
    this.y = 0;
    this.etiquetaX = 0;
    this.etiquetaY = 0;
  }

  configurar(tipo) {
    const largura = window.innerWidth;
    const altura = window.innerHeight;

    switch (tipo) {
      case 'seta-vrm-esquerda':
        this.x = 0;
        this.y = -15;
        this.seta.src = "img/cursor/setaVermelhaEsquerda.png";
        this.etiquetaX = 0;
        this.etiquetaY = -altura*0.1;
        break;
      case 'seta-branca-esquerda':
        this.x = 0;
        this.y = -15;
        this.etiquetaX = 0;
        this.etiquetaY = -altura*0.1;
        this.seta.src = "img/cursor/setaBrancaEsquerda.png"
        break;
      case 'seta-vrm-direita':
        this.x = -128;
        this.y = -15;
        this.etiquetaX = -128;
        this.etiquetaY = -altura*0.1;
        this.seta.src = "img/cursor/setaVermelhaDireita.png"
        break;
      case 'seta-branca-direita':
        this.x = -128;
        this.y = -15;
        this.etiquetaX = -128;
        this.etiquetaY = -altura*0.1;
        this.seta.src = "img/cursor/setaBrancaDireita.png"
        break;
      case 'normal-vrm':
        this.x = 0;
        this.y = 0;
        this.seta.src = "img/cursor/normalVermelho.png"
        break;
      case 'normal-branco':
        this.x = 0;
        this.y = 0;
        this.seta.src = "img/cursor/normalBranco.png"
        break;
    }
  }

  posicionar() {
    this.seta.style.top = mouse.x + this.x;
    this.seta.style.left = mouse.y + this.y;
  }

  // mostrarSlides() {
  //   this.slides.classList.remove('hidden');
  // }

  iniciar() {
    window.addEventListener('mousemove', (e) => {
      e = e || window.event;

      mouse.x = e.pageX;
      mouse.y = e.pageY;

      if (mouse.x === undefined) {
        mouse.x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        mouse.y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
      }

      // if (!this.slides.classList.contains('hidden')) {
        // this.slides.style.top = `${mouse.y+30}px`;
        // this.slides.style.left = `${mouse.x-this.slides.width}px`;
      // }

      // if (!this.etiqueta.classList.contains('hidden')) {
        this.etiqueta.style.top = `${mouse.y+this.etiquetaY}px`;
        this.etiqueta.style.left = `${mouse.x+this.etiquetaX}px`;
      // }

      // if (!this.cursor.classList.contains('hidden')) {
        this.seta.style.left = `${mouse.x + this.x}px`;
        this.seta.style.top = `${mouse.y + this.y}px`;
      // }
    })
  }

  configurarEtiqueta(etiquetaBr, etiquetaEs, cor = '') {
    const etiqueta = document.querySelector('#etiqueta-seta');
    etiqueta.innerHTML = ptBr ? etiquetaBr : etiquetaEs;
    if (cor === 'vrm') etiqueta.classList.add('vermelho');
    etiqueta.classList.remove('hidden');
  }

  esconderEtiqueta() {
    const etiqueta = document.querySelector('#etiqueta-seta');
    etiqueta.classList.add('hidden');
  }
}
