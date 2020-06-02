const mongoose = require("mongoose");

//  Defining the userSchema
const userSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  profile_img: {
    type: String,
    required: true
  }
});

// creating model

let User = mongoose.model("User", userSchema);
module.exports = User;
