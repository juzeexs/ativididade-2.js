const prompt = require('prompt-sync')();

const n = parseInt(prompt("Digite quantos números primos você deseja ver: "));

let contador = 0; // Conta quantos primos já foram encontrados
let numero = 2;   // Começa testando a partir do número 2

console.log(`\nOs primeiros ${n} números primos são:`);

while (contador < n) {
  let ehPrimo = true;

  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      ehPrimo = false;
      break;
    }
  }

  if (ehPrimo) {
    console.log(numero);
    contador++;
  }

  numero++;
}
