const GraphqlStrategy = require("./strategies");
const User = require("../../database/models/user");

exports.init = (passport) => {
  passport.use(
    "graphql",
    new GraphqlStrategy(({ email, password }, done) => {
      User.findOne({ email }, (error, user) => {
        if (error) {
          return done(error);
        }
        if (!user) {
          return done(null, false);
        }
        console.log(user);
        return done(null, user);
      });
    })
  );
};
