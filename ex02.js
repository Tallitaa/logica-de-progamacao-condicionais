let prompt = require('prompt-sync')();

var a = Number(prompt('Digite o valor de A: '));
var b = Number(prompt('Digite o valor de B: '));
var c = Number(prompt('Digite o valor de C: '));

var delta = (b * b) - (4 * a * c);
             
var bhaskaraFirstLine = (- b + Math.sqrt(delta)) / (2 * a);
var bhaskaraSecondLine = (- b - Math.sqrt(delta)) / (2 * a);

//console.log(delta)

if(delta > 0) {
    console.log(bhaskaraFirstLine , bhaskaraSecondLine);
} else if(delta == 0) {
    console.log(bhaskaraFirstLine);
} else {
    console.log('NÃO EXISTEM RAÍZES REAIS');
}

