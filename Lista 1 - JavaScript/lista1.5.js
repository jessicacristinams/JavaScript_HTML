// Lista de exercícios 1
// 5 - Calculadora IMC. Peça ao usuário para inserir seu peso (em kg) e altura (em metros). Calcule o Índice de Massa Corporal (IMC) utilizando a fórmula IMC = peso / altura^2 e exiba o resultado.

var readline = require("readline-sync");
var peso = readline.questionFloat("Digite seu peso em kg: ");
var altura = readline.questionFloat("Digite sua altura em metros: ");

var imc = (peso / (altura * altura));
console.log("Seu IMC é: " + imc);