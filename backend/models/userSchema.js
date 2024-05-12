import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  credits: {
    type: Number,
    default: 0
  },
  ticketIds: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ticket'
  }]
});

export const User = mongoose.model('User', userSchema);

// module.exports = User;
