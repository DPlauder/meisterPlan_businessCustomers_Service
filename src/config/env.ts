import * as dotenv from "dotenv";

dotenv.config();

const isProduction = process.env.NODE_ENV === "production";
const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl && isProduction) {
  throw new Error("DATABASE_URL is required in production");
}

export const env = {
  PORT: process.env.PORT || 3001,
  DB_URL:
    databaseUrl ||
    "postgresql://postgres:postgres@localhost:5432/customers?schema=public",
  CORS_ORIGIN: process.env.CORS_ORIGIN || "http://localhost:5173",
};
