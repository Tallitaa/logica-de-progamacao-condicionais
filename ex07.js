let prompt = require('prompt-sync')();

var dayOfTheFirstDate = Number(prompt('Digite o dia da primeira data: '));
var monthOfTheFirstDate = Number(prompt('Digite o mês da primeira data: '));
var yearOfTheFirstDate = Number(prompt('Digite o ano da primeira data: '));

var dayOfTheSecondDate = Number(prompt('Digite o dia da segunda data: '));
var monthOfTheSecondDate = Number(prompt('Digite o mês da segunda data: '));
var yearOfTheSecondDate = Number(prompt('Digite o ano da segunda data: '));




if(dayOfTheFirstDate > 31 || dayOfTheSecondDate > 31 || monthOfTheFirstDate > 12 || monthOfTheSecondDate > 12 || yearOfTheFirstDate < 0 || yearOfTheSecondDate < 0 ||  dayOfTheFirstDate < 0 || dayOfTheSecondDate < 0 || monthOfTheFirstDate < 0 || monthOfTheSecondDate < 0) {
    console.log('AS DATAS ESTÃO ESCRITAS INCORRETAMENTE. TENTE NOVAMENTE.');
} else if (dayOfTheFirstDate == dayOfTheSecondDate && monthOfTheFirstDate == monthOfTheSecondDate && yearOfTheFirstDate == yearOfTheSecondDate) {
    console.log('AS DATAS DEVEM SER DIFERENTES.');
} else if(yearOfTheFirstDate < yearOfTheSecondDate) {
    console.log(`${dayOfTheFirstDate}/${monthOfTheFirstDate}/${yearOfTheFirstDate}, ${dayOfTheSecondDate}/${monthOfTheSecondDate}/${yearOfTheSecondDate}`);
} else if(yearOfTheFirstDate == yearOfTheSecondDate && monthOfTheFirstDate < monthOfTheSecondDate) {
    console.log(`${dayOfTheFirstDate}/${monthOfTheFirstDate}/${yearOfTheFirstDate}, ${dayOfTheSecondDate}/${monthOfTheSecondDate}/${yearOfTheSecondDate}`);
} else if(yearOfTheFirstDate === yearOfTheSecondDate && monthOfTheFirstDate == monthOfTheSecondDate && dayOfTheFirstDate < dayOfTheSecondDate) {
    console.log(`${dayOfTheFirstDate}/${monthOfTheFirstDate}/${yearOfTheFirstDate}, ${dayOfTheSecondDate}/${monthOfTheSecondDate}/${yearOfTheSecondDate}`);

} else {
    console.log(`${dayOfTheSecondDate}/${monthOfTheSecondDate}/${yearOfTheSecondDate}, ${dayOfTheFirstDate}/${monthOfTheFirstDate}/${yearOfTheFirstDate}`);

}