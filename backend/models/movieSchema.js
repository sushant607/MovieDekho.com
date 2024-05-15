import mongoose from "mongoose";
// SjANOXACErKMbtta
const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  locations: [String],
  description: String,
});

export const Movie = mongoose.model('Movie', movieSchema);

// module.exports = Movie;
