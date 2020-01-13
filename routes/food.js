const express = require("express");
const router = express.Router();
const { insertFood, getFood } = require("../Controllers/foodController");
const { body, validationResult } = require("express-validator");
let Food = require("../models/Food");

router.get("/", (req, res) => {
  res.json({
    message: " Food route"
  });
});

router.post("/add", insertFood);
router.get("/get", getFood);

module.exports = router;
