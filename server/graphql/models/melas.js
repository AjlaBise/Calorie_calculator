class Meals {
  constructor(model, user) {
    this.Model = model;
    this.user = user;
  }

  getMeals(user_id) {
    return this.Model.find({ user_id });
  }

  getAllMeals() {
    return this.Model.find({});
  }

  createMeals(data) {
    if (!this.user || this.user.role !== "regular") {
      throw new Error("Not Authorised!");
    }
    data.user_id = this.user;
    return this.Model.create(data);
  }
}

module.exports = Meals;
