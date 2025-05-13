// Função para gerar uma matriz 4x4 com números aleatórios
function preencherMatriz() {
  let matriz = [];
  for (let i = 0; i < 4; i++) {
    let linha = [];
    for (let j = 0; j < 4; j++) {
      // Gera números aleatórios entre 1 e 100
      const valor = Math.floor(Math.random() * 100) + 1;
      linha.push(valor); // Adiciona o número na linha
    }
    matriz.push(linha); // Adiciona a linha à matriz
  }
  return matriz;
}

// Função para calcular e exibir a soma dos valores de cada linha e de cada coluna
function calcularSomas(matriz) {
  let somaLinhas = [];
  let somaColunas = [0, 0, 0, 0]; // Inicializa um vetor para a soma das colunas
  
  for (let i = 0; i < 4; i++) {
    let somaLinha = 0;
    for (let j = 0; j < 4; j++) {
      somaLinha += matriz[i][j]; // Soma os valores da linha
      somaColunas[j] += matriz[i][j]; // Soma os valores das colunas
    }
    somaLinhas.push(somaLinha); // Armazena a soma da linha
  }
  
  return { somaLinhas, somaColunas };
}

// Preenche a matriz 4x4 com números aleatórios
let matriz = preencherMatriz();

// Exibe a matriz preenchida
console.log("Matriz 4x4 preenchida:");
for (let i = 0; i < 4; i++) {
  console.log(matriz[i].join(' ')); // Exibe cada linha da matriz
}

// Calcula as somas das linhas e das colunas
let resultado = calcularSomas(matriz);

// Exibe a soma dos valores de cada linha
console.log("\nSoma dos valores de cada linha:");
for (let i = 0; i < 4; i++) {
  console.log(`Soma da linha ${i + 1}: ${resultado.somaLinhas[i]}`);
}

// Exibe a soma dos valores de cada coluna
console.log("\nSoma dos valores de cada coluna:");
for (let j = 0; j < 4; j++) {
  console.log(`Soma da coluna ${j + 1}: ${resultado.somaColunas[j]}`);
}
