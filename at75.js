const prompt = require('prompt-sync')();

// Função para verificar se o vetor está em ordem crescente
function verificarOrdemCrescente(vetor) {
  for (let i = 0; i < vetor.length - 1; i++) {
    if (vetor[i] > vetor[i + 1]) {
      return false; // Se encontrar um elemento maior que o seguinte, retorna falso
    }
  }
  return true; // Se todos os elementos estiverem em ordem crescente, retorna verdadeiro
}

// Solicita ao usuário o tamanho do vetor
const tamanho = parseInt(prompt("Digite o tamanho do vetor: "));

let vetor = [];

// Lê os elementos do vetor
for (let i = 0; i < tamanho; i++) {
  const numero = parseInt(prompt(`Digite o número ${i + 1}: `));
  vetor.push(numero); // Adiciona o número no vetor
}

// Verifica se o vetor está em ordem crescente e exibe o resultado
if (verificarOrdemCrescente(vetor)) {
  console.log("O vetor está em ordem crescente.");
} else {
  console.log("O vetor não está em ordem crescente.");
}
