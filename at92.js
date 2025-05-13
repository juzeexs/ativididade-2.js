const prompt = require('prompt-sync')();

// Função recursiva para calcular o n-ésimo número de Fibonacci
function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Leitura do número
const numero = parseInt(prompt("Digite um número para exibir a sequência de Fibonacci até esse termo: "));

// Verifica e exibe a sequência
if (numero < 0) {
  console.log("Número inválido. Digite um número inteiro não negativo.");
} else {
  console.log(`Sequência de Fibonacci até o ${numero}º termo:`);
  for (let i = 0; i <= numero; i++) {
    console.log(fibonacci(i));
  }
}
