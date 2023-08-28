import axios from "axios";

const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY; // vite use the VITE_REACT_APP to access variables in the .env file

//image url:https://image.tmdb.org/t/p/w400/lWqjXgut48IK5f5IRbDBAoO2Epp.jpg

export async function fetchData() {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
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
    const crewData = movieResponse.data;
    const videos = videosResponse.data.results;
    const trailer = videos.find((video) => video.type === "Trailer");

    const crew_actors = crewData.cast;

    return { crew_actors, trailer };
  } catch (error) {
    console.error(error);
  }
}

export async function getSeats() {
  try {
    const movieResponse = await axios.get(`api/seats`);
    return movieResponse.data;
  } catch (error) {
    console.error(error);
  }
}
const baseUrl = "https://api.themoviedb.org/3";
// Fetch the list of genres
export async function fetchGenres() {
  const response = await axios.get(
    `${baseUrl}/genre/movie/list?api_key=${API_KEY}`
  );
  const data = response.data.genres;
  return data;
}

fetchGenres();
