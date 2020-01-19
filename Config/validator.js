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
      .isEmpty()
    // // body("email").custom(value => {
    // //   return User.findUserByEmail(value).then(user => {
    // //     if (user) {
    // //       return Promise.reject("Email already in use");
    // //     }
    // //   });
    // })
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
