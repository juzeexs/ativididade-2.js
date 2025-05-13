const prompt = require('prompt-sync')();

let soma = 0;
let contador = 0;
let numero;

while (true) {
  numero = parseFloat(prompt("Digite um número (ou zero para sair): "));
  
  if (numero === 0) {
    break; // Sai do laço se o número for zero
  }
  
  soma += numero; // Adiciona o número à soma
  contador++; // Conta o número de entradas
}

if (contador > 0) {
  let media = soma / contador;
  console.log(`A média dos números digitados é: ${media}`);
} else {
  console.log("Nenhum número válido foi digitado.");
}
