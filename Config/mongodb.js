const mongoose = require("mongoose");
module.exports = {
  connect: function() {
    const uri = "mongodb://localhost:27017/layer3-food";
    mongoose
      .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(function(done) {
        console.log("MongoDB Connected");
      })
      .catch(function(err) {
        console.log(err);
      });
  }
};
