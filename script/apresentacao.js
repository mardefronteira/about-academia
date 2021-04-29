function apresentacao() {
  cenaAtual = "apresentacao";

  const titulo = document.querySelector("#titulo-apresentacao");
  const autor = document.querySelector("#autor-apresentacao");
  const voltar = document.querySelector("#voltar-apresentacao");

  for (let campoTexto in [titulo, autor, voltar]) {
    campoTexto.innerHTML = "";
  }

  animar("titulo-apresentacao", "", idioma("Apresentação", "Presentación"));
  animar("autor-apresentacao", "", "por Martin<br>Grossmann");
  animar("voltar-apresentacao", "", idioma("Voltar", "Volver"));

  const corpo = document.querySelector("#texto-apresentacao");
  corpo.innerHTML = idioma(apresentacaoPt, apresentacaoEs);

  const apresentacaoElt = document.querySelector(`#apresentacao`);
  apresentacaoElt.classList.remove("hidden");
  apresentacaoElt.scrollTop = 0;

  sugerirScroll();
}

const apresentacaoPt = `<h2 class="titulo-apresentacao">Con/ciência | sobre academia</h2>

<section id="epigrafe">
  <blockquote class="notas-apresentacao">
    O risco inerente à prática é o que garante sua perene qualidade subversiva,
    sua capacidade de expor as contradições em nosso sistema que consideramos
    naturais e dadas. <span class="negrito">Jose Falconi 2017</span
    ><a href="#nota-1"><sup id="indice-1" class="vermelho">1</sup></a>
  </blockquote>

  <blockquote class="notas-apresentacao">
    Portanto, é um ataque de dentro, uma contaminação interna, que faz com que
    essas estruturas parem de funcionar por um momento da forma que normalmente
    se espera, para que possamos percebê-las de outro ângulo, de preferência
    crítico.
    <span class="negrito">Arlindo Machado 2002</span
    ><a href="#nota-2"><sup id="indice-2" class="vermelho">2</sup></a>
  </blockquote>

  <blockquote class="notas-apresentacao">
    Os artistas devem manter a mesma posição crítica que está na base das obras
    mais lúcidas da história da arte; aquelas obras enraizadas em um determinado
    tempo e lugar, ou seja, em um contexto.
    <span class="negrito">Antoni Muntadas 1990</span
    ><a href="#nota-3"><sup id="indice-3" class="vermelho">3</sup></a>
  </blockquote>

  <blockquote class="notas-apresentacao">
    A universidade é a instituição anfitriã e o aparato, enquanto academia é uma
    maneira de pensar, uma metodologia e também uma reflexão do conhecimento
    como tal e uma compreensão particular do mundo.
    <span class="negrito">Ute Meta Bauer 2011</span
    ><a href="#nota-4"><sup id="indice-4" class="vermelho">4</sup></a>
  </blockquote>

  <blockquote class="notas-apresentacao">
    A academia, para mim, é mais uma ideia abstrata sobre a operação da produção
    de conhecimento, enquanto a universidade lida com a logística e a
    infraestrutura reais dessa produção.
    <span class="negrito">Jie Zhang 2017</span
    ><a href="#nota-5"><sup id="indice-5" class="vermelho">5</sup></a>
  </blockquote>
</section>

<p class="corpo-apresentacao">Academia, de qual academia estamos falando?</p>

<p class="corpo-apresentacao">
  Certamente não é a Academia de Belas Artes, tampouco a Academia de Artes e
  Ciências Cinematográficas em Hollywood, também não a Academia Brasileira de
  Ciências.
</p>

<p class="corpo-apresentacao">
  Nas impressionantes cenas iniciais do filme Fausto (2011) do cineasta russo
  Sokurov, baseado na obra prima de Goethe, o assistente do estudioso Heinrich
  Faust pergunta ao mestre: onde reside, onde podemos encontrar a alma no corpo
  humano?
</p>

<p class="corpo-apresentacao">
  Onde está a academia? Onde a encontramos hoje, local, territorial, global,
  universal e virtualmente? Como ela é formalizada nessas diversas situações e
  quais seriam suas principais características?
</p>

<p class="corpo-apresentacao">
  Não respondendo objetivamente a tais perguntas, mas ativando processos
  dialógicos e mantendo latente o espírito crítico neste contexto específico que
  é a universidade, o artista Antoni Muntadas mais uma vez e certeiramente
  identifica temas / conceitos / situações que geram questionamentos e
  estranhamentos, tirando-nos do lugar comum, do conforto daquilo que
  consideramos como dado, como estabelecido. Desta vez seu foco e alvo é o
  entendimento, a princípio senso-comum, do que chamamos de Academia que, por
  sua vez, em contraponto, questiona o estado da arte da Universidade. Ao
  problematizar o entendimento da Academia, Muntadas expõe, desnuda a
  universidade, promovendo o debate e a autocrítica. O artista coloca em
  evidência a inequívoca presença local, física, ubíqua e universal da
  universidade na sociedade contemporânea. Seculares, resilientes, a despeito de
  guerras, das barbáries, de governos autocráticos, as universidades modernas
  são simultaneamente paradigmas e paradoxos: por um lado, por serem
  indissociáveis aos processos civilizatórios, democráticos e progressistas, e
  sobretudo da ampliação e da salvaguarda do conhecimento humano; por outro, por
  estarem inevitavelmente associadas a sistemas de poder hierarquizados,
  colonizadores e hegemônicos que ainda são perpetuados, mas não só, por
  centralidades como as prestigiadas universidades europeias e também a
  dobradinha Harvard e MIT em Cambridge, Massachusetts, nos Estados Unidos da
  América, locus inicial deste projeto de arte de Muntadas. Universidades fazem
  parte da paisagem das cidades, integram o establishment, fomentam, produzem e
  conservam o conhecimento, como também são diferenciais em certas situações,
  urbanas ou não. No entanto, estão sob intenso bombardeio e, assim sendo,
  precisam ser revigoradas. A autocrítica, a meta-crítica são essenciais para o
  fortalecimento, o reposicionamento e a reestruturação das instituições.
</p>

<p class="corpo-apresentacao">
  A participação da arte, dos artistas, nesses processos faz diferença, como
  About Academia demonstra em sua proposição e subsequente execuções. Os
  ambientes produzidos pelo artista em parceria com seus associados em cada
  situação, seja nas versões analógicas<a href="#nota-6"
    ><sup id="indice-6" class="vermelho">6</sup></a
  >
  como também nesta interpretação online desenvolvida pelo artista e o Fórum
  Permanente para a virtualidade, ativam um estado de consciência. Os diálogos
  com professores e estudantes de universidades norte-americanas são os
  ignitores do processo. As entrevistas, gravadas como "talking-heads"<a
    href="#nota-7"
    ><sup id="indice-7" class="vermelho">7</sup></a
  >, estão acompanhadas por duas outras projeções: inserções textuais que dizem
  respeito à conceituação histórica e contemporânea da academia e das
  universidades em paralelo com imagens em movimento das arquiteturas, espaços,
  ambientes e situações típicas dos campi universitários abarcados pelo projeto.
  Na interpretação online foi reforçado o protagonismo das projeções nesta
  ambientação instalativa composta por dois conjuntos de 3 projeções.
</p>

<p class="corpo-apresentacao">
  Para tanto, na modelagem do ambiente virtual não foi utilizado software ou
  plataforma pré-existentes, tampouco templates, ou até mesmo outros ambientes
  digitais 3D disponíveis no mercado. Igualmente, o "cubo branco" (galeria de
  arte) e/ou a "caixa preta" (teatro e cinema) não são considerados como
  referências. Tampouco optou-se por criar uma simulação de espaços existentes
  na fisicalidade, analógicos, como seria o caso aqui no Brasil do espaço
  expositivo da Biblioteca Brasiliana, onde a exposição teria acontecido<a
    href="#nota-8"
    ><sup id="indice-8" class="vermelho">8</sup></a
  >, ou até mesmo, outros espaços arquitetônicos da cultura material em que se
  expôs About Academia anteriormente, como o Carpenter Center em Cambridge,
  Massachusetts, EUA, De Appel em Amsterdam, Holanda ou Audain Art Gallery em
  Vancouver, Canadá.
</p>

<p class="corpo-apresentacao">
  A interpretação online foi montada "matando na unha", ou seja, foi esculpida
  digitalmente considerando outro tipo de espaço que é a virtualidade, um espaço
  que potencialmente possui n-possibilidades de modelagem. Portanto, o visitante
  explora nesse momento um projeto original nunca antes imaginado. Um grande
  diferencial desta interpretação online é que o ambiente digital não possui
  paredes, teto e piso, nem mesmo carrega em si qualquer referência espacial
  analógica. As "superfícies" de projeção que compõem a videoinstalação não são
  consideradas simplesmente "telas", mas suportes, entidades projetivas, que
  ativam o estado de consciência do visitante, atuando também como
  fantasmagorias dos principais referentes, a academia e a universidade. Imersos
  em uma instigante polifonia, esses conjuntos projetivos, assim como cada
  projeção, são singularidades no espaço, daí a necessidade do site ter seis
  players de vídeo performando simultaneamente.
</p>

<p class="corpo-apresentacao">
  E por que interessa a Muntadas uma análise crítica e poética da Academia que
  inevitavelmente, por afiliação e conectividade, promove uma reflexão e um
  debate incisivo sobre o papel da Universidade na contemporaneidade?
</p>

<p class="corpo-apresentacao">
  Muntadas é um artista-professor-pesquisador<a href="#nota-9"
    ><sup id="indice-9" class="vermelho">9</sup></a
  >
  e como já destacado na epígrafe deste texto, entende que artistas devem manter
  a mesma posição crítica que está na base das obras mais lúcidas da história da
  arte. Essas obras são fruto de pesquisas, alicerçadas em sua contemporaneidade
  e ao mesmo tempo inquietas em relação a essa sua natureza, o que acaba por
  gerar um contínuo e permanente questionamento ontológico, que envolve a todos
  e a tudo. A arte na universidade, assim como a ciência, está baseada em
  processos de investigação. Os próprios artistas-professores-pesquisadores na
  universidade e seus associados ou comunidades, não só examinam criticamente a
  sua própria produção e seus contextos de produção e reflexão como também
  problematizam a produção da arte contemporânea dentro e fora do campo
  acadêmico. Isso é realizado pari passu com outros pesquisadores, entre eles
  historiadores e teóricos da arte e da arquitetura, estetas, filósofos,
  psicólogos, psicanalistas, antropólogos, sociólogos e curadores. Nesse
  espírito, Muntadas transpõe uma estratégia de "crítica institucional"<a
    href="#nota-10"
    ><sup id="indice-10" class="vermelho">10</sup></a
  >
  reservada anteriormente apenas para o circuito da arte, para um contexto
  ampliado, aquele que abriga o ensino e a pesquisa da arte: a universidade.
</p>

<p class="corpo-apresentacao">
  Esta intencionalidade do artista, sua poética visual, soma-se agora a outras
  proposições dialógicas, críticas e discursivas que possuem como objeto a
  universidade (e a academia) que ganharam protagonismo desde o final da década
  de 1990<a href="#nota-11"><sup id="indice-11" class="vermelho">11</sup></a> em
  um site-specific da interdisciplinaridade na Universidade de São Paulo: o
  Instituto de Estudos Avançados da Usp (IEA-USP).
</p>

<p class="corpo-apresentacao">
  Com esta exposição de Muntadas, o IEA reforça outro elemento que o
  caracteriza, além de <span class="italico">think-tank</span
  ><a href="#nota-12"><sup id="indice-12" class="vermelho">12</sup></a
  >, de incubadora e laboratório da pesquisa interdisciplinar: o de plataforma
  de crítica institucional, seja da Usp, seja da universidade pública ou até
  mesmo da academia, já que pode ser vista como
  <span class="italico"
    >"uma maneira de pensar, uma metodologia, e também uma reflexão do
    conhecimento como tal e uma compreensão particular do mundo".</span
  ><a href="#nota-13"><sup id="indice-13" class="vermelho">13</sup></a>
</p>

<blockquote id="ultima-citacao" class="notas-apresentacao">
  Embora as instituições acadêmicas sejam um subtipo particular de instituição,
  a academia como conceito é distinta, referindo-se mais a uma rede de
  conhecimentos ou a um círculo de ideias e pessoas conectadas entre si e à
  busca da vida da mente. Tais redes e compromissos intelectuais não precisam
  ser limitados por instituições formais, mas geralmente são mantidas dentro das
  instituições acadêmicas. <span class="negrito">Diane E. Davis 2011</span
  ><a href="#nota-14"><sup id="indice-14" class="vermelho">14</sup></a>
</blockquote>

<p id="assinatura" class="corpo-apresentacao">
  Martin Grossmann<br />São Paulo, abril 2021
</p>

<hr />
<p class="notas-apresentacao">
  <a href="#indice-1"><sup id="nota-1" class="vermelho">1</sup></a
  ><span class="italico"
    >"The risk inherent in the practice is what guarantees its perennial
    subversive quality, its capacity of exposing the contradictions in our
    system that we take to be natural and given."</span
  >
  (FALCONI, J.
  <span class="italico"
    >Fortunate Alignment [A Brief Recollection on Muntada’s About
    Academia]</span
  >
  in VAN TOMME (Ed.), <u>Muntadas.Activating Artifacts: About Academia</u>,
  Baltimore, The Center for Art, Design and Visual Culture - UMBC, 2017, pp-122
  <br />
  OBS.: José Falconi é o curador da exposição em sua primeira aparição no The
  Carpenter Center for Visual Arts da Universidade de Harvard em Cambridge,
  Massachusetts, na primavera de 2011.
</p>
<p class="notas-apresentacao">
  <a href="#indice-2"><sup id="nota-2" class="vermelho">2</sup></a
  >MACHADO, Arlindo.
  <span class="italico">Muntadas entre a Arte e os Mídia</span> in ALONSO,
  Rodrigo, “Muntadas: con/textos : [una antología crítica]”. Buenos Aires,
  Ediciones Simurg, 2002 pg 113
</p>
<p class="notas-apresentacao">
  <a href="#indice-3"><sup id="nota-3" class="vermelho">3</sup></a
  >MUNTADAS, Antoni.
  <span class="italico"
    >La Intervención Tecnológica de Los Artistas en un Espacio Virtual o El
    Artista como Escéptico en un Mundo Simulado</span
  >
  in ALONSO, Rodrigo, “Muntadas: con/textos : [una antología crítica]”. Buenos
  Aires, Ediciones Simurg, 2002 pg 442
</p>
<p class="notas-apresentacao">
  <a href="#indice-4"><sup id="nota-4" class="vermelho">4</sup></a
  >META BAUER, U. depoimento in MUNTADAS, Antoni. About Academia I: um documento
  interno. São Paulo, Fórum Permanente, 2021, p 127.
</p>
<p class="notas-apresentacao">
  <a href="#indice-5"><sup id="nota-5" class="vermelho">5</sup></a>ZHANG, J.
  depoimento in MUNTADAS, Antoni. About Academia II: um documento interno. São
  Paulo, Fórum Permanente, 2021, p 10
</p>
<p class="notas-apresentacao">
  <a href="#indice-6"><sup id="nota-6" class="vermelho">6</sup></a
  >O projeto teve início em Cambridge, Massachusetts, nos EUA em 2011 e, desde
  então, já foi exposto em Sevilha, Espanha; em Baltimore, EUA; em Amsterdam,
  Holanda; em Vancouver, Canadá; em Arizona, EUA.
</p>
<p class="notas-apresentacao">
  <a href="#indice-7"><sup id="nota-7" class="vermelho">7</sup></a
  >“cabeça-falante”: um comentarista ou repórter na televisão que se dirige à
  câmera e é visto em close-up.
</p>
<p class="notas-apresentacao">
  <a href="#indice-8"><sup id="nota-8" class="vermelho">8</sup></a
  >Devido à pandemia, optou-se pela transferência da exposição de um lugar
  físico para a virtualidade
</p>
<p class="notas-apresentacao">
  <a href="#indice-9"><sup id="nota-9" class="vermelho">9</sup></a
  >Ricardo Basbaum, artista-professor-pesquisador da Universidade Federal
  Fluminense, sugere um termo que abarca essa condição: o
  <span class="negrito">“artista, etc.”</span> | vide: Ricardo Basbaum,
  <span class="italico">I love etc-artists</span>. Texto originalmente publicado
  em inglês, parte do projeto
  <u>The Next Documenta Should Be Curated by an Artist</u>, traduzido para o
  português em Políticas institucionais, práticas curatoriais, organizado por
  Rodrigo Moura (Belo Horizonte, Museu de Arte da Pampulha, 2005).
</p>
<p class="notas-apresentacao">
  <a href="#indice-10"><sup id="nota-10" class="vermelho">10</sup></a
  >Esse questionamento ontológico promovido pelas poéticas visuais já forneceram
  para outras instâncias do conhecimento humano, conceitos como a
  <span class="negrito">curadoria</span> e o de
  <span class="negrito">crítica institucional</span>, além do
  <span class="negrito">site-specific</span> vide: 1) BHASKAR,
  <span class="italico"
    >Michael Curadoria: O poder da seleção no mundo do excesso</span
  >, São Paulo, Edições Sesc São Paulo, 2019, 320 p., e 2) ALBERRO; STIMSON.
  <span class="italico"
    >Institutional critique – an anthology of artist 's writings</span
  >. Massachusetts: The MIT Press, 2009. 3) BARRETO, Jorge Mascarenhas Menna.
  Lugares moles. 2007. Dissertação (Mestrado em Artes Plásticas) - Escola de
  Comunicações e Artes, Universidade de São Paulo, São Paulo, 2007.
  doi:10.11606/D.27.2007.tde-05072009-204120. Acesso em: 2021-04-28.
</p>
<p class="notas-apresentacao">
  <a href="#indice-11"><sup id="nota-11" class="vermelho">11</sup></a>
  O IEA-USP desde sua criação em 1986 desenvolveu e abrigou substantivas
  empreitadas que tiveram e tem a universidade como objeto, vide:
  <a
    href="http://www.iea.usp.br/pesquisa/projetos-institucionais/projetos-especias-anteriores/os-desafios-do-ensino-superior-no-brasil-1/os-desafios-do-ensino-superior-no-brasil"
    rel="noreferrer"
    target="_blank"
    ><u
      >http://www.iea.usp.br/pesquisa/projetos-institucionais/projetos-especias-anteriores/os-desafios-do-ensino-superior-no-brasil-1/os-desafios-do-ensino-superior-no-brasil</u
    ></a
  >
  e
  <a
    href="http://intercontinental-academia.ubias.net/programme/first-phase#Universities-Axis"
    rel="noreferrer"
    target="_blank"
    ><u
      >http://intercontinental-academia.ubias.net/programme/first-phase#Universities-Axis</u
    ></a
  >
</p>
<p class="notas-apresentacao">
  <a href="#indice-12"><sup id="nota-12" class="vermelho">12</sup></a
  >Think tanks são instituições que desempenham um papel de
  <span class="italico">advocacy</span> para políticas públicas, além de terem a
  capacidade de explicar, mobilizar e articular os atores. Produzem pesquisas,
  análises e recomendações que contribuem para um ambiente de conhecimento,
  permitindo, inclusive, que os formadores de políticas públicas tenham
  ferramentas para tomar decisões mais embasadas, além de ter um papel
  importante na disseminação de conhecimento à sociedade.
</p>
<p class="notas-apresentacao">
  <a href="#indice-13"><sup id="nota-13" class="vermelho">13</sup></a
  >META BAUER, U. depoimento in MUNTADAS, Antoni. About Academia I: um documento
  interno. São Paulo, Fórum Permanente, 2021, p 127.
</p>
<p class="notas-apresentacao">
  <a href="#indice-14"><sup id="nota-14" class="vermelho">14</sup></a
  >DAVIES, D. depoimento in MUNTADAS, Antoni. About Academia I: um documento
  interno. São Paulo, Fórum Permanente, 2021. p 65.
</p>
`;

