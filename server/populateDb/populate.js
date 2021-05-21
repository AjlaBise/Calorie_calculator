const mongoose = require("mongoose");
const populateDb = require("./populateDb");

mongoose.connect(
    `${process.env.DB_URI}`,
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
