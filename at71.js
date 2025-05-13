const prompt = require('prompt-sync')();

// Função para ler o vetor e calcular a soma dos elementos
function somarElementos(vetor) {
  let soma = 0;
  for (let i = 0; i < vetor.length; i++) {
    soma += vetor[i]; // Soma os elementos do vetor
  }
  return soma;
}

// Solicita ao usuário o tamanho do vetor
const tamanho = parseInt(prompt("Digite o tamanho do vetor: "));

let vetor = [];
// Lê os elementos do vetor
for (let i = 0; i < tamanho; i++) {
  const numero = parseInt(prompt(`Digite o número ${i + 1}: `));
  vetor.push(numero); // Adiciona o número no vetor
}

// Calcula e exibe a soma dos elementos
const soma = somarElementos(vetor);
console.log(`A soma dos elementos do vetor é: ${soma}`);
