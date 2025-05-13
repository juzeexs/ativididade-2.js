const prompt = require('prompt-sync')();

let numero;
let maior = -Infinity; // Inicializa com um valor muito baixo
let menor = Infinity; // Inicializa com um valor muito alto

console.log("Digite números e, ao final, digite 0 para exibir o maior e o menor número.");

while (true) {
  numero = parseFloat(prompt("Digite um número: "));
  
  if (numero === 0) {
    break; // Sai do laço se o número for zero
  }
  
  // Atualiza o maior e o menor número
  if (numero > maior) {
    maior = numero;
  }

  if (numero < menor) {
    menor = numero;
  }
}

if (maior === -Infinity || menor === Infinity) {
  console.log("Nenhum número válido foi digitado.");
} else {
  console.log(`O maior número digitado foi: ${maior}`);
  console.log(`O menor número digitado foi: ${menor}`);
}
