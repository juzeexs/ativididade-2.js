const prompt = require('prompt-sync')();

// Função recursiva para calcular base^expoente
function potencia(base, expoente) {
  if (expoente === 0) {
    return 1; // Qualquer número elevado a 0 é 1
  } else if (expoente > 0) {
    return base * potencia(base, expoente - 1);
  } else {
    return 1 / potencia(base, -expoente); // Para expoente negativo
  }
}

// Leitura do usuário
const base = parseFloat(prompt("Digite a base: "));
const expoente = parseInt(prompt("Digite o expoente: "));

// Resultado
const resultado = potencia(base, expoente);
console.log(`${base} elevado a ${expoente} é ${resultado}`);
