
const prompt = require('prompt-sync')();

const base = parseFloat(prompt("Digite a base para calcular a potência: "));
const expoente = parseInt(prompt("Digite o expoente para calcular a potência: "));

let resultado = 1;

console.log(`Potência de ${base} elevado a ${expoente}:`);

if (expoente === 0) {
  resultado = 1; // Qualquer número elevado a 0 é 1
} else {
  for (let i = 1; i <= Math.abs(expoente); i++) {
    resultado *= base;
  }

  // Se o expoente for negativo, invertemos o resultado
  if (expoente < 0) {
    resultado = 1 / resultado;
  }
}

console.log(`${base} elevado a ${expoente} é ${resultado}`);



