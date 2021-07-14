import express from "express";
// We don't destructure b/c it's a default export
import router from "./routes/characters.js";

const PORT = 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Star Wars API</h1>");
});

// Any request coming to /api/* will be handled by our router
app.use("/api", router);

app.listen(PORT, () => {
  // console.log("server running");
});
