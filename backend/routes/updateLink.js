import { User } from '../models/userSchema.js';
import express from 'express';

const router = express.Router();

router.post('/update-user', async (req, res) => {
  try {
    const { username, link } = req.body;

    // Validate request body
    if (!username || !link) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Find the user by username
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    user.Idcard = link; 
    await user.save();

    res.status(200).json({ message: 'User updated successfully' });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export { router as UserLinkRouter };
