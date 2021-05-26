const authenticateUser = ({ email, user }) => {
  console.log(`Authenticate user :˘${email} `);
  return true;
};

exports.buildAuthContext = () => {
  const auth = {
    authenticate: (options) => {
      return authenticateUser(options);
    },
  };

  return auth;
};
