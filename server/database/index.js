const mongoose = require("mongoose");
const session = require("express-session");
const MongoDbStore = require('connect-mongodb-session')(session);
const config = require("../config/dev");

require("./models/meals");
require("./models/user");
require("./models/food");

exports.connect = async () => {
  try {
    await mongoose.connect(config.DB_URI.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log("Connected to DB.");
  } catch (error) {
    console.log(error.message);
  }
};

exports.initSessionStore = () => {
  const store = new MongoDbStore({
    uri: config.DB_URI.DB_URI,
    collection: "userSession",
  });
  return store;
};
