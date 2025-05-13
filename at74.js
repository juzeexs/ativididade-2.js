const prompt = require('prompt-sync')();

// Função para somar os elementos correspondentes dos dois vetores
function somarVetores(vetor1, vetor2) {
  let vetorSoma = [];
  for (let i = 0; i < vetor1.length; i++) {
    vetorSoma.push(vetor1[i] + vetor2[i]); // Soma os elementos correspondentes e armazena no novo vetor
  }
  return vetorSoma;
}

// Solicita ao usuário o tamanho dos vetores
const tamanho = parseInt(prompt("Digite o tamanho dos vetores: "));

let vetor1 = [];
let vetor2 = [];

// Lê os elementos do primeiro vetor
console.log("Digite os elementos do primeiro vetor:");
for (let i = 0; i < tamanho; i++) {
  const numero = parseInt(prompt(`Digite o número ${i + 1}: `));
  vetor1.push(numero); // Adiciona o número no primeiro vetor
}

// Lê os elementos do segundo vetor
console.log("Digite os elementos do segundo vetor:");
for (let i = 0; i < tamanho; i++) {
  const numero = parseInt(prompt(`Digite o número ${i + 1}: `));
  vetor2.push(numero); // Adiciona o número no segundo vetor
}

// Soma os vetores e exibe o vetor resultante
const vetorResultado = somarVetores(vetor1, vetor2);
console.log("O vetor resultante da soma dos dois vetores é:", vetorResultado);
