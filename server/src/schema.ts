import "reflect-metadata";
import path from 'path';
import type { GraphQLSchema } from "graphql";
import { buildSchema } from 'type-graphql';
import { NODE_ENV } from './constants/nodeEnv';

export default (): Promise<GraphQLSchema> => buildSchema({
  resolvers: [
    path.resolve(__dirname, '**/resolver.{js,ts}'),
  ],
  emitSchemaFile: NODE_ENV === 'development' ? path.resolve(__dirname, '..', 'schema.gql') : undefined,
});