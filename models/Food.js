const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const foodSchema = new Schema({
  food_name: {
    type: String
  },
  img: {
    type: String
  },
  price: {
    type: String
  },
  min: {
    type: String
  },
  desc: {
    type: String
  },
  location: [
    {
      place: {
        type: String
      },
      name: {
        type: String
      },
      address: {
        type: String
      }
    }
  ]
});

let Food = mongoose.model("food", foodSchema);
module.exports = Food;
