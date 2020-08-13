import mongoose from 'mongoose';
import { MONGO_USER, MONGO_PASSWORD, MONGO_DB_NAME, MONGO_URL } from '../../config';

export const connectMongo = async (): Promise<void> => {
  const connectUrl: string =
    MONGO_USER !== '' && MONGO_PASSWORD !== ''
      ? `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_URL}/${MONGO_DB_NAME}`
      : `mongodb://${MONGO_URL}/${MONGO_DB_NAME}`;
  try {
    await mongoose.connect(connectUrl, {
      useFindAndModify: false,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useNewUrlParser: true,
      autoIndex: true,
      // reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
      // reconnectInterval: 500, // Reconnect every 500ms
      bufferMaxEntries: 0,
      // connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
      // socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    });
    console.log(`MongoDB connected to ${MONGO_URL}...`);
  } catch (err) {
    console.log(err);
  }
};
