import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
  movieName: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  userId: {
    type: String,
    required: true
  }
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;
