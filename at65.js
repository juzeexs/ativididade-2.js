const prompt = require('prompt-sync')();

const frase = prompt("Digite uma frase: ");

// Reverte a frase usando o método split, reverse e join
const fraseReversa = frase.split('').reverse().join('');

console.log(`A frase de trás para frente é: ${fraseReversa}`);
