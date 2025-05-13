const prompt = require('prompt-sync')();

// Função recursiva para somar os dígitos
function somaDigitos(n) {
  n = Math.abs(n); // Garante que o número seja positivo
  if (n < 10) {
    return n;
  } else {
    return (n % 10) + somaDigitos(Math.floor(n / 10));
  }
}

// Entrada do usuário
const numero = parseInt(prompt("Digite um número inteiro para somar os dígitos: "));

// Resultado
const resultado = somaDigitos(numero);
console.log(`A soma dos dígitos de ${numero} é ${resultado}`);
