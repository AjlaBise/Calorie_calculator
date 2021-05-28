class Meals {
  constructor(model) {
    this.Model = model;
  }

  getMeals() {
    return this.Model.find({});
  }
}

module.exports = Meals;
