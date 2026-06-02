import mongoose from 'mongoose';

const { MONGO_URL } = process.env;

const connectMongoDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log('✅ MongoDB connection established successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};
export default connectMongoDB;
