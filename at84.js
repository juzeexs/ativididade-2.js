const prompt = require('prompt-sync')();

// Função para preencher a matriz 5x5 com números inteiros
function preencherMatriz() {
  let matriz = [];
  for (let i = 0; i < 5; i++) {
    let linha = [];
    for (let j = 0; j < 5; j++) {
      const valor = parseInt(prompt(`Digite o valor para a posição [${i + 1}][${j + 1}]: `));
      linha.push(valor); // Adiciona o valor na linha
    }
    matriz.push(linha); // Adiciona a linha à matriz
  }
  return matriz;
}

// Função para encontrar o maior valor e sua posição
function encontrarMaiorValor(matriz) {
  let maiorValor = matriz[0][0];
  let posicao = [0, 0]; // Armazena a posição do maior valor
  
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (matriz[i][j] > maiorValor) {
        maiorValor = matriz[i][j];
        posicao = [i, j]; // Atualiza a posição
      }
    }
  }
  
  return { maiorValor, posicao };
}

// Preenche a matriz 5x5
let matriz = preencherMatriz();

// Exibe a matriz preenchida
console.log("\nMatriz 5x5 preenchida:");
for (let i = 0; i < 5; i++) {
  console.log(matriz[i].join(' ')); // Exibe cada linha da matriz
}

// Encontra o maior valor e a posição
let resultado = encontrarMaiorValor(matriz);

// Exibe o maior valor e sua posição
console.log(`\nO maior valor da matriz é ${resultado.maiorValor} e ele se encontra na posição [${resultado.posicao[0] + 1}][${resultado.posicao[1] + 1}].`);
