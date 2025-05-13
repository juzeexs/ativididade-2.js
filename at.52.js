const prompt = require('prompt-sync')();

const n = parseInt(prompt("Digite um número N para somar de 1 até N: "));
let soma = 0;

for (let i = 1; i <= n; i++) {
  soma += i;
}

console.log(`A soma de todos os números de 1 até ${n} é ${soma}`);
