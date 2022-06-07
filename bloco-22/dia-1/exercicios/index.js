const imc = require('./imc');
const speed = require('./speed');
const numRandom = require('./sorteio');
const readline = require('readline-sync');

const calcImc = () => {
  const readline = require('readline-sync');
  const peso = readline.questionInt('Qual seu peso? ');
  const altura = readline.questionFloat('Qual sua altura? ');
  imc(peso, altura);
}

AskNumber = () => {
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
}

const calcSpeed = () => {
  const distance = readline.questionInt('Distância percorrida (m): ');
  const time = readline.questionInt('Tempo gasto (s): ');
  const reponse = speed(distance, time);
  console.log(`A velocidade média é de ${reponse.toFixed(2)} m/s`);
}

const main = () => {
  const ask = readline.questionInt('Qual dos scripts script executar? (0- calcImc, 1- AskNumber, 2- calcSpeed)? ');
  switch (ask) {
    case 0:
      calcImc();
      break;
    case 1:
      AskNumber();
      break;
    case 2:
      calcSpeed();
      break;
    default:
      console.log('Opção Inválida');
  }
}

main();