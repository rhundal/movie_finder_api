import "dotenv/config";
import express from "express";
// import routes

const app = express();

const PORT = process.env.PORT || 3001;

app.listen("/", (req, res) => {
  console.log("Server listening on port " + PORT);
});
