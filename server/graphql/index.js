const { ApolloServer, gql } = require("apollo-server-express");
const { userMutations } = require("./resolvers/index");
const { buildAuthContext } = require("./context");
const mongoose = require("mongoose");
const { userTypes, mealsTypes } = require("./types");

const {
  userQueries,
  mealsQueries,
  mealsMutations,
} = require("../graphql/resolvers");

const User = require("./models/user");
const Meals = require("./models/melas");

const typeDefs = gql(`
       ${userTypes}
       ${mealsTypes}

       type Query {
         user:User
         meals:[Meals]
        }

        type Mutation {
          signUp(input : signUpInput): String
          signIn(input : signInInput): User
          signOut: Boolean
          createMeals(input:MealsInput):Meals
      }`);

const resolvers = {
  Query: {
    ...userQueries,
    ...mealsQueries,
  },
  Mutation: {
    ...userMutations,
    ...mealsMutations,
  },
};

module.exports = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({
    ...buildAuthContext(req),
    models: {
      User: new User(mongoose.model("User")),
      Meals: new Meals(mongoose.model("Meals")),
    },
  }),
});
