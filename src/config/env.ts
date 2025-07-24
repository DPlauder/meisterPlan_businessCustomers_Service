import * as dotenv from "dotenv";

dotenv.config();

export const env = {
  PORT: process.env.PORT || 51214,
  DB_URL: process.env.DB_URL!,
};
