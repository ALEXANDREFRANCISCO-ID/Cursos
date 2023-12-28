


//edição 



  function runCode(elementId) {
  var codeInput = document.getElementById(elementId + "-input").value;
  var outputFrame = document.getElementById(elementId + "-output");

  outputFrame.contentWindow.document.open();
  outputFrame.contentWindow.document.write(codeInput);
  outputFrame.contentWindow.document.close();
}

//Fim de edição 
const aulas = document.querySelectorAll("section");
let aulaAtual = 0;

const btnAnterior = document.getElementsByClassName("anterior");
const btnProximo = document.getElementsByClassName("proximo");

for (let i = 0; i < btnAnterior.length; i++) {
  btnAnterior[i].addEventListener("click", function() {
    if (aulaAtual > 0) {
      aulas[aulaAtual].classList.add("hidden");
      aulaAtual--;
      aulas[aulaAtual].classList.remove("hidden");
    }
    if (aulaAtual === 0) {
      btnAnterior[i].disabled = true;
    }
    btnProximo[i].disabled = false;
  });
}

for (let i = 0; i < btnProximo.length; i++) {
  btnProximo[i].addEventListener("click", function() {
    if (aulaAtual < aulas.length - 1) {
      aulas[aulaAtual].classList.add("hidden");
      aulaAtual++;
      aulas[aulaAtual].classList.remove("hidden");
    }
    if (aulaAtual === aulas.length - 1) {
      btnProximo[i].disabled = true;
    }
    btnAnterior[i].disabled = false;
  });
}


document.querySelectorAll('button.anterior').forEach(button => {
  button.addEventListener('click', function() {
    window.scrollTo(0, 0);
  });
});
document.querySelectorAll('button.proximo').forEach(button => {
  button.addEventListener('click', function() {
    window.scrollTo(0, 0);
  });
});
