# Space Flight News API

<p align="center">
  <a href="https://spaceflightnow.com/" target="_blank" rel="noopener noreferrer">
    <img height="50" src="https://spaceflightnow.com/wp-content/uploads/2014/10/SFN-Logo-Blue1.png" alt="spaceflight now logo">
  </a>
</p>

Aplicação Back-end desenvolvida para o desafio da [Coodesh](https://coodesh.com/).

> Projeto Back-end que faz requisições à [Spaceflight News API](https://api.spaceflightnewsapi.net/v3/documentation)
> 
> Persiste os dados retornados em uma base de dados do MongoDB
> 
> Monitora diariamente por artigos novos 
> 
> Disponibiliza endpoints que podem ser consumidos por aplicações Front-end. 
#
## Set up

### Clone o repositório
```
$ git clone https://github.com/JohnCMello/spaceFlightNews.git
```

### Defina as variáveis de ambiente
```
$ cd config
$ touch config.env
$ echo PORT=<port number> >> config.env
$ echo MONGO_URI=<mongodb uri> >> config.env
```

### Instale as dependencias e inicialize o servidor
```
$ npm install
$ npm start
```
#
## Rotas

[GET]/:  Retornar um Status: 200 e uma Mensagem "Back-end Challenge 2021 🏅 - Space Flight News".

[GET]/articles/: Listar todos os artigos da base de dados. 

[GET]/articles/{id}: Obter a informação somente de um artigo.

[POST]/articles/: Adicionar um novo artigo.

[PUT]/articles/{id}: Atualizar um artigo baseado no id.

[DELETE]/articles/{id}: Remover um artigo baseado no id.

#
## Tech Stack

 * [Node.js](https://nodejs.org/)
 * [Express.js](https://expressjs.com)
 * [Axios](https://axios-http.com)
 * [Mongoose](https://mongoosejs.com/)
 * [node-cron](https://www.npmjs.com/package/node-cron)
 * [MongoDB](https://www.mongodb.com/)


This is a challenge by [Coodesh](https://coodesh.com/)
