const prompt = require('prompt-sync')();

// Função para validar o CPF
function validarCPF(cpf) {
  // Remove caracteres não numéricos (como pontos e traços)
  cpf = cpf.replace(/[^\d]+/g, '');

  // Verifica se o CPF tem 11 dígitos
  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
    return false; // CPF inválido se tiver todos os números iguais
  }

  // Validação dos dois últimos dígitos verificadores
  let soma = 0;
  let multiplicador = 10;

  // Calcula o primeiro dígito verificador
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpf.charAt(i)) * multiplicador--;
  }

  let primeiroDigitoVerificador = 11 - (soma % 11);
  if (primeiroDigitoVerificador === 10 || primeiroDigitoVerificador === 11) {
    primeiroDigitoVerificador = 0;
  }

  // Calcula o segundo dígito verificador
  soma = 0;
  multiplicador = 11;
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpf.charAt(i)) * multiplicador--;
  }

  let segundoDigitoVerificador = 11 - (soma % 11);
  if (segundoDigitoVerificador === 10 || segundoDigitoVerificador === 11) {
    segundoDigitoVerificador = 0;
  }

  // Verifica se os dígitos calculados são iguais aos informados
  return cpf.charAt(9) == primeiroDigitoVerificador && cpf.charAt(10) == segundoDigitoVerificador;
}

// Solicita o CPF do usuário
const cpf = prompt("Digite seu CPF (apenas números): ");

if (validarCPF(cpf)) {
  console.log("O CPF informado é válido.");
} else {
  console.log("O CPF informado é inválido.");
}
