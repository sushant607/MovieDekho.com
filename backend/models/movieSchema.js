import mongoose from "mongoose";
// SjANOXACErKMbtta
const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  locations: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'locations'
  }],
  description: String,
});

export const Movie = mongoose.model('Movie', movieSchema);

// module.exports = Movie;
