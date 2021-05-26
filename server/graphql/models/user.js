class User {
  constructor(model) {
    this.Model = model;
  }

  async signUp(signUpData) {
    return await this.Model.create(signUpData);
  }

  async signIn(signInData, ctx) {
    try {
      const user = await ctx.authenticate(signInData);
      console.log(user);
      return `User: ${user.email}`;
    } catch (error) {
      return error;
    }
  }

  signOut() {
    return "Signing Out...";
  }
}

module.exports = User;
