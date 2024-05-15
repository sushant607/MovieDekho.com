import express from "express";
import mongoose from "mongoose";
import { MoviesRouter } from "./Routes/displayMovie.js";
import { userRouter } from "./Routes/signup.js";
import { loginRouter } from "./Routes/login.js";
import { LocationRouter } from "./routes/displayLocation.js";
import {MovieRouter} from './Routes/getMovie.js'
import {UserDetails} from './Routes/getUser.js'
const app = express();

// Body parser middleware
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Ensure your MongoDB URI is correct and securely handled
mongoose.connect("mongodb+srv://sushantbagul607:SjANOXACErKMbtta@cluster0.2qjfhyy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected successfully.'))
.catch(error => console.error('MongoDB connection error:', error));

app.get("/", (req, res) => {
    res.json({ mssg: "hello" });
});

app.use(userRouter);
app.use(loginRouter);
app.use(MoviesRouter);
app.use(MovieRouter);
app.use(LocationRouter);
app.use(UserDetails);
app.listen(4000, () => {
    console.log('listening !!!');
});
