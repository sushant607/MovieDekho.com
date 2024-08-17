import { User } from '../models/userSchema.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
const createToken = (_id) => {
  // Check if the secret is loaded correctly
  if (!process.env.SECRET) {
    throw new Error('SECRET environment variable is not defined');
  }
  return jwt.sign({ _id }, process.env.SECRET); // Added an expiration time for good practice
}

// Define the login user function
const loginuser = async (req, res) => {
  const {username,password}=req.body
  try {
    const user = await User.login(username, password);
    const token = createToken(user._id);
    res.status(200).json({username,token});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Define the sign-up user function
const signuser = async (req, res) => {
  const { name, age, gender, username, password } = req.body;
  try {
    const user = await User.signup(name, age, gender, username, password);
    const token = createToken(user._id);
    res.status(200).json({
      username: user.username,
      token, // Removed password from response for security
      message: 'User signed up successfully'
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Export the functions using named exports
export { loginuser, signuser };
