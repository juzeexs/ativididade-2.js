const prompt = require('prompt-sync')();

// Função para inverter e exibir o vetor
function exibirOrdemInversa(vetor) {
  for (let i = vetor.length - 1; i >= 0; i--) {
    console.log(vetor[i]); // Exibe os elementos do vetor em ordem inversa
  }
}

// Solicita ao usuário o tamanho do vetor
const tamanho = parseInt(prompt("Digite o tamanho do vetor: "));

let vetor = [];

// Lê os elementos do vetor
for (let i = 0; i < tamanho; i++) {
  const numero = parseInt(prompt(`Digite o número ${i + 1}: `));
  vetor.push(numero); // Adiciona o número no vetor
}

// Exibe os elementos na ordem inversa
console.log("Os elementos do vetor na ordem inversa são:");
exibirOrdemInversa(vetor);
