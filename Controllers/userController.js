let User = require("../models/User");

exports.insertUser = function(req, res) {
  const firstname = req.body.firstname,
    lastname = req.body.lastname,
    email = req.body.email,
    password = req.body.password,
    profile_img = req.body.profile_img;

  let user = new User({
    firstname,
    lastname,
    email,
    password,
    profile_img
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
        err: errors
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
