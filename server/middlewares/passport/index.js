const GraphqlStrategy = require("./strategies");
const User = require("../../database/models/user");

exports.init = (passport) => {
  passport.use(
    "graphql",
    new GraphqlStrategy(({ email }, done) => {
      User.findOne({ email }, (error, user) => {
        if (error) {
          return done(error);
        }
        if (!user) {
          return done(null, false);
        }
        return done(null, user);
      });
    })
  );
};
