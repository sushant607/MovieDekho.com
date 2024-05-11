// mongodb+srv://sushantbagul607:<password>@cluster0.2qjfhyy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// SjANOXACErKMbtta
const express = require('express');
const mongoose = require('mongoose');
// const signupRouter = require('./routes/signupRouter'); // Import the signup router
const app = express();
const port = 3000;
mongoose.connect('mongodb+srv://sushantbagul607:SjANOXACErKMbtta@cluster0.2qjfhyy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("MongoDB connected");
}).catch(err => {
  console.error("MongoDB connection error", err);
});