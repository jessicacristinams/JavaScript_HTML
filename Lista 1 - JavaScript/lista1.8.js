// 8. Tabuada
// Peça ao usuário para inserir um número inteiro e exiba a tabuada desse número, de 1 a 10.

var readline = require("readline-sync");
var numero = readline.questionInt("Digite o número da tabuada: ");

console.log("TABUADA DE " + numero);
console.log(numero + " X 0 = " + numero*0);
console.log(numero + " X 1 = " + numero*1);
console.log(numero + " X 2 = " + numero*2);
console.log(numero + " X 3 = " + numero*3);
console.log(numero + " X 4 = " + numero*4);
console.log(numero + " X 5 = " + numero*5);
console.log(numero + " X 6 = " + numero*6);
console.log(numero + " X 7 = " + numero*7);
console.log(numero + " X 8 = " + numero*8);
console.log(numero + " X 9 = " + numero*9);
console.log(numero + " X 10 = " + numero*10);