const prompt = require('prompt-sync')();

let soma = 0;
let numero;

while (true) {
  numero = parseInt(prompt("Digite um número (ou um número negativo para sair): "));
  
  if (numero < 0) {
    break; // Sai do laço se o número for negativo
  }
  
  soma += numero; // Adiciona o número à soma se for positivo
}

console.log(`A soma dos números positivos é: ${soma}`);
