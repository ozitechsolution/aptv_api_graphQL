// pages/api/graphql.js
import { ApolloServer, gql } from 'apollo-server-micro';

const typeDefs = gql `
  type Query {
    hello: String
  }
`;

const resolvers = {
    Query: {
        hello: () => 'Hello from GraphQL!',
    },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
    api: {
        bodyParser: false,
    },
};

await apolloServer.start();

export default apolloServer.createHandler({ path: '/api/graphql' });