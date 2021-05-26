const express = require("express");
const next = require("next");
const apolloServer = require("./server/graphql");

const PORT = 3000;

const nextApp = next({
  dev: process.env.NODE_ENV !== "production",
  dir: __dirname,
});

const db = require("./server/database");
db.connect();

async function main() {
  const app = express();

  require('./server/middlewares/middlewares').init(app,db);
  
  await bootstrapApolloServer(app);
  await bootstrapClientApp(app);

  app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`[ server ] ready on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
  });
}

async function bootstrapClientApp(expressApp) {
  await nextApp.prepare();
  expressApp.get("*", nextApp.getRequestHandler());
}

async function bootstrapApolloServer(expressApp) {
  apolloServer.applyMiddleware({ app: expressApp });
}

main();
