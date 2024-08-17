// import express from "express";
// const router = express.Router();
// import {User} from '../models/userSchema.js';

// router.post("/register", async (req, res) => {
//     console.log(req.body);
//     try {
//         const newUser = new User(req.body);
//         await newUser.save();

//         return res.status(201).send({ 
//             success: true,
//             message: 'User created successfully' 
//         });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).send({ 
//             success: false,
//             message: 'Error saving user to the database' 
//         });
//     }
// });
// export { router as userRouter };
import express from "express";
import { model } from "mongoose";
import { loginuser } from "../controllers/userController.js";
import { signuser } from "../controllers/userController.js";
const router = express.Router();
//login
router.post("/login",loginuser)
router.post("/signup",signuser)
export {router as LoginRouter}; 