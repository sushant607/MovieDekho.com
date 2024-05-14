import express from "express";
import { Movie } from '../models/movieSchema.js'; // Assuming your Movie model is in models/movieSchema.js

const router = express.Router();

router.get('/movies', async (req, res) => {
  try {
    const movies = await Movie.find({}, 'name description locations');

    res.json(movies);
  } catch (error) {
    // Handle any errors
    res.status(500).json({ message: error.message });
  }
});

export { router as MovieRouter };
