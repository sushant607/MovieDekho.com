import express from "express";
const router = express.Router();
import User from '../models/userSchema.js';

router.post("/register", async (req, res) => {
    console.log(req.body);
    const { name, ...password } = req.body;

    try {
        // const userEmail = await User.findOne({ name });

        // if (userEmail) {
        //     return res.status(400).send({ 
        //         success: false,
        //         message: "User already exists",
        //     });
        // }

        const newUser = new User(req.body);
        await newUser.save();

        return res.status(201).send({ 
            success: true,
            message: 'User created successfully' 
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ 
            success: false,
            message: 'Error saving user to the database' 
        });
    }
});
export { router as userRouter };