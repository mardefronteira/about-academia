class Cursor {
  constructor() {
    this.cursor = document.querySelector('#cursor');
    this.etiqueta = document.querySelector('#etiqueta-seta');
    this.slides = document.querySelector('#slides');
    this.x = 0;
    this.y = 0;
    this.etiquetaX = 0;
    this.etiquetaY = 0;
  }

  configurar(tipo) {
    switch (tipo) {
      case 'seta-vrm-esquerda':
        this.x = 0;
        this.y = -15;
        this.cursor.src = "img/cursor/setaVermelhaEsquerda.png"
        break;
      case 'seta-branca-esquerda':
        this.x = 0;
        this.y = -15;
        this.cursor.src = "img/cursor/setaBrancaEsquerda.png"
        break;
      case 'seta-vrm-direita':
        this.x = -128;
        this.y = -15;
        this.cursor.src = "img/cursor/setaVermelhaDireita.png"
        break;
      case 'seta-branca-direita':
        this.x = -128;
        this.y = -15;
        this.cursor.src = "img/cursor/setaBrancaDireita.png"
        break;
      case 'normal-vrm':
        this.x = 0;
        this.y = 0;
        this.cursor.src = "img/cursor/normalVermelho.png"
        break;
      case 'normal-branco':
        this.x = 0;
        this.y = 0;
        this.cursor.src = "img/cursor/normalBranco.png"
        break;
    }
  }

  posicionar() {
    this.cursor.style.top = mouse.x + this.x;
    this.cursor.style.left = mouse.y + this.y;
  }

  mostrarSlides() {
    this.slides.classList.remove('hidden');
  }

  iniciar() {
    window.addEventListener('mousemove', (e) => {
      e = e || window.event;

      mouse.x = e.pageX;
      mouse.y = e.pageY;

      if (mouse.x === undefined) {
        mouse.x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        mouse.y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
      }

      if (!this.slides.classList.contains('hidden')) {
        this.slides.style.top = `${mouse.y+30}px`;
        this.slides.style.left = `${mouse.x-this.slides.width}px`;
      }

      if (!this.etiqueta.classList.contains('hidden')) {
        this.etiqueta.style.top = `${mouse.y-120}px`;
        this.etiqueta.style.left = `${mouse.x-140}px`;
      }

      if (!this.cursor.classList.contains('hidden')) {
        this.cursor.style.left = `${mouse.x + this.x}px`;
        this.cursor.style.top = `${mouse.y + this.y}px`;
      }
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