const apresentacaoEs = `<h2 class="titulo-apresentacao">Con/ciência | sobre academia</h2>


<p class="aviso-apresentacao">(El texto traducido y revisado al español estará disponible en la inauguración oficial de la exposición el 30 de abril)</p>

<section id="epigrafe">
  <blockquote class="notas-apresentacao">
    O risco inerente à prática é o que garante sua perene qualidade subversiva,
    sua capacidade de expor as contradições em nosso sistema que consideramos
    naturais e dadas. <span class="negrito">Jose Falconi 2017</span
    ><a href="#nota-1"><sup id="indice-1" class="vermelho">1</sup></a>
  </blockquote>

  <blockquote class="notas-apresentacao">
    Portanto, é um ataque de dentro, uma contaminação interna, que faz com que
    essas estruturas parem de funcionar por um momento da forma que normalmente
    se espera, para que possamos percebê-las de outro ângulo, de preferência
    crítico.
    <span class="negrito">Arlindo Machado 2002</span
    ><a href="#nota-2"><sup id="indice-2" class="vermelho">2</sup></a>
  </blockquote>

  <blockquote class="notas-apresentacao">
    Os artistas devem manter a mesma posição crítica que está na base das obras
    mais lúcidas da história da arte; aquelas obras enraizadas em um determinado
    tempo e lugar, ou seja, em um contexto.
    <span class="negrito">Antoni Muntadas 1990</span
    ><a href="#nota-3"><sup id="indice-3" class="vermelho">3</sup></a>
  </blockquote>

  <blockquote class="notas-apresentacao">
    A universidade é a instituição anfitriã e o aparato, enquanto academia é uma
    maneira de pensar, uma metodologia e também uma reflexão do conhecimento
    como tal e uma compreensão particular do mundo.
    <span class="negrito">Ute Meta Bauer 2011</span
    ><a href="#nota-4"><sup id="indice-4" class="vermelho">4</sup></a>
  </blockquote>

  <blockquote class="notas-apresentacao">
    A academia, para mim, é mais uma ideia abstrata sobre a operação da produção
    de conhecimento, enquanto a universidade lida com a logística e a
    infraestrutura reais dessa produção.
    <span class="negrito">Jie Zhang 2017</span
    ><a href="#nota-5"><sup id="indice-5" class="vermelho">5</sup></a>
  </blockquote>
</section>

<p class="corpo-apresentacao">Academia, de qual academia estamos falando?</p>

<p class="corpo-apresentacao">
  Certamente não é a Academia de Belas Artes, tampouco a Academia de Artes e
  Ciências Cinematográficas em Hollywood, também não a Academia Brasileira de
  Ciências.
</p>

<p class="corpo-apresentacao">
  Nas impressionantes cenas iniciais do filme Fausto (2011) do cineasta russo
  Sokurov, baseado na obra prima de Goethe, o assistente do estudioso Heinrich
  Faust pergunta ao mestre: onde reside, onde podemos encontrar a alma no corpo
  humano?
</p>

<p class="corpo-apresentacao">
  Onde está a academia? Onde a encontramos hoje, local, territorial, global,
  universal e virtualmente? Como ela é formalizada nessas diversas situações e
  quais seriam suas principais características?
</p>

<p class="corpo-apresentacao">
  Não respondendo objetivamente a tais perguntas, mas ativando processos
  dialógicos e mantendo latente o espírito crítico neste contexto específico que
  é a universidade, o artista Antoni Muntadas mais uma vez e certeiramente
  identifica temas / conceitos / situações que geram questionamentos e
  estranhamentos, tirando-nos do lugar comum, do conforto daquilo que
  consideramos como dado, como estabelecido. Desta vez seu foco e alvo é o
  entendimento, a princípio senso-comum, do que chamamos de Academia que, por
  sua vez, em contraponto, questiona o estado da arte da Universidade. Ao
  problematizar o entendimento da Academia, Muntadas expõe, desnuda a
  universidade, promovendo o debate e a autocrítica. O artista coloca em
  evidência a inequívoca presença local, física, ubíqua e universal da
  universidade na sociedade contemporânea. Seculares, resilientes, a despeito de
  guerras, das barbáries, de governos autocráticos, as universidades modernas
  são simultaneamente paradigmas e paradoxos: por um lado, por serem
  indissociáveis aos processos civilizatórios, democráticos e progressistas, e
  sobretudo da ampliação e da salvaguarda do conhecimento humano; por outro, por
  estarem inevitavelmente associadas a sistemas de poder hierarquizados,
  colonizadores e hegemônicos que ainda são perpetuados, mas não só, por
  centralidades como as prestigiadas universidades europeias e também a
  dobradinha Harvard e MIT em Cambridge, Massachusetts, nos Estados Unidos da
  América, locus inicial deste projeto de arte de Muntadas. Universidades fazem
  parte da paisagem das cidades, integram o establishment, fomentam, produzem e
  conservam o conhecimento, como também são diferenciais em certas situações,
  urbanas ou não. No entanto, estão sob intenso bombardeio e, assim sendo,
  precisam ser revigoradas. A autocrítica, a meta-crítica são essenciais para o
  fortalecimento, o reposicionamento e a reestruturação das instituições.
</p>

<p class="corpo-apresentacao">
  A participação da arte, dos artistas, nesses processos faz diferença, como
  About Academia demonstra em sua proposição e subsequente execuções. Os
  ambientes produzidos pelo artista em parceria com seus associados em cada
  situação, seja nas versões analógicas<a href="#nota-6"
    ><sup id="indice-6" class="vermelho">6</sup></a
  >
  como também nesta interpretação online desenvolvida pelo artista e o Fórum
  Permanente para a virtualidade, ativam um estado de consciência. Os diálogos
  com professores e estudantes de universidades norte-americanas são os
  ignitores do processo. As entrevistas, gravadas como "talking-heads"<a
    href="#nota-7"
    ><sup id="indice-7" class="vermelho">7</sup></a
  >, estão acompanhadas por duas outras projeções: inserções textuais que dizem
  respeito à conceituação histórica e contemporânea da academia e das
  universidades em paralelo com imagens em movimento das arquiteturas, espaços,
  ambientes e situações típicas dos campi universitários abarcados pelo projeto.
  Na interpretação online foi reforçado o protagonismo das projeções nesta
  ambientação instalativa composta por dois conjuntos de 3 projeções.
</p>

<p class="corpo-apresentacao">
  Para tanto, na modelagem do ambiente virtual não foi utilizado software ou
  plataforma pré-existentes, tampouco templates, ou até mesmo outros ambientes
  digitais 3D disponíveis no mercado. Igualmente, o "cubo branco" (galeria de
  arte) e/ou a "caixa preta" (teatro e cinema) não são considerados como
  referências. Tampouco optou-se por criar uma simulação de espaços existentes
  na fisicalidade, analógicos, como seria o caso aqui no Brasil do espaço
  expositivo da Biblioteca Brasiliana, onde a exposição teria acontecido<a
    href="#nota-8"
    ><sup id="indice-8" class="vermelho">8</sup></a
  >, ou até mesmo, outros espaços arquitetônicos da cultura material em que se
  expôs About Academia anteriormente, como o Carpenter Center em Cambridge,
  Massachusetts, EUA, De Appel em Amsterdam, Holanda ou Audain Art Gallery em
  Vancouver, Canadá.
</p>

<p class="corpo-apresentacao">
  A interpretação online foi montada "matando na unha", ou seja, foi esculpida
  digitalmente considerando outro tipo de espaço que é a virtualidade, um espaço
  que potencialmente possui n-possibilidades de modelagem. Portanto, o visitante
  explora nesse momento um projeto original nunca antes imaginado. Um grande
  diferencial desta interpretação online é que o ambiente digital não possui
  paredes, teto e piso, nem mesmo carrega em si qualquer referência espacial
  analógica. As "superfícies" de projeção que compõem a videoinstalação não são
  consideradas simplesmente "telas", mas suportes, entidades projetivas, que
  ativam o estado de consciência do visitante, atuando também como
  fantasmagorias dos principais referentes, a academia e a universidade. Imersos
  em uma instigante polifonia, esses conjuntos projetivos, assim como cada
  projeção, são singularidades no espaço, daí a necessidade do site ter seis
  players de vídeo performando simultaneamente.
</p>

<p class="corpo-apresentacao">
  E por que interessa a Muntadas uma análise crítica e poética da Academia que
  inevitavelmente, por afiliação e conectividade, promove uma reflexão e um
  debate incisivo sobre o papel da Universidade na contemporaneidade?
</p>

<p class="corpo-apresentacao">
  Muntadas é um artista-professor-pesquisador<a href="#nota-9"
    ><sup id="indice-9" class="vermelho">9</sup></a
  >
  e como já destacado na epígrafe deste texto, entende que artistas devem manter
  a mesma posição crítica que está na base das obras mais lúcidas da história da
  arte. Essas obras são fruto de pesquisas, alicerçadas em sua contemporaneidade
  e ao mesmo tempo inquietas em relação a essa sua natureza, o que acaba por
  gerar um contínuo e permanente questionamento ontológico, que envolve a todos
  e a tudo. A arte na universidade, assim como a ciência, está baseada em
  processos de investigação. Os próprios artistas-professores-pesquisadores na
  universidade e seus associados ou comunidades, não só examinam criticamente a
  sua própria produção e seus contextos de produção e reflexão como também
  problematizam a produção da arte contemporânea dentro e fora do campo
  acadêmico. Isso é realizado pari passu com outros pesquisadores, entre eles
  historiadores e teóricos da arte e da arquitetura, estetas, filósofos,
  psicólogos, psicanalistas, antropólogos, sociólogos e curadores. Nesse
  espírito, Muntadas transpõe uma estratégia de "crítica institucional"<a
    href="#nota-10"
    ><sup id="indice-10" class="vermelho">10</sup></a
  >
  reservada anteriormente apenas para o circuito da arte, para um contexto
  ampliado, aquele que abriga o ensino e a pesquisa da arte: a universidade.
</p>

<p class="corpo-apresentacao">
  Esta intencionalidade do artista, sua poética visual, soma-se agora a outras
  proposições dialógicas, críticas e discursivas que possuem como objeto a
  universidade (e a academia) que ganharam protagonismo desde o final da década
  de 1990<a href="#nota-11"><sup id="indice-11" class="vermelho">11</sup></a> em
  um site-specific da interdisciplinaridade na Universidade de São Paulo: o
  Instituto de Estudos Avançados da Usp (IEA-USP).
</p>

<p class="corpo-apresentacao">
  Com esta exposição de Muntadas, o IEA reforça outro elemento que o
  caracteriza, além de <span class="italico">think-tank</span
  ><a href="#nota-12"><sup id="indice-12" class="vermelho">12</sup></a
  >, de incubadora e laboratório da pesquisa interdisciplinar: o de plataforma
  de crítica institucional, seja da Usp, seja da universidade pública ou até
  mesmo da academia, já que pode ser vista como
  <span class="italico"
    >"uma maneira de pensar, uma metodologia, e também uma reflexão do
    conhecimento como tal e uma compreensão particular do mundo".</span
  ><a href="#nota-13"><sup id="indice-13" class="vermelho">13</sup></a>
</p>

<blockquote id="ultima-citacao" class="notas-apresentacao">
  Embora as instituições acadêmicas sejam um subtipo particular de instituição,
  a academia como conceito é distinta, referindo-se mais a uma rede de
  conhecimentos ou a um círculo de ideias e pessoas conectadas entre si e à
  busca da vida da mente. Tais redes e compromissos intelectuais não precisam
  ser limitados por instituições formais, mas geralmente são mantidas dentro das
  instituições acadêmicas. <span class="negrito">Diane E. Davis 2011</span
  ><a href="#nota-14"><sup id="indice-14" class="vermelho">14</sup></a>
</blockquote>

<p id="assinatura" class="corpo-apresentacao">
  Martin Grossmann<br />São Paulo, abril 2021
</p>

<hr />
<p class="notas-apresentacao">
  <a href="#indice-1"><sup id="nota-1" class="vermelho">1</sup></a
  ><span class="italico"
    >"The risk inherent in the practice is what guarantees its perennial
    subversive quality, its capacity of exposing the contradictions in our
    system that we take to be natural and given."</span
  >
  (FALCONI, J.
  <span class="italico"
    >Fortunate Alignment [A Brief Recollection on Muntada’s About
    Academia]</span
  >
  in VAN TOMME (Ed.), <u>Muntadas.Activating Artifacts: About Academia</u>,
  Baltimore, The Center for Art, Design and Visual Culture - UMBC, 2017, pp-122
  <br />
  OBS.: José Falconi é o curador da exposição em sua primeira aparição no The
  Carpenter Center for Visual Arts da Universidade de Harvard em Cambridge,
  Massachusetts, na primavera de 2011.
</p>
<p class="notas-apresentacao">
  <a href="#indice-2"><sup id="nota-2" class="vermelho">2</sup></a
  >MACHADO, Arlindo.
  <span class="italico">Muntadas entre a Arte e os Mídia</span> in ALONSO,
  Rodrigo, “Muntadas: con/textos : [una antología crítica]”. Buenos Aires,
  Ediciones Simurg, 2002 pg 113
</p>
<p class="notas-apresentacao">
  <a href="#indice-3"><sup id="nota-3" class="vermelho">3</sup></a
  >MUNTADAS, Antoni.
  <span class="italico"
    >La Intervención Tecnológica de Los Artistas en un Espacio Virtual o El
    Artista como Escéptico en un Mundo Simulado</span
  >
  in ALONSO, Rodrigo, “Muntadas: con/textos : [una antología crítica]”. Buenos
  Aires, Ediciones Simurg, 2002 pg 442
</p>
<p class="notas-apresentacao">
  <a href="#indice-4"><sup id="nota-4" class="vermelho">4</sup></a
  >META BAUER, U. depoimento in MUNTADAS, Antoni. About Academia I: um documento
  interno. São Paulo, Fórum Permanente, 2021, p 127.
</p>
<p class="notas-apresentacao">
  <a href="#indice-5"><sup id="nota-5" class="vermelho">5</sup></a>ZHANG, J.
  depoimento in MUNTADAS, Antoni. About Academia II: um documento interno. São
  Paulo, Fórum Permanente, 2021, p 10
</p>
<p class="notas-apresentacao">
  <a href="#indice-6"><sup id="nota-6" class="vermelho">6</sup></a
  >O projeto teve início em Cambridge, Massachusetts, nos EUA em 2011 e, desde
  então, já foi exposto em Sevilha, Espanha; em Baltimore, EUA; em Amsterdam,
  Holanda; em Vancouver, Canadá; em Arizona, EUA.
</p>
<p class="notas-apresentacao">
  <a href="#indice-7"><sup id="nota-7" class="vermelho">7</sup></a
  >“cabeça-falante”: um comentarista ou repórter na televisão que se dirige à
  câmera e é visto em close-up.
</p>
<p class="notas-apresentacao">
  <a href="#indice-8"><sup id="nota-8" class="vermelho">8</sup></a
  >Devido à pandemia, optou-se pela transferência da exposição de um lugar
  físico para a virtualidade
</p>
<p class="notas-apresentacao">
  <a href="#indice-9"><sup id="nota-9" class="vermelho">9</sup></a
  >Ricardo Basbaum, artista-professor-pesquisador da Universidade Federal
  Fluminense, sugere um termo que abarca essa condição: o
  <span class="negrito">“artista, etc.”</span> | vide: Ricardo Basbaum,
  <span class="italico">I love etc-artists</span>. Texto originalmente publicado
  em inglês, parte do projeto
  <u>The Next Documenta Should Be Curated by an Artist</u>, traduzido para o
  português em Políticas institucionais, práticas curatoriais, organizado por
  Rodrigo Moura (Belo Horizonte, Museu de Arte da Pampulha, 2005).
</p>
<p class="notas-apresentacao">
  <a href="#indice-10"><sup id="nota-10" class="vermelho">10</sup></a
  >Esse questionamento ontológico promovido pelas poéticas visuais já forneceram
  para outras instâncias do conhecimento humano, conceitos como a
  <span class="negrito">curadoria</span> e o de
  <span class="negrito">crítica institucional</span>, além do
  <span class="negrito">site-specific</span> vide: 1) BHASKAR,
  <span class="italico"
    >Michael Curadoria: O poder da seleção no mundo do excesso</span
  >, São Paulo, Edições Sesc São Paulo, 2019, 320 p., e 2) ALBERRO; STIMSON.
  <span class="italico"
    >Institutional critique – an anthology of artist 's writings</span
  >. Massachusetts: The MIT Press, 2009. 3) BARRETO, Jorge Mascarenhas Menna.
  Lugares moles. 2007. Dissertação (Mestrado em Artes Plásticas) - Escola de
  Comunicações e Artes, Universidade de São Paulo, São Paulo, 2007.
  doi:10.11606/D.27.2007.tde-05072009-204120. Acesso em: 2021-04-28.
</p>
<p class="notas-apresentacao">
  <a href="#indice-11"><sup id="nota-11" class="vermelho">11</sup></a>
  O IEA-USP desde sua criação em 1986 desenvolveu e abrigou substantivas
  empreitadas que tiveram e tem a universidade como objeto, vide:
  <a
    href="http://www.iea.usp.br/pesquisa/projetos-institucionais/projetos-especias-anteriores/os-desafios-do-ensino-superior-no-brasil-1/os-desafios-do-ensino-superior-no-brasil"
    rel="noreferrer"
    target="_blank"
    ><u
      >http://www.iea.usp.br/pesquisa/projetos-institucionais/projetos-especias-anteriores/os-desafios-do-ensino-superior-no-brasil-1/os-desafios-do-ensino-superior-no-brasil</u
    ></a
  >
  e
  <a
    href="http://intercontinental-academia.ubias.net/programme/first-phase#Universities-Axis"
    rel="noreferrer"
    target="_blank"
    ><u
      >http://intercontinental-academia.ubias.net/programme/first-phase#Universities-Axis</u
    ></a
  >
</p>
<p class="notas-apresentacao">
  <a href="#indice-12"><sup id="nota-12" class="vermelho">12</sup></a
  >Think tanks são instituições que desempenham um papel de
  <span class="italico">advocacy</span> para políticas públicas, além de terem a
  capacidade de explicar, mobilizar e articular os atores. Produzem pesquisas,
  análises e recomendações que contribuem para um ambiente de conhecimento,
  permitindo, inclusive, que os formadores de políticas públicas tenham
  ferramentas para tomar decisões mais embasadas, além de ter um papel
  importante na disseminação de conhecimento à sociedade.
</p>
<p class="notas-apresentacao">
  <a href="#indice-13"><sup id="nota-13" class="vermelho">13</sup></a
  >META BAUER, U. depoimento in MUNTADAS, Antoni. About Academia I: um documento
  interno. São Paulo, Fórum Permanente, 2021, p 127.
</p>
<p class="notas-apresentacao">
  <a href="#indice-14"><sup id="nota-14" class="vermelho">14</sup></a
  >DAVIES, D. depoimento in MUNTADAS, Antoni. About Academia I: um documento
  interno. São Paulo, Fórum Permanente, 2021. p 65.
</p>`;
