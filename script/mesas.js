function mesas() {
  // Configurar mouse
  seta.configurar("normal-vrm");

  // Reconfigurar elementos HTML e mostrar página
  let divMesas = document.querySelector("#mesas");
  divMesas.innerHTML = `
  <h1 id="titulo-mesas" class="titulo-mesas vermelho"></h1>
  <nav>
    <ul id="nav-mesas" class="linha">
      <li id="mesa1" class="link-mesa">
        <!-- <span id="mesa1-underline" class="underline-mesas">_</span> -->
        <span id="mesa1-num" class="texto-mesas"></span>
      </li>
      <li id="mesa2" class="link-mesa">
        <!-- <span id="mesa2-underline" class="underline-mesas">_</span> -->
        <span id="mesa2-num" class="texto-mesas"></span>
      </li>
      <li id="mesa3" class="link-mesa">
        <!-- <span id="mesa3-underline" class="underline-mesas">_</span> -->
        <span id="mesa3-num" class="texto-mesas"></span>
      </li>
    </ul>
  </nav>
  <div id="info-mesa">
    <p id="titulo-mesa" class="texto-mesas"></p>
    <p id="desc-mesa" class="texto-mesas"></p>
  </div>
  <p id="entrar-mesa" class="texto-mesas clicavel hidden">entrar</p>
  `;
  divMesas.classList.remove("hidden");

  animar(
    "titulo-mesas",
    "",
    idioma("Mesas Redondas", "Mesas Redondas"),
    false,
    ["titulo-mesas", "vermelho"]
  );

  // detalhes das mesas
  let mesas = [
    {
      id: "mesa1",
      num: "I",
      titulo: idioma(
        "Que universidade queremos?",
        "¿Qué universidad queremos?"
      ),
      desc: idioma(
        `Sexta-feira, dia 30 de abril das 14h às 18h<br/><br/>
        Néstor García Canclini (México)<br/>
        Eliana Sousa Silva<br/>
        Lilia Schwartz<br/>
        Ailton Krenak / Jaider Esbel / Daiara Tukano<br/>`,
        `Viernes, 30 de abril de 14 a 18 horas<br/><br/>
        Néstor García Canclini (Mexico)<br/>
        Eliana Sousa Silva<br/>
        Lilia Schwartz<br/>
        Ailton Krenak / Jaider Esbel / Daiara Tukano<br/>`
      ),
    },
    {
      id: "mesa2",
      num: "II",
      titulo: idioma("Universidade e contexto", "Universidad y contexto"),
      desc: idioma(
        `Segunda-feira, dia 10 de maio das 8h às 12h<br/><br/>
        Naomar de Almeida Filho<br/>
        Helena Nader<br/>
        Paulo Herkenhoff<br/>
        Macaé Evaristo<br/>
        Ramon Castillo Inostroza (Chile)<br/>
        Renato Janine Ribeiro (moderação)
        `,
        `Lunes, 10 de mayo de 8 a 12 horas<br/><br/>
        Naomar de Almeida Filho<br/>
        Helena Nader<br/>
        Paulo Herkenhoff<br/>
        Macaé Evaristo<br/>
        Ramon Castillo Inostroza (Chile)<br/>
        Renato Janine Ribeiro (moderación)`
      ),
    },
    {
      id: "mesa3",
      num: "III",
      titulo: idioma("Intercontinental Academia", "Intercontinental Academia"),
      desc: idioma(
        `Terça-feira, dia 11 de maio das 14h às 18h<br/><br/>
        Nikki Moore (EUA)<br/>
        Érica Peçanha (IEA)<br/>
        David Gange (UK)<br/>
        Mariko Murata (Jap)<br/>
        Julia Buenaventura (Col)<br/>
        Martin Grossmann (moderação)`,
        `Martes 11 de mayo, de 14:00 a 18:00 horas<br/><br/>
        Nikki Moore (EUA)<br/>
        Érica Peçanha (IEA)<br/>
        David Gange (UK)<br/>
        Mariko Murata (Jap)<br/>
        Julia Buenaventura (Col)<br/>
        Martin Grossmann (moderación)`
      ),
    },
  ];

  for (let mesa of mesas) {
    let elemento = document.querySelector(`#${mesa.id}`);

    // atualizar descrição ao colocar o mouse sobre o título
    elemento.addEventListener("mouseover", () => {
      atualizarInfo(mesa);
    });

    // escrever título
    animar(`${mesa.id}-num`, mesa.id, mesa.num, false, []);
  }

  document.querySelector("#entrar-mesa").addEventListener("click", mostrarMesa);
}

let mesaSelecionada = 0;

function atualizarInfo(infoMesa) {
  // garantir que as animações não se sobreponham
  for (let timer of timers) clearTimeout(timer);

  mesaSelecionada = infoMesa.id.slice(-1);

  // deixar número vermelho até que outra mesa seja selecionada
  for (let i of [1, 2, 3]) {
    const mesa = document.querySelector(`#mesa${i}`);
    infoMesa.id === `mesa${i}`
      ? mesa.classList.add("vermelho")
      : mesa.classList.remove("vermelho");
  }

  const tituloMesas = document.querySelector("#titulo-mesa");
  const descMesas = document.querySelector("#desc-mesa");

  if (tituloMesas.innerHTML !== infoMesa.titulo) {
    tituloMesas.innerHTML = "";
    animar("titulo-mesa", "", infoMesa.titulo, false, []);
    descMesas.innerHTML = infoMesa.desc;
    document.querySelector("#entrar-mesa").classList.remove("hidden");
  }
}

function mostrarMesa() {
  console.log("abriu a mesa " + mesaSelecionada);
}
