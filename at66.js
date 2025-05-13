const prompt = require('prompt-sync')();

const frase = prompt("Digite uma sequência de caracteres: ");

// Remove espaços e converte para minúsculas para tornar a comparação mais precisa
const fraseTratada = frase.replace(/\s+/g, '').toLowerCase();

// Verifica se a frase tratada é igual à sua versão invertida
const fraseReversa = fraseTratada.split('').reverse().join('');

if (fraseTratada === fraseReversa) {
  console.log("A sequência é um palíndromo.");
} else {
  console.log("A sequência NÃO é um palíndromo.");
}
