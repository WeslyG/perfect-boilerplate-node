/* eslint-disable no-process-env */
export const PORT: string = process.env.PORT || '3000';

export const NODE_ENV: string = process.env.NODE_ENV || 'production';

export const MONGO_URL: string = process.env.MONGO_URL || 'localhost:27017';
export const MONGO_DB_NAME: string = process.env.MONGO_DB_NAME || 'myPerfectApp';
export const MONGO_USER: string = process.env.MONGO_USER || '';
export const MONGO_PASSWORD: string = process.env.MONGO_PASSWORD || '';
