exports.userMutations = {
  signUp: async (root, {input}, ctx) => {
    const registeredUser = await ctx.models.User.signUp(input);
    return registeredUser.id;
  },
  signIn: (root, {input}, ctx) => {
      return ctx.models.User.signIn(input, ctx);
  },
  signOut: (root, args, ctx) => {
    return ctx.models.User.signOut();
  },
};
