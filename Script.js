const botoesProximo = document.querySelectorAll('.proximo');
let aulaAtual = 0;

botoesProximo.forEach((botao, index) => {
  botao.addEventListener('click', () => {
    if (index === aulaAtual) {
      aulaAtual++;
      mostrarAula(aulaAtual);
    }
  });
});

function mostrarAula(index) {
  const aulas = document.querySelectorAll('section');
  aulas.forEach((aula, i) => {
    if (i === index) {
      aula.style.display = 'block';
    } else {
      aula.style.display = 'none';
    }
  });

  atualizarBotoes(aulaAtual);
}

function atualizarBotoes(index) {
  botoesProximo.forEach((botao, i) => {
    if (i === index) {
      botao.disabled = false;
    } else {
      botao.disabled = true;
    }
  });
}

  







  function runCode(elementId) {
  var codeInput = document.getElementById(elementId + "-input").value;
  var outputFrame = document.getElementById(elementId + "-output");

  outputFrame.contentWindow.document.open();
  outputFrame.contentWindow.document.write(codeInput);
  outputFrame.contentWindow.document.close();
}




document.querySelectorAll('button.proximo').forEach(button => {
  button.addEventListener('click', function() {
    window.scrollTo(0, 0);
  });
});
