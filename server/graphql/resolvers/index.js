exports.userMutations = {
  signIn: (root, args, ctx) => {
      return ctx.models.User.signIn();
  },
  signUp: (root, args, ctx) => {
    return ctx.models.User.signUp();
  },
  signOut: (root, args, ctx) => {
    return ctx.models.User.signOut();
  },
};
