import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { MoviesRouter } from "./routes/displayMovie.js";
import { userRouter } from "./routes/signup.js";
import { loginRouter } from "./routes/login.js";
import { LocationRouter } from "./routes/displayLocation.js";
import {MovieRouter} from './Routes/getMovie.js'
import {UserDetails} from './Routes/getUser.js'
import {CreditRouter} from './Routes/addCredits.js';
import {TicketRouter } from './Routes/bookTicket.js';
import {UserTicketRouter} from './Routes/getAllTickets.js'
const app = express();

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use(cors());

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
app.use(CreditRouter);
app.use(TicketRouter);
app.use(UserTicketRouter);
app.listen(4000, () => {
    console.log('listening !!!');
});
