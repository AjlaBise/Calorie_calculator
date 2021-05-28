exports.userQueries = {
  user: (root, args, ctx) => {
    return ctx.models.User.getAuthUser(ctx);
  },
};

exports.mealsQueries = {
  meals: (root, args, ctx) => {
    return ctx.models.Meals.getMeals();
  },
};

exports.foodQueries = {
  food: (root, args, ctx) => {
    return ctx.models.Food.getFoods();
  },
};

exports.mealsMutations = {
  createMeals: async (root, { input }, ctx) => {
    const createMeals = await ctx.models.Meals.createMeals(input);
    return createMeals;
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
};
