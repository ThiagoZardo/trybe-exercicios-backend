## Comandos para trabalhar com Docker e Mongodb localmente:

 - Iniciar um container no docker do mongodb
```docker run --name mymongodb -d -p 27017:27017 mongo ```

 - Criar uma conexão na extensão mongodb do vscode por url
```mongodb://localhost:27017```

 - Exportar arquivo para formato json
```mongoexport --jsonArray --db aula-filter-operators --type=json --collection filmes --out filmes.json```

 - Importar para meu banco de dados local
```mongoimport --jsonArray --db aula-filter-operators --collection filmes filmes.json```
