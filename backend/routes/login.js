import express from "express";
const router = express.Router();
import  User  from '../models/userSchema.js';


router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(200).send({
        success: false,
        message: "Email is not registerd",
      });
    }
    if (password = user.password) {
      res.status(200).send({
        success: true,
        message: "Login successfully",
        user, }); }
        else{
          return res.status(401).send({
          success: false,
          message: "Invalid username or password", });
        }
  } catch (error) {
    console.log(error)
  }
});

export { router as loginRouter };