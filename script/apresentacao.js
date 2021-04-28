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

  document.querySelector(`#apresentacao`).classList.remove("hidden");

  sugerirScroll();
}

const apresentacaoPt = `<h2 class="titulo-apresentacao">Título apresentação em brasileiro</h2>
<p class="corpo-apresentacao">
No entanto, não podemos esquecer que a crescente influência da mídia apresenta tendências no sentido de aprovar a manutenção das posturas dos órgãos dirigentes com relação às suas atribuições. Caros amigos, o novo modelo estrutural aqui preconizado talvez venha a ressaltar a relatividade de todos os recursos funcionais envolvidos. O incentivo ao avanço tecnológico, assim como a contínua expansão de nossa atividade é uma das consequências do levantamento das variáveis envolvidas. Pensando mais a longo prazo, a execução dos pontos do programa facilita a criação das diretrizes de desenvolvimento para o futuro. As experiências acumuladas demonstram que a consolidação das estruturas obstaculiza a apreciação da importância dos índices pretendidos.<a href="#nota-1"><sup id="ref-1" style="font-" class="vermelho">1</sup></a></p>
<p class="corpo-apresentacao">
No entanto, não podemos esquecer que a crescente influência da mídia apresenta tendências no sentido de aprovar a manutenção das posturas dos órgãos dirigentes com relação às suas atribuições. Caros amigos, o novo modelo estrutural aqui preconizado talvez venha a ressaltar a relatividade de todos os recursos funcionais envolvidos. O incentivo ao avanço tecnológico, assim como a contínua expansão de nossa atividade é uma das consequências do levantamento das variáveis envolvidas. Pensando mais a longo prazo, a execução dos pontos do programa facilita a criação das diretrizes de desenvolvimento para o futuro. As experiências acumuladas demonstram que a consolidação das estruturas obstaculiza a apreciação da importância dos índices pretendidos.</p>
<p class="corpo-apresentacao">
No entanto, não podemos esquecer que a crescente influência da mídia apresenta tendências no sentido de aprovar a manutenção das posturas dos órgãos dirigentes com relação às suas atribuições. Caros amigos, o novo modelo estrutural aqui preconizado talvez venha a ressaltar a relatividade de todos os recursos funcionais envolvidos. O incentivo ao avanço tecnológico, assim como a contínua expansão de nossa atividade é uma das consequências do levantamento das variáveis envolvidas. Pensando mais a longo prazo, a execução dos pontos do programa facilita a criação das diretrizes de desenvolvimento para o futuro. As experiências acumuladas demonstram que a consolidação das estruturas obstaculiza a apreciação da importância dos índices pretendidos.</p>

<p class="ref-apresentacao">
  Não obstante, a determinação clara de objetivos deve passar por modificações independentemente do retorno esperado a longo prazo. É importante questionar o quanto a mobilidade dos capitais internacionais possibilita uma melhor visão global das formas de ação. É claro que a execução dos pontos do programa causa impacto indireto na reavaliação do retorno esperado a longo prazo. Assim mesmo, a consulta aos diversos militantes obstaculiza a apreciação da importância dos procedimentos normalmente adotados.<a href="#nota-2"><sup id="ref-2" class="vermelho">2</sup></a></p>
  <p class="ref-apresentacao">
    Não obstante, a determinação clara de objetivos deve passar por modificações independentemente do retorno esperado a longo prazo. É importante questionar o quanto a mobilidade dos capitais internacionais possibilita uma melhor visão global das formas de ação. É claro que a execução dos pontos do programa causa impacto indireto na reavaliação do retorno esperado a longo prazo. Assim mesmo, a consulta aos diversos militantes obstaculiza a apreciação da importância dos procedimentos normalmente adotados.</p>
    <p class="ref-apresentacao">
      Não obstante, a determinação clara de objetivos deve passar por modificações independentemente do retorno esperado a longo prazo. É importante questionar o quanto a mobilidade dos capitais internacionais possibilita uma melhor visão global das formas de ação. É claro que a execução dos pontos do programa causa impacto indireto na reavaliação do retorno esperado a longo prazo. Assim mesmo, a consulta aos diversos militantes obstaculiza a apreciação da importância dos procedimentos normalmente adotados.</p>

<p style="font-family:'Helvetica_AA'; font-size:1.1vw;">
  <a href="#ref-1"><span id="nota-1" class="vermelho">1</span></a> Percebemos, cada vez mais, que o julgamento imparcial das eventualidades talvez venha a ressaltar a relatividade da gestão inovadora da qual fazemos parte. O empenho em analisar o desenvolvimento contínuo de distintas formas de atuação prepara-nos para enfrentar situações atípicas decorrentes dos conhecimentos estratégicos para atingir a excelência. É importante questionar o quanto a percepção das dificuldades oferece uma interessante oportunidade para verificação dos relacionamentos verticais entre as hierarquias. O incentivo ao avanço tecnológico, assim como o acompanhamento das preferências de consumo garante a contribuição de um grupo importante na determinação do sistema de formação de quadros que corresponde às necessidades.
  </p>
<p style="font-family:'Helvetica'; font-size:1.1vw;">
<a href="#ref-2"><span id="nota-2" class="vermelho">2</span></a>
  Desta maneira, a constante divulgação das informações promove a alavancagem das regras de conduta normativas. No mundo atual, o desafiador cenário globalizado ainda não demonstrou convincentemente que vai participar na mudança de alternativas às soluções ortodoxas. A prática cotidiana prova que a revolução dos costumes acarreta um processo de reformulação e modernização do remanejamento dos quadros funcionais. O que temos que ter sempre em mente é que a contínua expansão de nossa atividade deve passar por modificações independentemente do investimento em reciclagem técnica.
  </p>`;
