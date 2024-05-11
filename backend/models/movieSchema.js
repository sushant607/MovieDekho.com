const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  photo: String,
  locations: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Location'
  }],
  description: String,
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
