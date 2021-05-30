exports.userQueries = {
  user: (root, args, ctx) => {
    return ctx.models.User.getAuthUser(ctx);
  },
  users: (root, args, ctx) => {
    return ctx.models.User.getAllUser();
  },
};

exports.userMutations = {
  signUp: async (root, { input }, ctx) => {
    const registeredUser = await ctx.models.User.signUp(input);
    return registeredUser.id;
  },
  signIn: (root, { input }, ctx) => {
    return ctx.models.User.signIn(input, ctx);
  },
  signOut: (root, args, ctx) => {
    return ctx.models.User.signOut(ctx);
  },
  updateUser: async (root, { id, input }, ctx) => {
    const updatedUser = await ctx.models.User.updateUser(id, input);
    return updatedUser;
  },
  deleteUser: async (root, { id }, ctx) => {
    const deletedUser = await ctx.models.User.DeleteUser(id);
    return deletedUser._id;
  },
};

exports.mealsQueries = {
  meals: (root, { id }, ctx) => {
    return ctx.models.Meals.getMeals(id);
  },
  mealsAll: (root, args, ctx) => {
    return ctx.models.Meals.getAllMeals();
  },
};

exports.mealsMutations = {
  createMeals: async (root, { id, input }, ctx) => {
    input.food_id = id;
    const createMeals = await ctx.models.Meals.createMeals(input);
    return createMeals;
  },
};

exports.foodQueries = {
  food: (root, args, ctx) => {
    return ctx.models.Food.getFoods();
  },
};

exports.foodMutations = {
  createFood: async (root, { input }, ctx) => {
    const createFood = await ctx.models.Food.createFood(input);
    return createFood;
  },
};
