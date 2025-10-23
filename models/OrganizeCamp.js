const mongoose = require("mongoose");

const organizeCampSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  organizationName: {
    type: String,
    required: true,
  },
  hosted: {
    type: String,
    required: true,
  },
  details: {
    type: String,
  },
});

module.exports = mongoose.model("OrganizeCamp", organizeCampSchema);
