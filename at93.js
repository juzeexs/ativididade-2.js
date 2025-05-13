const prompt = require('prompt-sync')();

// Função recursiva auxiliar para verificar divisores
function verificaPrimo(n, divisor = 2) {
  if (n <= 2) {
    return n === 2;
  }
  if (n % divisor === 0) {
    return false;
  }
  if (divisor * divisor > n) {
    return true;
  }
  return verificaPrimo(n, divisor + 1);
}

// Entrada do usuário
const numero = parseInt(prompt("Digite um número para verificar se é primo: "));

// Verificação
if (numero < 1) {
  console.log("Digite um número inteiro positivo maior que 0.");
} else {
  const ehPrimo = verificaPrimo(numero);
  if (ehPrimo) {
    console.log(`${numero} é um número primo.`);
  } else {
    console.log(`${numero} NÃO é um número primo.`);
  }
}
