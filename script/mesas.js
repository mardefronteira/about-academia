let mesaSelecionada = 1;
let primeiraMesa = true;
let infoMesas;

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

  animar("voltar-mesas", "", idioma("Voltar", "Volver"), false, [
    "botoes-mesas",
  ]);

  atualizarInfoMesas();
  atualizarInfo(`mesa${mesaSelecionada}`, true);

  if (primeiraMesa) {
    document.querySelector("#voltar-mesa").addEventListener("click", () => {
      document.querySelector("#tocador-mesas").classList.add("hidden");
      document.querySelector("#iframe-mesas").src = "";
    });
    document
      .querySelector("#entrar-mesa")
      .addEventListener("click", mostrarMesa);
    for (let mesa of infoMesas) {
      let elemento = document.querySelector(`#${mesa.id}`);

      // atualizar descrição ao colocar o mouse sobre o título
      elemento.addEventListener("mouseover", () => {
        atualizarInfo(mesa.id);
      });
    }
    primeiraMesa = false;
  }
}

function atualizarInfo(idMesa, forcar = false) {
  if (mesaSelecionada !== idMesa.slice(-1) || forcar) {
    // garantir que as animações não se sobreponham
    // for (let timer of timerMesas) clearTimeout(timer);

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

      const setasScroll = document.querySelector("#setas-scroll-mesas");
      if (infoMesa.id === "mesa3") {
        setasScroll.classList.add("hidden");
      } else {
        setasScroll.classList.remove("hidden");
      }

      const linkMesa = document.querySelector("#entrar-mesa");
      if (infoMesa.link === "") {
        linkMesa.classList.add("inativo");
      } else {
        linkMesa.href = infoMesa.link;
        linkMesa.classList.remove("inativo");
      }
      linkMesa.classList.remove("hidden");
    }
  }
}

function mostrarMesa() {
  const mesaAtual = infoMesas[mesaSelecionada - 1];
  document.querySelector(
    "#iframe-mesas"
  ).src = `https://www.youtube.com/embed/${mesaAtual.link}`;

  const voltarMesa = document.querySelector("#voltar-mesa");
  const tituloMesa = document.querySelector("#titulo-tocador-mesa");
  const dataMesa = document.querySelector("#data-tocador-mesa");

  voltarMesa.innerHTML = "";
  tituloMesa.innerHTML = "";
  dataMesa.innerHTML = "";

  const tocadorMesas = document.querySelector("#tocador-mesas");
  tocadorMesas.classList.remove("hidden");

  animar("voltar-mesa", "", idioma("Voltar", "Volver"));
  animar("titulo-tocador-mesa", "", mesaAtual.titulo);
  animar(
    "data-tocador-mesa",
    "",
    `${idioma("AO VIVO EM ", "EN DIRECTO AL ")}${mesaAtual.data}`
  );
}

