# Full-Stack Challenge - Backend

## Env Requirement

```
node @ 14.19.1 + 
npm @ 6.14.16 +
Typescript @ 3.9.7 +
```

## Setup

```
yarn // recommand
npm i
```

```
yarn server // recommand
npm run server
```

## GraphQL Resolvers

| Header | Type | Description | Params |
| ------ | ------ | ------ | ------ |
| articles | Query | Get Articles | { limit: Float!, offset: Float! } |
| article | Query | Get article by id | { id: string!(uuid.v4()) } |
| articlesCount | Query | Get total articles count | none |
| addArticle | Mutation | Create New Articles | { articleInput: { userId: string, title: string, deceription: string, content: string } } |
| removeArticle | Mutation | Remove Article | { articleId: string! } |

## Tech Stack

* `Typescript`
* `ApolloServer`
* `koa`
* `type-graphql` PS: I tended to try `typedi` for a better DI structured service. Quitted eventually for the lacking of time. Such a pitty :(
* `orbit-db`
* `ipfs`
