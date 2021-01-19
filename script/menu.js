const paginas = ['sala3d', 'publicacoes', 'mesas', 'info'];

function menu() {
  const menu = document.querySelector('#menu');
  if (menu.classList.contains('hidden')) {

    const textosMenu = ['Exibição Digital', 'Publicações', 'Mesas Redondas', 'Info'];

    // resetar menu
    menu.innerHTML = `
    <img id="gif-fundo-menu" src="img/cursor/slides.gif" alt="">
    <p id="titulo-menu"></p>
    <nav id="nav-menu">
      <ul>
        <li id="sala3d-menu" class="item-menu">
        <p id="sala3dPt" class="texto-menu-pt"></p>
        <p id="sala3dEs" class="texto-menu-es"></p>
        </li>
        <li id="publicacoes-menu" class="item-menu">
        <p id="publicacoesPt" class="texto-menu-pt"></p>
        <p id="publicacoesEs" class="texto-menu-es"></p>
        </li>
        <li id="mesas-menu" class="item-menu">
        <p id="mesasPt" class="texto-menu-pt"></p>
        <p id="mesasEs" class="texto-menu-es"></p>
        </li>
        <li id="info-menu" class="item-menu">
        <p id="infoPt" class="texto-menu-pt"></p>
        <p id="infoEs" class="texto-menu-es"></p>
        </li>
      </ul>
    </nav>`;

    // mostrar menu
    menu.classList.remove('hidden');

    // popular lista do menu
    const listaMenu = document.createElement('DL');
    for (let i in paginas) {

      let itemPt = document.querySelector(`#${paginas[i]}Pt`);
      let itemEs = document.querySelector(`#${paginas[i]}Es`);

      itemPt.innerHTML = textosMenu[i];
      itemEs.innerHTML = textosMenu[i]; 
    }

    // escrever textos
    // animar();

  } else {
    menu.classList.add('hidden');
  }
}

function mostrar(idAlvo) {

}
