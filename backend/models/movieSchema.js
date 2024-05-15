import mongoose from "mongoose";
const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  locations: [String],
  description: String,
});

export const Movie = mongoose.model('Movie', movieSchema);

