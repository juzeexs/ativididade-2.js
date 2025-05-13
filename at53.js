const prompt = require('prompt-sync')();

let soma = 0;

console.log("Calculando a soma dos números pares de 1 a 100...\n");

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    soma += i;
  }
}

console.log(`A soma dos números pares de 1 a 100 é: ${soma}`);
