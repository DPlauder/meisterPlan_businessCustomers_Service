import app from "./app";
import { env } from "./config/env";

app.get("/", (req, res) => {
  res.send("Hallo, Server ist erreichbar!");
});

const port = Number(env.PORT);
if (isNaN(port)) {
  throw new Error("❌ Invalid port number");
}

app.listen(port, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${port}`);
});
