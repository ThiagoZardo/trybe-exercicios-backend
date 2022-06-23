const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

const recipesSort = recipes.sort(function(a, b) {
  if(a.name < b.name) {
    return -1;
  } else {
    return true;
  }Token
})

app.get('/recipes', function (req, res) {
  res.json(recipes);
});

app.get('/recipes/search', function(req, res) {
  const { name, maxPrice, minPrice } = req.query;
  if (maxPrice) {
    const filteredRecipesMax = recipes
    .filter((r) => r.name.includes(name) && r.price < Number(maxPrice));
    res.status(200).json(filteredRecipesMax);
  } else if (minPrice) {
    const filteredRecipesMin = recipes
    .filter((r) => r.price >= Number(minPrice));
    res.status(200).json(filteredRecipesMin);
  }
})

app.get('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === Number(id));
  
  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});
  
  res.status(200).json(recipe);
});

app.post('/recipes', function(req, res) {
  const {id, name, price } = req.body;
  recipes.push({ id, name, price });
  res.status(201).json({ message: 'Recipe created successfully!' });
});

// Verifica se o nome da receita foi enviado vazio
function validateName (req, res, next) {
  const { name } = req.body;
  if (!name || name === '') return res.status(400).json({ message: 'Invalid data!'}); // 1

  next(); // 2
}

app.post('/recipes', validateName, function (req, res) { // 3
  const { id, name, price } = req.body;
  recipes.push({ id, name, price});
  res.status(201).json({ message: 'Recipe created successfully!'});
});

app.put('/recipes/:id', validateName, function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === Number(id));
  
  if (recipeIndex === -1) 
    return res.status(404).json({ message: 'Recipe not found!' });
  
  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };
  
  res.status(204).end();
});

//...

app.delete('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === Number(id));
  Token

  res.status(204).end();
});

//...

// ...


// Drinks

const drinks = [
	{ id: 1, name: 'Refrigerante Lata', price: 5.0 },
	{ id: 2, name: 'Refrigerante 600ml', price: 8.0 },
	{ id: 4, name: 'Suco 1l', price: 10.0 },
	{ id: 3, name: 'Suco 300ml', price: 4.0 },
	{ id: 6, name: 'Agua Mineral 500 ml', price: 5.0 },
	{ id: 5, name: 'Cerveja Lata', price: 4.5 },
];

const drinkSort = drinks.sort(function(a, b) {
  if(a.name < b.name) {
    return -1;
  } else {
    return true;
  }
})

app.get('/drinks', function (_req, res) {
  res.json(drinks);
})

app.get('/drinks/search', function(req, res) {
  const { name, maxPrice } = req.query;
  const filteredDrinks = drinks
    .filter((r) => r.name.includes(name) && r.price < Number(maxPrice));
  res.status(200).json(filteredDrinks);
})

app.get('/drinks/:id', function (req, res) {
  const { id } = req.params;
  const drink = drinks.find((r) => r.id === Number(id));

  if (!drink) return res.status(404).json({ message: 'Drink not found!'});

  res.status(200).json(drink);
});

app.post('/drinks', function (req, res) {
  const { id, name } = req.body;
  recipes.push({ id, name });
  res.send('Valor acrescentado com sucesso!')
})

app.get('/validateToken', function (req, res) {
  const token = req.headers.authorization;
  if (token.length !== 16) return res.status(401).json({message: 'Invalid Token!'})

  res.status(200).json({message: 'Valid Token!'})
});

//...
app.all('*', function (req, res) {
	return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});

// app.get('/drinks', function (_req, res) {
//   res.json(drinkSort);
// });
