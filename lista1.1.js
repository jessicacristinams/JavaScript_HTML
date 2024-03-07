// Lista1 de Exercícios JavaScript
// 1 - Soma de dois números. Escreva um programa que solicite ao usuário dois números inteiros e positivos, e imprima a soma deles.
var readline = require("readline-sync");
var numero1 = readline.question("Digite um número inteiro: ");
numero1 = parseInt(numero1);

var numero2 = readline.question("Digite outro número inteiro: ");
numero2 = parseInt(numero2);

if ((numero1 >=0 && numero2 >=0)) {
    soma = (numero1 + numero2);
    console.log(soma);
} else {
    console.log("\n Número inválido!")
}