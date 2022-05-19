import mongoose from 'mongoose';
import validator from 'validator';

const UserSchema_51 = new mongoose.Schema({
  name: {
    type: String,
    requires: [true, 'please provide name'],
    validate: {
      validator: validator.isEmail,
      message: 'please provide valid email',
    },
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  email: {
    type: String,
    requires: [true, 'please provide email'],
    unique: true,
  },
  password: {
    type: String,
    requires: [true, 'please provide password'],
    minlength: 6,
    unique: false,
  },
  lastName: {
    type: String,
    trim: true,
    maxlength: 30,
    default: 'lastName',
  },
  location: {
    type: String,
    trim: true,
    maxlength: 30,
    default: 'my city',
  },
});

export default mongoose.model('User_51', UserSchema_51);
