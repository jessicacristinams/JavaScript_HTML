// 9. Tempo de viagem
// Peça ao usuário a distância em quilômetros e a velocidade média em km/h. Calcule o tempo estimado de viagem e mostre-o ao usuário.

var readline = require("readline-sync");
var dist = readline.questionFloat("Digite a distância em km: ");
var velocMedia = readline.questionFloat("Digite a velocidade média em km/h: ");

var tempo = console.log(("\n O tempo estimado de viagem é de "+ dist/velocMedia +"h"));
