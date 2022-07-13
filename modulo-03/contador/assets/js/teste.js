
var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}


//cria uma função de parada
/*
function(stop){

    //busca conteúdo 
      var conteudo = document.getElementById("currentNumber").value;
  
      //valida conteudo - se conteudo for maior ou igual a 10 -> parar botão! se não -> não parar
      if (conteudo >= 10) {
        //desabilita o botão
        document.getElementById(".somar").disabled = true;
      } else {
        document.getElementById(".somar").disabled = false;
      }
  };
*/

  let input = document.querySelector(".currentNumber");
  let button = document.querySelector("#somar");
  button.disabled = false;
  input.addEventListener("change", stateHandle);
  function stateHandle() {
    if (document.querySelector("currentNumber").value === "10") {
      button.disabled = true; 
    } else {
      button.disabled = false;
    }
  }