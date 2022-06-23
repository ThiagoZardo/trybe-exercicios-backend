// const express = require('express');

// // Criar uma nova aplicação Express
// const app = express();

// // Diz ao Express que, quando uma requisição com método GET for recebida no caminho /hello, a função handleHelloWorldRequest deve ser chamada;
// app.get('/hello', handleHelloWorldRequest);

// // Pedi ao Express que crie um servidor HTTP e escute por requisições na porta 3001;
// app.listen(3001, () => {
//   console.log('Aplicação ouvindo na porta 3001');
// });

// // Ao tratar uma requisição com método GET no caminho /hello, envia o status HTTP 200 que significa OK e a mensagem 'Hello World!'.
// function handleHelloWorldRequest(req, res) {
//   res.send('Olá Trybe!');
// }

const express = require('express');
const app = express();

/* Rota com caminho '/', utilizando o método GET */
app.get('/', function (req, res) {
  res.send('Hello World!');
});

/* Rota com caminho '/', utilizando o método POST */
app.post('/', function (req, res) {
  res.send('Hello World!');
});

/* Rota com caminho '/', utilizando o método PUT */
app.put('/', function (req, res) {
  res.send('Hello World!');
});

/* Rota com caminho '/', utilizando o método DELETE */
app.delete('/', function (req, res) {
  res.send('Hello World!');
});

/* Rota com caminho '/' para qualquer método HTTP */
app.all('/', function (req, res) {
  res.send('Hello World!');
});

/* Ou podemos encadear as requisições para evitar repetir o caminho */
app
  .route('/')
  .get(function (req, res) {
		// Requisições para rota GET `/` são resolvidas aqui!
    res.send('Hello World! Get');
  })
  .post(function (req, res) {
		// Requisições para rota POST `/` são resolvidas aqui!
    res.send('Hello World! post');
  });

app.listen(3001, function () {
  console.log('Example app listening on port 3000!');
});