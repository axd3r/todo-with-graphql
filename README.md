<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## 📝 Description
This project is a TODO List API built with NestJS and GraphQL, featuring:

- Queries for listing, filtering, and aggregating todos.

- Mutations to create, update, and delete todos.

- In-memory storage (no database required).

- GraphQL schema auto-generated.



## 🚀 Project setup

```bash
$ npm install
```

## 📦 Running the application

```bash
# Development
$ npm run start

# Watch mode (hot-reload)
$ npm run start:dev

# Production mode
$ npm run start:prod

```
Once the server is running, you can access the GraphQL Playground at:
```
http://localhost:3000/graphql
```
## 🛠️ Available GraphQL Operations
Queries

- todos(status: Boolean) → Get all todos, optionally filtering by completion status.

- todo(id: Int!) → Get a single todo by ID.

- completedTodos → Get the number of completed todos.

- pendingTodos → Get the number of pending todos.

- aggregations → Get an object with total, completed, and pending counts.

Mutations

- createTodo(createTodoInputDTO: CreateTodoInputDTO) → Create a new todo.

- updateTodo(updateTodoInputDTO: UpdateTodoInputDTO) → Update an existing todo.

- deleteTodo(id: Int!) → Delete a todo by ID.

## 📂 Project Structure
```bash
src/
├── args/
│   └── status.args.ts       # Filter argument for todos
├── dto/
│   ├── create.todo.dto.ts   # DTO for creating todos
│   └── update.todo.dto.ts   # DTO for updating todos
├── entity/
│   └── todo.entity.ts       # Todo entity definition
├── types/
│   └── aggregations.type.ts # Aggregated statistics type
├── todo.resolver.ts         # GraphQL resolver
├── todo.service.ts          # Business logic service
├── app.module.ts            # Application module

```
## 🧪 Running tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
## 📄 GraphQL Schema
```bash
src/schema.gql
```

## 📈 Deployment

When ready to deploy, check out the NestJS Deployment Documentation for best practices.

## 📚 Resources

- [NestJS Documentation](https://docs.nestjs.com/)

- [GraphQL Official Site](https://graphql.org/)

- [Apollo Server Documentation](https://www.apollographql.com/docs/apollo-server)

- [NestJS GraphQL Guide](https://docs.nestjs.com/graphql/quick-start)

## 👨‍💻 Author
- Project Developer - [Joaquin Orihuela Liberato](https://www.linkedin.com/in/joaquin-orihuela-liberato-405019304/)
## License

This project is licensed under the [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
