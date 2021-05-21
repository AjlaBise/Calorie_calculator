
const { food, user, meals } = require('./data');


const User = require('../database/models/user');
const Food = require('../database/models/food');
const Meals = require('../database/models/meals');

class FakeDb {

  async clean() {
    await User.deleteMany({});
    await Food.deleteMany({});
    await Meals.deleteMany({});
  }

  async addData() {
    await User.create(user);
    await Food.create(food);
    await Meals.create(meals);
  }

  async populate() {
    await this.clean();
    await this.addData();
  }
}

module.exports = new FakeDb();