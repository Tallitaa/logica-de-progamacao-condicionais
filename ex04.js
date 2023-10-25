let prompt = require('prompt-sync')();

var runwayLength = Number(prompt('Qual o comprimento da pista(em metros)? '));
var firstCarTime = Number(prompt('Quanto tempo o primeiro carro levou para percorrer a pista(em segundos)? '));
var secondCarTime = Number(prompt('Quanto tempo o segundo carro levou para percorrer a pista(em segundos)? '));

var averageSpeedOfTheFirstCar = runwayLength / firstCarTime;
var averageSpeedOfTheSecondCar = runwayLength / secondCarTime;

if(averageSpeedOfTheFirstCar > averageSpeedOfTheSecondCar) {
    console.log(`O primeiro carro venceu a competição com a velocidade média de ${averageSpeedOfTheFirstCar}`);
} else {
    console.log(`O segundo carro venceu a competição com a velocidade média de ${averageSpeedOfTheSecondCar}`);
}


