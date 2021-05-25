class User {
  constructor(model) {
    this.Model = model;
  }

  async signUp(signUpData) {
    return await this.Model.create(signUpData);
  }

  signIn() {
    return "Signing In...";
  }

  signOut() {
    return "Signing Out...";
  }
}

module.exports = User;
