let prompt = require('prompt-sync')();

var dayOfTheFirstDate = Number(prompt('Digite o dia da data: '));
var monthOfTheFirstDate = Number(prompt('Digite o mês da data: '));
var yearOfTheFirstDate = Number(prompt('Digite o ano da data: '));

var convertingMonthsToDaysOfTheFirstDate = monthOfTheFirstDate * 30;
var convertingYearsToDaysOfTheFirstDate = yearOfTheFirstDate * 360;

var dayOfTheSecondDate = 1;
var monthOfTheSecondDate = 1;
var yearOfTheSecondDate = 1960;

var convertingMonthsToDaysOfTheSecondDate = monthOfTheSecondDate * 30;
var convertingYearsToDaysOfTheSecondDate = yearOfTheSecondDate * 360;

var totalSumOfDaysOfTheFirstDate = dayOfTheFirstDate + convertingMonthsToDaysOfTheFirstDate + convertingYearsToDaysOfTheFirstDate;
var totalSumOfDaysOfTheSecondDate = dayOfTheSecondDate + convertingMonthsToDaysOfTheSecondDate + convertingYearsToDaysOfTheSecondDate;

if(totalSumOfDaysOfTheFirstDate > totalSumOfDaysOfTheSecondDate) {
    var totalDaysBetweenDates = totalSumOfDaysOfTheFirstDate - totalSumOfDaysOfTheSecondDate;
    console.log(`Há ${totalDaysBetweenDates} dias entre as datas ${dayOfTheFirstDate}/${monthOfTheFirstDate}/${yearOfTheFirstDate} e 01/01/1960. `);
} else {
    var totalDaysBetweenDates = totalSumOfDaysOfTheSecondDate - totalSumOfDaysOfTheFirstDate
    console.log(`Há ${totalDaysBetweenDates} dias entre as datas ${dayOfTheFirstDate}/${monthOfTheFirstDate}/${yearOfTheFirstDate} e 01/01/1960. `);
}


