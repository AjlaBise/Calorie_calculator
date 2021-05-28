class Food {
  constructor(model) {
    this.Model = model;
  }

  getFoods() {
    return this.Model.find({});
  }
}

module.exports = Food;
