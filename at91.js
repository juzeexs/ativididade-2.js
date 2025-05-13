const prompt = require('prompt-sync')();

// Função recursiva para calcular o fatorial
function fatorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * fatorial(n - 1);
  }
}

// Leitura do número
const numero = parseInt(prompt("Digite um número para calcular o fatorial: "));

// Verificação e chamada da função
if (numero < 0) {
  console.log("Não é possível calcular o fatorial de um número negativo.");
} else {
  const resultado = fatorial(numero);
  console.log(`O fatorial de ${numero} é ${resultado}`);
}
