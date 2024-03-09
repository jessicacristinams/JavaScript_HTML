// Lista Exercicios 1
// 3 - Conversão de temperatura. Crie um programa que converta uma temperatura em graus Celsius para Fahrenheit. Peça ao usuário para inserir a temperatura em Celsius e exiba a temperatura equivalente em Fahrenheit

var readline = require("readline-sync");
var temp = readline.questionFloat("Digite a temperatura em Celsius: ");


var converteTemp = ((temp * 9/5) + 32);
console.log(converteTemp);
