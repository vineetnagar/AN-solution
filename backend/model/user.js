const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return /^(\+\d{1,3}[- ]?)?\d{10}$/.test(value);
      },
      message: (props) =>
        `${props.value} is not a valid contact number. Must be a 10-digit number, optionally prefixed with a country code (e.g. +91 9876543210).`,
    },
  },
  subject: {
    type: String,
    required: true,
  },
  message: {
    type: String,
  },
});

const newProject = mongoose.model("user", userSchema);

module.exports = newProject;
