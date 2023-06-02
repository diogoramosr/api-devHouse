const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  email: String,
});

const user = model("User", UserSchema);

module.exports = user;
