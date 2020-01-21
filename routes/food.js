const express = require("express");
const router = express.Router();
const { insertFood, getFood } = require("../Controllers/foodController");
const multer = require("multer");
const { validate, validationRule } = require("../Config/validator");
let Food = require("../models/Food");
// Multer

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./profilePics/");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString().replace(/:/g, "-") + file.originalname);
  }
});
const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});

router.get("/", (req, res) => {
  res.json({
    message: " Food route"
  });
});

router.post("/add", upload.single("food_img"), insertFood);
router.get("/get", getFood);

module.exports = router;
