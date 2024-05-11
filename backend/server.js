// mongodb+srv://sushantbagul607:<password>@cluster0.2qjfhyy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// SjANOXACErKMbtta
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const cors=require('cors');
mongoose.connect('mongodb+srv://sushantbagul607:SjANOXACErKMbtta@cluster0.2qjfhyy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("MongoDB connected");
}).catch(err => {
  console.error("MongoDB connection error", err);
});
app.use(cors())
app.use(express.json());
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});