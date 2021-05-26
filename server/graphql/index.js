const { ApolloServer, gql } = require("apollo-server-express");
const { userMutations } = require("./resolvers/index");
const { buildAuthContext } = require("./context");
const mongoose = require("mongoose");
const { userTypes } = require("./types");

const {userQueries} = require("../graphql/resolvers");
const User = require("./models/user");

const typeDefs = gql(`
       ${userTypes}
       type Query {
         Hello: String

         user:User
        }
        type Mutation {
          signUp(input : signUpInput): String
          signIn(input : signInInput): User
          signOut: Boolean
      }`);

const resolvers = {
  Query: {
    Hello: () => {
      return "Hello World!";
    },
    ...userQueries
  },
  Mutation: {
    ...userMutations,
  },
};

module.exports = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({
    ...buildAuthContext(req),
    models: {
      User: new User(mongoose.model("User")),
    },
  }),
});
