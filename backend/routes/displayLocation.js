
// import express from "express";
// import { Location } from "../models/locationSchema.js";

// const router = express.Router();

// router.get('/location/:name', async (req, res) => {
//   try {
//     const location = await Location.findOne({ name: req.params.name });
//     if (!location) {
//       return res.status(404).json({ message: 'Location not found' });
//     }
//     res.json({
//       name: location.name,
//       seatMatrix: location.seatMatrix,
//       seatOccupancy: location.seatOccupancy
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server Error' });
//   }
// // });

// export { router as LocationRouter };
import express from "express";
import { Location } from "../models/locationSchema.js";

const router = express.Router();

router.get('/location/:name', async (req, res) => {
  try {
    const location = await Location.findOne({ name: req.params.name });
    if (!location) {
      return res.status(404).json({ message: 'Location not found' });
    }
    res.json(location);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

router.put('/location/:name/occupancy', async (req, res) => {
  try {
    const { seatOccupancy } = req.body;
    const location = await Location.findOneAndUpdate(
      { name: req.params.name },
      { seatOccupancy },
      { new: true }
    );
    if (!location) {
      return res.status(404).json({ message: 'Location not found' });
    }
    res.json(location);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

export { router as LocationRouter };
