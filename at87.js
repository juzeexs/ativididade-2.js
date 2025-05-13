const prompt = require('prompt-sync')();

// Função para preencher a matriz 3x3 com números inteiros
function preencherMatriz() {
  let matriz = [];
  for (let i = 0; i < 3; i++) {
    let linha = [];
    for (let j = 0; j < 3; j++) {
      const valor = parseInt(prompt(`Digite o valor para a posição [${i + 1}][${j + 1}]: `));
      linha.push(valor); // Adiciona o número na linha
    }
    matriz.push(linha); // Adiciona a linha à matriz
  }
  return matriz;
}

// Função para calcular o determinante de uma matriz 3x3
function calcularDeterminante(matriz) {
  const a = matriz[0][0], b = matriz[0][1], c = matriz[0][2];
  const d = matriz[1][0], e = matriz[1][1], f = matriz[1][2];
  const g = matriz[2][0], h = matriz[2][1], i = matriz[2][2];
  
  // Fórmula do determinante de uma matriz 3x3
  const determinante = a * (e * i - f * h) - b * (d * i - f * g) + c * (d * h - e * g);
  
  return determinante;
}

// Preenche a matriz 3x3
let matriz = preencherMatriz();

// Exibe a matriz preenchida
console.log("\nMatriz 3x3 preenchida:");
for (let i = 0; i < 3; i++) {
  console.log(matriz[i].join(' ')); // Exibe cada linha da matriz
}

// Calcula o determinante da matriz
let determinante = calcularDeterminante(matriz);
console.log(`\nO determinante da matriz é: ${determinante}`);
