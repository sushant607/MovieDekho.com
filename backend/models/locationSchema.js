
// models/Location.js
import mongoose from "mongoose";
const locationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  seatMatrix: {
    type: [[String]], 
    required: true
  },
  seatOccupancy: {
    type: [[Boolean]],
    default: [] 
  }
});
export const Location = mongoose.model('locations', locationSchema);

//  models/Booking.js
// const mongoose = require('mongoose');

// const bookingSchema = new mongoose.Schema({
//   userId: {
//     type: mongoose.Schema.Types.ObjectId, 
//     required: true
//   },
//   seatNumbers: {
//     type: [String], 
//     required: true
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now
//   }
// });

// const Booking = mongoose.model('Booking', bookingSchema);

// module.exports = Booking;

