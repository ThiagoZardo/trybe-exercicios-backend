const fs = require('fs');

/*
1- Primeiro, pedimos que o Node.js leia o arquivo e passamos uma função de callback;
2- Quando a leitura do arquivo é concluída ou um erro acontece, a função callback é chamada;
3- Dentro dela, a primeira coisa que fazemos é verificar se existe um erro. Caso exista, escrevemos ele no console e encerramos a execução com o return;
*/
fs.readFile('./arquivo.txt', (err, content) => {
  if (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
    return;
  }

  console.log(`Arquivo lido com sucesso. Conteúdo: ${content.toString('utf8')}`);
});