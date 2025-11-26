const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  contact: Number,
  designation: String,
});

module.exports = mongoose.model("Employee", schema);
