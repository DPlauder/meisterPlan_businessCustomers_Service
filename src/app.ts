import express from "express";
import cors from "cors";
import { json } from "express";
import customerRoutes from "./routes/businessCustomer.routes";
import { env } from "./config/env";

const app = express();

// CORS muss VOR den Routen eingebunden werden
app.use(
  cors({
    origin: env.CORS_ORIGIN,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

app.use(express.json());

// Einfache Healthcheck-Route
app.get("/", (_req, res) => {
  res.send("✅ Customer service is running");
});

// API-Routen (alle unter /api/customers)
app.use("/api/business-customers", customerRoutes);

export default app;
