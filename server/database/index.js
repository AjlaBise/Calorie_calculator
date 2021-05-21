const mongoose = require("mongoose");
const config = require("../config/dev");

require("./models/meals");
require("./models/user");
require("./models/food");

exports.connect = () => {
  mongoose.connect(
    config.DB_URI.DB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => {
      console.log("Connected to DB.");
    }
  );
};
