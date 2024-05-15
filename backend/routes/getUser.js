import express from "express";
const router = express.Router();
import { User } from "../models/userSchema.js";

router.get('/user', async (req, res) => {
  try {
    // Using req.query.username to correctly access the username parameter
    const { username } = req.query;

    // Validate username to prevent potential errors (optional)
    if (!username) {
      return res.status(400).json({ message: "Missing username parameter" });
    }

    const user = await User.findOne({ username });
    console.log(user); // For debugging purposes (remove in production)

    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    // Handle errors, including cast errors (e.g., invalid ObjectId)
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export { router as UserDetails };
