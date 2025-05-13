const prompt = require('prompt-sync')();

// Função para ler uma matriz 2x2
function lerMatriz() {
  let matriz = [];
  for (let i = 0; i < 2; i++) {
    let linha = [];
    for (let j = 0; j < 2; j++) {
      const valor = parseInt(prompt(`Digite o valor para a posição [${i + 1}][${j + 1}]: `));
      linha.push(valor); // Adiciona o número na linha
    }
    matriz.push(linha); // Adiciona a linha à matriz
  }
  return matriz;
}

// Função para somar duas matrizes 2x2
function somarMatrizes(matriz1, matriz2) {
  let matrizResultado = [];
  for (let i = 0; i < 2; i++) {
    let linha = [];
    for (let j = 0; j < 2; j++) {
      linha.push(matriz1[i][j] + matriz2[i][j]); // Soma os elementos correspondentes das matrizes
    }
    matrizResultado.push(linha); // Adiciona a linha ao resultado
  }
  return matrizResultado;
}

// Lê as duas matrizes 2x2
console.log("Digite os elementos da primeira matriz 2x2:");
let matriz1 = lerMatriz();

console.log("Digite os elementos da segunda matriz 2x2:");
let matriz2 = lerMatriz();

// Soma as matrizes
let matrizResultado = somarMatrizes(matriz1, matriz2);

// Exibe as matrizes e o resultado da soma
console.log("\nPrimeira matriz 2x2:");
for (let i = 0; i < 2; i++) {
  console.log(matriz1[i].join(' ')); // Exibe a primeira matriz
}

console.log("\nSegunda matriz 2x2:");
for (let i = 0; i < 2; i++) {
  console.log(matriz2[i].join(' ')); // Exibe a segunda matriz
}

console.log("\nResultado da soma das matrizes:");
for (let i = 0; i < 2; i++) {
  console.log(matrizResultado[i].join(' ')); // Exibe o resultado da soma
}
