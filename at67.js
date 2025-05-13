const prompt = require('prompt-sync')();

const numero = parseInt(prompt("Digite um número para exibir seus divisores: "));

console.log(`Divisores de ${numero}:`);

for (let i = 1; i <= numero; i++) {
  if (numero % i === 0) {
    console.log(i);
  }
}
