import express from"express";
import {Location} from "../models/locationSchema.js";
const router=express.Router()
router.get('/location/:id', async (req, res) => {
  try {
    const location = await Location.findById(req.params.id);
    if (!location) {
      return res.status(404).json({ message: 'Location not found' });
    }
    res.json({
      name: location.name,
      seatMatrix: location.seatMatrix,
      seatOccupancy: location.seatOccupancy
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});
export { router as LocationRouter };