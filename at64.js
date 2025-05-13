const prompt = require('prompt-sync')();

const frase = prompt("Digite uma frase: ");
let contadorVogais = 0;

// Converte a frase para minúsculas para facilitar a contagem
const fraseMinuscula = frase.toLowerCase();

// Percorre cada caractere da frase e conta as vogais
for (let i = 0; i < fraseMinuscula.length; i++) {
  const letra = fraseMinuscula[i];
  if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
    contadorVogais++;
  }
}

console.log(`A quantidade de vogais na frase é: ${contadorVogais}`);
