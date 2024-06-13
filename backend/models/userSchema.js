import mongoose from "mongoose";
import bcrypt from "bcrypt";
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
    enum: ['Male', 'Female'],
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
  Idcard:{
    type: String,
    default:""
  }
});

export const User = mongoose.model('User', userSchema);
// userSchema.statics.signup= async(username,password)=>{
//   const isTaken = await User.findOne({username});
//   if(isTaken){
//     throw Error('Username already taken');}
//     const salt=await bcrypt.genSalt(10)
//     const hash=await bcrypt.hash(password,salt)
//     const user=await this.create({username,password:hash})
// }
// export const User = mongoose.model('User', userSchema);

