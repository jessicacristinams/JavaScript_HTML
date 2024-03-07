// Lista de exercicios 1
// 2 - Média de três números. Peça ao usuário para inserir três números e calcule a média aritmética desses números.

var readline = require("readline-sync");
var n1 = readline.question("Digite o número 1: ");
var n2 = readline.question("Digite o número 2: ");
var n3 = readline.question("Digite o número 3: ");

n1 = parseInt(n1);
n2 = parseInt(n2);
n3 = parseInt(n3);

media = (n1 + n2 + n3)/3;
console.log(media);