class User {
  constructor(model, user) {
    this.Model = model;
    this.user = user;
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

  updateUser(id, data) {
    if (!this.user || this.user.role !== "admin") {
      throw new Error("Not Authorised!");
    }

    return this.Model.findOneAndUpdate({ _id: id }, data, {
      new: true,
      runValidators: true,
    });
  }

  DeleteUser(id) {
    if (!this.user || this.user.role !== "admin") {
      throw new Error("Not Authorised!");
    }

    return this.Model.findOneAndRemove({ id: id });
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
      ctx.logout();
      return true;
    } catch (error) {
      return false;
    }
  }
}

module.exports = User;
