import express from "express";
import { json } from "express";
import customerRoutes from "./routes/businessCustomer.routes";

console.log("Starting the customers service...");

const app = express();

app.get("/", (_req, res) => {
  res.send("✅ Customer service is running");
});

app.use(json());
app.use("/api/customers", customerRoutes);

export default app;
