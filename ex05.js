let prompt = require('prompt-sync')();

var firstValue = Number(prompt('Digite um número inteiro: '));
var secondValue = Number(prompt('Digite outro número inteiro: '));
var thirdValue = Number(prompt('Digite outro número inteiro: '));


 if (firstValue == secondValue || firstValue == thirdValue || secondValue == thirdValue) {
    console.log('Os números devem ser diferentes!');
} else if(firstValue < 0 || secondValue < 0 || thirdValue < 0) {
    console.log('Houve um erro, tente novamente');
}
  else if(firstValue < secondValue && firstValue < thirdValue) {
    console.log(firstValue);
} else if (secondValue < firstValue && secondValue < thirdValue) {
    console.log(secondValue);
} else if (thirdValue < firstValue && thirdValue < secondValue) {
    console.log(thirdValue);
} 

