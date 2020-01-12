const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const foodSchema = new Schema({
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
  ],

  food: [
    {
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
      }
    }
  ]
});

let Food = mongoose.model("food", foodSchema);
module.exports = Food;
