import axios from "axios";

const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY; // vite use the VITE_REACT_APP to access variables in the .env file
console.log("the key is ", API_KEY);
//image url:https://image.tmdb.org/t/p/w400/lWqjXgut48IK5f5IRbDBAoO2Epp.jpg

export async function fetchData() {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchMovie(movie_id) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchMovieCastAndTrailer(movie_id) {
  try {
    const movieResponse = await axios.get(
      `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${API_KEY}`
    );
    const videosResponse = await axios.get(
      `https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${API_KEY}`
    );
    const crew = movieResponse.data;
    const videos = videosResponse.data.results;
    console.log("Movie details", crew);
    console.log("Movie trailers", videos);
    for (let i = 0; i < 5; i++) {
      console.log(crew.cast[i].name);
    }
    return { crew, videos };
  } catch (error) {
    console.error(error);
  }
}
