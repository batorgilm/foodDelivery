import mongoose from 'mongoose';

export const connectDb = async () => {
  const URI = 'mongodb://localhost:27017/foodDelivery';
  await mongoose.connect(URI);
};
