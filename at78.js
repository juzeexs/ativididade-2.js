const prompt = require('prompt-sync')();

// Função para contar quantas vezes um número aparece no vetor
function contarOcorrencias(vetor, numero) {
  let contador = 0;
  // Percorre o vetor e conta as ocorrências do número especificado
  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] === numero) {
      contador++; // Incrementa o contador quando o número for encontrado
    }
  }
  return contador;
}

// Solicita ao usuário o tamanho do vetor
const tamanho = parseInt(prompt("Digite o tamanho do vetor: "));

let vetor = [];

// Lê os elementos do vetor
for (let i = 0; i < tamanho; i++) {
  const numero = parseInt(prompt(`Digite o número ${i + 1}: `));
  vetor.push(numero); // Adiciona o número no vetor
}

// Solicita o número a ser contado no vetor
const numeroParaContar = parseInt(prompt("Digite o número a ser contado no vetor: "));

// Conta e exibe quantas vezes o número aparece no vetor
const ocorrencias = contarOcorrencias(vetor, numeroParaContar);
console.log(`O número ${numeroParaContar} aparece ${ocorrencias} vez(es) no vetor.`);
