import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import validator from 'validator';
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
  Idcard: {
    type: String,
    default: ""
  }
});

// Static method for signup
userSchema.statics.signup = async function(name, age, gender, username, password) {
  if(!username || !password) {
    throw Error('All fields must be filled')
  }
  if(!validator.isStrongPassword(password)) {throw Error('Password is not strong enough')}
  const isTaken = await this.findOne({ username });
  if (isTaken) {
    throw new Error('Username already taken');
  }
  
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  
  const user = await this.create({ name, age, gender, username, password: hash });
  return user;
}
userSchema.statics.login=async function(username,password)
{
  if(!username || !password) {
    throw Error('All fields must be filled')
  }
  const user=await this.findOne({username})
  if(!user){throw Error('username does not exist')}
  const match=await bcrypt.compare(password,user.password)
  if(!match){throw Error('incorrecct password')}
  return user
}
export const User = mongoose.model('User', userSchema);
