const { ApolloServer, gql } = require("apollo-server-express");
const { userMutations } = require("./resolvers/index");
const { buildAuthContext } = require("./context");
const mongoose = require("mongoose");
const { userTypes, mealsTypes, foodTypes } = require("./types");

const {
  userQueries,
  mealsQueries,
  mealsMutations,
  foodQueries
} = require("../graphql/resolvers");

const User = require("./models/user");
const Meals = require("./models/melas");
const Food = require("./models/food");


const typeDefs = gql(`
       ${userTypes}
       ${mealsTypes}
       ${foodTypes}

       type Query {
         user:User
         meals:[Meals]
         food:[Food]
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
    ...foodQueries
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
      Food: new Food(mongoose.model("Food")),
    },
  }),
});
