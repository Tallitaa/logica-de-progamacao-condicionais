let prompt = require('prompt-sync')();

var firstNumber = Number(prompt('Digite um número: '));
var secondNumber = Number(prompt('Digite um número: '));
var thirdNumber = Number(prompt('Digite um número: '));

if(firstNumber == secondNumber || firstNumber == thirdNumber || secondNumber == thirdNumber) {
    console.log('OS NÚMEROS DEVEM SER DIFERENTES.');
} else if(firstNumber < 0 || secondNumber < 0 || thirdNumber < 0) {
    console.log('Houve um erro, tente novamente');
} else if(firstNumber < secondNumber && secondNumber < thirdNumber) {
    console.log(`${firstNumber}, ${secondNumber}, ${thirdNumber}`);
} else if(firstNumber < thirdNumber && thirdNumber < secondNumber) {
    console.log(`${firstNumber}, ${thirdNumber}, ${secondNumber}`);
} else if(secondNumber < firstNumber && firstNumber < thirdNumber) {
    console.log(`${secondNumber}, ${firstNumber}, ${thirdNumber}`);
} else if(secondNumber < thirdNumber && thirdNumber < firstNumber) {
    console.log(`${secondNumber}, ${thirdNumber}, ${firstNumber}`);
} else if(thirdNumber < firstNumber && firstNumber < secondNumber) {
    console.log(`${thirdNumber}, ${firstNumber}, ${secondNumber}`);
} else if(thirdNumber < secondNumber && secondNumber < firstNumber) {
    console.log(`${thirdNumber}, ${secondNumber}, ${firstNumber}`);
}
