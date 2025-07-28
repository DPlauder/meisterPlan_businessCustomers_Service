"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const env_1 = require("./config/env");
const port = Number(env_1.env.PORT);
if (isNaN(port)) {
    throw new Error("❌ Invalid port number");
}
app_1.default.listen(port, "0.0.0.0", () => {
    console.log(`🚀 Server running on port ${port}`);
});
