const fs = require('fs').promises;

const readAll = async () => {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8'); // Lê o arquivo apontado
  const simpsons = JSON.parse(fileContent); // Converte o conteúdo do arquivo JSON para um array
  const strings = simpsons.map(({ id, name }) => `${id} - ${name}`);
  strings.forEach((string) => console.log(string));
}

const getSimpsonsById = async (id) => {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);

  const buscaSimpson = simpsons.find((simpson) => Number(simpson.id) === id);
  if(!buscaSimpson) {
    throw new Error('id não encontrado!')
  }
  return buscaSimpson;
}

const filterSimpsons = () => {
  // - Filtra o array para remover as personagens que devem ser removidas.
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);

  const novoArray = simpsons.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');

  // Escreve no arquivo o novo array filtrado.
  await fs.writeFile('./simpsons.json', JSON.stringify(novoArray))
}

const createSimpsonsFamily = async () => {
  const fileContent = await fs
    .readFile('./simpsons.json', 'utf-8');

  const simpsons = JSON.parse(fileContent);

  // Criar um array com os IDs da familia e filtrar apenas com os membros com esses IDs.
  const familiaIds = [1, 2, 3, 4];
  const familiaSimpsons = simpsons.filter((simpson) => familiaIds.includes(NUmber(simpson.id)));

  await fs.writeFile('./simpsons.json', JSON.stringify(familiaSimpsons))
}

const addNelson = async () => {
  const fileContent = await fs
  .readFile('./simpsons.json', 'utf-8');
  const familiaSimpsons = JSON.parse(fileContent);

  // Adicionar uma nova pessoa ao array de `simpsonsFamily`. 
  familiaSimpsons.push({ id: '8', name: 'Nelson Muntz' });
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(familiaSimpsons));
}

async function replaceNelson() {
  const fileContent = await fs.readFile('./simpsonsFamily.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);

  // Filtra o array para remover o personagem Nelson
  const simpsonsWithoutNelson = simpsons.filter((simpson) => simpson.id !== '8');

  // Cria um novo Array contendo a personagem Maggie
  const simpsonsWithMaggie = simpsonsWithoutNelson

    .concat([{ id: '15', name: 'Maggie Simpson' }]);
  // com spread seria assim: 
  // const simpsonsWithMaggie = [ ...simpsonsWithoutNelson, simpsonsWithMaggie ]

  // Escrevemos o novo array no arquivo e retornamos a promise de escrita
  return fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsWithMaggie));
}

const main = async () => {
  createSimpsonsFamily()
  filterSimpsons();
  const simpson = await getSimpsonsById(1);
  console.log(simpson);
}

main();
