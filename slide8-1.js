// Lista de exercícios - Estrutura de decisão


//Verifique se um número é positivo
var readline = require("readline-sync");
var numero = readline.question("Digite um número");
console.log(typeof numero);

numero = parseInt(numero);
console.log(typeof numero);
if (numero > 0) {
    console.log("\n O número digitado é positivo!");
}

// Verifique se um número é par
if ((numero % 2) == 0) {
    console.log("\n O número digitado é par!");
}

//  Verifique se uma string é vazia
var texto = "";
if (texto == "") {
    console.log("\n a string é vazia!");
}

// Verifique se um número é maior que 10
if (numero > 10) {
    console.log("\n O número digitado é maior que 10!")
}

// Verifique se uma variável é do tipo booleano
var certo = true;
if (typeof certo == "boolean") {
    console.log("\n A variável é do tipo booleano!");
}



