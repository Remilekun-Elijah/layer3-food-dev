var express = require("express");
var router = express.Router();
const {
  getUser,
  getUserByID,
  insertUser
} = require("../Controllers/userController");

/* GET users listing. */
router.get("/get", getUser);
router.get("/get/:id", getUserByID);
router.post("/add", insertUser);

module.exports = router;
