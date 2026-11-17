import "dotenv/config";
import express from "express";
import movieRoutes from "./routes/movieRoutes.js";

const app = express();

const PORT = process.env.PORT || 3000;

// Router-level Middleware (Specific to a Path) for /api
// All routes related to movies should be prefixed with /api.

app.use("/api", (req, res, next) => {
  if (req.originalUrl.startsWith("/api")) {
    next();
  } else {
    res.status(403).send("Forbidden: The url must have /api in the path.");
  }
});

// Mount movieRoutes once under /api, now protected with /api
app.use("/api", movieRoutes);

app.listen(PORT, (req, res) => {
  console.log("Server listening on port " + PORT);
});
