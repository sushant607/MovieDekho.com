import express from "express";
import { Movie } from '../models/movieSchema.js'; 

const router = express.Router();

router.get('/movies/:name', async (req, res) => {
    try {
      const movie = await Movie.findOne({ name: req.params.name });
      if (movie) {
        res.json(movie);
      } else {
        
        res.status(404).json({ message: "Movie not found" });
      }
    } catch (error) {
      
      res.status(500).json({ message: error.message });
    }
});

export { router as MovieRouter };
