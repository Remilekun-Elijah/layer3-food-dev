const { check, validationResult, body } = require("express-validator");
const Food = require("../models/Food");

exports.insertFood = function(req, res) {
  const { place, name, address, food_name, img, price, min, desc } = req.body;

  let food = new Food({
    food_name: "Amala Soup",
    img: "No Image for now",
    price: "#600",
    min: "-500",
    desc: " if you need a good food , you know where to come",
    location: [
      {
        place: "Lagos",
        name: "Iya Oyo",
        address: "SDP junction Gwags"
      }
    ]
  });

  food
    .save()
    .then(response => {
      res.json({
        message: " Saved successfully"
      });
    })
    .catch(err => {
      if (err) {
        throw err;
      }
    });
};

exports.getFood = function(req, res) {
  Food.find({}).exec((err, docs) => {
    if (err) {
      throw handleError(err);
    }
    res.json({
      food: docs
    });
  });
};
