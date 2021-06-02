const { ApolloServer, gql } = require("apollo-server-express");
const { userMutations } = require("./resolvers/index");
const { buildAuthContext } = require("./context");
const mongoose = require("mongoose");
const { userTypes, mealsTypes, foodTypes } = require("./types");

const {
  userQueries,
  mealsQueries,
  mealsMutations,
  foodQueries,
  foodMutations,
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
         userById(id:ID):User
         users:[User]
         meals(id:ID):[Meals]
         mealsAll:[Meals]
         food:[Food]
        }

        type Mutation {
          signUp(input : signUpInput): String
          signIn(input : signInInput): User
          signOut: Boolean
          updateUser(id:ID,input:UpdateUserInput):User
          editUser(id:ID,input:UpdateAdminInput):User
          deleteUser(id:ID):ID
          createMeals(id:ID, input:MealsInput):Meals
          createFood(input: FoodInput):Food
      }`);

const resolvers = {
  Query: {
    ...userQueries,
    ...mealsQueries,
    ...foodQueries,
  },
  Mutation: {
    ...userMutations,
    ...mealsMutations,
    ...foodMutations,
  },
};

module.exports = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({
    ...buildAuthContext(req),
    models: {
      User: new User(mongoose.model("User"), req.user),
      Meals: new Meals(mongoose.model("Meals"), req.user),
      Food: new Food(mongoose.model("Food"), req.user),
    },
  }),
});
