const readline = require('readline-sync');

const numRandom = () => Math.floor(Math.random() * 11);

const playAgain = () => {
  const response = readline.question('Deseja Jogar Novamente(s ou n)? ');
  if (response === 's') {
    play();
  }
}
  
const play = () => {
  const question = readline.questionInt('Chuta um número de 0 a 10: ');
  numSorteado = numRandom()
  if (numSorteado === question) {
    console.log("Parabéns, número correto!");
  } else {
    console.log(`Opa, não foi dessa vez. O número era ${numSorteado}`);
    playAgain()
  }
}
play();

module.exports = play;