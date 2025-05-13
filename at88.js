const prompt = require('prompt-sync')();

// Função para ler uma matriz com dimensões dadas
function lerMatriz(linhas, colunas, nome) {
  let matriz = [];
  console.log(`\nPreenchendo a matriz ${nome} (${linhas}x${colunas}):`);
  for (let i = 0; i < linhas; i++) {
    let linha = [];
    for (let j = 0; j < colunas; j++) {
      const valor = parseInt(prompt(`Digite o valor para ${nome}[${i + 1}][${j + 1}]: `));
      linha.push(valor);
    }
    matriz.push(linha);
  }
  return matriz;
}

// Função para multiplicar duas matrizes
function multiplicarMatrizes(m1, m2) {
  let resultado = [];
  let linhas = m1.length;
  let colunas = m2[0].length;
  let comum = m2.length;

  for (let i = 0; i < linhas; i++) {
    let linha = [];
    for (let j = 0; j < colunas; j++) {
      let soma = 0;
      for (let k = 0; k < comum; k++) {
        soma += m1[i][k] * m2[k][j];
      }
      linha.push(soma);
    }
    resultado.push(linha);
  }
  return resultado;
}

// Função para exibir matriz
function exibirMatriz(matriz, nome = "Matriz") {
  console.log(`\n${nome}:`);
  for (let i = 0; i < matriz.length; i++) {
    console.log(matriz[i].join(' '));
  }
}

// Leitura das dimensões das matrizes
const linA = parseInt(prompt("Digite o número de linhas da matriz A: "));
const colA = parseInt(prompt("Digite o número de colunas da matriz A: "));
const linB = parseInt(prompt("Digite o número de linhas da matriz B: "));
const colB = parseInt(prompt("Digite o número de colunas da matriz B: "));

// Verifica se a multiplicação é possível
if (colA !== linB) {
  console.log("\nMultiplicação não é possível: o número de colunas de A deve ser igual ao número de linhas de B.");
} else {
  const matrizA = lerMatriz(linA, colA, "A");
  const matrizB = lerMatriz(linB, colB, "B");

  const resultado = multiplicarMatrizes(matrizA, matrizB);

  exibirMatriz(matrizA, "Matriz A");
  exibirMatriz(matrizB, "Matriz B");
  exibirMatriz(resultado, "Resultado da multiplicação");
}
