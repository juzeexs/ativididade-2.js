const prompt = require('prompt-sync')();

// Função para verificar se todos os elementos do vetor são pares
function verificarPares(vetor) {
  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] % 2 !== 0) {
      return false; // Se encontrar um número ímpar, retorna falso
    }
  }
  return true; // Se todos os elementos forem pares, retorna verdadeiro
}

// Solicita ao usuário o tamanho do vetor
const tamanho = parseInt(prompt("Digite o tamanho do vetor: "));

let vetor = [];

// Lê os elementos do vetor
for (let i = 0; i < tamanho; i++) {
  const numero = parseInt(prompt(`Digite o número ${i + 1}: `));
  vetor.push(numero); // Adiciona o número no vetor
}

// Verifica se todos os elementos do vetor são pares
if (verificarPares(vetor)) {
  console.log("Todos os elementos do vetor são pares.");
} else {
  console.log("Nem todos os elementos do vetor são pares.");
}
