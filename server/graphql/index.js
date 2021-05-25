const { ApolloServer, gql } = require("apollo-server-express");
const { userMutations } = require("./resolvers/index");

const typeDefs = gql(`
       type Query {
         nekiGet: String
        }
        type Mutation {
          signIn: String
          signUp: String
          signOut: String
      }`);

const resolvers = {
  Query: {
    nekiGet: () => {},
  },
  Mutation: {
    ...userMutations,
  },
};

module.exports = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({
    models: {
      User: new User(),
    },
  }),
});
