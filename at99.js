const prompt = require('prompt-sync')();

// Função recursiva para verificar se uma palavra é um palíndromo
function ehPalindromo(palavra) {
  // Caso base: se a palavra tiver 0 ou 1 caractere, é um palíndromo
  if (palavra.length <= 1) {
    return true;
  }
  
  // Comparando o primeiro e o último caractere
  if (palavra.charAt(0) !== palavra.charAt(palavra.length - 1)) {
    return false;
  }
  
  // Chamada recursiva removendo o primeiro e o último caractere
  return ehPalindromo(palavra.substring(1, palavra.length - 1));
}

// Entrada do usuário
const palavra = prompt("Digite uma palavra para verificar se é um palíndromo: ").toLowerCase();

// Verificação e saída
if (ehPalindromo(palavra)) {
  console.log(`${palavra} é um palíndromo.`);
} else {
  console.log(`${palavra} NÃO é um palíndromo.`);
}
