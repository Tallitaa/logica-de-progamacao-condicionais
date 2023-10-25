let prompt = require('prompt-sync')();

var dayOfTheFirstDate = Number(prompt('Digite o dia da primeira data: '));
var monthOfTheFirstDate = Number(prompt('Digite o mês da primeira data: '));
var yearOfTheFirstDate = Number(prompt('Digite o ano da primeira data: '));

var dayOfTheSecondDate = Number(prompt('Digite o dia da segunda data: '));
var monthOfTheSecondDate = Number(prompt('Digite o mês da segunda data: '));
var yearOfTheSecondDate = Number(prompt('Digite o ano da segunda data: '));

var convertingMonthsToDaysOfTheFirstDate = monthOfTheFirstDate * 30;
var convertingYearsToDaysOfTheFirstDate = yearOfTheFirstDate * 360;
var convertingMonthsToDaysOfTheSecondDate = monthOfTheSecondDate * 30;
var convertingYearsToDaysOfTheSecondDate = yearOfTheSecondDate * 360;

var totalSumOfDaysOfTheFirstDate = convertingMonthsToDaysOfTheFirstDate + convertingYearsToDaysOfTheFirstDate + dayOfTheFirstDate;
var totalSumOfDaysOfTheSecondDate = convertingMonthsToDaysOfTheSecondDate + convertingYearsToDaysOfTheSecondDate + dayOfTheSecondDate;

if(totalSumOfDaysOfTheFirstDate > totalSumOfDaysOfTheSecondDate) {
    var totalDaysBetweenDates = totalSumOfDaysOfTheFirstDate - totalSumOfDaysOfTheSecondDate;
    console.log(`Há ${totalDaysBetweenDates} dias entre as datas. 1 `);
} else {
    var totalDaysBetweenDates = totalSumOfDaysOfTheSecondDate - totalSumOfDaysOfTheFirstDate;
    console.log(`Há ${totalDaysBetweenDates} dias entre as datas. 2`);
}


