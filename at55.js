const prompt = require('prompt-sync')();

const n = parseInt(prompt("Digite um número N para verificar se é primo: "));
let ehPrimo = true;

if (n <= 1) {
  ehPrimo = false;
} else {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      ehPrimo = false;
      break;
    }
  }
}

if (ehPrimo) {
  console.log(`${n} é um número primo.`);
} else {
  console.log(`${n} NÃO é um número primo.`);
}

