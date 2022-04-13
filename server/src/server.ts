import Koa from 'koa';
import kcors from 'kcors';
import http from 'http';
import { ApolloServer } from 'apollo-server-koa';
import buildSchema from './schema';
import debug from 'debug';
import { PORT } from './constants/port';
import { NODE_ENV } from './constants/nodeEnv';

const debugServer = debug('MFSC:Server');

// init server
const main = async () => {
  const app = new Koa();

  app.use(kcors());

  const schema = await buildSchema();
  const server = new ApolloServer({
    schema,
    playground: NODE_ENV === 'development',
  });

  server.applyMiddleware({ app });

  const httpServer = http.createServer(app.callback());

  httpServer.listen(PORT, async () => {
    debugServer(`MFSC Server listen on port: ${PORT}`);
  });
};

// run server up
main();
