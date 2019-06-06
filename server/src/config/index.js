import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT;

export const databseConfig = {
  database: process.env.DATABASE,
  host: process.env.HOST,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  dialect: process.env.DIALECT
};

export const secretForAuthToken = process.env.SECRET_FOR_AUTH_TOKEN;
export const secretForRefreshToken = process.env.SECRET_FOR_REFRESH_TOKEN;
