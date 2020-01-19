var express = require("express");
var router = express.Router();
const {
  getUser,
  getUserByID,
  insertUser
} = require("../Controllers/userController");
const {
  validate,

  validationRule
} = require("../Config/validator");

/* GET users listing. */
router.get("/get", getUser);
router.get("/get/:id", getUserByID);
router.post("/create", validationRule(), validate, insertUser);

module.exports = router;
