// business logic
// pulling callback functions from the router
import "dotenv/config";
import axios from "axios";

const searchMovies = async (req, res) => {
  try {
    const title = req.query.title;

    if (!title) {
      return res
        .status(400)
        .json({ error: "Title query parameter is required" });
    }

    const key = process.env.OMDB_API_KEY;

    const response = await axios(
      `http://www.omdbapi.com/?s=${title}&apikey=${key}`,
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.log(error.message);

    res.status(500).json({ error: "Server side error occurred." });
  }
};

const getMovieDetails = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({ error: "Id query parameter is required" });
    }

    const key = process.env.OMDB_API_KEY;

    const response = await axios(
      `http://www.omdbapi.com/?i=${id}&apikey=${key}`,
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.log(error.message);

    res.status(500).json({ error: "Server side error occurred." });
  }
};

export { searchMovies, getMovieDetails };
