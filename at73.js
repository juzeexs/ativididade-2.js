const prompt = require('prompt-sync')();

// Função para calcular a média dos elementos do vetor
function calcularMedia(vetor) {
  let soma = 0;
  for (let i = 0; i < vetor.length; i++) {
    soma += vetor[i]; // Soma todos os elementos
  }
  return soma / vetor.length; // Retorna a média
}

// Solicita ao usuário o tamanho do vetor
const tamanho = parseInt(prompt("Digite o tamanho do vetor: "));

let vetor = [];
// Lê os elementos do vetor
for (let i = 0; i < tamanho; i++) {
  const numero = parseInt(prompt(`Digite o número ${i + 1}: `));
  vetor.push(numero); // Adiciona o número no vetor
}

// Calcula e exibe a média dos elementos do vetor
const media = calcularMedia(vetor);
console.log(`A média dos elementos do vetor é: ${media}`);

