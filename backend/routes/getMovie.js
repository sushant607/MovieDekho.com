import express from "express";
import { Movie } from '../models/movieSchema.js'; // Assuming your Movie model is in models/movieSchema.js

const router = express.Router();

router.get('/movies/:name', async (req, res) => {
    try {
      // Using req.params.name to correctly access the name parameter from the route
      const movie = await Movie.findOne({ name: req.params.name });
    //   console.log(movie)
      if (movie) {
        res.json(movie);
      } else {
        // If no movie is found, send a 404 response
        res.status(404).json({ message: "Movie not found" });
      }
    } catch (error) {
      // Handle any errors, including cast errors (e.g., invalid ObjectId)
      res.status(500).json({ message: error.message });
    }
});

export { router as MovieRouter };
