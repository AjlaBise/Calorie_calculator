class User {
  constructor(model) {
    this.Model = model;
  }

  async signUp(signUpData) {
    return await this.Model.create(signUpData);
  }

  signIn(signInData, ctx) {
    const isAuthenticated = ctx.authenticate(signInData);

    if(isAuthenticated)
    {
      console.log("User is Authenticated!")
    }
    return `Signing In Output!`;
  }

  signOut() {
    return "Signing Out...";
  }
}

module.exports = User;
