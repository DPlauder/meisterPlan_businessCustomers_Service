import * as dotenv from "dotenv";

dotenv.config();

export const env = {
  PORT: process.env.PORT || 3001,
  DB_URL:
    process.env.DB_URL ||
    "postgresql://postgres:postgres@localhost:5432/customers",
};
