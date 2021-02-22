function publicacoes(){
  document.querySelector(`#publicacoes`).classList.remove('hidden');

  seta.configurar('normal-vrm');
  seta.esconderEtiqueta();

  //animar(idAlvo, idMae, texto, callback = false, classes = ['intro-texto'])
  animar('titulo1-publicacoes', 'aa1-titulos', 'About Academia I', false, ['vermelho', 'texto-publicacoes'])
  animar('subtitulo1-publicacoes', 'aa1-titulos', idioma('As transcrições: um documento interno', 'Las transcripciones: un documento interno'), false, ['texto-publicacoes'])
  animar('sample1-publicacoes', 'aa1-nav', 'Sample book', ()=>{console.log('abriu sample')}, ['texto-publicacoes', 'clicavel'])
  animar('link1-publicacoes', 'aa1-nav', 'Download', ()=>{console.log('abriu link')}, ['texto-publicacoes', 'clicavel'])

  animar('titulo2-publicacoes', 'aa2-titulos', 'About Academia II', false, ['vermelho', 'texto-publicacoes'])
  animar('subtitulo2-publicacoes', 'aa2-titulos', idioma('As transcrições: um documento interno', 'Las transcripciones: un documento interno'), false, ['texto-publicacoes'])
  animar('sample2-publicacoes', 'aa2-nav', 'Sample book', ()=>{console.log('abriu sample')}, ['texto-publicacoes', 'clicavel'])
  animar('link2-publicacoes', 'aa2-nav', 'Download', ()=>{console.log('abriu link')}, ['texto-publicacoes', 'clicavel'])


}
