const prompt = require('prompt-sync')();

// Função recursiva para calcular o MDC
function mdc(a, b) {
  if (b === 0) {
    return a;
  } else {
    return mdc(b, a % b);
  }
}

// Leitura dos números
const num1 = parseInt(prompt("Digite o primeiro número: "));
const num2 = parseInt(prompt("Digite o segundo número: "));

// Cálculo do MDC
const resultado = mdc(Math.abs(num1), Math.abs(num2));
console.log(`O MDC de ${num1} e ${num2} é ${resultado}`);
