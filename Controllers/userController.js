let User = require("../models/User");

exports.insertUser = function(req, res) {
  let user = new User({
    firstname: "Lukman ",
    lastname: "Isiaka",
    email: "isiakalukmandellyson@gmail.com",
    password: "User12345",
    profile_img: "user.jpg",
    active: 1
  });
  user
    .save()
    .then(() => {
      res.json({
        message: "user save successfully"
      });
    })
    .catch(err => {
      res.json({
        message: " Unable to save user",
        err: err
      });
    });
};
exports.getUser = function(req, res) {
  User.find({}).exec((err, user) => {
    if (err) {
      throw handleError(err);
    }
    res.json({
      users: user
    });
  });
};
exports.getUserByID = function(req, res) {
  User.find({ _id: req.params.id }).exec((err, user) => {
    if (err) {
      throw handleError(err);
    }
    res.json({
      user: user
    });
  });
};
