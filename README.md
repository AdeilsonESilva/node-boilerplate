<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).


## DOCKER

```
#Limpar o docker, caso necessário
docker rm $(docker ps -aq)
docker volume rm $(docker volume ls -q)
```


## TYPEORM

```
#Criar a migration de uma nova tabela
yarn typeorm migration:create -n Hero

#Executar migration
yarn typeorm migration:run

#Rollback da migration
yarn knex migrate:revert
```


## Onboarding time NodeJs

1 - Instalar VsCode

2 - Instalar NodeJs 12.x+

3 - Instalar Yarn 1.22.x+

4 - Instalar as seguintes extensões:
 - Code Runner (.run)
 - EsLint
 - Prettier - Code formatter
 - EditorConfig for VS Code (rato)

5 - Após instalar rodar o comando Ctrl + Shift + P e buscar por: Reload Window e executar.

6 - Para verificar se deu tudo certo, abrir um terminal dentro do VsCode, abrir a aba output e mudar o combo da direita para EsLint
  - O resultado deve ser esse:
    [Info  - 15:11:13] ESLint server is starting

    [Info  - 15:11:13] ESLint server running in node v12.14.1

    [Info  - 15:11:13] ESLint server is running.

7 - Instalar global o CLI do NestJS - npm i -g @nestjs/cli

8 - Para criar um controller execute o cli do NestJS - nest g controller features/heroes renomear para heroes-controller.ts

9 - Para criar o service execute o cli do NestJS - nest g provider features/heroes/HeroesService

10 - Para criar um modulo que vai criar um contexto execute o cli do NestJS - nest g module features/heroes renomear para heroes-module.ts

11 - Para criar uma classe execute o cli do NestJS - nest g class model/heroes/CreateHeroRequest