const apresentacaoEs = `<h2 class="titulo-apresentacao">Título apresentação em espanhol</h2>
<p class="corpo-apresentacao">
No entanto, não podemos esquecer que a crescente influência da mídia apresenta tendências no sentido de aprovar a manutenção das posturas dos órgãos dirigentes com relação às suas atribuições. Caros amigos, o novo modelo estrutural aqui preconizado talvez venha a ressaltar a relatividade de todos os recursos funcionais envolvidos. O incentivo ao avanço tecnológico, assim como a contínua expansão de nossa atividade é uma das consequências do levantamento das variáveis envolvidas. Pensando mais a longo prazo, a execução dos pontos do programa facilita a criação das diretrizes de desenvolvimento para o futuro. As experiências acumuladas demonstram que a consolidação das estruturas obstaculiza a apreciação da importância dos índices pretendidos.<a href="#nota-1"><sup id="ref-1" style="font-" class="vermelho">1</sup></a></p>
<p class="corpo-apresentacao">
No entanto, não podemos esquecer que a crescente influência da mídia apresenta tendências no sentido de aprovar a manutenção das posturas dos órgãos dirigentes com relação às suas atribuições. Caros amigos, o novo modelo estrutural aqui preconizado talvez venha a ressaltar a relatividade de todos os recursos funcionais envolvidos. O incentivo ao avanço tecnológico, assim como a contínua expansão de nossa atividade é uma das consequências do levantamento das variáveis envolvidas. Pensando mais a longo prazo, a execução dos pontos do programa facilita a criação das diretrizes de desenvolvimento para o futuro. As experiências acumuladas demonstram que a consolidação das estruturas obstaculiza a apreciação da importância dos índices pretendidos.</p>
<p class="corpo-apresentacao">
No entanto, não podemos esquecer que a crescente influência da mídia apresenta tendências no sentido de aprovar a manutenção das posturas dos órgãos dirigentes com relação às suas atribuições. Caros amigos, o novo modelo estrutural aqui preconizado talvez venha a ressaltar a relatividade de todos os recursos funcionais envolvidos. O incentivo ao avanço tecnológico, assim como a contínua expansão de nossa atividade é uma das consequências do levantamento das variáveis envolvidas. Pensando mais a longo prazo, a execução dos pontos do programa facilita a criação das diretrizes de desenvolvimento para o futuro. As experiências acumuladas demonstram que a consolidação das estruturas obstaculiza a apreciação da importância dos índices pretendidos.</p>

<p class="ref-apresentacao">
  Não obstante, a determinação clara de objetivos deve passar por modificações independentemente do retorno esperado a longo prazo. É importante questionar o quanto a mobilidade dos capitais internacionais possibilita uma melhor visão global das formas de ação. É claro que a execução dos pontos do programa causa impacto indireto na reavaliação do retorno esperado a longo prazo. Assim mesmo, a consulta aos diversos militantes obstaculiza a apreciação da importância dos procedimentos normalmente adotados.<a href="#nota-2"><sup id="ref-2" class="vermelho">2</sup></a></p>
  <p class="ref-apresentacao">
    Não obstante, a determinação clara de objetivos deve passar por modificações independentemente do retorno esperado a longo prazo. É importante questionar o quanto a mobilidade dos capitais internacionais possibilita uma melhor visão global das formas de ação. É claro que a execução dos pontos do programa causa impacto indireto na reavaliação do retorno esperado a longo prazo. Assim mesmo, a consulta aos diversos militantes obstaculiza a apreciação da importância dos procedimentos normalmente adotados.</p>
    <p class="ref-apresentacao">
      Não obstante, a determinação clara de objetivos deve passar por modificações independentemente do retorno esperado a longo prazo. É importante questionar o quanto a mobilidade dos capitais internacionais possibilita uma melhor visão global das formas de ação. É claro que a execução dos pontos do programa causa impacto indireto na reavaliação do retorno esperado a longo prazo. Assim mesmo, a consulta aos diversos militantes obstaculiza a apreciação da importância dos procedimentos normalmente adotados.</p>

<p style="font-family:'Helvetica_AA'; font-size:1.1vw;">
  <a href="#ref-1"><span id="nota-1" class="vermelho">1</span></a> Percebemos, cada vez mais, que o julgamento imparcial das eventualidades talvez venha a ressaltar a relatividade da gestão inovadora da qual fazemos parte. O empenho em analisar o desenvolvimento contínuo de distintas formas de atuação prepara-nos para enfrentar situações atípicas decorrentes dos conhecimentos estratégicos para atingir a excelência. É importante questionar o quanto a percepção das dificuldades oferece uma interessante oportunidade para verificação dos relacionamentos verticais entre as hierarquias. O incentivo ao avanço tecnológico, assim como o acompanhamento das preferências de consumo garante a contribuição de um grupo importante na determinação do sistema de formação de quadros que corresponde às necessidades.
  </p>
<p style="font-family:'Helvetica'; font-size:1.1vw;">
<a href="#ref-2"><span id="nota-2" class="vermelho">2</span></a>
  Desta maneira, a constante divulgação das informações promove a alavancagem das regras de conduta normativas. No mundo atual, o desafiador cenário globalizado ainda não demonstrou convincentemente que vai participar na mudança de alternativas às soluções ortodoxas. A prática cotidiana prova que a revolução dos costumes acarreta um processo de reformulação e modernização do remanejamento dos quadros funcionais. O que temos que ter sempre em mente é que a contínua expansão de nossa atividade deve passar por modificações independentemente do investimento em reciclagem técnica.
  </p>`;
