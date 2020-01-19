const { check, validationResult, body } = require("express-validator");
const Food = require("../models/Food");

exports.insertFood = function(req, res) {
  const { place, name, address, food_name, img, price, min, desc } = req.body;

  let food = new Food({
    food_name: food_name,
    img: img,
    price: price,
    min: min,
    desc: desc,
    location: [
      {
        place: place,
        name: name,
        address: address
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
        res.json({
          err: err
        });
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
