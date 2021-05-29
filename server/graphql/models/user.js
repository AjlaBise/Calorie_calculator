class User {
  constructor(model) {
    this.Model = model;
  }

  getAuthUser(ctx) {
    if (ctx.isAuthenticated()) {
      return ctx.getUser();
    }
    return null;
  }

  getAllUser() {
    return this.Model.find({});
  }

  async signUp(signUpData) {
    return await this.Model.create(signUpData);
  }

  async signIn(signInData, ctx) {
    try {
      const user = await ctx.authenticate(signInData);
      return user;
    } catch (error) {
      return error;
    }
  }

  signOut(ctx) {
    try {
      console.log("BEFORE LOGOUT------");
      console.log("isAuthenticated", ctx.isAuthenticated());
      ctx.logout();
      console.log("AFTER LOGOUT------");
      console.log("isAuthenticated", ctx.isAuthenticated());
      return true;
    } catch (error) {
      return false;
    }
  }
}

module.exports = User;
