const prompt = require('prompt-sync')();

// Função para gerar uma matriz 4x4 com valores aleatórios
function gerarMatrizAleatoria(tamanho) {
  let matriz = [];
  for (let i = 0; i < tamanho; i++) {
    let linha = [];
    for (let j = 0; j < tamanho; j++) {
      linha.push(Math.floor(Math.random() * 100)); // Gera um número aleatório entre 0 e 99
    }
    matriz.push(linha);
  }
  return matriz;
}

// Função para calcular a matriz transposta
function matrizTransposta(matriz) {
  let transposta = [];
  for (let i = 0; i < matriz[0].length; i++) {
    let linha = [];
    for (let j = 0; j < matriz.length; j++) {
      linha.push(matriz[j][i]); // Troca as linhas pelas colunas
    }
    transposta.push(linha);
  }
  return transposta;
}

// Gera a matriz aleatória 4x4
const tamanho = 4;
let matriz = gerarMatrizAleatoria(tamanho);

// Exibe a matriz original
console.log("Matriz 4x4 original:");
for (let i = 0; i < tamanho; i++) {
  console.log(matriz[i].join(' ')); // Exibe cada linha da matriz
}

// Calcula a matriz transposta
let matrizTranspostaResultado = matrizTransposta(matriz);

// Exibe a matriz transposta
console.log("\nMatriz transposta:");
for (let i = 0; i < tamanho; i++) {
  console.log(matrizTranspostaResultado[i].join(' ')); // Exibe cada linha da matriz transposta
}
