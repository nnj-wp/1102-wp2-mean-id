import mongoose from 'mongoose';

const connectDB_51 = (url) => {
  return mongoose.connect(url);
};

export default connectDB_51;
