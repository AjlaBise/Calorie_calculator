const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: "Email is required!",
    lowercase: true,
    index: true,
    unique: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/],
  },
  password: {
    type: String,
    minlength: [6, "Minimum password length is 6 characters!"],
    maxlength: [32, "Maximum password length is 32 characters!"],
    required: true,
  },
  role: {
    enum: ["regular", "admin"],
    type: String,
    required: true,
    default: "regular",
  },
});

userSchema.pre("save", function (next) {
  const user = this;

  bcrypt.genSalt(10, function (err, salt) {
    if (err) {
      return next(err);
    }

    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
});

module.exports = mongoose.model("User", userSchema);
