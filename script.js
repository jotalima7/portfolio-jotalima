const botaoAcessibilidade = document.getElementById('botao-acessibilidade');
const opcoesAcessibilidade = document.getElementById('opcoes-acessibilidade');
const botaoContraste = document.getElementById('alterna-contraste');
const botaoAumentar = document.getElementById('aumentar-fonte');
const botaoDiminuir = document.getElementById('diminuir-fonte');

let contrasteAtivo = false;
let tamanhoFonte = 1; // 1 rem

if (botaoAcessibilidade && opcoesAcessibilidade) {
  botaoAcessibilidade.addEventListener('click', () => {
    botaoAcessibilidade.classList.toggle('rotacao-botao');
    opcoesAcessibilidade.classList.toggle('apresenta-lista');
  
    const expanded = botaoAcessibilidade.getAttribute('aria-expanded') === 'true';
    botaoAcessibilidade.setAttribute('aria-expanded', !expanded);
  });
}

if (botaoContraste) {
  botaoContraste.addEventListener('click', () => {
    contrasteAtivo = !contrasteAtivo;
    document.body.classList.toggle('alto-contraste', contrasteAtivo);
    botaoContraste.setAttribute('aria-pressed', contrasteAtivo);
  });
}

if (botaoAumentar) {
  botaoAumentar.addEventListener('click', () => {
    tamanhoFonte += 0.1;
    document.body.style.fontSize = `${tamanhoFonte}rem`;
  });
}

if (botaoDiminuir) {
  botaoDiminuir.addEventListener('click', () => {
    tamanhoFonte = Math.max(0.7, tamanhoFonte - 0.1); // tamanho mínimo de 0.7rem
    document.body.style.fontSize = `${tamanhoFonte}rem`;
  });
}
