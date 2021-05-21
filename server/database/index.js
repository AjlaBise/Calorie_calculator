const mongoose = require("mongoose");

require("./models/meals");
require("./models/user");
require("./models/food");

exports.connect = () => {
  mongoose.connect(
    `${process.env.DB_URI}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => {
      console.log("Connected to DB.");
    }
  );
};
