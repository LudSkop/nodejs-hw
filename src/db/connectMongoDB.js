import mongoose from 'mongoose';

const { MONGO_URL } = process.env;
//fblvPE0MKvxntoy5
//mongodb+srv://luda80:fblvPE0MKvxntoy5@cluster0.ywnsp3q.mongodb.net/my-contacts?appName=Cluster0
const connectMongoDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log('✅ MongoDB connection established successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error; // пробрасываем ошибку дальше, чтобы сервер не запускался, если подключение к базе данных не удалось
  }
};
export default connectMongoDB;
