function mesas() {
  // Configurar mouse
  seta.configurar("normal-vrm");

  // Reconfigurar elementos HTML e mostrar página
  let divMesas = document.querySelector("#mesas");
  divMesas.innerHTML = `
  <h1 id="titulo-mesas" class="titulo-mesas vermelho"></h1>
  <div id="info-mesa">
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
        `Sexta-feira, dia 30 de abril das 14h às 18h<br><br>
        Antoni Muntadas (artista. ES/US) (introdução)<br>
        Néstor García Canclini (antropólogo cultural, pesquisador, catedrático IEA. AR/MX)<br>
        Eliana Sousa Silva (ativista, educadora, fundadora da ONG Redes da Maré, catedrática IEA. BR)<br>
        Lilia Schwartz (historiadora e antropóloga. BR)<br>
        Ailton Krenak (líder indígena, ambientalista, filósofo e escritor. BR)`,
        `Viernes, 30 de abril de 14:00 a 18:00 horas<br><br>
        Antoni Muntadas (artista. ES/US) (introducción)<br>
        Néstor García Canclini (antropólogo cultural, investigador, catedrático IEA. AR/MX)<br>
        Eliana Sousa Silva (activista, educadora, fundadora de la ONG Redes da Maré, catedrática IEA. BR)<br>
        Lilia Schwartz (historiadora y antropóloga. BR)<br>
        Ailton Krenak (líder indígena, ecologista, filósofo y escritor. BR)`
      ),
    },
    {
      id: "mesa2",
      num: "II",
      titulo: idioma("Universidade e contexto", "Universidad y contexto"),
      desc: idioma(
        `Segunda-feira, dia 10 de maio das 9h às 13h<br><br>
        Naomar de Almeida Filho (ex-reitor UFBA, médico epidemiologista, catedrático IEA. BR)<br>
        Helena Nader (vice-presidente da ABC-BR, biomédica, catedrática IEA. BR)<br>
        Paulo Herkenhoff (crítico, historiador, curador, catedrático IEA. BR)<br>
        Macaé Evaristo (educadora, ex-Secretária de Educação de MG, vereadora. BR)<br>
        Ramon Castillo Inostroza (diretor da Escola de Arte da Universidad Diego Portales.  CL)<br>
        Renato Janine Ribeiro (ex-Ministro da Educação, filósofo. BR) (moderação)`,
        `Lunes, 10 de mayo de 9:00 a 13:00 horas<br><br>
        Naomar de Almeida Filho (ex decano UFBA, médico epidemiólogo, catedrático IEA. BR)<br>
        Helena Nader (vicepresidenta de ABC-BR, biomédica, catedrática IEA. BR)<br>
        Paulo Herkenhoff (crítico, historiador, comisario, catedrático IEA. BR)<br>
        Macaé Evaristo (educadora, ex Secretaria de Educación del Estado de Minas Gerais-BR, concejal. BR)<br>
        Ramón Castillo Inostroza (director de la Escuela de Arte, Universidad Diego Portales. CL)<br>
        Renato Janine Ribeiro (ex Ministro de Educación, filósofo. BR) (moderación)`
      ),
    },
    {
      id: "mesa3",
      num: "III",
      titulo: "Intercontinental Academia",
      desc: idioma(
        `Segunda-feira, dia 10 de maio das 14h às 18h<br><br>
        Nikki Moore (historiadora da arte, Wake Forest University, US)<br>
        Érica Peçanha (antropóloga, critica literaria, BR)<br>
        David Gange (historiador, University of Birmingham, UK)<br>
        Mariko Murata (teórica da mídia e de museus, Kansai University, JP)<br>
        Julia Buenaventura (historiadora de arte, Universidad de los Andes. CO)<br>
        Martin Grossmann (culturador e coordenador Fórum Permanente. BR) (moderação)`,
        `Lunes, 10 de mayo, de 14:00 a 18:00 horas<br><br>
        Nikki Moore (historiadora del arte, Universidad de Wake Forest, US)<br>
        Érica Peçanha (antropóloga, crítica literaria, BR)<br>
        David Gange (historiador, Universidad de Birmingham, UK)<br>
        Mariko Murata (teórica de los medios de comunicación y los museos, Universidad de Kansai, JP)<br>
        Julia Buenaventura (historiadora del arte, Universidad de los Andes, CO)<br>
        Martin Grossmann (culturador y coordinador Fórum Permanente. BR) (moderación)`
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
  if (mesaSelecionada !== infoMesa.id.slice(-1)) {
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
      // descMesas.innerHTML = infoMesa.desc;
      descMesas.innerHTML = "";
      animar("desc-mesa", "", infoMesa.desc, false, []);
      document.querySelector("#entrar-mesa").classList.remove("hidden");
    }
  }
}

function mostrarMesa() {
  console.log("abriu a mesa " + mesaSelecionada);
}
