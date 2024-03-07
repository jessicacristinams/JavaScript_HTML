// Lista de Exercícios 1
// 4 - Área de um retangulo. Solicite a base e a altura de um retangulo ao usuário e calcule sua área. Em seguida, exiba o resultado.

var readline = require("readline-sync");
var base = readline.questionFloat("Digite a base em m2: ");
var altura = readline.questionFloat("Digite a altura em m2: ");

areaRetangulo = base * altura;
console.log("A área do retangulo é " + areaRetangulo + "m2");