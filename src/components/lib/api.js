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
