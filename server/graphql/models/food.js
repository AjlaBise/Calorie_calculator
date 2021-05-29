class Food {
  constructor(model) {
    this.Model = model;
  }

  getFoods() {
    return this.Model.find({});
  }

  createFood(data) {
    data.user_id = this.user;
    return this.Model.create(data);
  }
}

module.exports = Food;
