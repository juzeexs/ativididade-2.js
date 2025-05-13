const prompt = require('prompt-sync')();

// Leitura do tamanho da matriz
const m = parseInt(prompt("Digite o número de linhas da matriz: "));
const n = parseInt(prompt("Digite o número de colunas da matriz: "));

// Função para ler a matriz com minas (0 ou 1)
function lerMatrizMinas(m, n) {
  let matriz = [];
  console.log("\nPreencha a matriz com 0 (campo) ou 1 (mina):");
  for (let i = 0; i < m; i++) {
    let linha = [];
    for (let j = 0; j < n; j++) {
      const valor = parseInt(prompt(`Valor na posição [${i + 1}][${j + 1}]: `));
      linha.push(valor);
    }
    matriz.push(linha);
  }
  return matriz;
}

// Função para contar minas vizinhas
function contarMinasVizinhas(matriz, m, n) {
  let resultado = [];

  for (let i = 0; i < m; i++) {
    let linha = [];
    for (let j = 0; j < n; j++) {
      let minas = 0;

      // Verifica as 8 posições vizinhas
      for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
          if (x === 0 && y === 0) continue; // Pula a própria célula
          let ni = i + x;
          let nj = j + y;
          if (ni >= 0 && ni < m && nj >= 0 && nj < n && matriz[ni][nj] === 1) {
            minas++;
          }
        }
      }
      linha.push(minas);
    }
    resultado.push(linha);
  }

  return resultado;
}

// Função para exibir uma matriz
function exibirMatriz(matriz, titulo) {
  console.log(`\n${titulo}:`);
  for (let linha of matriz) {
    console.log(linha.join(' '));
  }
}

// Execução
const campo = lerMatrizMinas(m, n);
const vizinhos = contarMinasVizinhas(campo, m, n);

// Resultados
exibirMatriz(campo, "Matriz de Minas");
exibirMatriz(vizinhos, "Matriz de Contagem de Minas Vizinhas");
