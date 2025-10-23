const mongoose = require("mongoose");

const volunteerSchema = new mongoose.Schema({
  name: String,
  email: String,
  contact: String,
  countryCode: String,
  availability: Date,
  role: String,
  campName: String,
  campLocation: String,
  campNotes: String,
});

module.exports = mongoose.model("Volunteer", volunteerSchema);
