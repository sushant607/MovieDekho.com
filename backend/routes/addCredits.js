import express from 'express';
import { User } from '../models/userSchema.js';

const router = express.Router();

router.post('/updateCredits', async (req, res) => {
  try {
    const { username, amount } = req.body; 

    if (!username || !amount) {
      return res.status(400).json({ message: 'Missing username or amount' });
    }

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const newCredits = user.credits + amount; 

    if (newCredits < 0) {
      return res.status(400).json({ message: 'Insufficient credits' });
    }

    user.credits = newCredits;
    await user.save();

    res.json({ message: 'Credits updated successfully', newCredits });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export { router as CreditRouter };
