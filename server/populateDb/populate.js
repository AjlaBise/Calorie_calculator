const mongoose = require("mongoose");
const populateDb = require("./populateDb");
const config = require("../config/dev");

mongoose.connect(
  config.DB_URI.DB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  async () => {
    console.log("Starting populating DB...");
    await populateDb.populate();
    await mongoose.connection.close();
    console.log("DB has been populated...");
  }
);
