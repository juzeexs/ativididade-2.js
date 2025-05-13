const prompt = require('prompt-sync')();

// Função recursiva para encontrar o menor valor em um vetor
function menorValor(vetor, index = 0, menor = Infinity) {
  if (index === vetor.length) {
    return menor;
  }
  
  if (vetor[index] < menor) {
    menor = vetor[index];
  }
  
  return menorValor(vetor, index + 1, menor);
}

// Leitura do vetor
const numeros = prompt("Digite uma lista de números separados por espaço: ").split(" ").map(Number);

// Chamada da função recursiva para encontrar o menor valor
const resultado = menorValor(numeros);
console.log(`O menor valor no vetor é: ${resultado}`);
