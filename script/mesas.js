function mesas() {
  // Configurar mouse
  seta.configurar('normal-vrm');

  // Reconfigurar elementos HTML e mostrar página
  let divMesas = document.querySelector('#mesas');
  divMesas.innerHTML = `
  <h1 id="titulo-mesas" class="titulo-mesas vermelho"></h1>
  <nav>
    <ul id="nav-mesas" class="linha">
      <li id="mesa1" class="link-mesa titulo-mesas">
        <span id="mesa1-underline" class="underline-mesas">_</span><span id="mesa1-titulo"></span>
      </li>
      <li id="mesa2" class="link-mesa titulo-mesas">
        <span id="mesa2-underline" class="underline-mesas">_</span><span id="mesa2-titulo"></span>
      </li>
      <li id="mesa3" class="link-mesa titulo-mesas">
        <span id="mesa3-underline" class="underline-mesas">_</span><span id="mesa3-titulo"></span>
      </li>
    </ul>
  </nav>
  <p id="desc-mesas"></p>
  `;
  divMesas.classList.remove('hidden');

  animar('titulo-mesas','',idioma('Mesas Redondas','Conferencias'),false,['titulo-mesas','vermelho']);

  // detalhes das mesas
  let mesas = [
    {
      id: 'mesa1',
      titulo: 'I',
      desc: idioma('descrição da mesa 1 em brasileiro', 'descrição da mesa 1 em espanhol'),
    },{
      id: 'mesa2',
      titulo: 'II',
      desc: idioma('descrição da mesa 2 em brasileiro', 'descrição da mesa 2 em espanhol'),
    },{
      id: 'mesa3',
      titulo: 'III',
      desc: idioma('descrição da mesa 3 em brasileiro', 'descrição da mesa 3 em espanhol'),
    },
  ];

  for (let mesa of mesas) {
    let elemento = document.querySelector(`#${mesa.id}`);

    // atualizar descrição ao colocar o mouse sobre o título
    elemento.addEventListener('mouseover', ()=>{atualizarDesc(mesa.desc)});

     // configurar clique
     elemento.addEventListener('click', ()=>{console.log(`abrir mesa ${mesa.id.slice(-1)}`)})

    // escrever título
    animar(`${mesa.id}-titulo`, mesa.id, mesa.titulo, false, [])
  }

}

function atualizarDesc(texto) {
  let descMesas = document.querySelector('#desc-mesas');

  if (descMesas.innerHTML !== texto) {
    descMesas.innerHTML = '';
    animar('desc-mesas', '', texto, false, []);
  }
}
