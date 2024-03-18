// graphql-server.js
import { ApolloServer, gql } from 'apollo-server-micro';

// Define your GraphQL schema
const typeDefs = gql `
  type Query {
    hello: String
  }
`;

// Define your resolvers
const resolvers = {
    Query: {
        hello: () => 'Hello from GraphQL server!',
    },
};

// Create Apollo Server instance
const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
});

// Export the Apollo Server instance
export const config = {
    api: {
        bodyParser: false,
    },
};

export default apolloServer.createHandler({ path: '/api/graphql' });