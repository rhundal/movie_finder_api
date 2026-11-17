// import the controller functions
import {
  searchMovies,
  getMovieDetails,
} from "../controllers/movieController.js";
import express from "express";

const movieRoutes = express.Router();

movieRoutes.get("/search", searchMovies);
movieRoutes.get("/movies/:id", getMovieDetails);

export default movieRoutes;
