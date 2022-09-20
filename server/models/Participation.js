const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let participationSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  participationPercentage: {
    type: Number,
  },
});

module.exports = mongoose.model("Participation", participationSchema);
