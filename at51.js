const prompt = require('prompt-sync')();

console.log("Tabuadas de 1 a 10:\n");

for (let numero = 1; numero <= 10; numero++) {
  console.log(`Tabuada do ${numero}:`);
  
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
  
  console.log(""); // Linha em branco para separar as tabuadas
}
