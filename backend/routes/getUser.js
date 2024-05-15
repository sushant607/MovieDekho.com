import express from "express";
const router = express.Router();
import { User } from "../models/userSchema.js";

router.get('/user', async (req, res) => {
  try {
    const { username } = req.query;

    if (!username) {
      return res.status(400).json({ message: "Missing username parameter" });
    }

    const user = await User.findOne({ username });
    console.log(user); 

    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export { router as UserDetails };
