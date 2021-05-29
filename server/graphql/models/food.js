class Food {
  constructor(model) {
    this.Model = model;
  }

  getFoods() {
    return this.Model.find({});
  }

  createFood(data) {
    return this.Model.create(data);
  }
}

module.exports = Food;
