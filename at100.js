const prompt = require('prompt-sync')();

// Função recursiva para somar os elementos de um vetor
function somaVetor(vetor, index = 0) {
  // Caso base: se o índice for igual ao tamanho do vetor, a soma é 0
  if (index === vetor.length) {
    return 0;
  }
  
  // Passo recursivo: soma o elemento atual com a soma dos elementos restantes
  return vetor[index] + somaVetor(vetor, index + 1);
}

// Leitura do vetor
const numeros = prompt("Digite uma lista de números separados por espaço: ").split(" ").map(Number);

// Chamada da função recursiva para calcular a soma
const resultado = somaVetor(numeros);
console.log(`A soma dos elementos do vetor é: ${resultado}`);
