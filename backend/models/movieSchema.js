const mongoose = require('mongoose');
// SjANOXACErKMbtta
const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  locations: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Location'
  }],
  description: String,
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
