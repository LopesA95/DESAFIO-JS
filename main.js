var a = 20;
var b = 10;

var mensagem = 'Hello World!'
alert(mensagem);


function soma(a, b) {
  return a + b;
}

alert(soma(a, b));


var valor = prompt('Digite um número:');

if (typeof parseFloat(valor) === 'number' && !isNaN(parseFloat(valor))) {
  alert('É um número');
} else {
  alert('Não é um número');
}

var text = prompt('Digite um valor:');

if (/^\d+$/.test(text)) {
  alert('Não é uma string');
} else {
  alert('É uma string');
}

var booleano = confirm('É um boleano?');

if (booleano === true) {
  alert('É um booleano');
}else {
  alert('Não é um booleano');
}

function sub(a, b) {
  return a - b;
}

alert(sub(a, b));

function mult(a, b) {
  return a * b;
}

alert(mult(a, b));

function div(a, b) {
  return a / b;
}

alert(div(a, b));




