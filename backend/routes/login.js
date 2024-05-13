import express from "express";
const router = express.Router();
import { User } from "../models/userSchema.js";

router.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;
        
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "User not found"
            });
        }
        if (!password=== user.password) {
            return res.status(400).send({
                success: false,
                message: "Invalid credentials"
            });
        }

        return res.status(200).send({
            success: true,
            message: "Login successful",
            user: {
                id: user._id,
                name: user.name,
                username: user.username,
                age: user.age,
                gender: user.gender,
                credits: user.credits,
                ticketIds: user.ticketIds
            }
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send({
            success: false,
            message: "Error logging in user"
        });
    }
});

export { router as loginRouter };
