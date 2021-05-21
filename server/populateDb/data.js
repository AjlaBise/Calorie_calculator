const mongoose = require("mongoose");

const userId = mongoose.Types.ObjectId();
const foodId = mongoose.Types.ObjectId();
const mealId = mongoose.Types.ObjectId();

const data = {
  user: [
    {
      id: userId,
      email: "ajla@gmail.com",
      password: "ajla123",
      role: "regular",
    },
  ],
  food: [
    {
      id: foodId,
      name: "hljeb",
      image: "slika",
      serving_size: "125",
      calories: "25",
      proteins: "45",
      carbs: "12",
      fat: "74",
    },
  ],
  meals: [
    {
      id: mealId,
      food_id: mongoose.Types.ObjectId(),
      serving_size: "200",
      calories: "45",
      food_mealsId: foodId,
    },
  ],
};

module.exports = data;
