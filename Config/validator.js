const { check, validationResult, body } = require("express-validator");

const validationRule = () => {
  return [
    check("firstname")
      .not()
      .isEmpty()
      .withMessage("firstname is required"),
    check("lastname", "lastname is required")
      .not()
      .isEmpty(),
    check("email", "Email is required")
      .not()
      .isEmpty(),
    check("email", "Email is required")
      .isEmail()
      .normalizeEmail()
      .withMessage("use a valid email address"),
    check("password", "Your password must be at least 5 characters")
      .not()
      .isEmpty(),

    check("food_name", "Food Name is required")
      .not()
      .isEmpty(),
    check("img", "Food Image is required")
      .not()
      .isEmpty(),
    check("price", "Food Price is required")
      .not()
      .isEmpty(),
    check("min", "Food minimum amount is required")
      .not()
      .isEmpty(),
    check("desc", "Food Description is required")
      .not()
      .isEmpty(),
    check("place", "Place  is required")
      .not()
      .isEmpty(),
    check("name", "location name is required")
      .not()
      .isEmpty(),
    check("address", "Address is required")
      .not()
      .isEmpty()
  ];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);
  const errorReturned = [];

  if (!errors.isEmpty()) {
    errors.array().map(function(error) {
      errorReturned.push({
        [error.param]: error.msg
      });
    });
    return res.status(422).json({
      errors: errorReturned
    });
  } else {
    return next();
  }
};
module.exports = {
  validationRule,
  validate
};
