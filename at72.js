const prompt = require('prompt-sync')();

// Função para encontrar o maior elemento do vetor
function maiorElemento(vetor) {
  let maior = vetor[0]; // Inicializa com o primeiro elemento do vetor
  for (let i = 1; i < vetor.length; i++) {
    if (vetor[i] > maior) {
      maior = vetor[i]; // Atualiza o maior valor se encontrar um maior
    }
  }
  return maior;
}

// Solicita ao usuário o tamanho do vetor
const tamanho = parseInt(prompt("Digite o tamanho do vetor: "));

let vetor = [];
// Lê os elementos do vetor
for (let i = 0; i < tamanho; i++) {
  const numero = parseInt(prompt(`Digite o número ${i + 1}: `));
  vetor.push(numero); // Adiciona o número no vetor
}

// Encontra e exibe o maior elemento do vetor
const maior = maiorElemento(vetor);
console.log(`O maior elemento do vetor é: ${maior}`);

