let infoMesas;
let mesaSelecionada = 0;

function mesas() {
  cenaAtual = "mesas";

  // Configurar mouse
  seta.configurar("normal-vrm");

  // Reconfigurar elementos HTML e mostrar página
  const divMesas = document.querySelector("#mesas");
  const tituloMesas = document.querySelector("#titulo-mesas");
  const tituloMesa = document.querySelector("#titulo-mesa");
  const dataMesa = document.querySelector("#data-mesa");
  const descMesa = document.querySelector("#desc-mesa");
  const botaoMesa = document.querySelector("#entrar-mesa");

  // zerar mesaSelecionada
  mesaSelecionada = 0;

  for (let elmt of [tituloMesas, tituloMesa, dataMesa, descMesa, botaoMesa]) {
    elmt.innerHTML = "";
  }

  divMesas.classList.remove("hidden");

  animar(
    "titulo-mesas",
    "",
    idioma("Mesas Redondas", "Mesas Redondas"),
    false,
    ["titulo-mesas", "vermelho"]
  );

  // detalhes das mesas
  infoMesas = [
    {
      id: "mesa1",
      num: "I",
      titulo: idioma(
        "Que universidade queremos?",
        "¿Qué universidad queremos?"
      ),
      data: idioma(
        "Sexta-feira, dia 30 de abril das 14h às 18h",
        "Viernes, 30 de abril de 14:00 a 18:00 horas"
      ),

      desc: idioma(
        `<a href="#" class="clicavel" target="_blank" rel="noreferrer" title="Mais informações">
          <span class="nome-pessoa-mesa">Antoni Muntadas</span>
          <span class="desc-pessoa-mesa">Artista. ES/US (introdução)</span>
        </a>
        <a href="#" class="clicavel" target="_blank" rel="noreferrer" title="Mais informações">
          <span class="nome-pessoa-mesa">Néstor García Canclini</span>
          <span class="desc-pessoa-mesa">Antropólogo cultural, pesquisador, catedrático IEA. AR/MX </span>
        </a>
        <a href="#" class="clicavel" target="_blank" rel="noreferrer" title="Mais informações">
          <span class="nome-pessoa-mesa">Eliana Sousa Silva</span>
          <span class="desc-pessoa-mesa">Ativista, educadora, fundadora da ONG Redes da Maré, catedrática IEA. BR</span>
        </a>
        <a href="#" class="clicavel" target="_blank" rel="noreferrer" title="Mais informações">
          <span class="nome-pessoa-mesa">Ailton Krenak</span>
          <span class="desc-pessoa-mesa">Líder indígena, ambientalista, filósofo e escritor. BR</span>
        </a>
        <a href="#" class="clicavel" target="_blank" rel="noreferrer" title="Mais informações">
          <span class="nome-pessoa-mesa">Lilia Schwartz</span>
          <span class="desc-pessoa-mesa">Historiadora e antropóloga. BR</span>
        </a>
`,
        `<a href="#" class="clicavel" target="_blank" rel="noreferrer" title="Mais informações">
          <span class="nome-pessoa-mesa">Antoni Muntadas</span>
          <span class="desc-pessoa-mesa">Artista. ES/US (introducción)</span>
        </a>
        <a href="#" class="clicavel" target="_blank" rel="noreferrer" title="Mais informações">
          <span class="nome-pessoa-mesa">Néstor García Canclini</span>
          <span class="desc-pessoa-mesa">Antropólogo cultural, pesquisador, catedrático IEA. AR/MX </span>
        </a>
        <a href="#" class="clicavel" target="_blank" rel="noreferrer" title="Mais informações">
          <span class="nome-pessoa-mesa">Eliana Sousa Silva</span>
          <span class="desc-pessoa-mesa">Activista, educadora, fundadora de la ONG Redes da Maré, catedrática IEA. BR</span>
        </a>
        <a href="#" class="clicavel" target="_blank" rel="noreferrer" title="Mais informações">
          <span class="nome-pessoa-mesa">Ailton Krenak</span>
          <span class="desc-pessoa-mesa">Líder indígena, ecologista, filósofo y escritor. BR</span>
        </a>
        <a href="#" class="clicavel" target="_blank" rel="noreferrer" title="Mais informações">
          <span class="nome-pessoa-mesa">Lilia Schwartz</span>
          <span class="desc-pessoa-mesa">Historiadora y antropóloga. BR</span>
        </a>`
      ),
      botao: "entrar",
    },
    {
      id: "mesa2",
      num: "II",
      titulo: idioma("Universidade e contexto", "Universidad y contexto"),
      data: idioma(
        "Segunda-feira, dia 10 de maio das 9h às 13h",
        "Lunes, 10 de mayo de 9:00 a 13:00 horas"
      ),
      desc: idioma(
        `<a href="#" class="clicavel" target="_blank" rel="noreferrer" title="Mais informações">
          <span class="nome-pessoa-mesa">Naomar de Almeida Filho</span>
          <span class="desc-pessoa-mesa">Ex-reitor UFBA, médico epidemiologista, catedrático IEA. BR</span>
        </a>
        <a href="#" class="clicavel" target="_blank" rel="noreferrer" title="Mais informações">
          <span class="nome-pessoa-mesa">Helena Nader</span>
          <span class="desc-pessoa-mesa">Vice-presidente da ABC-BR, biomédica, catedrática IEA. BR</span>
        </a>
        <a href="#" class="clicavel" target="_blank" rel="noreferrer" title="Mais informações">
          <span class="nome-pessoa-mesa">Paulo Herkenhoff</span>
          <span class="desc-pessoa-mesa">Crítico, historiador, curador, catedrático IEA. BR</span>
        </a>
        <a href="#" class="clicavel" target="_blank" rel="noreferrer" title="Mais informações">
          <span class="nome-pessoa-mesa">Macaé Evaristo</span>
          <span class="desc-pessoa-mesa">Educadora, ex-Secretária de Educação de MG, vereadora. BR</span>
        </a>
        <a href="#" class="clicavel" target="_blank" rel="noreferrer" title="Mais informações">
          <span class="nome-pessoa-mesa">Ramon Castillo Inostroza</span>
          <span class="desc-pessoa-mesa">Diretor da Escola de Arte da Universidad Diego Portales. CL</span>
        </a>
        <a href="#" class="clicavel" target="_blank" rel="noreferrer" title="Mais informações">
          <span class="nome-pessoa-mesa">Renato Janine Ribeiro</span>
          <span class="desc-pessoa-mesa">Ex-Ministro da Educação, filósofo. BR (moderação)</span>
        </a>`,
        `<a href="#" class="clicavel" target="_blank" rel="noreferrer" title="Mais informações">
          <span class="nome-pessoa-mesa">Naomar de Almeida Filho</span>
          <span class="desc-pessoa-mesa">Ex decano UFBA, médico epidemiólogo, catedrático IEA. BR</span>
        </a>
        <a href="#" class="clicavel" target="_blank" rel="noreferrer" title="Mais informações">
          <span class="nome-pessoa-mesa">Helena Nader</span>
          <span class="desc-pessoa-mesa">Vicepresidenta de ABC-BR, biomédica, catedrática IEA. BR</span>
        </a>
        <a href="#" class="clicavel" target="_blank" rel="noreferrer" title="Mais informações">
          <span class="nome-pessoa-mesa">Paulo Herkenhoff</span>
          <span class="desc-pessoa-mesa">Crítico, historiador, comisario, catedrático IEA. BR</span>
        </a>
        <a href="#" class="clicavel" target="_blank" rel="noreferrer" title="Mais informações">
          <span class="nome-pessoa-mesa">Macaé Evaristo</span>
          <span class="desc-pessoa-mesa">Educadora, ex Secretaria de Educación del Estado de Minas Gerais-BR, concejal. BR</span>
        </a>
        <a href="#" class="clicavel" target="_blank" rel="noreferrer" title="Mais informações">
          <span class="nome-pessoa-mesa">Ramon Castillo Inostroza</span>
          <span class="desc-pessoa-mesa">Director de la Escuela de Arte, Universidad Diego Portales. CL</span>
        </a>
        <a href="#" class="clicavel" target="_blank" rel="noreferrer" title="Mais informações">
          <span class="nome-pessoa-mesa">Renato Janine Ribeiro</span>
          <span class="desc-pessoa-mesa">Ex Ministro de Educación, filósofo. BR (moderação)</span>
        </a>`
      ),
      botao: "em breve",
    },
    {
      id: "mesa3",
      num: "III",
      titulo: "Intercontinental Academia",
      data: idioma(
        "Segunda-feira, dia 10 de maio das 14h às 18h",
        "Lunes, 10 de mayo, de 14:00 a 18:00 horas"
      ),
      desc: idioma(
        `<a href="#" class="clicavel" target="_blank" rel="noreferrer" title="Mais informações">
          <span class="nome-pessoa-mesa">Nikki Moore</span>
          <span class="desc-pessoa-mesa">Historiadora da arte, Wake Forest University, US</span>
        </a>
        <a href="#" class="clicavel" target="_blank" rel="noreferrer" title="Mais informações">
          <span class="nome-pessoa-mesa">Érica Peçanha</span>
          <span class="desc-pessoa-mesa">Antropóloga, critica literaria, BR</span>
        </a>
        <a href="#" class="clicavel" target="_blank" rel="noreferrer" title="Mais informações">
          <span class="nome-pessoa-mesa">David Gange</span>
          <span class="desc-pessoa-mesa">Historiador, University of Birmingham, UK</span>
        </a>
        <a href="#" class="clicavel" target="_blank" rel="noreferrer" title="Mais informações">
          <span class="nome-pessoa-mesa">Mariko Murata</span>
          <span class="desc-pessoa-mesa">Teórica da mídia e de museus, Kansai University, JP</span>
        </a>
        <a href="#" class="clicavel" target="_blank" rel="noreferrer" title="Mais informações">
          <span class="nome-pessoa-mesa">Julia Buenaventura</span>
          <span class="desc-pessoa-mesa">Historiadora de arte, Universidad de los Andes. CO</span>
        </a>
        <a href="#" class="clicavel" target="_blank" rel="noreferrer" title="Mais informações">
          <span class="nome-pessoa-mesa">Martin Grossmann</span>
          <span class="desc-pessoa-mesa">Culturador e coordenador Fórum Permanente. BR (moderação)</span>
        </a>`,
        `<a href="#" class="clicavel" target="_blank" rel="noreferrer" title="Mais informações">
          <span class="nome-pessoa-mesa">Nikki Moore</span>
          <span class="desc-pessoa-mesa">Historiadora del arte, Universidad de Wake Forest, US</span>
        </a>
        <a href="#" class="clicavel" target="_blank" rel="noreferrer" title="Mais informações">
          <span class="nome-pessoa-mesa">Érica Peçanha</span>
          <span class="desc-pessoa-mesa">Antropóloga, crítica literaria, BR</span>
        </a>
        <a href="#" class="clicavel" target="_blank" rel="noreferrer" title="Mais informações">
          <span class="nome-pessoa-mesa">David Gange</span>
          <span class="desc-pessoa-mesa">Historiador, Universidad de Birmingham, UK</span>
        </a>
        <a href="#" class="clicavel" target="_blank" rel="noreferrer" title="Mais informações">
          <span class="nome-pessoa-mesa">Mariko Murata</span>
          <span class="desc-pessoa-mesa">Teórica de los medios de comunicación y los museos, Universidad de Kansai, JP</span>
        </a>
        <a href="#" class="clicavel" target="_blank" rel="noreferrer" title="Mais informações">
          <span class="nome-pessoa-mesa">Julia Buenaventura</span>
          <span class="desc-pessoa-mesa">Historiadora del arte, Universidad de los Andes, CO</span>
        </a>
        <a href="#" class="clicavel" target="_blank" rel="noreferrer" title="Mais informações">
          <span class="nome-pessoa-mesa">Martin Grossmann</span>
          <span class="desc-pessoa-mesa">Culturador y coordinador Fórum Permanente. BR (moderación)</span>
        </a>`
      ),
      botao: "em breve",
    },
  ];

  for (let mesa of infoMesas) {
    let elemento = document.querySelector(`#${mesa.id}`);

    // atualizar descrição ao colocar o mouse sobre o título
    elemento.addEventListener("mouseover", () => {
      atualizarInfo(mesa.id);
    });
  }

  document.querySelector("#entrar-mesa").addEventListener("click", mostrarMesa);
}

