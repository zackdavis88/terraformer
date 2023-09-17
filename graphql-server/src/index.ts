import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import typeDefs from './schema/index.js';
import resolvers from './resolvers/index.js';
import { type TerraformerContext, context } from './middleware/context.js';

const server = new ApolloServer<TerraformerContext>({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context,
});

console.log(`GraphQL running on ${url}`);
