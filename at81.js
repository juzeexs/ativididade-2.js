const prompt = require('prompt-sync')();

// Função para calcular a soma da diagonal principal
function somaDiagonalPrincipal(matriz) {
  let soma = 0;
  for (let i = 0; i < matriz.length; i++) {
    soma += matriz[i][i]; // Soma os elementos da diagonal principal
  }
  return soma;
}

// Inicializa a matriz 3x3
let matriz = [];

// Preenche a matriz 3x3 com os valores fornecidos pelo usuário
console.log("Digite os elementos para preencher a matriz 3x3:");
for (let i = 0; i < 3; i++) {
  let linha = [];
  for (let j = 0; j < 3; j++) {
    const valor = parseInt(prompt(`Digite o valor da posição [${i + 1}][${j + 1}]: `));
    linha.push(valor);
  }
  matriz.push(linha); // Adiciona a linha à matriz
}

// Exibe a matriz preenchida
console.log("Matriz preenchida:");
for (let i = 0; i < 3; i++) {
  console.log(matriz[i].join(' ')); // Exibe cada linha da matriz
}

// Calcula a soma da diagonal principal e exibe o resultado
const soma = somaDiagonalPrincipal(matriz);
console.log(`A soma dos valores da diagonal principal é: ${soma}`);
