const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, unique: true },
  password: String,
  phone: { type: String, unique: true },
  bloodType: String,
});

module.exports = mongoose.model("User", userSchema);
