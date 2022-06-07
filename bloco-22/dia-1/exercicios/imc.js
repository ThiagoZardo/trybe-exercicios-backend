const imc = (peso, altura) => {
  const formula = peso / (altura * altura);
  if(formula < 18.5) {
    return console.log(`${formula.toFixed(2)} Abaixo do peso (magreza)`);
  }
  if (formula < 24.9) {
    return console.log(`${formula.toFixed(2)} Peso normal`);
  }
  if (formula < 29.9) {
    return console.log(`${formula.toFixed(2)} Acima do peso (sobrepeso)`);
  }
  if (formula < 3.49) {
    return console.log(`${formula.toFixed(2)} Obesidade grau I`);
  }
  if (formula < 39.9) {
    return console.log(`${formula.toFixed(2)} Obesidade grau II`);
  }
  if (formula > 40) {
    return console.log(`${formula.toFixed(2)} Obesidade graus III e IV`);
  }
  
}

module.exports = imc;