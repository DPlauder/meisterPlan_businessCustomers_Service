"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const businessCustomer_routes_1 = __importDefault(require("./routes/businessCustomer.routes"));
const env_1 = require("./config/env");
const app = (0, express_1.default)();
// CORS muss VOR den Routen eingebunden werden
app.use((0, cors_1.default)({
    origin: env_1.env.CORS_ORIGIN,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
}));
app.use(express_1.default.json());
// Einfache Healthcheck-Route
app.get("/", (_req, res) => {
    res.send("✅ Customer service is running");
});
// API-Routen (alle unter /api/customers)
app.use("/api/business-customers", businessCustomer_routes_1.default);
exports.default = app;
