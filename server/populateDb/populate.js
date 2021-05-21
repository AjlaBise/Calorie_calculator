const mongoose = require("mongoose");
const config = require("../config/dev");
const populateDb = require("./populateDb");

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
    console.log("config",config);
    await populateDb.populate();
    await mongoose.connection.close();
    
    console.log("DB has been populated...");
  }
);
