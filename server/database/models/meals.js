const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mealsSchema = new Schema({
  food_id: {
    type: Schema.Types.ObjectId,
    ref: "Food",
  },
  serving_size: {
    type: Number,
    required: true,
  },
  calories: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Meals", mealsSchema);
