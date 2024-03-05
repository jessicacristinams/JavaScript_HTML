// Lista de Exercícios - Estrutura de Decisão - IF/ELSE

// Verifique se um número é positivo. Caso contrário, exiba uma mensagem de erro.
var readline = require("readline-sync");
var numero = readline.question("Digite um número");
numero = parseInt(numero);

if (numero >= 0) {
    console.log("\n O número digitado é positivo!");
} else {
    console.log("\n Número inválido!");
}

// Verifique se um número é par. Caso contrário, exiba uma mensagem indicando que é ímpar.
