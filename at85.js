const prompt = require('prompt-sync')();

// Função para preencher a matriz 3x3 com números inteiros
function preencherMatriz() {
  let matriz = [];
  for (let i = 0; i < 3; i++) {
    let linha = [];
    for (let j = 0; j < 3; j++) {
      const valor = parseInt(prompt(`Digite o valor para a posição [${i + 1}][${j + 1}]: `));
      linha.push(valor); // Adiciona o valor na linha
    }
    matriz.push(linha); // Adiciona a linha à matriz
  }
  return matriz;
}

// Função para calcular a média dos valores nas posições com índices pares
function calcularMediaPosicoesPares(matriz) {
  let soma = 0;
  let count = 0;
  
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      // Verifica se o índice da linha e da coluna são ambos pares
      if (i % 2 === 0 && j % 2 === 0) {
        soma += matriz[i][j];
        count++;
      }
    }
  }
  
  if (count > 0) {
    return soma / count; // Calcula a média
  } else {
    return 0; // Retorna 0 caso não haja elementos
  }
}

// Preenche a matriz 3x3
let matriz = preencherMatriz();

// Exibe a matriz preenchida
console.log("\nMatriz 3x3 preenchida:");
for (let i = 0; i < 3; i++) {
  console.log(matriz[i].join(' ')); // Exibe cada linha da matriz
}

// Calcula e exibe a média dos valores nas posições com índices pares
let media = calcularMediaPosicoesPares(matriz);
console.log(`\nA média dos valores nas posições com índices pares é: ${media}`);
