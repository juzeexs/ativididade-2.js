const prompt = require('prompt-sync')();

// Função recursiva para inverter uma string
function inverterString(str) {
  if (str.length <= 1) {
    return str;
  } else {
    return str.charAt(str.length - 1) + inverterString(str.substring(0, str.length - 1));
  }
}

// Entrada do usuário
const frase = prompt("Digite uma frase para inverter: ");
const invertida = inverterString(frase);

// Saída
console.log(`Frase invertida: ${invertida}`);
