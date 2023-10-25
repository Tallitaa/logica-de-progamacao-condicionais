let prompt = require('prompt-sync')();

var dateDay = Number(prompt('Digite o dia data: '));
var dateMonth = Number(prompt('Digite o mês da data: '));
var dateYear = Number(prompt('Digite o ano da data: '));


if(dateDay <= 0 || dateMonth <= 0 || dateYear <= 0){
    console.log('A DATA NÃO É VÁLIDA.');
} else if(dateMonth === 2 && dateYear % 4 !== 0 && dateDay > 28 ) { 
    console.log('A DATA NÃO É VÁLIDA.');
} else if(dateMonth === 2 && dateYear % 4 === 0 && dateDay > 29) {
    console.log('A DATA NÃO É VÁLIDA.');
} else if(dateMonth === 8 && dateDay === 31 || dateMonth === 10 && dateDay === 31 || dateMonth === 12 && dateDay === 31) {
    console.log('A data é válida.');
} else if(dateMonth === 9 && dateDay > 30 || dateMonth === 11 && dateDay > 30 ) {
    console.log('A DATA NÃO É VÁLIDA.');
} else if(dateMonth === 8 && dateDay > 31) {
    console.log(' 1 A DATA NÃO É VÁLIDA.');
} else if(dateMonth % 2 !== 0 && dateDay > 31) {
    console.log(' 2 A DATA NÃO É VÁLIDA.');
} else if(dateMonth % 2 === 0 && dateDay > 30) {
    console.log(' 3 A DATA NÃO É VÁLIDA.');
} else {
    console.log('A DATA É VÁLIDA.');
}
