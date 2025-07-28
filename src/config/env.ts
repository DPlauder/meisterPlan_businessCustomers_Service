import * as dotenv from "dotenv";

dotenv.config();

export const env = {
  PORT: process.env.PORT || 3001,
  DB_URL:
    process.env.DATABASE_URL || // <-- hier DATABASE_URL statt DB_URL
    "postgresql://postgres:postgres@localhost:5432/customers?schema=public", // (Pfad korrigiert)
  CORS_ORIGIN: process.env.CORS_ORIGIN || "http://localhost:5173",
};
