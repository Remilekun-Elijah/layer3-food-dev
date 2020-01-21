var express = require("express");
var router = express.Router();
const multer = require("multer");

const {
  getUser,
  getUserByID,
  insertUser
} = require("../Controllers/userController");
const { validate, validationRule } = require("../Config/validator");

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

/* GET users listing. */
router.get("/get", getUser);
router.get("/get/:id", getUserByID);
router.post(
  "/create",
  upload.single("profile_img"),
  validationRule(),
  validate,
  insertUser
);

module.exports = router;
