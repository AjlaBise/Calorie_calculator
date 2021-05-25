const { ApolloServer, gql } = require("apollo-server-express");
const { userMutations } = require("./resolvers/index");
const { mongoose } = require("mongoose");

const User = require("./models/user");

const typeDefs = gql(`
       type Query {
         Hello: String
        }
        type Mutation {
          signIn: String
          signUp: String
          signOut: String
      }`);

const resolvers = {
  Query: {
    Hello: () => {
      return "Hello World!";
    },
  },
  Mutation: {
    ...userMutations,
  },
};

module.exports = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  context: () => ({
    models: {
      User: new User(mongoose.model('User')),
    },
  }),
  introspection: true,
});
