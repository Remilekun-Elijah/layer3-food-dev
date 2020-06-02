let User = require("../models/User");

exports.insertUser = function(req, res) {
  const firstname = req.body.firstname,
    lastname = req.body.lastname,
    email = req.body.email,
    password = req.body.password;
  // profile_img = req.body.profile_img;
  if (!req.file) {
    res.status(422).json({
      error: "No file uploaded"
    });
  } else {
    let user = new User({
      firstname,
      lastname,
      email,
      password,
      profile_img: req.file.path
    });
    user
      .save()
      .then(result => {
        res.status(200).json({
          message: "user saved successfully",
          firstname: result.firstname,
          lastname: result.lastname,
          email: result.email,
          profile_img: result.profile_img,
          request: {
            type: "GET",
            URL: "localhost:3000/user/get/" + result._id
          }
        });
      })
      .catch(err => {
        res.status(422).json({
          message: " Unable to save user",
          err: err
        });
      });
  }
};
exports.getUser = function(req, res) {
  User.find()
    .select("firstname lastname email ")
    .exec((err, docs) => {
      if (err) {
        throw err;
      } else {
        const response = {
          userCount: docs.length,
          users: docs.map(user => {
            return {
              firstname: user.firstname,
              lastname: user.lastname,
              email: user.email,
              id: user._id,
              request: {
                type: "GET",
                URL: "localhost:3000/user/get/" + user.id
              }
            };
          })
        };

        res.status(200).json({
          user: response
        });
      }
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
