const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, "First Name Must Contain More Than 3 letters"],
    maxLength: [15, "First Name Must not Contain More Than 15 letters"],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [3, "Last Name Must Contain More Than 3 letters"],
    maxLength: [15, "Last Name Must not Contain More Than 15 letters"],
  },
  phone: {
    type: String,
    required: true,
    minLength: [8, "Last Name Must Contain More Than 3 letters"],
    maxLength: [14, "Last Name Must not Contain More Than 15 letters"],
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Please provide a correct email"],
  },
  time: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

const reservation = mongoose.model("reservation", userSchema);

module.exports = reservation;
