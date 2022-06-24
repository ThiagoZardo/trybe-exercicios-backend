const axios = require('axios');

const getPokemonById = async (id) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return response.data;
}

// Modo menos performatico
const main = async () => {
  const hourInitial = Date.now();
  for (let i= 1; i <= 151; i+= 1) {
    let pokemon = await getPokemonById(i);
    console.log(`Pokemon: ${pokemon.name}`);
  }
  const hourEnd = Date.now();
  console.log((hourInitial - hourEnd) / 1000 );
}

// Modo mais performatico
const mainFast = async () => {
  try {
    const promises = []
    const hourInitial = Date.now();
    for (let i= 1; i <= 151; i++) {
      let promise = getPokemonById(i)
      promises.push(promise);
    }
  
    let pokemons = await Promise.all(promises); // Promisse.all => Resolve todas as promisses que estão pendentes
    pokemons.forEach(
      pokemon => console.log(`Pokemon: ${pokemon.name}`)
    );
    const hourEnd = Date.now();
    console.log((hourEnd - hourInitial) / 1000 );
  } catch (error) {
    console.log('Erro na função mainFast\nError: ', error.message);
  }
}

mainFast();