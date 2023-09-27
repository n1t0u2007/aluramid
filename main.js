function tocasom(idElementoAudio) {
    const elemento = document.querySelector(idElementoAudio);
  
    if (elemento && elemento.localName === 'audio') {
      elemento.play();
    } else {
      console.log('Elemento ou seletor não encontrado');
    }
  }
  
  const listadeteclas = document.querySelectorAll('.tecla');
  
  for (let contador = 0; contador < listadeteclas.length; contador++) {
    const tecla = listadeteclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
  
    tecla.onclick = function () {
      tocasom(idAudio);
    };
  
    tecla.onkeydown = function (evento) {
      if (evento.code === 'Space' || evento.code === 'Enter') {
        tecla.classList.add('ativa');
      }
    };
  
    tecla.onkeyup = function () {
      tecla.classList.remove('ativa');
    };
  }