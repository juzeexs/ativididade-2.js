const prompt = require('prompt-sync')();

// Função para ler uma matriz 4x4
function lerMatriz() {
  let matriz = [];
  console.log("Digite os valores da matriz 4x4:");
  for (let i = 0; i < 4; i++) {
    let linha = [];
    for (let j = 0; j < 4; j++) {
      const valor = parseInt(prompt(`Digite o valor para posição [${i + 1}][${j + 1}]: `));
      linha.push(valor);
    }
    matriz.push(linha);
  }
  return matriz;
}

// Função para verificar se é matriz diagonal
function ehMatrizDiagonal(matriz) {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (i !== j && matriz[i][j] !== 0) {
        return false;
      }
    }
  }
  return true;
}

// Função para exibir a matriz
function exibirMatriz(matriz) {
  console.log("\nMatriz informada:");
  for (let i = 0; i < 4; i++) {
    console.log(matriz[i].join(' '));
  }
}

// Execução do programa
const matriz = lerMatriz();
exibirMatriz(matriz);

if (ehMatrizDiagonal(matriz)) {
  console.log("\nA matriz é diagonal.");
} else {
  console.log("\nA matriz NÃO é diagonal.");
}