function atualizarInfoMesas() {
  infoMesas = [
    {
      id: "mesa1",
      num: "I",
      titulo: idioma(
        "Que universidade queremos?",
        "¿Qué universidad queremos?"
      ),
      data: idioma(
        "Sexta-feira, dia 30 de abril das 14h às 17h - BRT",
        "Viernes, 30 de abril de 14:00 a 17:00 horas - BRT"
      ),

      desc: idioma(
        `<a href="http://www.forumpermanente.org/convidados/antonimuntadas" class="clicavel " target="_blank" rel="noreferrer" title="Mais informações">
            <span class="nome-pessoa-mesa">Antoni Muntadas</span>
            <span class="desc-pessoa-mesa">Artista. ES/US (introdução)</span>
          </a>
          <a href="http://www.forumpermanente.org/convidados/nestor-garcia-canclini" class="clicavel " target="_blank" rel="noreferrer" title="Mais informações">
            <span class="nome-pessoa-mesa">Néstor García Canclini</span>
            <span class="desc-pessoa-mesa">Antropólogo cultural, pesquisador, catedrático IEA. AR/MX </span>
          </a>
          <a href="http://www.forumpermanente.org/convidados/eliana-souza-e-silva" class="clicavel " target="_blank" rel="noreferrer" title="Mais informações">
            <span class="nome-pessoa-mesa">Eliana Sousa Silva</span>
            <span class="desc-pessoa-mesa">Educadora, ativista, fundadora da ONG Redes da Maré, catedrática IEA. BR</span>
          </a>
          <a href="http://www.forumpermanente.org/convidados/ailton-krenak" class="clicavel " target="_blank" rel="noreferrer" title="Mais informações">
            <span class="nome-pessoa-mesa">Ailton Krenak</span>
            <span class="desc-pessoa-mesa">Líder indígena, ecologista, filósofo y escritor. BR</span>
          </a>
          <a href="http://www.forumpermanente.org/convidados/macae-evaristo" class="clicavel " target="_blank" rel="noreferrer" title="Mais informações">
            <span class="nome-pessoa-mesa">Macaé Evaristo</span>
            <span class="desc-pessoa-mesa">Educadora, ex-Secretária de Educação de MG, vereadora. BR</span>
          </a>
          <a href="http://www.forumpermanente.org/convidados/martin-grossmann-1" class="clicavel " target="_blank" rel="noreferrer" title="Mais informações">
            <span class="nome-pessoa-mesa">Martin Grossmann</span>
            <span class="desc-pessoa-mesa">Culturador e coordenador Fórum Permanente. BR (moderação)</span>
          </a>`,
        `<a href="http://www.forumpermanente.org/convidados/antonimuntadas" class="clicavel " target="_blank" rel="noreferrer" title="Mais informações">
            <span class="nome-pessoa-mesa">Antoni Muntadas</span>
            <span class="desc-pessoa-mesa">Artista. ES/US (introducción)</span>
          </a>
          <a href="http://www.forumpermanente.org/convidados/nestor-garcia-canclini" class="clicavel " target="_blank" rel="noreferrer" title="Mais informações">
            <span class="nome-pessoa-mesa">Néstor García Canclini</span>
            <span class="desc-pessoa-mesa">Antropólogo cultural, pesquisador, catedrático IEA. AR/MX </span>
          </a>
          <a href="http://www.forumpermanente.org/convidados/eliana-souza-e-silva" class="clicavel " target="_blank" rel="noreferrer" title="Mais informações">
            <span class="nome-pessoa-mesa">Eliana Sousa Silva</span>
            <span class="desc-pessoa-mesa">Activista, educadora, fundadora de la ONG Redes da Maré, catedrática IEA. BR</span>
          </a>
          <a href="http://www.forumpermanente.org/convidados/ailton-krenak" class="clicavel " target="_blank" rel="noreferrer" title="Mais informações">
            <span class="nome-pessoa-mesa">Ailton Krenak</span>
            <span class="desc-pessoa-mesa">Líder indígena, ecologista, filósofo y escritor. BR</span>
          </a>
          <a href="http://www.forumpermanente.org/convidados/macae-evaristo" class="clicavel " target="_blank" rel="noreferrer" title="Mais informações">
            <span class="nome-pessoa-mesa">Macaé Evaristo</span>
            <span class="desc-pessoa-mesa">Educadora, ex Secretaria de Educación de MG, consejera. BR</span>
          </a>
          <a href="http://www.forumpermanente.org/convidados/martin-grossmann-1" class="clicavel " target="_blank" rel="noreferrer" title="Mais informações">
            <span class="nome-pessoa-mesa">Martin Grossmann</span>
            <span class="desc-pessoa-mesa">Culturador y coordinador de Fórum Permanente. BR (moderación)</span>
            </a>`
      ),
      botao: "Entrar",
      link: idioma("6TsnWzl1mR0", "F8V-nmn_Qxo"),
    },
    {
      id: "mesa2",
      num: "II",
      titulo: "Intercontinental Academia",
      data: idioma(
        "Segunda-feira, dia 10 de maio das 9h às 12h - BRT",
        "Lunes, 10 de mayo, de 09:00 a 12:00 horas - BRT"
      ),
      desc: idioma(
        `<a href="http://www.forumpermanente.org/convidados/nikki-moore" class="clicavel " target="_blank" rel="noreferrer" title="Mais informações">
            <span class="nome-pessoa-mesa">Nikki Moore</span>
            <span class="desc-pessoa-mesa">Historiadora da arte, Wake Forest University. US</span>
          </a>
          <a href="http://www.forumpermanente.org/convidados/erica-pecanha" class="clicavel " target="_blank" rel="noreferrer" title="Mais informações">
            <span class="nome-pessoa-mesa">Érica Peçanha</span>
            <span class="desc-pessoa-mesa">Antropóloga cultural, pós-doutora IEA-USP. BR</span>
          </a>
          <a href="http://www.forumpermanente.org/convidados/david-gange" class="clicavel " target="_blank" rel="noreferrer" title="Mais informações">
            <span class="nome-pessoa-mesa">David Gange</span>
            <span class="desc-pessoa-mesa">Historiador, University of Birmingham. UK</span>
          </a>
          <a href="http://www.forumpermanente.org/convidados/mariko-murata" class="clicavel " target="_blank" rel="noreferrer" title="Mais informações">
            <span class="nome-pessoa-mesa">Mariko Murata</span>
            <span class="desc-pessoa-mesa">Teórica da mídia e de museus, Kansai University. JP</span>
          </a>
          <a href="http://www.forumpermanente.org/convidados/julia-buenaventura" class="clicavel " target="_blank" rel="noreferrer" title="Mais informações">
            <span class="nome-pessoa-mesa">Julia Buenaventura</span>
            <span class="desc-pessoa-mesa">Historiadora de arte, Universidad de los Andes. CO</span>
          </a>
          <a href="http://www.forumpermanente.org/convidados/martin-grossmann-1" class="clicavel " target="_blank" rel="noreferrer" title="Mais informações">
            <span class="nome-pessoa-mesa">Martin Grossmann</span>
            <span class="desc-pessoa-mesa">Culturador e coordenador Fórum Permanente. BR (moderação)</span>
            </a>`,
        `<a href="http://www.forumpermanente.org/convidados/nikki-moore" class="clicavel " target="_blank" rel="noreferrer" title="Mais informações">
            <span class="nome-pessoa-mesa">Nikki Moore</span>
            <span class="desc-pessoa-mesa">Historiadora del arte, Universidad de Wake Forest. US</span>
          </a>
          <a href="http://www.forumpermanente.org/convidados/erica-pecanha" class="clicavel " target="_blank" rel="noreferrer" title="Mais informações">
            <span class="nome-pessoa-mesa">Érica Peçanha</span>
            <span class="desc-pessoa-mesa">Antropóloga cultural. BR</span>
          </a>
          <a href="http://www.forumpermanente.org/convidados/david-gange" class="clicavel " target="_blank" rel="noreferrer" title="Mais informações">
            <span class="nome-pessoa-mesa">David Gange</span>
            <span class="desc-pessoa-mesa">Historiador, Universidad de Birmingham. UK</span>
          </a>
          <a href="http://www.forumpermanente.org/convidados/mariko-murata" class="clicavel " target="_blank" rel="noreferrer" title="Mais informações">
            <span class="nome-pessoa-mesa">Mariko Murata</span>
            <span class="desc-pessoa-mesa">Teórica de los medios de comunicación y los museos, Universidad de Kansai. JP</span>
          </a>
          <a href="http://www.forumpermanente.org/convidados/julia-buenaventura" class="clicavel " target="_blank" rel="noreferrer" title="Mais informações">
            <span class="nome-pessoa-mesa">Julia Buenaventura</span>
            <span class="desc-pessoa-mesa">Historiadora del arte, Universidad de los Andes. CO</span>
          </a>
          <a href="http://www.forumpermanente.org/convidados/martin-grossmann-1" class="clicavel " target="_blank" rel="noreferrer" title="Mais informações">
            <span class="nome-pessoa-mesa">Martin Grossmann</span>
            <span class="desc-pessoa-mesa">Culturador y coordinador Fórum Permanente. BR (moderación)</span>
          </a>`
      ),
      botao: "Em breve",
      link: "",
    },
    {
      id: "mesa3",
      num: "III",
      titulo: idioma("Universidade e contexto", "Universidad y contexto"),
      data: idioma(
        "Segunda-feira, dia 10 de maio das 13h30 às 16h - BRT",
        "Lunes, 10 de mayo de 13:30 a 16:00 horas - BRT"
      ),
      desc: idioma(
        `<a href="http://www.forumpermanente.org/convidados/naomar-de-almeida-filho" class="clicavel " target="_blank" rel="noreferrer" title="Mais informações">
            <span class="nome-pessoa-mesa">Naomar de Almeida Filho</span>
            <span class="desc-pessoa-mesa">Médico epidemiologista, ex-reitor UFBA, catedrático IEA. BR</span>
          </a>
          <a href="http://www.forumpermanente.org/convidados/helena-nader" class="clicavel " target="_blank" rel="noreferrer" title="Mais informações">
            <span class="nome-pessoa-mesa">Helena Nader</span>
            <span class="desc-pessoa-mesa">Vice-presidente da ABC-BR, biomédica, catedrática IEA. BR</span>
          </a>
          <a href="http://www.forumpermanente.org/convidados/guilhermewisnik" class="clicavel " target="_blank" rel="noreferrer" title="Mais informações">
            <span class="nome-pessoa-mesa">Guilherme Wisnik</span>
            <span class="desc-pessoa-mesa">Arquiteto, professor da FAU-USP, crítico de arte. BR</span>
          </a>
          <a href="http://www.forumpermanente.org/convidados/R_Ribeiro" class="clicavel " target="_blank" rel="noreferrer" title="Mais informações">
            <span class="nome-pessoa-mesa">Renato Janine Ribeiro</span>
            <span class="desc-pessoa-mesa">Filósofo, ex-Ministro da Educação. BR (moderação)</span>
          </a>`,
        `<a href="http://www.forumpermanente.org/convidados/naomar-de-almeida-filho" class="clicavel " target="_blank" rel="noreferrer" title="Mais informações">
            <span class="nome-pessoa-mesa">Naomar de Almeida Filho</span>
            <span class="desc-pessoa-mesa">Ex decano UFBA, médico epidemiólogo, catedrático IEA. BR</span>
          </a>
          <a href="http://www.forumpermanente.org/convidados/helena-nader" class="clicavel " target="_blank" rel="noreferrer" title="Mais informações">
            <span class="nome-pessoa-mesa">Helena Nader</span>
            <span class="desc-pessoa-mesa">Vicepresidenta de ABC-BR, biomédica, catedrática IEA. BR</span>
          </a>
          <a href="http://www.forumpermanente.org/convidados/guilhermewisnik" class="clicavel " target="_blank" rel="noreferrer" title="Mais informações">
            <span class="nome-pessoa-mesa">Guilherme Wisnik</span>
            <span class="desc-pessoa-mesa">Arquitecto, profesor de la FAU-USP, crítico de arte. BR</span>
          </a>
          <a href="http://www.forumpermanente.org/convidados/R_Ribeiro" class="clicavel " target="_blank" rel="noreferrer" title="Mais informações">
            <span class="nome-pessoa-mesa">Renato Janine Ribeiro</span>
            <span class="desc-pessoa-mesa">Ex Ministro de Educación, filósofo. BR (moderação)</span>
          </a>`
      ),
      botao: "Em breve",
      link: "",
    },
  ];
}
