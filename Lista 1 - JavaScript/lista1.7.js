// 7. Cálculo de desconto
// Solicite o preço de um produto e um percentual de desconto. Calcule o valor do desconto e o preço final do produto com o desconto aplicado.

var readline = require("readline-sync");
var preco = readline.questionFloat("Digite o preço do produto: ");
var desconto = readline.questionFloat("Digite o percentual de desconto: ");

var valorDesconto = ((preco * desconto)/100);
console.log("\n O valor do desconto é R$" + valorDesconto.toFixed(2));

var precoFinal = (preco - valorDesconto);
console.log("\n O preço final do produto é R$" + precoFinal.toFixed(2));