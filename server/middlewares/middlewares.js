const config = require("../config/dev");
const session = require("express-session");
const passport = require("passport");

exports.init = (app, db) => {
  require("./passport/index").init(passport);

  const sess = {
    name: "user-session",
    secret: config.DB_URI.SESSION_SECRET,
    cookie: { maxAge: 2 * 60 * 60 * 1000 },
    resave: false,
    saveUninitialized: false,
    store: db.initSessionStore(),
  };

  app.use(session(sess));

  app.use(passport.initialize());
};
