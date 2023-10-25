let prompt = require('prompt-sync')();

var option = Number(prompt('Digite o vaor da opção(1, 2 ou 3): '));

var firstNumber = Number(prompt('Digite um número: '));
var secondNumber = Number(prompt('Digite um número: '));
var thirdNumber = Number(prompt('Digite um número: '));

if(option == 1) {
    console.log(firstNumber);
} else if (option == 2) {
    console.log(secondNumber);
} else if (option == 3) {
    console.log(thirdNumber);
} else {
    console.log('OS ÚNICOS VALORES ACEITOS PARA OPÇÃO SÃO 1, 2 OU 3.');
}
