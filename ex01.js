let prompt = require('prompt-sync')();

var firstNumber = Number(prompt('Digite um número: '));
var secondNumber = Number(prompt('Digite um número: '));

if(firstNumber == secondNumber) {
    console.log(`Os números são iguais.`);
} else if (firstNumber > secondNumber){
    console.log(firstNumber , secondNumber);
} else {
    console.log(secondNumber , firstNumber);
}

