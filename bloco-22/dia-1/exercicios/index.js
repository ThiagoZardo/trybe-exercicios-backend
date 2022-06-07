const readline = require('readline-sync');
const calcImc = require('./imc');
const calcSpeed = require('./speed');
const play = require('./sorteio');

const main = () => {
  const ask = readline.questionInt('Qual dos scripts script executar? (0- calcImc, 1- AskNumber, 2- calcSpeed)? ');
  switch (ask) {
    case 0:
      calcImc()
      break;
    case 1:
      play();
      break;
    case 2:
      calcSpeed();
      break;
    default:
      console.log('Opção Inválida');
  }
}

main();