const prompt = require('prompt-sync')();

const n = parseInt(prompt("Digite um número para exibir a sequência de Fibonacci até ele: "));

let a = 0, b = 1;

console.log(`Sequência de Fibonacci até ${n}:`);

while (a <= n) {
  console.log(a);
  let temp = a;
  a = b;
  b = temp + b;
}
