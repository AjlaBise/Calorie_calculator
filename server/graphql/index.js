const { ApolloServer, gql } = require("apollo-server-express");
const { userMutations } = require("./resolvers/index");
const mongoose = require("mongoose");
const { userTypes } = require("./types");

const User = require("./models/User");

const typeDefs = gql(`
       ${userTypes}
       type Query {
         Hello: String
        }
        type Mutation {
          signUp(input : signUpInput): String
          signIn: String
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
  context: () => ({
    models: {
      User: new User(mongoose.model("User")),
    },
  }),
});
