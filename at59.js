const prompt = require('prompt-sync')();

const a = parseInt(prompt("Digite o número A: "));
const b = parseInt(prompt("Digite o número B: "));

console.log(`Números entre ${a} e ${b}:`);

for (let i = a; i <= b; i++) {
  console.log(i);
}
