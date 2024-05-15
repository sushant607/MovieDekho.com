
// import mongoose from "mongoose";
// const locationSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   seatMatrix: {
//     type: [[String]], 
//     required: true
//   },
//   seatOccupancy: {
//     type: [[Boolean]],
//     default: [] 
//   }
// });
// export const Location = mongoose.model('locations', locationSchema);
import mongoose from "mongoose";

const locationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  seatMatrix: {
    type: [[String]], 
    required: true
  },
  seatOccupancy: {
    type: [[Boolean]],
    default: function () {
      return Array(this.seatMatrix.length).fill().map(() => Array(this.seatMatrix[0].length).fill(false));
    }
  }
}, { versionKey: false, timestamps: true });

export const Location = mongoose.model('location', locationSchema);
