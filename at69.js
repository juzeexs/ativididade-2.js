const prompt = require('prompt-sync')();

// Função para calcular o Máximo Divisor Comum (MDC) utilizando o algoritmo de Euclides
function mdc(a, b) {
  while (b !== 0) {
    let resto = a % b;
    a = b;
    b = resto;
  }
  return a;
}

const num1 = parseInt(prompt("Digite o primeiro número: "));
const num2 = parseInt(prompt("Digite o segundo número: "));

const resultado = mdc(num1, num2);
console.log(`O máximo divisor comum (MDC) de ${num1} e ${num2} é: ${resultado}`);
