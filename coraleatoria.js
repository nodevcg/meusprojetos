function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

let cor = '#FFFFFF';

function alterarCor(){
  const letras = '0123456789ABCDEF';

  cor = '#';

  for (let i = 0; i < 6; i++) {
      let numero = getRandomIntInclusive(0, 15);
      cor+=letras[numero];
  }

  document.body.style.backgroundColor = cor;

  const codigohex = document.getElementById('codigohex');
  codigohex.textContent = cor;
  codigohex.style.color = cor;
}

function copiarLink() {
  navigator.clipboard.writeText(cor);
}