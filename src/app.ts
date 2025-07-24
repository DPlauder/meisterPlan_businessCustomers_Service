import express from "express";
import { json } from "express";
import customerRoutes from "./routes/businessCustomer.routes";

const app = express();

app.use(json());
app.use("/api/customers", customerRoutes);

export default app;
