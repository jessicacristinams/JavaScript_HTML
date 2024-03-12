// 10. Conversão monetária
// Crie um programa que converta uma quantia em reais para dólares. Peça ao usuário para inserir a taxa de câmbio e o valor em reais, e então exiba o equivalente em dólares.

var readline = require("readline-sync");
var valorReal = readline.questionFloat("Valor em Real/BRL: ");
var taxaCambio = readline.questionFloat("Taxa de câmbio: ");

var valorDolar = console.log("\n Valor em USD: " + valorReal/taxaCambio);