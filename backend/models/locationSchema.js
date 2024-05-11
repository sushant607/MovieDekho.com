const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  seatMatrix: [[String]]
});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;