function atualizarInfo(idMesa) {
  if (mesaSelecionada !== idMesa.slice(-1)) {
    // garantir que as animações não se sobreponham
    for (let timer of timers) clearTimeout(timer);

    mesaSelecionada = idMesa.slice(-1);
    const infoMesa = infoMesas.find((mesa) => mesa.id === idMesa);

    // deixar número vermelho até que outra mesa seja selecionada
    for (let i of [1, 2, 3]) {
      const mesa = document.querySelector(`#mesa${i}`);
      idMesa === `mesa${i}`
        ? mesa.classList.add("vermelho")
        : mesa.classList.remove("vermelho");
    }

    // rolar scroll de volta ao topo
    const conteinerDesc = document.querySelector("#conteiner-desc-mesa");
    conteinerDesc.scrollTop = 0;

    const tituloMesa = document.querySelector("#titulo-mesa");
    const descMesa = document.querySelector("#desc-mesa");
    const dataMesa = document.querySelector("#data-mesa");
    const entrarMesa = document.querySelector("#entrar-mesa");

    if (tituloMesa.innerHTML !== infoMesa.titulo) {
      tituloMesa.innerHTML = "";
      dataMesa.innerHTML = infoMesa.data;
      entrarMesa.innerHTML = infoMesa.botao;
      animar("titulo-mesa", "", infoMesa.titulo, false, []);
      descMesa.innerHTML = infoMesa.desc;
      // descMesa.innerHTML = "";
      // animar("desc-mesa", "", infoMesa.desc, false, []);
      document.querySelector("#entrar-mesa").classList.remove("hidden");
    }
  }
}

function mostrarMesa() {
  console.log("abriu a mesa " + mesaSelecionada);
}
