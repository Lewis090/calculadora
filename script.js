let numero = "";
let numeroAnterior = "";
let operacao = null;

function adicionarNumero(num) {
  numero += num;
  document.getElementById("calculadora").textContent = numero;
}

function calcular(op) {
  if (operacao !== null) {
    calcularResultado();
  }
  numeroAnterior = numero;
  numero ='';
  operacao = op;
}

function calcularResultado(){
  switch(operacao){
    case '+':
      numero = parseFloat(numeroAnterior) + parseFloat(numero);
      break;
    case '-':
      numero = parseFloat(numeroAnterior) - parseFloat(numero);
      break;
    case '*':
      numero = parseFloat(numeroAnterior) * parseFloat(numero);
      break;
    case '/':
      numero = parseFloat(numeroAnterior) / parseFloat(numero);
      break;  

  }
  operacao = null;
  numeroAnterior ='';
  document.getElementById("calculadora").textContent = numero;
}

function limpar(){
  numero =''
  numeroAnterior ='';
  operacao =null;
  document.getElementById("calculadora").textContent ="";
}