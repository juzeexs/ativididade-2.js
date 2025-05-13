const prompt = require('prompt-sync')();

// Função para encontrar o segundo maior elemento
function segundoMaior(vetor) {
  let maior = -Infinity; // Inicializa o maior valor com o menor possível
  let segundoMaior = -Infinity; // Inicializa o segundo maior valor com o menor possível

  // Percorre o vetor e encontra o maior e o segundo maior elemento
  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] > maior) {
      segundoMaior = maior; // Atualiza o segundo maior
      maior = vetor[i]; // Atualiza o maior
    } else if (vetor[i] > segundoMaior && vetor[i] !== maior) {
      segundoMaior = vetor[i]; // Atualiza o segundo maior (se o número não for igual ao maior)
    }
  }

  return segundoMaior;
}

// Solicita ao usuário o tamanho do vetor
const tamanho = parseInt(prompt("Digite o tamanho do vetor: "));

let vetor = [];

// Lê os elementos do vetor
for (let i = 0; i < tamanho; i++) {
  const numero = parseInt(prompt(`Digite o número ${i + 1}: `));
  vetor.push(numero); // Adiciona o número no vetor
}

// Verifica se o vetor tem pelo menos dois elementos
if (vetor.length < 2) {
  console.log("O vetor deve ter pelo menos dois elementos.");
} else {
  // Encontra e exibe o segundo maior elemento
  const segundo = segundoMaior(vetor);
  console.log(`O segundo maior elemento do vetor é: ${segundo}`);
}
