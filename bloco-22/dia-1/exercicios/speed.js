const readline = require('readline-sync');

const calcSpeedFunc = (distance, time) => distance / time; 

const calcSpeed = () => {
  const distance = readline.questionInt('Distância percorrida (m): ');
  const time = readline.questionInt('Tempo gasto (s): ');
  const reponse = calcSpeedFunc(distance, time);
  console.log(`A velocidade média é de ${reponse.toFixed(2)} m/s`);
}
calcSpeed();

module.exports = calcSpeed;