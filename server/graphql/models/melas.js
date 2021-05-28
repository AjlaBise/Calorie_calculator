class Meals {
  constructor(model, user) {
    this.Model = model;
    this.user = user;
  }

  getMeals() {
    return this.Model.find({ user: this.user.id });
  }

  createMeals(data) {
    data.user_id = this.user;
    return this.Model.create(data);
  }
}

module.exports = Meals;
